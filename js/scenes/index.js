const { app } = require('electron').remote

const { createAbout } = require('./../ui/about')
const { createToc } = require('./../ui/events')
const { readFile } = require('./../ui/files')
const { createMenuButton } = require('./../ui/menu')
const { getSettings, addSettings } = require('./../ui/settings')
const { setTransition } = require('./../ui/transition')

const htmlTemplate = readFile('./partials/index.html')

module.exports = class IndexScene {
  render () {
    document.getElementById('container').innerHTML = htmlTemplate

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
      src: ['audio/theme.mp3'],
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

    $('#label_text').delay(2000).fadeIn(8000)
    $('.button_video').delay(3000).fadeIn(3000)

    createMenuButton()
    createToc()
    createAbout(version)
    addSettings(settings)

    // console.log(subtitles['intro'][lang])
    if (settings['subtitles'] == 'On') {
      configureSubtitle(readFile(app.getAppPath() + '/video/srt/' + lang + '/intro.srt'))
    }

    if (settings['narration'] == 'Off') {
      $('#video').prop('muted', true)
    }

    if (settings['music'] == 'Off') {
      music.mute(true)
    }

    // $("#mute.button").click(function () {
    //   console.log("Here1!");
    //   if (!$(this).hasClass('active')) {
    //     // $("#open_audio").get(0).pause();
    //     music.mute(true)
    //     $("video").prop('muted', true)
    //     sessionStorage.setItem("Mute", "On");
    //     // $("#speech").get(0).pause();
    //     console.log("Here2!");
    //   } else {
    //     // $("#open_audio").get(0).play();
    //     music.mute(false)
    //     $("video").prop('muted', false)
    //     sessionStorage.setItem("Mute", "Off");
    //     // $("#speech").get(0).play();
    //   };
    //
    //   $(this).toggleClass('active');
    //   console.log("Here3!");
    // });

    $('.button_video').click(function () {
      if (!$(this).hasClass('active')) {
        // $("#open_audio").get(0).pause();
        music.stop()

        $('#video').get(0).currentTime = 0
        // $("#open_audio").get(0).currentTime = 0
        $('#video').show()
        $('#video').get(0).play()
        // $(".button").hide()
        $('.button_video').hide()
        $('#settings').hide()
        $('#label_text').hide()

        console.log('Here2!')
      } else {
        // $("#open_audio").currentTime = 0
        setTimeout(function () {
          music.play()
        }, 500)

        $('#video').get(0).pause()
        $('#video').hide()
        // $(".button").show();
        $('#settings').show()
        $('#label_text').fadeIn(8000)
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
      $('.button_video').delay(1000).fadeIn(6000)
      $('#label_text').delay(2000).fadeIn(8000)

      clearSubtitles()
      // $("#video").attr('currentTime', 0);
      document.getElementById('video').currentTime = 0
      // setTimeout(function(){
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
      $('.button_video').fadeIn(2000)
      $('#label_text').delay(2000).fadeIn(4000)

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
  }
}
