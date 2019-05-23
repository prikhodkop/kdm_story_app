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

	$('<div><h id="about_header">KDM Story app v.' + version + '</h><p id="about_p">Created by @prikhodkop</p><p id="about_p">Almost all the art and text presented in the app are the property of Adam Poots. The guy did a great job creating the game, so please pay respect to him and <b>use the app ONLY if you own a copy of the game</b> (no exceptions)!</p><p id="about_p">The app also uses some of content created by Fen, please support him at his: </br> https://www.patreon.com/FenPaints </br>He deservers it!.</p><p id="about_p">Hope you enjoy the app and please send your feedback to me!</p></div>').appendTo('#reference-window-back')
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
}
