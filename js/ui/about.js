const shell = require('electron').shell

const { cdnUrl } = require('./template-cdnurl')

module.exports = {
  createAbout,
}

function createAbout (version) {
  $('#container').append($('<div>', {
    id: 'about-window-background',
  }))

  $('#about-window-background').hide()
  // $('#container').append($('<img id="about_text">About</div>'));
  $('#container').append($('<img id="about_text" src="' + cdnUrl('images/icons/skull.png') + '"/>'))
  $('#about_text').hide()
  $('#about_text').fadeIn(500)

  $('#container').append($('<div>', {
    id: 'about-window-back0',
  }))

  $('#about-window-back0').append($('<img>', {
    id: 'about-window-back-img',
    src: cdnUrl('images/reference/reference_back.png'),
  }))

  $('#about-window-back0').append($('<div>', {
    id: 'about-window-back',
  }))

  // $('#about-window-back0').append($(`<img id='about_logo' src="`+cdnUrl('images/icons/poots_c.png')+`"/>`))

  $(`<div><h id="about_header">KDM Story app (`+version+`)</h>
  <p id="about_p">Created by <a href=https://t.me/prikhodkop style="color:#888800;" target="_blank">@prikhodkop</a> (contact me via: <a href=mailto:prikhodkop@gmail.com style="color:#888800;" target="_blank">prikhodkop@gmail.com</a>)</p>
  <p id="about_p">The app is an open-source non-profit project to make playing the game more enjoyable. I wish you to enjoy the app and please share your feedback and impressions!<br/></p>
  <p id="about_p"><b style="color:#aaa">Support project on Patreon</b>: <a href=https://www.patreon.com/kdmstoryapp style="color:#888800;" target="_blank">https://www.patreon.com/kdmstoryapp</a><br/></p>
  <p id="about_p">Web site: <a href=https://kdm-story.site style="color:#888800;" target="_blank">https://kdm-story.site</a></p>
  <p id="about_p">Telegram group: <a href=https://t.me/KDM_Story_App style="color:#888800;" target="_blank">https://t.me/KDM_Story_App</a></p>
  <p id="about_p">GitHub: <a href=https://github.com/prikhodkop/kdm_story_app style="color:#888800;" target="_blank">https://github.com/prikhodkop/kdm_story_app</a><br/></p>
  <p id="about_p">Report issues <a href=https://github.com/prikhodkop/kdm_story_app/issues style="color:#888800;" target="_blank">here</a></p>
  <p id="about_p" style="color:#ddd"><b>Credits:</b></p>
  <p id="about_p">Almost all the art and text presented in the app are the property of <b id="poots-text">Adam Poots</b>. The guy did a great job creating the game, so please pay respect and <b>use the app ONLY if you own a physical copy of the game</b> (no exceptions!!). Buy it here: <a href=https://shop.kingdomdeath.com style="color:#888800;" target="_blank">https://shop.kingdomdeath.com</a></p>
  <p id="about_p" style="color:#600;font-weight:600;"><u style="color:#900">And to stress that:</u> It's prohibited to use the app if you don't have correspond physical components on the table before you.</p>
  <p id="about_p"><b style="color:#aaa">Coding</b>: @prikhodkop, Justin Parker (jparkerweb), Andrew Mackrodt (andrewmackrodt).</p>
  <p id="about_p"><b style="color:#aaa">Voice acting</b>: @prikhodkop, Katya Prikhodko.</p>
  <p id="about_p"><b style="color:#aaa">Testing</b>: Alexander Fedorov, Calibretto, Creepo, Cymbaline, Knolan.</p>
  <p id="about_p">Arts, disorders, ability and weapon specialisation cards are created by Fen, please support him at his: <a href=https://www.patreon.com/FenPaints style="color:#888800;" target="_blank">https://www.patreon.com/FenPaints</a> </br>He deservers it!.</p>
  <p id="about_p"><b style="color:#aaa">Patreon backers</b>: Bekil, Blair, Cymbaline, Frosty, Javier Salmeron, Jesús Martin-Davila, Jordan White, Kliff, Mithless_one, Royce, Scott M, timberwolfl.</p></div>`).appendTo('#about-window-back')
  $('#about-window-back0').hide()

  // $('#about_text').click(function () {
  //   if (!$(this).hasClass('active')) {
  //     if (!$(this).hasClass('hoverd')) {
  //       $('#reference-window-back0').fadeIn(500)
  //       $('#reference-window-background').fadeIn(500)
  //       $(this).toggleClass('active')
  //       $('#about_text').attr('src', cdnUrl('images/icons/about_active.png'))
  //     }
  //   }
  // }, function () {
  //   $(this).delay(500).removeClass('hoverd')
  // })

  $('#about_text').tooltipster({
      contentAsHTML: 'true',
      animation: 'fade',
      content: '<b style="color:#cc0;">Click</b> to show <b>About</b> window.',
      animationDuration: 50,
      position: 'right',
      delay: 0,
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

  $('#about_text').click(function () {
    if (!$(this).hasClass('active')) {
      $('#about-window-back0').fadeIn(500)
      $('#about-window-background').fadeIn(500)
      // $('#about_text').attr('src', cdnUrl('images/icons/s.png'))
    } else {
      $('#about-window-back0').fadeOut(500)
      $('#about-window-background').fadeOut(500)
      // $('#about_text').attr('src', cdnUrl('images/icons/about.png'))
    }

    $(this).toggleClass('active')
  })

  $('#about-window-background').on('click', function () {
    $('#about-window-back0').fadeOut(500)
    $('#about-window-background').fadeOut(500)
    $('#about_text').removeClass('active')
    // $('#about_text').attr('src', cdnUrl('images/icons/about.png'))
    $('#esc-menu').fadeOut(100)
    $('#esc-menu').removeClass('active')
  })

  // $('#reference-window-back').on('click', function () {
  //   $('#about-window-back0').fadeOut(500)
  //   $('#reference-window-background').fadeOut(500)
  //   $('#about_text').removeClass('active')
  //   $('#about_text').attr('src', cdnUrl('images/icons/about.png'))
  // })

  // $('#about_header').on('click', function () {
  //   $('#about-window-back0').fadeOut(500)
  //   $('#reference-window-background').fadeOut(500)
  //   $('#about_text').removeClass('active')
  //   $('#about_text').attr('src', cdnUrl('images/icons/about.png'))
  // })

  // $('#about_p').on('click', function () {
  //   $('#about-window-back0').fadeOut(500)
  //   $('#reference-window-background').fadeOut(500)
  //   $('#about_text').removeClass('active')
  //   $('#about_text').attr('src', cdnUrl('images/icons/about.png'))
  // })

  // open links externally by default
  $('#container').on('click', 'a[href^="http"]', function (event) {
    event.preventDefault()
    shell.openExternal(this.href)
  })
}
