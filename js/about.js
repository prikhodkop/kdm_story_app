function createAbout(version) {
	$('#container').append($('<div>', {
		id: 'reference-window-background'
	}));

	$('#reference-window-background').hide();
	// $('#container').append($('<img id="about_text">About</div>'));
	$('#container').append($('<img id="about_text" src="images/icons/about.png"/>'));
	$('#about_text').hide();
	$('#about_text').delay(1000).fadeIn(2000);

	$('#container').append($('<div>', {
		id: 'reference-window-back0',
		style: 'left:36%;'
	}));

	$('#reference-window-back0').append($('<img>', {
		id: 'reference-window-back-img',
		src: 'images/reference/reference_back.png'
	}));

	$('#reference-window-back0').append($('<div>', {
		id: 'reference-window-back'
	}));

	$(`<div><h id="about_header">KDM Story app</h>
  <p id="about_p">Created by <a href=https://t.me/prikhodkop style="color:#888800;" target="_blank">@prikhodkop</a></p>
  <p id="about_p">The app is an open non profit project to enchance experience with the game. Every contribution to help is welcome!</p>
  <p id="about_p">App sources are now on github: <a href=https://github.com/prikhodkop/kdm_story_app style="color:#888800;" target="_blank">https://github.com/prikhodkop/kdm_story_app</a>.<br/></p>
  <p id="about_p">If you face any issues, please report it here: <a href=https://kdm-story.site/changelog style="color:#888800;" target="_blank">https://kdm-story.site/changelog</a>.</p>
  <p id="about_p">You may support us on Patreon: <a href=https://www.patreon.com/kdmstoryapp style="color:#888800;" target="_blank">https://www.patreon.com/kdmstoryapp</a><br/></p>
  <p id="about_p">Hope you enjoy the app and please share your feedback and impressions!<br/></p>
  <p id="about_p" style="color:#ddd"><b>Credits:</b></p>
  <p id="about_p">Almost all the art and text presented in the app are the property of Adam Poots. The guy did a great job creating the game, so please pay respect to him and <b>use the app ONLY if you own a copy of the game</b> (no exceptions)! Buy it here: <a href=https://shop.kingdomdeath.com style="color:#888800;" target="_blank">https://shop.kingdomdeath.com</a></p>
  <p id="about_p">Coding: @prikhodkop, Justin Parker (jparkerweb)</p>
  <p id="about_p">Voice acting: @prikhodkop, Katya Prikhodko</p>
  <p id="about_p">QA: Alexander Fedorov, Creepo</p>
  <p id="about_p">Arts, disorders, ability and weapon specialisation cards are created by Fen, please support him at his: </br> <a href=https://www.patreon.com/FenPaints style="color:#888800;" target="_blank">https://www.patreon.com/FenPaints</a> </br>He deservers it!.</p></div>`).appendTo('#reference-window-back')
	$('#reference-window-back0').hide();

	$('#about_text').click(function () {
		if (!$(this).hasClass('active')) {
			if (!$(this).hasClass('hoverd')) {
				$('#reference-window-back0').fadeIn(500);
				$('#reference-window-background').fadeIn(500);
				$(this).toggleClass('active');
				$('#about_text').attr('src', 'images/icons/about_active.png');
			}
		}
	}, function () {
		$(this).delay(500).removeClass('hoverd')
	});

	$('#about_text').click(function () {
		if (!$(this).hasClass('active')) {
			$('#reference-window-back0').fadeIn(500);
			$('#reference-window-background').fadeIn(500);
			$('#about_text').attr('src', 'images/icons/about_active.png');
		} else {
			$('#reference-window-back0').fadeOut(500);
			$('#reference-window-background').fadeOut(500);
			$('#about_text').attr('src', 'images/icons/about.png');
		}

		$(this).toggleClass('active');
	});

	$('#reference-window-background').on('click', function () {
		$('#reference-window-back0').fadeOut(500);
		$('#reference-window-background').fadeOut(500);
		$('#about_text').removeClass('active');
		$('#about_text').attr('src', 'images/icons/about.png');
		$('#esc-menu').fadeOut(100);
		$('#esc-menu').removeClass('active')
	});

	$('#reference-window-back').on('click', function () {
		$('#reference-window-back0').fadeOut(500);
		$('#reference-window-background').fadeOut(500);
		$('#about_text').removeClass('active');
		$('#about_text').attr('src', 'images/icons/about.png');
	});

	$('#about_header').on('click', function () {
		$('#reference-window-back0').fadeOut(500);
		$('#reference-window-background').fadeOut(500);
		$('#about_text').removeClass('active');
		$('#about_text').attr('src', 'images/icons/about.png');
	});

	$('#about_p').on('click', function () {
		$('#reference-window-back0').fadeOut(500);
		$('#reference-window-background').fadeOut(500);
		$('#about_text').removeClass('active');
		$('#about_text').attr('src', 'images/icons/about.png');
	});

  var shell = require('electron').shell;
  //open links externally by default
  $(document).on('click', 'a[href^="http"]', function(event) {
   event.preventDefault();
   shell.openExternal(this.href);
  });
}
