const { app } = require('electron').remote

const { pathToAsset, pathToAssetL, initAssets, preloadImgs  } = require('./../ui/assets_loader')
initAssets()

const { createToc, generate_events_table } = require('./../ui/events')
const { createMenuButton, createReference, createSevereTables, createInnovationsList, createLocationsList, createBookmarksList } = require('./../ui/menu')
const { getSettings, addSettings, onSettingsSaved, initSettings } = require('./../ui/settings')
const { render } = require('./../ui/template-renderer')
const { addTimer, clearTimer } = require('./../ui/timer')
const { setTransition, getBackTarget, getBackBackTarget } = require('./../ui/transition')
const { addInnovation } = require('./../ui/development')
const { getTerms } = require('./../ui/glossary')
// const { eventsSugar } = require('./../ui/events_sugar')

const quaries_events = [
  'showdown gorm',
  'showdown white lion',
  'showdown gigalion',
  'showdown screaming antelope',
  'showdown phoenix',
  'showdown dung beetle knight',
  'showdown sunstalker',
  'showdown dragon king',
  // 'showdown allison the twilight knight',
  'showdown lion god',
  'showdown flower knight',
  'showdown spidicules',
  'aftermath',
  'storm break',
  'showdown the hand',
  'showdown butcher',
  'showdown kings man',
  'showdown kings man',
  'kings curse',
  'the knowledge worm',
  'intermission',
  'taken'
]

const special_events = [
  'showdown manhunter',
  'showdown lion knight',
  // 'kings curse',

  // 'an uninvited guest',

  // 'lottery',
]

