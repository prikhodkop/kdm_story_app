const electron = require('electron')
const { createToc, events_table } = require('./../ui/events')
const { readFile } = require('./../ui/files')
const { createMenuButton, createReference, createSevereTables } = require('./../ui/menu')
const { getSettings, addSettings } = require('./../ui/settings')
const { setTransition, getBackTarget, getBackBackTarget } = require('./../ui/transition')

module.exports = class VideoScene {
  constructor () {
    console.log(sessionStorage)

    // UNDERSTAND WHAT EVENT TO SHOW
    // #############
    var myself = sessionStorage.getItem('target')
    document.title = myself
    // #############

    window.reload = false

    var settings = getSettings()
    sessionStorage.setItem('settings', JSON.stringify(settings))

    // $("#label_text").hide();
    $('#menu').hide()
    $('#img').hide()
    $('#video').hide()
    $('#video').attr('src', 'video/' + myself + '.mp4')
    $('#img').attr('src', 'images/' + myself + '/img.jpg')

    $(window).load(function () {
      let screenElectron = electron.screen
      let mainScreen = screenElectron.getPrimaryDisplay()
      let dimensions = mainScreen.size
      let hWide2 = ($('#img').width() / 2) // half the image's width

      console.log(hWide2)

      let hTall2 = ($('#img').height()) // half the image's height, etc.
      hWide2 = '-' + Math.floor(0.98 * (dimensions.height / hTall2) * hWide2 / dimensions.width * 100).toString() + '%'

      console.log(hWide2)

      $('#img').css({
        'margin-left': hWide2,
        // "margin-top" : hTall
      })
    })

    var screenElectron = electron.screen
    var mainScreen = screenElectron.getPrimaryDisplay()
    var dimensions = mainScreen.size

    console.log(dimensions.width + 'x' + dimensions.height)

    $('#video').attr('width', '100%')
    $('#video').attr('height', '100%')

    var start_delay = 1000 // delay before speech playing starts
    var music_volume = 0.8 // music volume

    var music = new Howl({
      src: [events_table[myself].music],
      // autoplay: true,
      loop: true,
      volume: music_volume,
    })

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

    if (settings['narration'] == 'Off') {
      $('#video').prop('muted', true)
    }
    if (settings['music'] == 'Off') {
      music.mute(true)
    }

    if ((transition == 'back') && !(state == null)) {
      console.log('State loaded successfully!')

      state = JSON.parse(state)

      console.log(state)

      back_target = state.back_target
      var action = state.action

      // if (state.muted) {
      //   music.mute(true);
      //   // speech.mute(true);
      //   $("#mute.button").toggleClass('active');
      // }

      if (!state.img_hidden) {
        music.seek(state.music_position)

        if (state.music_playing) {
          music.volume(0.0)
          music.play()
          music.fade(0.0, music_volume, 500)
        }

        anew = false
      }
    } else {
      console.log('No initialized state!')
    };

    if (anew) {
      $('#video').fadeIn(4000)
      $('#video').delay(4000).get(0).play()
    } else {
      $('#img').fadeIn(2000)

      createSevereTables()
      createReference()

      $('#video').hide()
      $('#video').get(0).pause()

      music.play()
    }

    if ((back_target == null) || (back_target == 'null') || (back_target == 'undefined')) {
      $('#back_button').hide()
    } else {
      $('#back_button').hide()
      $('#back_button').html('<svg class="back_button__icon" enable-background="new 0 0 492 492" version="1.1" viewBox="0 0 492 492" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m464.34 207.42l0.768 0.168h-329.22l103.5-103.72c5.068-5.064 7.848-11.924 7.848-19.124s-2.78-14.012-7.848-19.088l-16.104-16.112c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844l-177.41 177.4c-5.084 5.084-7.864 11.856-7.844 19.06-0.02 7.244 2.76 14.02 7.844 19.096l177.41 177.41c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652l-104.66-104.3h329.99c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"></path></svg><span class="back_button__text">' + events_table[back_target].label + '</span>')
      $('#back_button').delay(500).fadeIn(1000)
    }

    $('#video').on('ended', function () {
      $('#img').fadeIn(2000)
      $('#video').fadeOut(2000)

      clearSubtitles()
      music.play()
      createSevereTables()
      createReference()
    })

    $('#video').on('click', function () {
      // this.currentTime = this.duration;
      this.pause()
      music.play()

      $('#img').fadeIn(2000)
      $('#video').hide()

      clearSubtitles()
      document.getElementById('video').currentTime = 0
      createSevereTables()
      createReference()
    })

    createMenuButton()
    createToc()
    if (settings['subtitles'] == 'On') {
      configureSubtitle(readFile('./video/srt/' + settings['language'] + '/' + myself + '.srt'))
    };
    addSettings(settings)

    // $("#mute.button").click(function () {
    //   if (!$(this).hasClass('active')) {
    //     music.mute(true);
    //
    //     $("#video").prop('muted', true)
    //
    //     sessionStorage.setItem("Mute", "On");
    //     // speech.mute(true);
    //   } else {
    //     // speech.mute(false);
    //     music.mute(false);
    //
    //     $("#video").prop('muted', false)
    //
    //     sessionStorage.setItem("Mute", "Off");
    //   };
    //   $(this).toggleClass('active');
    // });

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

    setInterval(function () {
      if (window.reload) {
        setTransition(document.title, 'back', getBackTarget(), current_state())
      }
    }, 100)

    function isHidden (el) {
      var style = window.getComputedStyle(el)
      return (style.display === 'none')
    }

    function current_state () {
      var current_state = new Object()

      current_state.img_hidden = isHidden(document.getElementById('img'))
      current_state.music_playing = music.playing()

      if (music.playing()) {
        current_state.music_position = music.seek()
      } else {
        current_state.music_position = -1
      }

      // current_state.muted = $("#mute.button").hasClass('active');
      current_state.back_target = sessionStorage.getItem('back_target')
      sessionStorage.setItem(document.title, JSON.stringify(current_state))

      return JSON.stringify(current_state)
    }
  }
}
