const { app } = require('electron').remote

const { createAbout } = require('./../ui/about')
const { createToc } = require('./../ui/events')
const { readFile } = require('./../ui/files')
const { createMenuButton, createInnovationsList } = require('./../ui/menu')
const { getSettings, addSettings, onSettingsSaved, setSettings, saveSettings } = require('./../ui/settings')
const { render, cdnUrl } = require('./../ui/template-renderer')
const { addTimer } = require('./../ui/timer')
const { setTransition } = require('./../ui/transition')

module.exports = class IndexScene {
  render () {
    document.getElementById('container').innerHTML = render(app.getAppPath() + '/partials/index.html')
    document.title = 'kingdom death'

    onSettingsSaved(() => {
      if ($("#menu_table1").length) {
        window.location.reload()
      }
    })

    var no_reload = false
    const version = typeof window.globals !== 'undefined' ? window.globals.version : 'dev'

    $('#label_text').hide()
    $('#menu').hide()
    $('#video').hide()
    $('.button_video').hide()

    var settings = getSettings()

    console.log('Settings:')
    console.log(settings)
    console.log('!!!')

    $('#video').attr('width', '100%')
    $('#video').attr('height', '100%')

    sessionStorage.setItem('settings', JSON.stringify(settings))
    sessionStorage.setItem('back_target', null)
    // sessionStorage.setItem("Mute", "Off");

    let lang = settings['language']

    var music = new Howl({
      src: [cdnUrl('audio/theme.mp3')],
      // autoplay: true,
      loop: true,
      volume: 0.8,
    })

    var action = 'false'

    // $("#open_audio").get(0).volume = 1.0
    // $("#open_audio").get(0).play();
    music.on('load', function () {
      music.play()
    })

    createMenuButton()
    createToc()
    createAbout(version)
    createInnovationsList()
    addSettings(settings)
    let gallery = setupCampaignSelect()

    $('#label_text').fadeIn(2000)
    // gallery.load(function () {
    //     gallery.delay(3000).fadeIn(1000)
    // })
    gallery.show();
    addTimer(function() {
      gallery.animate({opacity: 1}, 2000);
      $('.campaign_element').each(function(){$(this).animate({opacity: 1}, 1000)});
    }, 1000)

    addTimer(function() {
      $('.campaign_image').addClass('glow')
    }, 3000)

    // addTimer(function() {
    //   gallery.show();
    // }, 2000)


    // console.log(subtitles['intro'][lang])
    if (settings['subtitles'] == 'On') {
      configureSubtitle(readFile(app.getAppPath() + '/video/srt/' + lang + '/intro.srt'))
    }

    if ((settings['narration'] == 'Off') && (settings['music'] == 'Off')) {
      $('#video').prop('muted', true)
    }

    if (settings['music'] == 'Off') {
      music.mute(true)
    }

    $('.campaign_image').click(function () {
      if (!$(this).hasClass('active')) {
        // $("#open_audio").get(0).pause();
        music.stop()

        $('#video').get(0).currentTime = 0
        // $("#open_audio").get(0).currentTime = 0
        $('#video').show()
        $('#video').get(0).play()
        // $(".button").hide()
        gallery.hide()
        $('#settings').hide()
        $('#label_text').hide()
        $('#about_text').hide()
        $('.locations_button').hide()
        $('.innovations_button').hide()

        console.log('Here2!')
      } else {
        // $("#open_audio").currentTime = 0
        addTimer(function () {
          music.play()
        }, 500)

        $('#video').get(0).pause()
        $('#video').hide()
        // $(".button").show();
        $('#settings').show()
        $('#label_text').fadeIn(8000)
        gallery.delay(1000).fadeIn(6000)
      };

      $(this).toggleClass('active')
      $(this).toggleClass('fadeOut')

      console.log('Here3!')
    })

    $('video').on('ended', function () {
      // $("#open_audio").currentTime = 0

      music.play()

      // $("#open_audio").get(0).play();
      $('#video').hide()
      // $(".button").show()
      $('#settings').show()
      gallery.delay(1000).fadeIn(6000)
      $('#label_text').fadeIn(8000)

      clearSubtitles()
      // $("#video").attr('currentTime', 0);
      document.getElementById('video').currentTime = 0
      // addTimer(function(){
      //   if (settings['subtitles'] == 'On') {
      //     configureSubtitle(readFile('./video/srt/' + lang + '/intro.srt'))
      //   }
      // }, 100);

      $(this).removeClass('fadeOut')
      setTransition('first story', 'menu')
    })

    $('#video').on('click', function () {
      // this.currentTime = this.duration;
      this.pause()
      music.play()

      $('#video').hide()
      // $(".button").show()
      $('#settings').show()
      $('.gallery').delay(1000).fadeIn(1000)
      $('#label_text').fadeIn(4000)

      clearSubtitles()
      // $("#video").attr('currentTime', 0);
      document.getElementById('video').currentTime = 0

      $(this).removeClass('fadeOut')

      setTransition('first story', 'menu')
    })

    // let options = localStorage.getItem('KDM_Story_options')
    // console.log(options)

    $('body').on('click', '#menu_item', function () {
      setTransition($(this).attr('target'), 'menu')
    })

    function setupCampaignSelect() {
      let gallery = $('<div>', {
        class: 'gallery'
      })

      let settings = getSettings();

      let campaigns = ['Lantern'] // 'Sun',

      if (settings['expansions']['dragon king'] == 'All content') {
        campaigns.push('Stars')
      } else {
        if (settings['campaign'] == 'Stars') {
          settings['campaign'] = 'Lantern'
          setSettings(settings);
          saveSettings();
          sessionStorage.setItem('settings', JSON.stringify(settings))
          createToc();
        }
      }

      if (settings['expansions']['sunstalker'] == 'All content') {
        campaigns.push('Sun')
      } else {
        if (settings['campaign'] == 'Sun') {
          settings['campaign'] = 'Lantern'
          setSettings(settings);
          saveSettings();
          sessionStorage.setItem('settings', JSON.stringify(settings))
          createToc();
        }
      }

      for (let i = 0;  i < campaigns.length; i++) {
        gallery.append(createCampaign(campaigns[i]))
      }

      $('#container').append(gallery);



      gallery.slick({
        dots: false,
        initialSlide: campaigns.indexOf(settings['campaign']),
        lazyload: 'progressive',
        autoplay: false,
      });

      $('.gallery').on('afterChange', function(event, slick, currentSlide){
        let settings = getSettings();
        console.log($('.slick-current > div > .campaign_element').attr('value'))
        settings['campaign'] = $('.slick-current > div > .campaign_element').attr('value')
        setSettings(settings);
        $('#menu_table1').empty();
        $('#menu_table1').remove();
        $('#menu_table2').empty();
        $('#menu_table2').remove();
        saveSettings();
        sessionStorage.setItem('settings', JSON.stringify(settings))
        createToc();
        // $('#menu_table1').reload();
        // $('#menu_table1').hide();
        // $('#menu_table2').reload();
        // $('#menu_table2').hide();
        no_reload = true
      });

      gallery.hide();

      return gallery;
    }

    function createCampaign(campaign) {
      let campaign_element = $('<div>',{
        class: "campaign_element",
        value: campaign
      });

      let campaign_image = $('<img>',{
        class: "campaign_image",
        src: cdnUrl('images/icons/campaigns/'+campaign+'_campaign_icon.png')
      });

      let campaign_label = $('<div>',{
        class: "campaign_label"
      });

      campaign_label.append('<b style="color:#bb0;font-size:0.7em;">Campaign</b><br/>People of the '+campaign);

      // campaign_image.load(function() {
      campaign_element.append(campaign_image);
      campaign_element.append(campaign_label);
      // })
      let content = ''
      // if (campaign == 'Sun') {
      //   content = 'Once the sky had no day. There was a Shadow that was sad, it could only play in small light of a lantern. The Shadow found a hole in the sky and decided to steal enough lanterns to fill it. It took many generations, and when it was done the shadow slept under its big light, dreaming dreams about how it would play. When it awoke, all of the light was gone! At the center of the hole in the sky, was a tiny shining entity, with a great big mouth. The shadow named the tiny thing thr sun and they played forever.<br/><br/>'
      // }
      // if (campaign == 'Stars') {
      //   content = 'The Dragon King\'s species is long dead. It remains alone, clinging to the memories of its once mighty race.<br/><br/>Its destructive moods swing wildly from impotent rage to obsessive nostalgia. It stalks the darkness, lashing out at anything it meets.<br/><br/>'
      // }
      if (campaign == 'Stars') {
      content = content + 'Adopted by the Tyrant, the last of the People of the Stars, the survivors must grow their settlement to please its desire to leave an enduring draconian legacy before he passes.</br></br>'
      }

      if (campaign == 'Sun') {
      content = content + 'Once sky had no day. There was a Shadow that was sad, it could only play in small light of a lantern. The Shadow found a hole in the sky and decided to steal enough lanterns to fill it. It took many generations, and when it was done the shadow slept under the big light, dreaming dreams about how it could play. When it awoke, all of the light was gone! At the center of the hole in the sky, was a tiny shining entity, with a great big mouth. The shadow named the tiny thing the sun and they played together.</br></br>'
      }

      if (campaign == 'Lantern') {
      content = content + 'At its core, Monster is a game about the fragility of human life, the ferocity of the human spirity, and the wonder of exploration.</br></br>Your story will be shaped by the decisions you make, the strengths and weaknesses of your settlemenet, and the growth of your survivors.</br></br>'
      }

      content = content + '<b style="color:#cc0;">Click</b> to start the <b>First Story</b>.'
      campaign_image.tooltipster({
          contentAsHTML: 'true',
          animation: 'grow',
          content: content,
          position: 'top',
          delay: [300, 100],
          maxWidth: 300,
          trigger: 'custom',
          triggerOpen: {
            mouseenter: true,
            // click: true
          },
          triggerClose: {
            click: true,
            mouseleave: true
          }
        });


      // campaign_element.hide();
      // campaign_element.delay(1000).fadeIn(6000)

      return campaign_element
    }
  }
}
