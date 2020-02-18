const { app } = require('electron').remote

const { pathToAsset, pathToAssetL, initAssets } = require('./../ui/assets_loader')
initAssets()

const { createAbout } = require('./../ui/about')
const { createToc, generate_events_table } = require('./../ui/events')
const { readFile } = require('./../ui/files')
const { createMenuButton, createReference, createInnovationsList, createLocationsList } = require('./../ui/menu')
const { getSettings, addSettings, onSettingsSaved, setSettings, saveSettings, initSettings, defaultLang } = require('./../ui/settings')
const { render } = require('./../ui/template-renderer')
const { cdnUrl } = require('./../ui/template-cdnurl')
const { addTimer } = require('./../ui/timer')
const { setTransition } = require('./../ui/transition')
// const dev = require('./../ui/development')
const dev = require('./settlement')
const { getTerms } = require('./../ui/glossary')


module.exports = class IndexScene {
  render () {
    if ($('#back').attr('src') == '#') {
        $('#back').attr('src', pathToAssetL('images/back.jpg'))
    }
    $('#container').hide()
    $('#container').fadeIn(300)

    // localStorage.clear()

    console.log('!! Process type: '+window.globals.process)

    document.getElementById('container').innerHTML = render('index')//app.getAppPath() + '/partials/.html'
    document.title = 'kingdom death'

    onSettingsSaved(() => {
      // delete require.cache[require.resolve('./../ui/glossary')]
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

    initSettings();

    var settings = getSettings()

    var tooltips = getTerms('tooltips')
    var campaigns_list = getTerms('campaigns')


    $('#label_text').html(tooltips['app_name'].text)
    $('#sublabel_text').html(tooltips['license'].text)

    console.log('Settings:')
    console.log(settings)
    console.log('!!!')

    $('#video').attr('width', '100%')
    $('#video').attr('height', '100%')

    sessionStorage.setItem('back_target', null)

    let lang = settings['language']

    var music = new Howl({
      src: [pathToAssetL('theme.mp3')],
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
    createLocationsList()
    createReference()
    addSettings(settings)
    let gallery = setupCampaignSelect()

    $('#video').attr('src', pathToAssetL('video/intro.mp4'))

    $('#label_text').fadeIn(2000)
    // gallery.on('load', function () {
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

    $('body').css('font-size', parseInt(settings['fontSize'].replace('px',''))/15+'vw')


    // console.log(subtitles['intro'][lang])
    if (settings['subtitles'] == 'On') {
      let subtitles
      if (window.globals.process == 'local') {
          subtitles = readFile(pathToAssetL('video/intro.srt', false), 'root')
      } else {
        if (!(lang == defaultLang())&&window.globals.translations['paths'][lang].includes('versions/'+lang+'/video/intro.srt')) {
          subtitles = require('./../../versions/'+lang+'/video/intro.srt').default
        } else {
          subtitles = require('./../../versions/'+defaultLang()+'/video/intro.srt').default
        }
      }

      configureSubtitle(subtitles)
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
        createToc();
        // $('#menu_table1').reload();
        // $('#menu_table1').hide();
        // $('#menu_table2').reload();
        // $('#menu_table2').hide();
        // createInnovationsList();
        no_reload = true
      });

      gallery.hide();

      // createInnovationsList()

      return gallery;
    }

    function createCampaign(campaign) {

      let events_table = generate_events_table()

      let campaign_element = $('<div>',{
        class: "campaign_element",
        value: campaign
      });

      let campaign_image = $('<img>',{
        class: "campaign_image",
        src: pathToAssetL('images/icons/campaigns/'+campaign+'_campaign_icon.png')
      });

      let campaign_label = $('<div>',{
        class: "campaign_label"
      });

      campaign_label.append(tooltips['campaign'].text.replace('$C$', campaigns_list[campaign].label));

      // campaign_image.on('load', function() {
      campaign_element.append(campaign_image);
      campaign_element.append(campaign_label);
      // })
      let content = ''

      content = content + campaigns_list[campaign].description+'</br></br>'

      content = content + tooltips['campaign_bottom'].text.replace('$E$', events_table[campaigns_list[campaign].start_event].label)
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
