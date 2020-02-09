const { createToc, events_table } = require('./../ui/events')
const { createMenuButton, createReference, createSevereTables } = require('./../ui/menu')
const { getSettings, addSettings, onSettingsSaved } = require('./../ui/settings')
const { addTimer } = require('./../ui/timer')
const { setTransition, getBackTarget, getBackBackTarget } = require('./../ui/transition')

module.exports = class FinaleScene {
  render () {
    document.getElementById('container').innerHTML = render('slideshow')

    onSettingsSaved(() => {
      setTransition(document.title, 'back', getBackTarget(), current_state())
    })

    console.log(sessionStorage)

    // UNDERSTAND WHAT EVENT TO SHOW
    // #############
    var myself = sessionStorage.getItem('target')
    document.title = myself
    // #############

    console.log(myself)

    // Hide all elements at start!!
    $('#container').children().hide()

    createMenuButton()
    createToc()
    addSettings(settings)

    var settings = getSettings()

    // Set constants!!
    if ((events_table[myself].speech == '') || (settings['narration'] == 'Off')) {
      var mute_narration = true
    } else {
      var mute_narration = false
    };

    if (settings['music'] == 'Off') {
      var mute_music = true
    } else {
      var mute_music = false
    };

    // Load window state
    var state = sessionStorage.getItem(myself)
    var transition = sessionStorage.getItem('transition')
    var back_target = sessionStorage.getItem('back_target')

    console.log('Back:')
    console.log(back_target)

    console.log('Transition:')
    console.log(transition)

    console.log('State:')
    console.log(state)

    var music = new Howl({
      src: [events_table[myself].music],
      loop: true,
      volume: music_volume,
    });

    if (mute_music) {
      music.mute(true)
    }

    console.log('Music to play ' + events_table[myself].music)

    var slide_shown_event = new Event('slides_shown');

    elem.addEventListener('slides_shown', function (e) { end_state(e) }, false);

    let anew = false

    if ((transition == 'back') && !(state == null)) {
      console.log('State loaded successfully!')
      state = JSON.parse(state)
      console.log(state)

      back_target = state.back_target;

      elem.dispatchEvent(slide_shown_event);

    } else {
        anew = true;

        init_state();

    };



    function init_state() {
      // start the slide show (on image_back - element) + play speech
      // if mouse click on the image_back - sends 'slides_shown' event to show end state
      // music plays from the start - initialized globally ???

      // All slides are expexted to be named _i where i starts from 1 to number_of_slides
      var number_of_slides = events_table[myself].number_of_slides

      let current_slide = 1;

      while (current_slide <= number_of_slides) {
        var speech = new Howl({
          src: [events_table[myself].speech+'_'+current_slide+'.mp3'],
          volume: 1.0,
        })

        speech.on('load', function () {

        })
      }




    };

    function end_state(e=null) {
      // initiates after 'slides_shown' event
      // the event is shown if action happened during init or windows is opened from back action
      // shows final picture and injuries/reference
    };

    if (mute_narration) {
      speech.mute(true)
    }

    // var start_delay = 1000 // delay before speech playing starts
    // var music_volume = 0.8 // music volume
    //
    // var speech = new Howl({
    //   src: [events_table[myself].speech],
    //   volume: 1.0,
    // })





    if ((transition == 'back') && !(state == null)) {
      console.log('State loaded successfully!')
      state = JSON.parse(state)
      console.log(state)

      back_target = state.back_target
      var action = state.action

      // when returning through back transition we always skip the slides!
      if (true) {
        show_slides(number_of_slides, number_of_slides, play=false)

        if (!menus_appeared) {
          menus_appeared = true
          addTimer(function () {
            createSevereTables()
            createReference()
          }, 2000)
        };

        // music.seek(state.music_position)
        music.volume(0.0)
        music.play()
        music.fade(0.0, music_volume, 500)
      }
    } else {
      console.log('No initialized state!')
      var action = 'false' // flag to show if user clicked on #img_back
    };

    var menus_appeared = false

    // SET UP EVENT START IF IT HAS NO INITIALIZED STATE
    // #############
    if (anew) {
      show_slides(number_of_slides, number_of_slides)

      speech.on('load', function () {
        var duration = speech.duration() * 1000

        console.log('Speech ' + events_table[myself].speech)
        console.log('Speech duration ' + duration)
        console.log('Music ' + events_table[myself].music)
        console.log('Music delay ' + events_table[myself].music_delay)

        if (events_table[myself].music_delay.includes('speech')) {
          var delay = duration + parseInt(events_table[myself].music_delay.replace('speech', '').replace(/ /g, ''), 10)
        } else {
          var delay = parseInt(events_table[myself].music_delay, 10)
        }

        if (delay < 0) {
          throw 'Music delay at event ' + myself + " can't be negative!"
        }

        console.log('Music delay computed ' + delay)

        if (mute_narration) {
          duration = 2000
          delay = 1000
        }
        if (myself == 'first story') {
          duration = 4000
          delay = 1000
          $('.srt').text('Open rule book on page 22 and follow the instructions.')
          $('.srt').fadeIn(2000)
          addTimer(function () { $('.srt').fadeOut(1000) }, 3000)
        }

        if (!mute_narration) {
          addTimer(function () {
            speech.play()
          }, start_delay)
        }

        addTimer(function () {
          if (action == 'false') {
            $('#img').fadeIn(2000)
            action = 'true'
            if (!menus_appeared) {
              menus_appeared = true
              addTimer(function () {
                createSevereTables()
                createReference()
              }, 3000);
            };
          }
        }, start_delay + duration + 3000)

        addTimer(function () {
          console.log('I play the music')
          music.play()
        }, start_delay + delay)
      })
    };
    // #############

    $('#img_back').click(function () {
      action = 'true'

      // $("#label_text").fadeOut(2000);
      $('#img').fadeIn(2000)
      if ((!menus_appeared) && anew) {
        menus_appeared = true
        addTimer(function () {
          createSevereTables()
          createReference()
        }, 2000);
      };

      if (speech.playing()) {
        speech.fade(1.0, 0.0, 2000)
        speech.pause()
      }

      music.play()
    })

    $('#img').click(function () {
      $('#label_text').delay(1500).fadeIn(2000)
      $('#img').fadeOut(2000)
    })

    if ((back_target == null) || (back_target == 'null') || (back_target == 'undefined')) {
      $('#back_button').hide()
    } else {
      $('#back_button').hide()
      $('#back_button').html('<svg class="back_button__icon" enable-background="new 0 0 492 492" version="1.1" viewBox="0 0 492 492" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m464.34 207.42l0.768 0.168h-329.22l103.5-103.72c5.068-5.064 7.848-11.924 7.848-19.124s-2.78-14.012-7.848-19.088l-16.104-16.112c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844l-177.41 177.4c-5.084 5.084-7.864 11.856-7.844 19.06-0.02 7.244 2.76 14.02 7.844 19.096l177.41 177.41c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652l-104.66-104.3h329.99c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"></path></svg><span class="back_button__text">' + events_table[back_target].label + '</span>')
      $('#back_button').delay(500).fadeIn(1000)
    }

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

    function show_slides (start, finish, play=true) {
      $("#link").click(function() {

        $("#image").fadeTo(1000,0.30, function() {
            $("#image").attr("src",$("#link").attr("href"));
        }).fadeTo(500,1);
        return false;
      });
    }

    function current_state () {
      let current_state = new Object()

      current_state.img_hidden = isHidden(document.getElementById('img'))
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
      current_state.action = action

      console.log(current_state)
      console.log(JSON.stringify(current_state))

      return JSON.stringify(current_state)
    };

    function isHidden (el) {
      let style = window.getComputedStyle(el)
      return (style.display === 'none')
    }
  }
}
