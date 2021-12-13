const shell = require('electron').shell

// const { cdnUrl } = require('./template-cdnurl')
const { pathToAssetL } = require('./assets_loader')

const { getTerms } = require('./../ui/glossary')

module.exports = {
  createAbout,
}

function createAbout (version) {

  var tooltips = getTerms('tooltips')

  $('#container').append($('<div>', {
    id: 'about-window-background',
  }))

  $('#about-window-background').hide()
  // $('#container').append($('<img id="about_text">About</div>'));
  $('#container').append($('<img id="about_text" src="' + pathToAssetL('images/icons/skull.png') + '"/>'))
  $('#about_text').hide()
  $('#about_text').fadeIn(500)

  $('#container').append($('<div>', {
    id: 'about-window-back0',
  }))

  $('#about-window-back0').append($('<img>', {
    id: 'about-window-back-img',
    src: pathToAssetL('images/reference/reference_back.png'),
  }))

  $('#about-window-back0').append($('<div>', {
    id: 'about-window-back',
  }))

  // $('#about-window-back0').append($(`<img id='about_logo' src="`+cdnUrl('images/icons/poots_c.png')+`"/>`))

  $(`<div><h id="about_header">KDM Story app (`+version+`)</h>
  <p id="about_p">The app is an open-source non-profit project to make playing the game more enjoyable. I wish you to enjoy the app and please share your feedback and impressions!<br/></p>
  <p id="about_p"><b style="color:#aaa">Support project on Patreon</b>: <a href=https://www.patreon.com/kdmstoryapp style="color:#888800;" target="_blank">https://www.patreon.com/kdmstoryapp</a><br/></p>
  <p id="about_p">Web site: <a href=https://kdm-story.site style="color:#888800;" target="_blank">https://kdm-story.site</a></p>
  <p id="about_p">Telegram group: <a href=https://t.me/KDM_Story_App style="color:#888800;" target="_blank">https://t.me/KDM_Story_App</a></p>
  <p id="about_p">Report issues <a href=https://github.com/prikhodkop/kdm_story_app/issues style="color:#888800;" target="_blank">here</a></p>
  <p id="about_p" style="color:#ddd"><b>Credits:</b></p>
  <p id="about_p">Almost all the art and text presented in the app are the property of <b id="poots-text">Adam Poots</b>. The guy did a great job creating the game, so please pay respect and <b>use the app ONLY if you own a physical copy of the game</b> (no exceptions!!). Buy it here: <a href=https://shop.kingdomdeath.com style="color:#888800;" target="_blank">https://shop.kingdomdeath.com</a></p>
  <p id="about_p" style="color:#600;font-weight:600;"><u style="color:#900">And to stress that:</u> It's prohibited to use the app if you don't have correspond physical components on the table before you.</p>
  <p id="about_p"><b style="color:#aaa">Development</b>: @prikhodkop, Justin Parker (jparkerweb), Andrew Mackrodt (andrewmackrodt), Slay, jamsethoth.</p>
  <p id="about_p"><b style="color:#aaa">Voice acting</b>: Joseph Anthony (tweet: @JA_VOX).</p>
  <p id="about_p"><b style="color:#aaa">Testing</b>: Alexander Fedorov, Calibretto, Creepo, Cymbaline, Knolan.</p>
  <p id="about_p"><b style="color:#aaa">Polish translation</b>: Artur X, Sebastian Oleksa, Marcin „Szuwar” Niedzielski, Maciej Filipiak, Jarosław Czarniak, Damian Kopczyński, DsPkT.</p>
  <p id="about_p"><b style="color:#aaa">Community Edition, Trial of Champions and Storm Knight</b> and some art on abilities are created by CCG Team, check their other work at: <a href=https://www.patreon.com/ccgteam style="color:#888800;" target="_blank">https://www.patreon.com/ccgteam</a></p>
  <p id="about_p"><b style="color:#aaa">Weapon specialisation cards</b> are created by Fen, check his work at: <a href=https://www.patreon.com/FenPaints style="color:#888800;" target="_blank">https://www.patreon.com/FenPaints</a></p>
  <p id="about_p"><b style="color:#aaa">Some sheets for glossary</b> are taken from bodaster's work on BGG: <a href=https://boardgamegeek.com/filepage/153327/player-aid-booklet style="color:#888800;" target="_blank">Aid Booklet</a></p>
  <p id="about_p"><b style="color:#aaa">Patreon backers</b>: Bekil, Blair, Cymbaline, Frosty, Javier Salmeron, Jesús Martin-Davila, Jordan White, Klaas, Kliff, Luca Falco, Magallian, Matt Er, Michael Jaeger, Mithless_one, Munkhed, Royce, Scavenger, Scott M, Steffen Plath, The Average Gamer, timberwolfl.</p>
  <p id="about_p">If i missed someone or you want to discuss other app related topics, please reach me at <a href=mailto:prikhodkop@gmail.com style="color:#888800;" target="_blank">prikhodkop@gmail.com</a><br/><br/>Enjoy your play!</p></div>`).appendTo('#about-window-back')
  $('#about-window-back0').hide()

  //<p id="about_p">Created by <a href=https://t.me/prikhodkop style="color:#888800;" target="_blank">@prikhodkop</a> (contact me via: <a href=mailto:prikhodkop@gmail.com style="color:#888800;" target="_blank">prikhodkop@gmail.com</a>)</p>



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
      content: tooltips['about'].text,
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
