const { app } = require('electron').remote

const { createToc, events_table } = require('./../ui/events')
const { createMenuButton, createReference, createSevereTables } = require('./../ui/menu')
const { getSettings, addSettings, onSettingsSaved } = require('./../ui/settings')
const { render, cdnUrl } = require('./../ui/template-renderer')
const { addTimer } = require('./../ui/timer')
const { setTransition, getBackTarget, getBackBackTarget } = require('./../ui/transition')

// const { eventsSugar } = require('./../ui/events_sugar')

const quaries_events = [
  'showdown gorm',
  'showdown white lion',
  'showdown screaming antelope',
  'showdown phoenix',
  'showdown dung beetle knight',
  'showdown sunstalker',
  'showdown dragon king',
  'showdown lion god',
  'showdown flower knight',
  'showdown spidicules',
]

module.exports = class ImageScene {
  render () {
    document.getElementById('container').innerHTML = render(app.getAppPath() + '/partials/image.html')

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

    // let settings = JSON.parse(sessionStorage.getItem("settings"));
    var settings = getSettings()
    sessionStorage.setItem('settings', JSON.stringify(settings))

    $('#img_back').attr('src', cdnUrl('images/' + myself + '/back.jpg'))

    if ((myself == 'white speaker') && (settings['whiteboxes']['white speaker'] == 'Enabled')) {
      $('#img').attr('src', cdnUrl('images/' + myself + '/img_wb.jpg'))
    } else if ((myself == 'hooded knight') && (settings['whiteboxes']['allison the twilight knight'] == 'Enabled')) {
      $('#img').attr('src', cdnUrl('images/' + myself + '/img_wb.jpg'))
    } else {
      $('#img').attr('src', cdnUrl('images/' + myself + '/img.jpg'))
    }

    if ((myself == 'intimacy') && (settings['campaign'] == 'Stars')) {
      $('#img_back').attr('src', cdnUrl('images/' + myself + ' stars/back.jpg'))
      $('#img').attr('src', cdnUrl('images/' + myself + ' stars/img.jpg'))
    }

    if ((myself == 'intimacy') && (settings['campaign'] == 'Sun')) {
      $('#img_back').attr('src', cdnUrl('images/' + myself + ' sun/back.jpg'))
      $('#img').attr('src', cdnUrl('images/' + myself + ' sun/img.jpg'))
    }

    if (!events_table[myself].hide_label) {
      $('#label_text').addClass(myself.replace(' ', '_'))
      $('#label_text').text(events_table[myself].label)
      $('#label_text').css('top', events_table[myself].ltop)
      $('#label_text').css('left', events_table[myself].lleft)
    }

    $('#img_back').hide()
    $('#label_text').hide()
    $('#img').hide()
    $('#menu').hide()

    var start_delay = 1000 // delay before speech playing starts
    var music_volume = 0.4 // music volume

    var speech = new Howl({
      src: [cdnUrl(events_table[myself].speech)],
      volume: 1.0,
    })

    if ((events_table[myself].speech == '') || (settings['narration'] == 'Off')) {
      var mute_narration = true
    } else {
      var mute_narration = false
    };

    var music = new Howl({
      src: [cdnUrl(events_table[myself].music)],
      loop: true,
      volume: music_volume,
    })

    console.log('Music to play ' + events_table[myself].music)

    createMenuButton()
    createToc()
    addSettings(settings)

    var state = sessionStorage.getItem(myself)
    var transition = sessionStorage.getItem('transition')
    var back_target = sessionStorage.getItem('back_target')

    console.log('Back:')
    console.log(back_target)

    console.log('Transition:')
    console.log(transition)

    console.log('State:')
    console.log(state)

    var anew = true

    if (settings['music'] == 'Off') {
      music.mute(true)
    }
    if (mute_narration) {
      speech.mute(true)
    }

    let menus_appeared = false

    if ((transition == 'back') && !(state == null) && !(state == 'undefined')) {
      console.log('State loaded successfully!')
      state = JSON.parse(state)
      console.log(state)

      back_target = state.back_target
      var action = state.action
      anew = false

      $('#img_back').fadeIn(500)

      if (true) {
        $('#label_text').fadeIn(2000)
        $('#img').delay(2000).fadeIn(1000)

        if (!menus_appeared) {
          menus_appeared = true
          addTimer(function () {
            createSevereTables()
            createReference()
            eventsSugar(myself)
          }, 2000)
        };

        if (!music.playing()) {
          music.volume(0.0)
          music.play();
          music.fade(0.0, music_volume, 500)
        }
      }
    } else {
      console.log('No initialized state!')
      var action = 'false' // flag to show if user clicked on #img_back

      if (myself == 'first story') {
        $('#img_back').delay(4000).fadeIn(1000)
      } else {
        $('#img_back').fadeIn(1000)
      }
    };

    if ((back_target == null) || (back_target == 'null') || (back_target == 'undefined')) {
      $('#back_button').hide()
    } else {
      $('#back_button').hide()
      $('#back_button').html('<svg class="back_button__icon" enable-background="new 0 0 492 492" version="1.1" viewBox="0 0 492 492" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m464.34 207.42l0.768 0.168h-329.22l103.5-103.72c5.068-5.064 7.848-11.924 7.848-19.124s-2.78-14.012-7.848-19.088l-16.104-16.112c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844l-177.41 177.4c-5.084 5.084-7.864 11.856-7.844 19.06-0.02 7.244 2.76 14.02 7.844 19.096l177.41 177.41c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652l-104.66-104.3h329.99c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"></path></svg><span class="back_button__text">' + events_table[back_target].label + '</span>')
      $('#back_button').delay(500).fadeIn(500)
    }

    // SET UP EVENT START IF IT HAS NO INITIALIZED STATE
    // #############
    if (anew) {
      $('#label_text').delay(1000).fadeIn(1000)

      console.log('Muted naration: '+ mute_narration)

      if (mute_narration) {
        start_anew();
      } else {
        speech.on('load', function () {
          start_anew();
        })
      };

    };



    function start_anew() {
      console.log('I started anew!!')
      console.log(action)
      if (mute_narration) {
        duration = 1000
        // delay = 1000
        delay = 1000
      } else {
        var duration = speech.duration() * 1000

        if (events_table[myself].music_delay.includes('speech')) {
          var delay = duration + parseInt(events_table[myself].music_delay.replace('speech', '').replace(/ /g, ''), 10)
        } else {
          var delay = parseInt(events_table[myself].music_delay, 10)
        }
      }

      if (myself == 'first story') {
        duration = 3000
        // delay = parseInt(events_table[myself].music_delay, 10)
        $('.srt').text('Open rule book on page 22 and follow the instructions.')
        $('.srt').fadeIn(1000)
        addTimer(function () { $('.srt').fadeOut(1000) }, 2000)
      }

      console.log('Speech ' + events_table[myself].speech)
      console.log('Speech duration ' + duration)
      console.log('Music ' + events_table[myself].music)
      console.log('Music delay ' + events_table[myself].music_delay)

      if (delay < 0) {
        throw 'Music delay at event ' + myself + " can't be negative!"
      }

      console.log('Music delay computed ' + delay)


      if (!mute_narration) {
        addTimer(function () {
          speech.play()
        }, start_delay)
      }

      addTimer(function () {
        if (action == 'false') {
          $('#img').fadeIn(1000)
          action = 'true'
          if (!menus_appeared) {
            menus_appeared = true
            addTimer(function () {
              createSevereTables()
              createReference()
              eventsSugar(myself)
            }, 1000);
          }
          ;
        }
      }, start_delay + duration + 2000)

      addTimer(function () {
        console.log('I play the music')
        if (!music.playing()) {
          music.play();
        }
      }, start_delay + delay)
    };
    // #############

    $('#img_back').click(function () {
      action = 'true'

      // $("#label_text").fadeOut(2000);
      $('#img').fadeIn(1000)
      if ((!menus_appeared) && anew) {
        menus_appeared = true
        addTimer(function () {
          createSevereTables()
          createReference()
          eventsSugar(myself)
        }, 500);
      };

      if (speech.playing()) {
        speech.fade(1.0, 0.0, 1000)
        speech.pause()
      }
      if (!music.playing()) {
        music.play();
      }
    })

    $('#img').click(function () {
      $('#label_text').delay(1000).fadeIn(1000)
      $('#img').fadeOut(1000)
    })


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

    function eventsSugar(name) {
      if (quaries_events.indexOf(name) >= 0) {
        console.log('Adding the button!')
        let return_button = $('<button>', {
          id: 'settlement_return_button'
        })
        return_button.text('Return to Settlement')
        return_button.tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: '<b style="color:#cc0;">Click</b> to return to <b>Settlement</b>.',
            position: 'bottom',
            delay: [300, 100],
            fixedWidth: 250,
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
        // return_button.hide()
        $('#container').append(return_button)
        // return_button.delay(1000).fadeIn(2000)
        $('#container').on('click', '#settlement_return_button', function () {
          setTransition('settlement', 'menu', name, current_state())
        });
      }

      if (name == 'fetid grotto') {
        console.log('Adding the button!')
        let return_button = $('<button>', {
          id: 'settlement_return_button'
        })
        return_button.html('To Showdown: Gorm')
        return_button.tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: '<b style="color:#cc0;">Click</b> to open <b>Showdown: Gorm</b>.',
            position: 'bottom',
            delay: [300, 100],
            fixedWidth: 250,
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
        // return_button.hide()
        $('#container').append(return_button)
        // return_button.delay(1000).fadeIn(2000)
        $('#container').on('click', '#settlement_return_button', function () {
          setTransition('showdown gorm', 'menu', name, current_state())
        });
      }

      if (name == 'final march') {
        console.log('Adding the button!')
        let return_button = $('<button>', {
          id: 'settlement_return_button',
          style: 'left: 54%;'
        })
        return_button.html('To Showdown: Gorm')
        return_button.tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: '<b style="color:#cc0;">Click</b> to open <b>Showdown: Gorm</b>.',
            position: 'bottom',
            delay: [300, 100],
            fixedWidth: 250,
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
        // return_button.hide()
        $('#container').append(return_button)
        // return_button.delay(1000).fadeIn(2000)
        $('#container').on('click', '#settlement_return_button', function () {
          setTransition('showdown gorm', 'menu', name, current_state())
        });

        if (sessionStorage.getItem('back_target') == 'hunt') {
          let hunt_button = $('<button>', {
            id: 'settlement_return_button',
            style: 'left: 22%;'
          })
          hunt_button.html('Back to the Hunt')
          hunt_button.tooltipster({
              contentAsHTML: 'true',
              animation: 'grow',
              content: '<b style="color:#cc0;">Click</b> to return to <b>The Hunt</b>.',
              position: 'bottom',
              delay: [300, 100],
              fixedWidth: 250,
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
          // return_button.hide()
          $('#container').append(hunt_button)
          // return_button.delay(1000).fadeIn(2000)
          $('#container').on('click', '#settlement_return_button', function () {
            setTransition('hunt', 'back', name, current_state())
          });
        }
      }
    }
  }
}
