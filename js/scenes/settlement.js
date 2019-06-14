const { setTransition, getBackTarget, getBackBackTarget } = require('./../ui/transition')

module.exports = class SettlementScene {
  constructor () {
    console.log(sessionStorage)

    // GET STATE INFORMATION
    // #############
    // var myself = sessionStorage.getItem("target");
    var myself = 'settlement'
    document.title = myself

    window.reload = false

    console.log(myself)

    var settings = getSettings()
    sessionStorage.setItem('settings', JSON.stringify(settings))

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
    var music_volume = 0.8 // music volume

    var speech = new Howl({
      src: [events_table[myself].speech],
      volume: 1.0,
    })

    var music = new Howl({
      src: [events_table[myself].music],
      loop: true,
      volume: music_volume,
    })

    var noise = new Howl({
      src: ['audio/music/campfire.mp3'],
      loop: true,
      volume: 0.6,
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

    createMenuButton()
    createToc()
    createSevereTables()
    createReference()
    addSettings(settings)
    addMilestones()

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

    if (anew) {
      $('#hunt_icon').fadeIn(2000)
      $('#label_text').fadeIn(2000)
      $('#hunt_icon').delay(1000).fadeOut(2000)
      $('#label_text').delay(1000).fadeOut(2000)
      $('#settlement_background').delay(3500).fadeIn(2000)
      // $('#milestones').delay(3500).fadeIn(2000);
      $('#turn_cheatsheet').delay(3500).fadeIn(2000)
      $('#settlement_event_button').delay(4000).fadeIn(1000)
      $('#milestones_button').delay(4000).fadeIn(1000)
      $('#mute.button').show()
      // $('#back_button').show();

      setTimeout(function () {
        speech.play()
      }, start_delay)
      music.play()
    } else {
      // $("#hunt_icon").fadeIn(2000);
      // $("#label_text").fadeIn(2000);
      $('#settlement_background').fadeIn(2000)
      // $('#milestones').fadeIn(2000);
      $('#turn_cheatsheet').fadeIn(2000)
      $('#settlement_event_button').fadeIn(2000)
      $('#milestones_button').fadeIn(2000)
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

      $('#settlement_event_back').attr('src', state.settlement_event)

      if (state.milestones_open) {
        $('#milestones').delay(150).fadeIn(500)
        $('#milestones_button').addClass('active')
      }

      // if (state.muted) {
      //   music.mute(true);
      //   speech.mute(true);
      //   $("#mute.button").toggleClass('active');
      // }
    }

    // ##### COMMON LOGIC ########

    $('#settlement_event_button').click(function () {
      if (!$(this).hasClass('active')) {
        $('#settlement_event_screen').delay(50).fadeIn(500)
        if ($('#settlement_event_back').attr('src') == '#') {
          $('#settlement_event_back').attr('src', getSettlementEventPath())
        };
        $('#settlement_event_back').delay(150).fadeIn(500)
        $(this).addClass('active')
      } else {
        $('#settlement_event_screen').delay(150).fadeOut(500)
        $('#settlement_event_back').delay(50).fadeOut(500)
        $(this).removeClass('active')
      };
    })

    $('#milestones_button').click(function () {
      if (!$(this).hasClass('active')) {
        $('#milestones').delay(150).fadeIn(500)
        $(this).addClass('active')
      } else {
        $('#milestones').delay(50).fadeOut(500)
        $(this).removeClass('active')
      };
    })

    $('#milestone-title').on('click', function () {
      $('#milestones').delay(50).fadeOut(500)
      $('#milestones_button').removeClass('active')
    })

    $('#settlement_event_back').click(function () {
      $('#settlement_event_screen').delay(150).fadeOut(500)
      $('#settlement_event_back').delay(50).fadeOut(500)
      $('#settlement_event_button').removeClass('active')
    })

    $('#settlement_event_button').tooltipster({
      contentAsHTML: 'true',
      animation: 'grow',
      content: 'Draw <b>Settlement Event</b> card.',
      position: 'right',
      delay: '600',
    })

    $('#milestones_button').tooltipster({
      contentAsHTML: 'true',
      animation: 'grow',
      content: 'Show <b>Milestones</b>.',
      position: 'right',
      delay: '600',
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
    setInterval(function () {
      if (window.reload) {
        setTransition(document.title, 'back', getBackTarget(), current_state())
      }
    }, 100)

    function addMilestones () {
      $('#milestones').append($('<div id="milestone-title">Milestones</div>'))
      $('#milestones').append($('<div id="milestone">&bull; First child is born - <a id="milestone-trigger" target="principle new life">Principle: New Life</a></div>'))
      $('#milestones').append($('<div id="milestone">&bull; First time death cound is updated - <a id="milestone-trigger" target="principle death">Principle: Death</a></div>'))
      $('#milestones').append($('<div id="milestone">&bull; Population reaches 15 - <a id="milestone-trigger" target="principle society">Principle: Society</a></div>'))
      $('#milestones').append($('<div id="milestone">&bull; Settlement has 5 innovations - <a id="milestone-trigger" target="hooded knight">Hooded Knight</a></div>'))
      $('#milestones').append($('<div id="milestone">&bull; Lantern Year 12 - <a id="milestone-trigger" target="principle conviction">Principle: Conviction</a></div>'))

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

      current_state.settlement_event = $('#settlement_event_back').attr('src')
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