module.exports = class ImageScene {
  render () {


    $(window).on('load', function(){
      $('#loading').fadeOut(200)
    });
    $(window).on('beforeload', function(){
      $('#loading').fadeIn(300)
    });

    // UNDERSTAND WHAT EVENT TO SHOW
    // #############
    var myself = sessionStorage.getItem('target')
    document.title = myself

    // preloadImgs([
    //   'images/story events/backs/'+myself+'.jpg',
    //   'images/story events/content/'+myself+'.jpg',
    //
    // ], 'icons')

    if ($('#back').attr('src') == '#') {
        $('#back').attr('src', pathToAssetL('images/back.jpg'))
    }
    $('#container').hide()
    $('#container').fadeIn(500)

    document.getElementById('container').innerHTML = render('image')

    onSettingsSaved(() => {
      if ($("#menu_table1").length) {
        window.location.reload()
      }
      setTransition(document.title, 'back', getBackTarget(), current_state())
    })

    console.log(sessionStorage)


    // #############

    console.log(myself)

    initSettings();

    var settings = getSettings()

    var events_table = generate_events_table()
    var tooltips = getTerms('tooltips')

    var events_sequences = {
      'places, everyone!': ['showdown lion knight', tooltips['start showdown'].text],
      'the hanged man': ['showdown manhunter', tooltips['start showdown'].text],
      'showdown storm knight lv.1-2': ['aftermath', tooltips['to event_text'].text.replace('$E$', events_table['aftermath'].label),],
      'showdown storm knight lv.3': ['storm break', tooltips['to event_text'].text.replace('$E$', events_table['storm break'].label),],
            // 'the duel': ['showdown allison the twilight knight', tooltips['to event_text'].text.replace('$E$', events_table['showdown allison the twilight knight'].label),],
    }

    $('body').css('font-size', parseInt(settings['fontSize'].replace('px',''))/10+'vmin')



    let img_path = 'images/story events/content/' + myself + '.jpg'
    let img_back = 'images/story events/backs/' + myself + '.jpg'

    if ((myself == 'white speaker') && (settings['whiteboxes']['white speaker'] == 'Enabled')) {
      img_path = img_path.replace('.jpg', '_wb.jpg')
    } else if ((myself == 'hooded knight') && (settings['whiteboxes']['allison the twilight knight'] == 'Enabled')) {
       img_path = img_path.replace('.jpg', '_wb.jpg')
    }

    if ((myself == 'hooded knight') && (settings['expansions']['allison ccg'] == 'All content')) {
      img_path = 'images/story events/content/hooded knight_allison.jpg'
    }

    if ((myself == 'showdown watcher') && (settings['expansions']['allison ccg'] == 'All content')) {
      img_path = 'images/story events/content/showdown watcher_allison.jpg'
    }

    // if ((myself == 'intimacy') && (settings['campaign'] == 'Stars')) {
    //   img_back = img_back.replace('.jpg', '_stars.jpg')
    //   img_path = img_path.replace('.jpg', '_stars.jpg')
    // }
    //
    // if ((myself == 'intimacy') && (settings['campaign'] == 'Sun')) {
    //   img_back = img_back.replace('.jpg', '_sun.jpg')
    //   img_path = img_path.replace('.jpg', '_sun.jpg')
    // }


    $('#img_back').attr('src', pathToAssetL(img_back))
    $('#img').attr('src', pathToAssetL(img_path))


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

  // $('#img_back').on('load', function(){
    var start_delay = 1000 // delay before speech playing starts
    var music_volume = 0.4 // music volume
    var speech
    var mute_narration = false
    var subtitles = false
    if ((settings['subtitles'] == 'On') && (myself in getTerms('subtitle'))) {
      subtitles = true
    }
    if (!(events_table[myself].speech == '#')) {
      speech = new Howl({
        src: [pathToAssetL(events_table[myself].speech)],
        volume: 1.0,
      })

      if ((events_table[myself].speech == '') || (settings['narration'] == 'Off') || (events_table[myself].speech == '#')) {
        mute_narration = true
      };

    } else {
      speech = new Howl({
        src: [pathToAssetL(events_table['hunt'].speech)],
        volume: 1.0,
      })

      mute_narration = true

    }

    var music = new Howl({
      src: [pathToAssetL(events_table[myself].music)],
      loop: true,
      volume: music_volume,
    })

    console.log('Music to play ' + events_table[myself].music)
    console.log('Speech to play ' + events_table[myself].speech)

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

    var action



      if ((transition == 'back') && !(state == null) && !(state == 'undefined')) {
        console.log('State loaded successfully!')
        state = JSON.parse(state)
        console.log(state)

        back_target = state.back_target
        action = state.action
        anew = false


        $('#img_back').on('load', function(){
          $('#img_back').delay(100).fadeIn(500)
        })
          if (true) {
            $('#label_text').fadeIn(2000)
            $('#img').delay(1000).fadeIn(1000)

            if (!menus_appeared) {
              menus_appeared = true
              addTimer(function () {
                createSevereTables()
                createReference()
                createInnovationsList()
                createLocationsList()
                createBookmarksList()
                eventsSugar(myself)
              }, 1000)
            };

            if ((settings['music'] == 'On')&&(!music.playing())) {
              music.volume(0.0)
              music.play();
              music.fade(0.0, music_volume, 500)
            }
          }

      } else {
        console.log('No initialized state!')
        action = 'false' // flag to show if user clicked on #img_back
          $('#img_back').on('load', function(){
            if (myself == 'first story') {
              $('#img_back').delay(3000).fadeIn(1000)
            } else {
              $('#img_back').fadeIn(1000)
            }
          })

          $('#label_text').delay(1000).fadeIn(1000)

          tippy('#label_text', {
            placement: 'bottom-start',
            content: tooltips['label_click'].text,
            duration: 50,
            delay: [600, 100],
            animation: 'shift-away-subtle',
            followCursor: true,
            theme: 'kdm',
          });

          if (subtitles)  {
            $('.srt').hide()
            tippy('.srt', {
              placement: 'bottom-start',
              content: tooltips['subtitles_click'].text,
              duration: 50,
              delay: [600, 100],
              animation: 'shift-away-subtle',
              followCursor: true,
              theme: 'kdm',
            });
            $('.srt').html(getTerms('subtitle')[myself].text)
            $('.srt').css({'font-size': '2em'})
            $('.srt').delay(1500).fadeIn(1000)
          }

          console.log('Muted naration: '+ mute_narration)

          // if (mute_narration) {
          //   start_anew();
          // } else {
          //
          // };
      };

      speech.on('load', function () {
        start_anew();
      })

    // })

    if ((back_target == null) || (back_target == 'null') || (back_target == 'undefined')) {
      $('#back_button').hide()
    } else {
      $('#back_button').hide()
      $('#back_button').html('<svg class="back_button__icon" enable-background="new 0 0 492 492" version="1.1" viewBox="0 0 492 492" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m464.34 207.42l0.768 0.168h-329.22l103.5-103.72c5.068-5.064 7.848-11.924 7.848-19.124s-2.78-14.012-7.848-19.088l-16.104-16.112c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844l-177.41 177.4c-5.084 5.084-7.864 11.856-7.844 19.06-0.02 7.244 2.76 14.02 7.844 19.096l177.41 177.41c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652l-104.66-104.3h329.99c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"></path></svg><span class="back_button__text">' + events_table[back_target].label + '</span>')
      $('#back_button').delay(500).fadeIn(500)
    }

    // SET UP EVENT START IF IT HAS NO INITIALIZED STATE
    // #############




    function start_anew() {
      console.log('I started anew!!')
      console.log(action)
      if (mute_narration && !subtitles) {
        duration = 2000
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
        duration = 4000
        // delay = parseInt(events_table[myself].music_delay, 10)
        $('.srt').html(tooltips['first_story_event'].text)
        // $('.srt').html('Open rule book on page 22 and follow the instructions.')

        $('.srt').fadeIn(1000)
        addTimer(function () { $('.srt').fadeOut(1000) }, 2000)
      }

      console.log('Speech ' + events_table[myself].speech)
      console.log('Speech duration ' + duration)
      console.log('Music ' + events_table[myself].music)
      console.log('Music delay ' + events_table[myself].music_delay)

      if (delay < 0) {
        delay = 100
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
          $('.srt').fadeOut(500)

          action = 'true'
          if (!menus_appeared) {
            menus_appeared = true
            addTimer(function () {
              createSevereTables()
              createReference()
              createInnovationsList()
              createLocationsList()
              createBookmarksList()
              eventsSugar(myself)
            }, 1000);
          }
        }
      }, start_delay + duration)

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

      $("#label_text").fadeOut(200);
      if (subtitles)  {
        $('.srt').fadeOut(200)
      }
      $('#img').fadeIn(400)
      $('.settlement_return_button').fadeIn(500)
      $('.event_tooltip').fadeIn(500)

      if ((!menus_appeared) && anew) {
        menus_appeared = true
        addTimer(function () {
          createSevereTables()
          createReference()
          createInnovationsList()
          createLocationsList()
          createBookmarksList()
          eventsSugar(myself)
        }, 500);
      };

      // if (speech.playing()) {
        speech.fade(1.0, 0.0, 1000)
        speech.pause()
      // }
      if ((settings['music'] == 'On')&&(!music.playing())) {
        music.play();
      }
    })

    $('.srt').click(function () {
      if ($('.srt').hasClass('hidden')) {
        $('.srt').animate({opacity: 1.0}, 300)
      } else {
        $('.srt').animate({opacity: 0.0}, 300)
      }

      $('.srt').toggleClass('hidden')
    })

    $('#label_text').click(function () {
      if ($('#label_text').hasClass('hidden')) {
        $('#label_text').animate({opacity: 1.0}, 300)
      } else {
        $('#label_text').animate({opacity: 0.05}, 300)
      }

      $('#label_text').toggleClass('hidden')
    })

    $('#img').click(function () {
      $('#label_text').css({'opacity':'1.0'})
      $('#label_text').delay(300).fadeIn(400)
      if (subtitles)  {
        $('.srt').css({'opacity':'1.0'})
        $('.srt').delay(800).fadeIn(400)
      }
      $('#img').fadeOut(300)
      $('.settlement_return_button').fadeOut(300)
      $('.event_tooltip').fadeOut(300)
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

      let settings = getSettings()

      if (quaries_events.indexOf(name) >= 0) {
        console.log('Adding the button!')
        let return_button = $('<button>', {
          // id: 'settlement_return_button',
          class: 'settlement_return_button to_settlement hoverable'
        })
        return_button.html(tooltips['return_button_settlement_text'].text)
        return_button.tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: tooltips['return_button_settlement_new'].text, //'<b style="color:#cc0;">Click</b> to return to <b>Settlement</b><br/><br/>This will start new <b>Lantern Year</b>.',
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
        $('#container').on('click', '.settlement_return_button.to_settlement', function () {
          setTransition('settlement', 'menu', name, current_state())
        });
      }

      if (name.includes('showdown allison the twilight knight')) {
        let return_button = $('<button>', {
          // id: 'settlement_return_button',
          class: 'settlement_return_button to_settlement hoverable'
        })
        return_button.html(tooltips['unfinished_business_text'].text)
        return_button.tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: tooltips['unfinished_business_tooltip'].text, //'<b style="color:#cc0;">Click</b> to return to <b>Settlement</b><br/><br/>This will start new <b>Lantern Year</b>.',
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
        $('#container').on('click', '.settlement_return_button.to_settlement', function () {
          setTransition('settlement', 'menu', name, current_state())
        });
      }

      if ((special_events.indexOf(name) >= 0) && !(sessionStorage.getItem("settlement") === null)) {
        console.log('Adding the button!')
        let return_button = $('<button>', {
          // id: 'settlement_return_button',
          class: 'settlement_return_button to_settlement hoverable'
        })
        return_button.html(tooltips['return_button_settlement_text'].text)
        return_button.tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: tooltips['return_button_settlement_back'].text,
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
        $('#container').on('click', '.settlement_return_button.to_settlement', function () {
          setTransition('settlement', 'back', name, current_state())
        });
      }

      if (name in events_sequences) {
        console.log('Adding the button!')
        let return_button = $('<button>', {
          // id: 'settlement_return_button',
          class: 'settlement_return_button to_settlement hoverable'
        })
        return_button.html(events_sequences[name][1])
        return_button.tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: tooltips['event_transition'].text.replace('$L$', events_table[events_sequences[name][0]].label),
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
        $('#container').on('click', '.settlement_return_button.to_settlement', function () {
          setTransition(events_sequences[name][0], 'menu', name, current_state())
        });
      }

      if (['foundlings', 'returning survivors', 'the pool and the sun'].indexOf(name) >= 0) {
        console.log('Adding the button!')
        let return_button = $('<button>', {
          // id: 'settlement_return_button',
          class: 'settlement_return_button to_settlement hoverable'
        })
        let content = ''
        if (name == 'foundlings') {
          content = tooltips['foundlings_transition'].text
        }
        if (name == 'returning survivors') {
          content = tooltips['returning survivors_transition'].text
        }
        if (name == 'the pool and the sun') {
          content = tooltips['the pool and the sun_transition'].text
        }
        return_button.html(tooltips['to event_text'].text.replace('$E$', events_table['settlement'].label))
        return_button.tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: content,
            position: 'bottom',
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
        // return_button.hide()
        $('#container').append(return_button)
        // return_button.delay(1000).fadeIn(2000)
        $('#container').on('click', '.settlement_return_button.to_settlement', function () {
          if (name == 'foundlings') {
            addInnovation('Dragon Speech')
          }
          if (name == 'returning survivors') {
            addInnovation('Language')
          }
          if (name == 'the pool and the sun') {
            addInnovation('Sun Language')
          }
          setTransition('settlement', 'menu', name, current_state())
        });
      }

      if (name == 'first story') {
        console.log('Adding the button!')
        let return_button = $('<button>', {
          // id: 'settlement_return_button',
          class: 'settlement_return_button to_settlement hoverable'
        })

        let content = ''
        let target = ''
        if (settings['campaign'] == 'Lantern') {
          content = tooltips['first story_lantern'].text
          target = 'returning survivors'
        }
        if (settings['campaign'] == 'Stars') {
          content = tooltips['first story_stars'].text
          target = 'foundlings'
        }

        if (settings['campaign'] == 'Sun') {
          content = tooltips['first story_sun'].text
          target = 'the pool and the sun'
        }

        return_button.html(tooltips['first story_text'].text)
        return_button.tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: content,
            position: 'bottom',
            delay: [300, 100],
            maxWidth: 250,
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
        $('#container').on('click', '.settlement_return_button.to_settlement', function () {
          setTransition(target, 'menu', name, current_state())
        });
      }

      if (name == 'showdown gorm') {
        console.log('Adding the button!')
        let grotto_button = $('<button>', {
          // id: 'settlement_return_button',
          class: 'settlement_return_button to_grotto hoverable2',
          // style: 'left: 50%; top: 70.5%; width: 8%;cursor:default;'
        })

        $('#container').append($('<img>',{
          src: pathToAssetL('images/hunt/blind_exit.png'),
          id: 'blind_exit_tooltip'
        }))
        $('#blind_exit_tooltip').hide();

        $('#container').on({
          mouseenter: function () {
            console.log('enter')
            window.digested_timer = addTimer(function(){
              $('#blind_exit_tooltip').show("slide", { direction: "right" }, 200);
              $('#img').css('filter', 'brightness(70%)')
            }, 300)
          },
          mouseleave: function () {
            console.log('leave')
            clearTimer(window.digested_timer)
            $('#blind_exit_tooltip').hide("slide", { direction: "right" }, 100);
            $('#img').css('filter', 'brightness(100%)')
          },
        }, '.settlement_return_button.to_grotto')

        grotto_button.text(tooltips['blind_exit_text'].text)

        grotto_button.tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: tooltips['blind_exit'].text,
            position: 'left',
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
        $('#container').append(grotto_button)
        // return_button.delay(1000).fadeIn(2000)
        // $('#container').on('click', '#settlement_return_button.to_grotto', function () {
        //   setTransition('fetid grotto', 'back', name, current_state())
        // });
      }

      if (name == 'fetid grotto') {
        console.log('Adding the button!')
        let return_button = $('<button>', {
          // id: 'settlement_return_button',
          class: 'settlement_return_button hoverable'
        })
        return_button.html(tooltips['to event_text'].text.replace('$E$', events_table['showdown gorm'].label))
        return_button.tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: tooltips['to event'].text.replace('$E$', events_table['showdown gorm'].label),
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
        $('#container').on('click', '.settlement_return_button', function () {
          setTransition('showdown gorm', 'menu', name, current_state())
        });
      }

      if (name == 'final march') {
        console.log('Adding the button!')
        let return_button = $('<button>', {
          // id: 'settlement_return_button',
          class: 'settlement_return_button to_showdown hoverable',
          // style: 'left: 54%;'
        })
        return_button.html(tooltips['to event_text'].text.replace('$E$', events_table['showdown gorm'].label))
        return_button.tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: tooltips['to event'].text.replace('$E$', events_table['showdown gorm'].label),
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
        $('#container').on('click', '.settlement_return_button.to_showdown', function () {
          setTransition('showdown gorm', 'menu', name, current_state())
        });

        if (sessionStorage.getItem('back_target') == 'hunt') {
          let hunt_button = $('<button>', {
            // id: 'settlement_return_button',
            class: 'settlement_return_button to_hunt hoverable',
            // style: 'left: 22%;'
          })
          hunt_button.html(tooltips['back event_text'].text.replace('$E$', events_table['hunt'].label))
          hunt_button.tooltipster({
              contentAsHTML: 'true',
              animation: 'grow',
              content: tooltips['back event'].text.replace('$E$', events_table['hunt'].label),
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
          $('#container').on('click', '.settlement_return_button.to_hunt', function () {
            setTransition('hunt', 'back', name, current_state())
          });
        }
      }

      if (['overwhelming darkness', 'herb gathering', 'mineral gathering', 'sky fishing'].includes(name)) {
        if (sessionStorage.getItem('back_target') == 'hunt') {
          let hunt_button = $('<button>', {
            // id: 'settlement_return_button',
            class: 'settlement_return_button hoverable',
            // style: 'left: 22%;'
          })
          hunt_button.html(tooltips['back event_text'].text.replace('$E$', events_table['hunt'].label))
          hunt_button.tooltipster({
              contentAsHTML: 'true',
              animation: 'grow',
              content: tooltips['back event'].text.replace('$E$', events_table['hunt'].label),
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
          $('#container').on('click', '.settlement_return_button', function () {
            setTransition('hunt', 'back', name, current_state())
          });
        }
      }

      if ((name == 'white speaker') && (settings['whiteboxes']['white speaker'] == 'Enabled')) {
        let tooltip = $('<div>', {
          // id: 'settlement_return_button',
          class: 'event_tooltip',
          style: 'left: 60%; top: 17%; width: 30%;height:33%;' //background:#cc0;opacity:0.5;
        })

        $('#container').append($('<img>',{
          src: pathToAssetL('images/story events/content/white speaker_gear_tooltip.png'),
          class: 'gear_tooltip_image',
          style: 'top:50.1%; left: 55%; width: 30%;'
        }))
        $('.gear_tooltip_image').hide();

        $('#container').on({
          mouseenter: function () {
            console.log('enter')
            window.digested_timer = addTimer(function(){
              $('.gear_tooltip_image').show("slide", { direction: "up" }, 200);
              // $('#img').css('filter', 'brightness(70%)')
            }, 300)
          },
          mouseleave: function () {
            console.log('leave')
            clearTimer(window.digested_timer)
            $('.gear_tooltip_image').hide("slide", { direction: "up" }, 100);
            // $('#img').css('filter', 'brightness(100%)')
          },
        }, '.event_tooltip')

        $('#container').append(tooltip)
      }
      ///////////////////////
      let principles = {
        'principle new life': ['Survival of the Fittest', 'Protect the Young', 51],
        'principle death': ['Cannibalize', 'Graves', 51],
        'principle society': ['Collective Toil', 'Accept Darkness', 56],
        'principle conviction': ['Barbaric', 'Romantic', 56],
      }

      if (name  in principles) {
        principles_tooltips(principles[name])
      }

      function principles_tooltips(data) {
        let tooltip = $('<div>', {
          // id: 'settlement_return_button',
          class: 'event_tooltip',
          style: 'left: 15%; top: '+data[2]+'%; width: 70%;height:48%;' //background:#cc0;opacity:0.5;
        })

        $('#container').append($('<img>',{
          src: pathToAssetL('images/reference/Innovations/'+data[0]+'.jpg'),
          class: 'gear_tooltip_image left',
          style: 'bottom:'+(100-data[2]+0.1)+'%; left: 24.6%; width: 15%;'
        }))
        $('#container').append($('<img>',{
          src: pathToAssetL('images/reference/Innovations/'+data[1]+'.jpg'),
          class: 'gear_tooltip_image right',
          style: 'bottom:'+(100-data[2]+0.1)+'%; left: 58.5%; width: 15%;'
        }))
        $('.gear_tooltip_image').hide();

        $('#container').on({
          mouseenter: function () {
            console.log('enter')
            window.digested_timer = addTimer(function(){
              $('.gear_tooltip_image').show("slide", { direction: "down" }, 200);
              // $('#img').css('filter', 'brightness(70%)')
            }, 300)
          },
          mouseleave: function () {
            console.log('leave')
            clearTimer(window.digested_timer)
            $('.gear_tooltip_image').hide("slide", { direction: "down" }, 100);
            // $('#img').css('filter', 'brightness(100%)')
          },
        }, '.event_tooltip')

        $('#container').append(tooltip)
      }
    }
  }
}
