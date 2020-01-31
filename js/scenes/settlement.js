const { app } = require('electron').remote

const { pathToAsset, pathToAssetL, initAssets } = require('./../ui/assets_loader')
initAssets()

const { createToc, generate_events_table } = require('./../ui/events')
const { getSettlementEventPath, get_random_draws, get_events_options } = require('./../ui/glossary')
const { createMenuButton, createReference, createSevereTables } = require('./../ui/menu')
const { getSettings, addSettings, onSettingsSaved, initSettings } = require('./../ui/settings')
const { render } = require('./../ui/template-renderer')
const { addTimer } = require('./../ui/timer')
const { setTransition, getBackTarget, getBackBackTarget } = require('./../ui/transition')
const { addDevelopment, openLocation, getDevelopmentState, setDevelopmentState } = require('./../ui/development')



module.exports = class SettlementScene {
  render () {
    if ($('#back').attr('src') == '#') {
        $('#back').attr('src', pathToAsset('images/back.jpg'))
    }
    $('#container').hide()
    $('#container').fadeIn(500)

    var events_table = generate_events_table()

    if (true) {
    document.getElementById('container').innerHTML = render(app.getAppPath() + '/partials/settlement.html')

    // $("img[usemap]").mapify();
    // $("#turn_cheatsheet").mapify();


    onSettingsSaved(() => {
      setTransition(document.title, 'back', getBackTarget(), current_state())
    })

    console.log(sessionStorage)

    // GET STATE INFORMATION
    // #############
    // var myself = sessionStorage.getItem("target");
    var myself = 'settlement'
    document.title = myself

    console.log(myself)

    // localStorage.clear();

    initSettings();

    var settings = getSettings()
    sessionStorage.setItem('settings', JSON.stringify(settings))
    window.settlement_back_target = sessionStorage.getItem('back_target')
    sessionStorage.setItem('back_target', null)

    $('body').css('font-size', settings['fontSize'])

    var state = sessionStorage.getItem(myself)
    var transition = sessionStorage.getItem('transition')
    var back_target = sessionStorage.getItem('back_target')

    console.log('Back:')
    console.log(back_target)

    console.log('Transition:')
    console.log(transition)

    console.log('State:')
    console.log(state)

    // Determine if starts anew or need to restore old state
    if ((transition == 'back') && !(state == null)) {
      var anew = false
    } else {
      var anew = true
    }

    // ## INITIAL CONFIGURATION ##########

    // Кнопка сгенерировать новое событие
    // Кнопка открыть список зданий

    var start_delay = 1000 // delay before speech playing starts
    var music_volume = 0.3 // music volume

    var speech = new Howl({
      src: [pathToAssetL(events_table[myself].speech)],
      volume: 1.0,
    })

    var music = new Howl({
      src: [pathToAsset(events_table[myself].music)],
      loop: true,
      volume: music_volume,
    })

    var noise = new Howl({
      src: [pathToAsset('audio/music/campfire.mp3')],
      loop: true,
      volume: 0.15,
    })

    console.log('Music to play ' + events_table[myself].music)

    if (!anew) {
      console.log('State loaded successfully!')
      state = JSON.parse(state)
      console.log(state)
      back_target = state.back_target
    };

    // ### COMMON PART (exec always) #################
    $('#container').children().hide()
    // $('#turn_cheatsheet').imageMapResize();

    if (anew) {
      let state = getDevelopmentState();
      state['activated']['innovations'] = []
      state['activated']['actions'] = []
      setDevelopmentState(state);
    }

    createMenuButton()
    createToc()
    createSevereTables()
    createReference()
    addSettings(settings)
    addMilestones()
    // addTimer(function() {
    addDevelopment()
    // }, 1000)


    // MUTE BUTTON SETUP
    // $("#mute.button").click(function () {
    //   if (!$(this).hasClass('active')) {
    //     music.mute(true);
    //     speech.mute(true);
    //   } else {
    //     speech.mute(false);
    //     music.mute(false);
    //   };
    //   $(this).toggleClass('active');
    // });

    // BACK BUTTON SETUP
    if ((back_target == null) || (back_target == 'null') || (back_target == 'undefined')) {
      $('#back_button').hide()
    } else {
      $('#back_button').hide()
      $('#back_button').html('<svg class="back_button__icon" enable-background="new 0 0 492 492" version="1.1" viewBox="0 0 492 492" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m464.34 207.42l0.768 0.168h-329.22l103.5-103.72c5.068-5.064 7.848-11.924 7.848-19.124s-2.78-14.012-7.848-19.088l-16.104-16.112c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844l-177.41 177.4c-5.084 5.084-7.864 11.856-7.844 19.06-0.02 7.244 2.76 14.02 7.844 19.096l177.41 177.41c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652l-104.66-104.3h329.99c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"></path></svg><span class="back_button__text">' + events_table[back_target].label + '</span>')
      $('#back_button').delay(500).fadeIn(1000)
    }

    // TRANSITION SETUP
    $('body').on('click', '#back_button', function () {
      let back_target = getBackBackTarget()
      console.log(back_target)
      setTransition(getBackTarget(), 'back', back_target, null)
    })

    $('body').on('click', '#menu_item', function () {
      if ($(this).attr('target') == document.title) {
        setTransition($(this).attr('target'), 'menu', getBackTarget())
      } else {
        setTransition($(this).attr('target'), 'menu', document.title, current_state())
      }
    })

    // ### STATE DEPENDENT INITIALIZATION #########

    noise.play()

    // if (sessionStorage.getItem("Mute") == "On") {
    //   music.mute(true);
    //   speech.mute(true);
    //   noise.mute(true);
    //   $("#mute.button").toggleClass('active');
    // }
    if (settings['music'] == 'Off') {
      music.mute(true)
      noise.mute(true)
    }
    if (settings['narration'] == 'Off') {
      speech.mute(true)
    }

    var selectize = $('#settlement_event_list').selectize({
      options: get_events_options(),
      labelField: 'name',
      searchField: ['name'],
      // maxItems: 4,
      onChange: function(value, isOnInitialize) {
        console.log('Selectize value: '+ value);
        if (value == 'Random Settlement Event') {
          value = getSettlementEventPath()
        }
        $('#settlement_event_back').attr('src', pathToAssetL('images/reference/Settlement Events/' + value + '.jpg'))
        $('#settlement_event_back').attr('val', value)
        selectize.setValue(value, true)
        addTimer(function () {
          $("#settlement_event_screen > .selectize-control").css({
            'width': ($("#settlement_event_back").width() + 'px')
          }); }, 100)
      },
      onDropdownOpen: function ($dropdown) {
        if (!$('#settlement_event_screen > .selectize-control > .selectize-input').hasClass('active')) {
          $('#settlement_event_screen > .selectize-control > .selectize-input').addClass('active')
        }

      },

      onDropdownClose: function ($dropdown) {
        if ($('#settlement_event_screen > .selectize-control > .selectize-input').hasClass('active')) {
          $('#settlement_event_screen > .selectize-control > .selectize-input').removeClass('active')
        }
      },
      // create: true,
    })[0].selectize;
    // window.selectize = selectize
    $('#settlement_event_screen > .selectize-control > .selectize-input input').prop('disabled', true);
    $('#settlement_event_screen > .selectize-control').hide();

    if (anew) {
      $("#label_sub_text").hide();
      $('#hunt_icon').fadeIn(1000)
      $('#label_text').fadeIn(1000)
      $("#label_sub_text").delay(500).fadeIn(500);
      $('#hunt_icon').delay(1000).fadeOut(1000)
      $('#label_text').delay(1000).fadeOut(1000)
      $('#settlement_background').delay(2000).fadeIn(500)
      // $('#milestones').delay(3500).fadeIn(2000);
      $('#turn_cheatsheet_pic').attr('src', pathToAssetL('images/settlement/turn.jpg'))
      $('#turn_cheatsheet').delay(2000).fadeIn(500)
      // $('.mapify-holder').delay(2000).fadeIn(500)
      $('#settlement_event_button').delay(2500).fadeIn(1000)
      $('#milestones_button').delay(2500).fadeIn(1000)
      $('#development_button').delay(2500).fadeIn(1000)
      $('#mute.button').show()
      // $('#back_button').show();

      addTimer(function () {
        speech.play()
      }, start_delay)
      music.play()
    } else {
      // $("#hunt_icon").fadeIn(2000);
      // $("#label_text").fadeIn(2000);
      $('#settlement_background').fadeIn(1000)
      // $('#milestones').fadeIn(2000);
      $('#turn_cheatsheet_pic').attr('src', pathToAssetL('images/settlement/turn.jpg'))
      $('#turn_cheatsheet').fadeIn(1000)
      // $('.mapify-holder').fadeIn(1000)

      $('#settlement_event_button').delay(1000).fadeIn(500)
      $('#milestones_button').delay(1000).fadeIn(500)
      $('#development_button').delay(1000).fadeIn(500)
      $('#mute.button').show()
      // $('#back_button').show();

      speech.seek(state.speech_position)

      if (state.speech_playing) {
        speech.volume(0.0)
        speech.play()
        speech.fade(0.0, 1.0, 500)
      }

      music.seek(state.music_position)

      if (state.music_playing) {
        music.volume(0.0)
        music.play()
        music.fade(0.0, music_volume, 500)
      }

    }

    // ##### COMMON LOGIC ########

    $('#settlement_event_button').click(function () {
      if (!$(this).hasClass('active')) {
        $('#settlement_event_screen').delay(50).fadeIn(300)
        // $('#settlement_event_screen_2').delay(50).fadeIn(300)
        if ($('#settlement_event_back').attr('src') == '#') {
          let selected_event = getSettlementEventPath();
          if (['foundlings', 'returning survivors', 'the pool and the sun'].indexOf(window.settlement_back_target) >= 0) {
            selected_event = 'First Day'
          }
          if (!anew) {
            selected_event = state.settlement_event
          }

          $('#settlement_event_back').attr('val', selected_event)
          selectize.setValue(selected_event, false)

          $('#settlement_event_back').fadeOut(300, function(){
              $(this).attr('src',pathToAssetL('images/reference/Settlement Events/' + selected_event + '.jpg')).bind('onreadystatechange load', function(){
                 if (this.complete) {
                   $(this).delay(50).fadeIn(300);
                   $("#settlement_event_screen > .selectize-control").css({
                     'width': ($("#settlement_event_back").width() + 'px')
                   });
                   $('#settlement_event_screen > .selectize-control').delay(50).fadeIn(300);
                 }
              });
           });
        } else {
          $('#settlement_event_back').delay(150).fadeIn(500);
          $('#settlement_event_screen > .selectize-control').delay(150).fadeIn(500);
        }

        $('.cheatsheet_button').each(function() {$(this).removeClass('active'); $('#milestones').hide(); }) // $('#settlement_event_back').hide();
        // $(this).addClass('active')
        // $('#cheatsheet_buttons').addClass('active')
      } else {
        // $('#settlement_event_screen').delay(50).fadeOut(500)
        // $('#settlement_event_screen_2').delay(50).fadeOut(500)
        // $('#settlement_event_back').delay(50).fadeOut(300)
        // $('#settlement_event_screen > .selectize-control').delay(50).fadeOut(300)
        // $(this).removeClass('active')
        // $('#cheatsheet_buttons').removeClass('active')
      };
    })

    $('#milestones_button').click(function () {
      if (!$(this).hasClass('active')) {
        $('#milestones').delay(150).fadeIn(500)
        $('.cheatsheet_button').each(function() {$(this).removeClass('active'); $('#milestones').hide(); }) // $('#settlement_event_back').hide();
        $(this).addClass('active')
        $('#cheatsheet_buttons').addClass('active')
      } else {
        $('#milestones').delay(50).fadeOut(500)
        $(this).removeClass('active')
        $('#cheatsheet_buttons').removeClass('active')
      };
    })

    $('#milestone-title').on('click', function () {
      $('#milestones').delay(50).fadeOut(500)
      $('#milestones_button').removeClass('active')
      $('#cheatsheet_buttons').removeClass('active')
    })

    // $('#settlement_event_screen_2').click(function () {
    //   // console.log($('#settlement_event_screen > .selectize-control > .selectize-input').attr('class'))
    //   // if ($('#settlement_event_screen > .selectize-control > .selectize-input input').hasClass('dropdown-active')) {
    //   //   console.log('Just closing dropdown folks!')
    //   // } else {
    //     console.log('Closing everything!')
    //     $('#settlement_event_screen').delay(50).fadeOut(500)
    //     $('#settlement_event_screen_2').delay(50).fadeOut(500)
    //     $('#settlement_event_back').delay(50).fadeOut(500)
    //     $('#settlement_event_screen > .selectize-control').delay(50).fadeOut(500)
    //     $('#settlement_event_button').removeClass('active')
    //     $('#cheatsheet_buttons').removeClass('active')
    //   // }
    // })

    $('#development_button').click(function () {
      if (!$(this).hasClass('active')) {
        $('#development_screen').delay(150).fadeIn(500)
        $('#settlement_locations_window').delay(150).fadeIn(500)
        $('.cheatsheet_button').each(function() {$(this).removeClass('active'); $('#milestones').hide(); }) // $('#settlement_event_back').hide();
        $(this).addClass('active')
        $('#cheatsheet_buttons').addClass('active')
        if ($('#locations_button').hasClass('active')) {
          document.getElementById("defaultOpen").click();
        }

      } else {
        $('#development_screen').delay(50).fadeOut(500)
        $('#settlement_locations_window').delay(50).fadeOut(500)
        $(this).removeClass('active')
        $('#cheatsheet_buttons').removeClass('active')
      };
    })

    $('#development_screen').click(function () {
      $('#development_screen').delay(150).fadeOut(500)
      $('#settlement_locations_window').delay(50).fadeOut(500)
      $('#development_button').removeClass('active')
      $('#cheatsheet_buttons').removeClass('active')
    })

    $('#end_phase_button').click(function () {
      setTransition('hunt', 'menu', document.title, current_state())
    })


    $('#survivors_return_button').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: 'All survivors that endured the previous showdown are <b>returning survivors</b>.<br/><br/>Their injuries are healed and all tokens are removed.<br/><br/>Apply any effects for the <b>returning survivors</b>.',
      position: 'right',
      delay: 0,
      maxWidth: 300,
      trigger: 'custom',
      triggerOpen: {
        mouseenter: true,
        click: true
      },
      triggerClose: {
        click: true,
        mouseleave: true
      }
    })

    $('#gain_endeavors_button').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: 'Gain 1 endeavor for each <b>returning survivor</b>.<br/><br/>Additional endeavors may be gained from principles, innovations and abilities.',
      position: 'right',
      delay: 0,
      maxWidth: 300,
      trigger: 'custom',
      triggerOpen: {
        mouseenter: true,
        click: true
      },
      triggerClose: {
        click: true,
        mouseleave: true
      }
    })

    $('#settlement_event_button').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: '<b style="color:#cc0;">Click</b> to draw <b>Settlement Event</b> card.',
      position: 'right',
      delay: 0,
      maxWidth: 300,
      trigger: 'custom',
      triggerOpen: {
        mouseenter: true,
        click: true
      },
      triggerClose: {
        click: true,
        mouseleave: true
      }
    })

    $('#update_deathcount_button').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: 'If any survivors perished during the hunt, showdown or during the preceeding steps of the settlement phase, update the death count.<br/><br/>If a survivor dies later during the Settlement Phase, upadte the death count immediately.',
      position: 'right',
      delay: 0,
      maxWidth: 300,
      trigger: 'custom',
      triggerOpen: {
        mouseenter: true,
        click: true
      },
      triggerClose: {
        click: true,
        mouseleave: true
      }
    })

    $('#milestones_button').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: 'For each reached milestone trigger the corresponding story event.<br/><br/><b style="color:#cc0;">Click</b> to show <b>Milestones</b>.',
      position: 'right',
      delay: 0,
      maxWidth: 300,
      trigger: 'custom',
      triggerOpen: {
        mouseenter: true,
        click: true
      },
      triggerClose: {
        click: true,
        mouseleave: true
      }
    })

    $('#development_button').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: '<b style="color:#cc0;">Click</b> to show <b>Development</b> window.',
      position: 'right',
      delay: 0,
      maxWidth: 300,
      trigger: 'custom',
      triggerOpen: {
        mouseenter: true,
        click: true
      },
      triggerClose: {
        click: true,
        mouseleave: true
      }
    })

    $('#departing_button').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: 'Chose <b>4</b> departing survivors.<br/><br/>Remove the returning survivors gear and add gear to the departing survivors gear grids.<br/><br/>Record armor points, modifiers from gear and bonuses from innovations, endeavors and events that affect departing survivors.',
      position: 'right',
      delay: 0,
      maxWidth: 300,
      trigger: 'custom',
      triggerOpen: {
        mouseenter: true,
        click: true
      },
      triggerClose: {
        click: true,
        mouseleave: true
      }
    })

    $('#special_showdown_button').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: 'Departing survivors immediately begin showdown.<br/><br/>After showdown heal all wounds and remove all tokens.',
      position: 'right',
      delay: 0,
      maxWidth: 300,
      trigger: 'custom',
      triggerOpen: {
        mouseenter: true,
        click: true
      },
      triggerClose: {
        click: true,
        mouseleave: true
      }
    })

    $('#record_button').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: 'Record unspent resources in the settlement storage and archive all resource cards.',
      position: 'right',
      delay: 0,
      maxWidth: 300,
      trigger: 'custom',
      triggerOpen: {
        mouseenter: true,
        click: true
      },
      triggerClose: {
        click: true,
        mouseleave: true
      }
    })

    $('#end_phase_button').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: 'Lose unspent endeavors.<br/><br/><b style="color:#cc0;">Click</b> to start a new <b>Hunt</b>!',
      position: 'right',
      delay: 0,
      maxWidth: 300,
      trigger: 'custom',
      triggerOpen: {
        mouseenter: true,
        click: true
      },
      triggerClose: {
        click: true,
        mouseleave: true
      }
    })

    // $("#mute.button").click(function () {
    //   if (!$(this).hasClass('active')) {
    //     music.mute(true);
    //     speech.mute(true);
    //     noise.mute(true);
    //     sessionStorage.setItem("Mute", "On");
    //   } else {
    //     speech.mute(false);
    //     music.mute(false);
    //     noise.mute(false);
    //     sessionStorage.setItem("Mute", "Off");
    //   };
    //
    //   $(this).toggleClass('active');
    // });

    // $("#turn_cheatsheet").mapify();

    function change_selected_event() {

    }

    function addMilestones () {
      // settings['str']
      // $('#milestones').append($('<div id="milestone-title">Strains</div>'))
      // $('#milestones').append($('<div id="milestone">&bull; First time death cound is updated - <a id="milestone-trigger" target="principle death">Principle: Death</a></div>'))
      $('#milestones').append($('<div id="milestone-title">Milestones</div>'))
      if (['Lantern', 'Stars'].includes(settings['campaign'])) {
        $('#milestones').append($('<div id="milestone">&bull; First child is born - <a id="milestone-trigger" target="principle new life">Principle: New Life</a></div>'))
      }
      $('#milestones').append($('<div id="milestone">&bull; First time death count is updated - <a id="milestone-trigger" target="principle death">Principle: Death</a></div>'))
      $('#milestones').append($('<div id="milestone">&bull; Population reaches 15 - <a id="milestone-trigger" target="principle society">Principle: Society</a></div>'))
      $('#milestones').append($('<div id="milestone">&bull; Lantern Year 12 - <a id="milestone-trigger" target="principle conviction">Principle: Conviction</a></div>'))
      if (settings['campaign'] == 'Lantern') {
        $('#milestones').append($('<div id="milestone">&bull; Settlement has 5 innovations - <a id="milestone-trigger" target="hooded knight">Hooded Knight</a></div>'))
      }
      if (settings['campaign'] == 'Sun') {
        $('#milestones').append($('<div id="milestone">&bull; Settlement has 8 innovations - <a id="milestone-trigger" target="edged tonometry">Edged Tonometry</a></div>'))
      }

      $('body').on('click', '#milestone-trigger', function () {
        setTransition($(this).attr('target'), 'menu', document.title, current_state())
      })

      // $('#milestone-trigger').each(function() {
      //     $(this).on('click', function(e) {
      //         setTransition($(this).attr('target'), 'menu', document.title, current_state())
      //     });
      // });
    }

    // ### FUNCTION THAT SAVES ALL DATA NEEDED TO RESTORE STATE ######
    function current_state () {
      let current_state = new Object()

      current_state.speech_playing = speech.playing()

      if (speech.playing()) {
        current_state.speech_position = speech.seek()
      } else {
        current_state.speech_position = -1
      }

      current_state.music_playing = music.playing()

      if (music.playing()) {
        current_state.music_position = music.seek()
      } else {
        current_state.music_position = -1
      }

      // current_state.muted = $("#mute.button").hasClass('active');

      current_state.back_target = sessionStorage.getItem('back_target')
      current_state.locations = null
      current_state.innovations = null

      current_state.settlement_event = $('#settlement_event_back').attr('val')
      current_state.milestones_open = $('#milestones_button').hasClass('active')

      console.log(current_state)
      console.log(JSON.stringify(current_state))

      return JSON.stringify(current_state)
    }

    function isHidden (el) {
      let style = window.getComputedStyle(el)
      return (style.display === 'none')
    }
  }
  }
}
