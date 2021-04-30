const { app } = require('electron').remote

const { pathToAsset, pathToAssetL, initAssets, preloadImgs } = require('./../ui/assets_loader')
initAssets()

const { createAbout } = require('./../ui/about')
const { createToc, generate_events_table } = require('./../ui/events')
const { readFile } = require('./../ui/files')
const { createMenuButton, createReference, createInnovationsList, createLocationsList, createBookmarksList } = require('./../ui/menu')
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

    // $(window).onbeforeload(function(){
    //   $('#loading').show()
    // })

    $(window).on('load', function(){
      $('#loading').fadeOut(200)
    });
    $(window).on('beforeload', function(){
      $('#loading').fadeIn(300)
    });


    // preloadImgs([
    //   'images/back.jpg',
    //   'images/icons/book.png',
    //   'images/icons/bookmarks_button.png',
    //   'images/icons/innovations_button.png',
    //   'images/icons/locations_button.png',
    //   'images/icons/reference.png',
    //   'images/icons/campaigns/Lantern_campaign_icon.png',
    //   'images/icons/campaigns/Stars_campaign_icon.png',
    //   'images/icons/campaigns/Sun_campaign_icon.png',
    //   'images/icons/arms.png',
    //   'images/icons/body.png',
    //   'images/icons/brain.png',
    //   'images/icons/head.png',
    //   'images/icons/legs.png',
    //   'images/icons/waist.png',
    //   'images/icons/endeavors.png',
    //   'images/icons/activation.png',
    //   'images/icons/movement.png',
    //   'images/icons/about.png',
    //   'images/icons/skull.png',
    //   'images/icons/swords_inv.png',
    //
    //   'images/icons/expansions/allison ccg_c.png',
    //   'images/icons/expansions/butcher intro_c.png',
    //   'images/icons/expansions/dragon king_c.png',
    //   'images/icons/expansions/drifter knight_c.png',
    //   'images/icons/expansions/dung beetle knight_c.png',
    //   'images/icons/expansions/flower knight_c.png',
    //   'images/icons/expansions/gigalion_c.png',
    //   'images/icons/expansions/gorm_c.png',
    //   'images/icons/expansions/lion god_c.png',
    //   'images/icons/expansions/lion knight_c.png',
    //   'images/icons/expansions/lonely tree_c.png',
    //   'images/icons/expansions/manhunter_c.png',
    //   'images/icons/expansions/slenderman_c.png',
    //   'images/icons/expansions/spidicules_c.png',
    //   'images/icons/expansions/storm knight_c.png',
    //   'images/icons/expansions/sunstalker_c.png',
    //   'images/icons/expansions/trial of champions_c.png',
    //   'images/reference/reference_back.png',
    //   'images/reference/symbols.png',
    //
    //   // 'video/intro.mp4',
    //
    //   'images/reference/severe injuries/arms.jpg',
    //   'images/reference/severe injuries/body.jpg',
    //   'images/reference/severe injuries/brain.jpg',
    //   'images/reference/severe injuries/head.jpg',
    //   'images/reference/severe injuries/legs.jpg',
    //   'images/reference/severe injuries/waist.jpg',
    //   'images/reference/disorder_head.png',
    //
    //
    //   'images/hunt_board_old.jpg',
    //   'images/settlement/turn.jpg',
    //   'images/settlement/background.jpg',
    //   'images/settlement/settlement.png',
    //
    //   'images/hunt_icon.png',
    //   'images/hunt/darkness.png',
    //   'images/hunt/monster_hunt_event.png',
    //   'images/hunt/random_hunt_event.png',
    //   'images/hunt/random_hunt_event_old.png',
    //   'images/hunt/survivors.png',
    //
    //   // 'images/story events/backs/age.jpg',
    //   // 'images/story events/content/age.jpg',
    //
    // ], 'icons')

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
    createBookmarksList()
    createReference()
    addSettings(settings)
    let gallery = setupCampaignSelect()

    // preloadCards()

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

    $('body').css('font-size', parseInt(settings['fontSize'].replace('px',''))/10+'vmin')


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
        music.mute(true)
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
        $('#reference').hide()
        $('.locations_button').hide()
        $('.innovations_button').hide()
        $('.bookmarks_button').hide()

        console.log('Here2!')
      } else {
        // $("#open_audio").currentTime = 0
        // addTimer(function () {
        //   music.play()
        // }, 500)

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

    function preloadCards() {

      let categories = [
        ['innovations', 'images/reference/Innovations/', '.jpg'],
        // ['fighting_arts', 'images/reference/Fighting Arts/', '.jpg'],
        // ['secret_fighting_arts', 'images/reference/Fighting Arts/', '.jpg'],
        // ['settlement_locations', 'images/reference/Settlement Locations/', '.jpg'],
        // ['gear_list', 'images/reference/Gear/', '.jpg'],
        // ['armor_sets', 'images/reference/Armor Sets/', '.jpg'],
        // ['abilities', 'images/reference/Abilities/', '.png'],
        // ['resources', 'images/reference/Resources/', '.jpg'],

      ]

      let actions = [
        'Acid Storm.jpg',
         'Acid Storm_1.jpg',
         'Albedo.jpg',
         'Aquarobotics.jpg',
         'Arena.jpg',
         'Barber Surgeon.jpg',
         'Bed.jpg',
         'Black Mask.jpg',
         'Bloodletting.jpg',
         'Bone Smith.jpg',
         'Bronzesmith.jpg',
         'Choreia.jpg',
         'Citrinitas.jpg',
         'Cooking.jpg',
         'Cracks in the Ground.jpg',
         'Cracks in the Ground_1.jpg',
         'Crimson Candy.jpg',
         'Dark Dentist.jpg',
         'Dark Trader.jpg',
         'Dark Water Research.jpg',
         'Drums.jpg',
         'Exhausted Lantern Hoard.jpg',
         'Exhausted Lantern Hoard_1.jpg',
         'Exhausted Lantern Hoard_2.jpg',
         'Exhausted Lantern Hoard_old.jpg',
         'Face Painting.jpg',
         'Filleting Table.jpg',
         'Forbidden Dance.jpg',
         'Glossolalia.jpg',
         'Glossolalia_1.jpg',
         'Gormchymist.jpg',
         'Guidepost.jpg',
         'Heart Flute.jpg',
         'Heat Wave.jpg',
         'Heat Wave_1.jpg',
         'Initiation.jpg',
         'Jellyfish Apothecary.jpg',
         'Lantern Hoard.jpg',
         'Lantern Hoard_1.jpg',
         'Lantern Hoard_2.jpg',
         'Lantern Hoard_3.jpg',
         'Lantern Hoard_4.jpg',
         'Lantern Hoard_old.jpg',
         'Leather Worker.jpg',
         'Legless Ball.jpg',
         'Light Forging.jpg',
         'Lights in the Sky.jpg',
         'Lights in the Sky_1.jpg',
         'Lights in the Sky_2.jpg',
         'Mask Maker.jpg',
         'Momento Mori.jpg',
         'Muttering Blade.jpg',
         'Nickname.jpg',
         'Nightmare Training.jpg',
         'Nigredo.jpg',
         'Organ Grinder.jpg',
         'Organ Grinder_1.jpg',
         'Organ Grinder_old.jpg',
         'Partnership.jpg',
         'Petal Spiral.jpg',
         'Plague.jpg',
         'Pottery.jpg',
         'Records.jpg',
         'Rivalry.jpg',
         'Round Stone Training.jpg',
         'Rubedo.jpg',
         'Sacred Pool.jpg',
         'Sacred Pool_1.jpg',
         'Sacred Pool_2.jpg',
         'Sacred Pool_old.jpg',
         'Sacrifice.jpg',
         'Sauna Shrine.jpg',
         'Scarification.jpg',
         'Scrap Smelting.jpg',
         'Scrap Smelting_1.jpg',
         'Scrap Smelting_old.jpg',
         'Sculpture.jpg',
         'Settlement Watch.jpg',
         'Shadow Dancing.jpg',
         'Shrine.jpg',
         'Silk Storm.jpg',
         'Silk Storm_1.jpg',
         'Silk Storm_2.jpg',
         'Silk-refining.jpg',
         'Skinnery.jpg',
         'Stoic Statue.jpg',
         'Stone Circle.jpg',
         'Stone Garden.jpg',
         'Storytelling.jpg',
         'Subterranean Agriculture.jpg',
         'Subterranean Agriculture_1.jpg',
         'Subterranean Agriculture_old.jpg',
         'The Order is Watching.jpg',
         'The Sun.jpg',
         'The Sun_1.jpg',
         'The Sun_2.jpg',
         'The Sun_3.jpg',
         'The Sun_4.jpg',
         'Throne.jpg',
         'Throne_1.jpg',
         'Throne_2.jpg',
         'Throne_3.jpg',
         'Throne_4.jpg',
         'Training Day.jpg',
         'Umbilical Bank.jpg',
         'Umbilical Bank_1.jpg',
         'Umbilical Bank_old.jpg',
         'Venom Wine.jpg',
         'Wandering Master.jpg',
         'War Room.jpg',
         'Weapon Crafter.jpg',
         'Weapon Crafter_1.jpg',
         'Weapon Crafter_old.jpg',
         'White Mask.jpg'
      ]

      let urls = []

      // actions.forEach((item, i) => {
      //   urls.push('images/settlement/actions/'+item)
      // });

      for (let i=0; i<categories.length; i++) {
        let items = getTerms(categories[i][0])

        let items_keys = Object.keys(items)
        for (let j=0; j<items_keys.length; j++) {
          urls.push(categories[i][1]+items_keys[j]+categories[i][2])
        }
      }

      preloadImgs(urls, 'cards')
    }
  }
}
