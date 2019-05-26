function createMenuButton() {
	// <a href="javascript:void(0)" id="menu-toggle-wrapper">
	//   <div id="menu-toggle"></div>
	// </a>
	//
	// <div id="menu" style="opacity:.9;">
	//   <img id="menu_img" src="images/back.jpg"/>
	// </div>

	document.onkeydown = function (evt) {
		evt = evt || window.event;
		var isEscape = false;
		if ("key" in evt) {
			isEscape = (evt.key === "Escape" || evt.key === "Esc");
		} else {
			isEscape = (evt.keyCode === 27);
		}
		if (isEscape) {
			const remote = require('electron').remote
			remote.getCurrentWindow().close()
		}
	};

	$('#container').append($('<a>', {
		href: 'javascript:void(0)',
		id: 'menu-toggle-wrapper'
	}));

	$('#container').append($('<div>', {
		style: 'opacity:.9;',
		id: 'menu'
	}));

	$('#menu-toggle-wrapper').append($('<div>', {
		id: 'menu-toggle'
	}));

	$('#menu').append($('<img>', {
		id: 'menu_img',
		src: 'images/back.jpg'
	}));

	$('#menu').append($('<div>', {
		id: 'menu-back'
	}));

	$('#menu').hide()

	$('#menu-toggle-wrapper').hover(function () {
		if (!$(this).hasClass('active')) {
			if (!$(this).hasClass('hoverd')) {
				$("#menu").fadeIn(500);
				$(this).toggleClass('active');
			}
		}
	}, function () {
		$(this).delay(500).removeClass('hoverd')
	});

	$('#menu-toggle-wrapper').click(function () {
		if (!$(this).hasClass('active')) {
			$("#menu").fadeIn(500);
		} else {
			$("#menu").hide();
		}
		$(this).toggleClass('active');
	});
}

function createSevereTables() {
	$('#container').append($('<img>', {
		id: 'severe-table',
		src: ''
	}));

	addLocationTable('brain', '11%');
	addLocationTable('head', '18%');
	addLocationTable('arms', '25%');
	addLocationTable('body', '32%');
	addLocationTable('waist', '39%');
	addLocationTable('legs', '46%');

	// $('#container').append($('<div>',{id:'severe-background'}));

	// $(document).on(
	// {
	//   mouseleave: function() {
	//       $(this).removeClass('active');
	//       hideLocationTable();
	//   },
	// },
	// 'aaa')​
}

function addLocationTable(location, top) {
	$('#container').append($('<img>', {
		class: location,
		id: 'severe',
		src: 'images/icons/' + location + '.png',
		style: 'top:' + top + ';'
	}))

	$('#container').append($('<img>', {
		class: location,
		id: 'severe-table',
		src: 'images/severe injuries/' + location + '.png'
	}))

	$('#severe.' + location).hide();
	$('#severe-table.' + location).hide();
	$('#severe.' + location).delay(1000).fadeIn(2000);

	$('#severe.' + location).hover(function () {
		if (!$(this).hasClass('active')) {
			if (!$(this).hasClass('hoverd')) {
				// $("#menu").fadeIn(500);
				showLocationTable($(this).attr('class'))
				$(this).toggleClass('active');
			}
		}
	}, function () {
		$(this).delay(500).removeClass('hoverd')
	});

	$('#severe.' + location).click(function () {
		if (!$(this).hasClass('active')) {
			showLocationTable($(this).attr('class'))
		} else {
			hideLocationTable()
		}
		$(this).toggleClass('active');
	});

	$(document).on({
		mouseenter: function () {
			$("#divtwo").css("background-color", "yellow");
		},
		mouseleave: function () {
			$(this).removeClass('active');
			hideLocationTable($(this).attr('class'));
		}
	}, "#severe");
}

function showLocationTable(location) {
	// $('#severe-background').fadeIn(500);
	// $('#severe-table').hide();
	// $('#severe-table').attr('src', 'images/severe injuries/'+location+'.png');
	$('#severe-table.' + location).delay(100).fadeIn(200);
	// $('#severe-table').slideLeft(1000);
}

function hideLocationTable(location) {
	$('#severe-table.' + location).fadeOut(100);
	// $('#severe-background').delay(500).fadeOut(00);
	// $('#severe-table').slideRight(1000);
}

function createReference() {
	let settings = JSON.parse(sessionStorage.getItem("settings"));

	$('#container').append($('<div>', {
		id: 'reference-window-background'
	}));

	$('#reference-window-background').hide();

	$('#container').append($('<img>', {
		id: 'reference',
		src: 'images/icons/reference.png'
	}));

	$('#reference').hide();
	$('#reference').delay(1000).fadeIn(2000);

	$('#container').append($('<div>', {
		id: 'reference-window-back0'
	}));

	$('#reference-window-back0').append($('<img>', {
		id: 'reference-window-back-img',
		src: 'images/reference/reference_back.png'
	}));

	// $('#reference-window-back').append('<label for="reference-window">Terms:</label>')
	$('#reference-window-back0').append('<select id="reference-window" class="reference-window" placeholder="Type term..."></select>')

	$('#reference-window-back0').append($('<div>', {
		id: 'reference-window-back'
	}));

	if (settings.onscreenKeypads === 'On') {
		$('#reference-window-back0').append($('<div>', {
			id: 'reference-window-keypad'
		}));
		populateRefKeypad();
	}

	$('#reference-window-back0').hide();

	$('#reference-window-back').append($('<img>', {
		id: 'glossary-symbols',
		src: 'images/reference/symbols.png'
	}));

	let all_option = get_all_options();

	console.log(all_option)

	var selectize = $('#reference-window').selectize({
		options: all_option,
		optgroups: [{
				value: 'random draws',
				label: 'Random Draws'
			},
			{
				value: 'settlement events',
				label: 'Settlement Events'
			},
			{
				value: 'settlement locations',
				label: 'Settlement Locations'
			},
			{
				value: 'glossary',
				label: 'Glossary'
			},
			{
				value: 'abilities',
				label: 'Abilities'
			},
			{
				value: 'fightning arts',
				label: 'Fightning Arts'
			},
			{
				value: 'disorders',
				label: 'Disorders'
			},
			{
				value: 'secret fightning arts',
				label: 'Secret Fightning Arts'
			},
			{
				value: 'survivor statuses',
				label: 'Survivor Statuses'
			},
			{
				value: 'armor sets',
				label: 'Armor Sets'
			},
		],
		optgroupField: 'class',
		labelField: 'name',
		searchField: ['name'],
		maxItems: 10,
		plugins: ['remove_button', 'silent_remove'],
		// render: {
		//     optgroup_header: function(data, escape) {
		//         return '<div class="optgroup-header">' + escape(data.label) + ' <span class="scientific">' + escape(data.label_scientific) + '</span></div>';
		//     }
		// }
		hideSelected: true,
		closeAfterSelect: true,
		sortField: [{
				field: 'name',
				direction: 'asc'
			},
			{
				field: '$score'
			}
		],
		// ignoreFocusOpen: true,
		onItemRemove: function (values) {
			// return confirm(values);
			console.log(values);
			$('#reference-data.' + adapt_name(values)).fadeOut(500, function () {
				$(this).css({
					"visibility": "hidden",
					display: 'block'
				}).slideUp();
			});
			// $('.selectize-dropdown').css("display", "none");

			setTimeout(function () {
				$('#reference-data.' + adapt_name(values)).remove()
			}, 1500);
			// $('#reference-window').selectize.close();
			// $('#reference-window').setValue('Type here...');
			setTimeout(function () {
				if (!$('.selectize-input').hasClass('has-items')) {
					$('#glossary-symbols').fadeIn(500);
				}
			}, 100);
		},
		onItemAdd: function (values, item) {
			// return confirm(item);
			// console.log(item);

			if (is_random_draw(values)) {
				let draws = get_random_draws(values);
				console.log(values)
				console.log('Draws:')
				console.log(draws)

				selectize.removeItem(values, true);
				$('#glossary-symbols').hide();
				for (let i = 0; i < draws.length; i++) {
					console.log(draws[i])
					setTimeout(function () {
						selectize.addItem(draws[i], false);
						$('#glossary-symbols').hide();
					}, 500 * i);
				}
			} else {
				// $('#reference-window-back').append('<div id="reference-data" class="'+adapt_name(values)+'">'+get_representation(values)+'<br/><br/></div>')
				// $('#reference-data.'+adapt_name(values)).hide();
				// $('#reference-data.'+adapt_name(values)).delay(50).fadeIn(500);
				show_element(values)
			}
		},

		onDropdownOpen: function ($dropdown) {
			if (!this.lastQuery.length) {
				this.close();
			} else {
				$('#glossary-symbols').hide();
			}
		},

		onDropdownClose: function ($dropdown) {
			if (!$('.selectize-input').hasClass('has-items')) {
				$('#glossary-symbols').fadeIn(500);
			}
		},
	})[0].selectize;

	// selectize.on('item_remove', function() {
	//   selectize.close();
	// });

	selectize.$control_input.on('keydown', function (e) {
		// update hidden input buffer for onscreen keyboard
		if (settings.onscreenKeypads === 'On') {
			let refPadHiddenValue = document.getElementById("refPadHiddenValue")
      if (e.keyCode == 8 && selectize.$control_input.val().length < 2) {
  			selectize.close();
  		} else {
        refPadHiddenValue.value = refPadHiddenValue.value + e.key
      }

		}


	});

  $(document).on('click', 'div.selectize-input div.item', function (e) {
    let name = $(this).text().slice(0, -1)
    console.log(name);
    // $('#reference-window-back').animate({
    //     scrollTop: $('#reference-data.' + adapt_name(name)).offset().top
    // }, 1000);
    $('#reference-window-back').scrollTo($('#reference-data.' + adapt_name(name)), duration=1000);

  });
  $(document).on('click', '#reference-data', function () {
    $('#reference-window-back').scrollTo($(this), duration=1000);
  });


	function populateRefKeypad() {
		var refPadArr = ['row-start', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'row-end', 'row-start', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'row-end', 'row-start', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'row-end', 'row-start', 'space', 'clear', 'random', 'row-end']
		var txtPad = "<input type='hidden' id='refPadHiddenValue' />"
		var i;
		for (i = 0; i < refPadArr.length; i++) {
			if (refPadArr[i] === 'row-start') {
				txtPad = txtPad + "<div class='refpad--row'>"
			} else if (refPadArr[i] === 'row-end') {
				txtPad = txtPad + "</div>"
			} else {
				if (refPadArr[i].length > 0) {
					txtPad = txtPad + "<div class='refpad__pad -" + refPadArr[i] + "' onClick='refPadEntry(\"" + refPadArr[i] + "\")'>" + refPadArr[i] + "</div>"
				} else {
					txtPad = txtPad + "<div class='refpad__pad' onClick='refPadEntry(\"" + refPadArr[i] + "\")'>" + refPadArr[i] + "</div>"
				}
			}
		}
		let refKeypad = document.getElementById("reference-window-keypad")
		refKeypad.innerHTML = txtPad
	}

	$('#reference').hover(function () {
		if (!$(this).hasClass('active')) {
			if (!$(this).hasClass('hoverd')) {
				$('#reference-window-back0').fadeIn(500);
				$('#reference-window-background').fadeIn(500);
				$('#reference').attr('src', 'images/icons/reference_active.png');
				selectize.focus();
				$(this).toggleClass('active');
			}
		}
	}, function () {
		$(this).delay(500).removeClass('hoverd')
	});

	$('#reference').click(function () {
		if (!$(this).hasClass('active')) {
			$('#reference-window-back0').fadeIn(500);
			$('#reference-window-background').fadeIn(500);
			$('#reference').attr('src', 'images/icons/reference_active.png');
			selectize.focus();
		} else {
			$('#reference-window-back0').fadeOut(500);
			$('#reference-window-background').fadeOut(500);
			$('#reference').attr('src', 'images/icons/reference.png');
		}
		$(this).toggleClass('active');
	});

	$('#reference-window-background').on('click', function () {
		$('#reference-window-back0').fadeOut(500);
		$('#reference-window-background').fadeOut(500);
		$('#reference').attr('src', 'images/icons/reference.png');
		$('#reference').removeClass('active');
	});
}

function refPadEntry(refValue) {
	var refInput = document.getElementById("reference-window-selectized")
	var refHiddenInput = document.getElementById("refPadHiddenValue")

	if (refValue === "space") {
		refHiddenInput.value = refHiddenInput.value + " "
	} else if (refValue === "random") {
		refHiddenInput.value = "random "
	} else if (refValue === "clear") {
		refHiddenInput.value = ""
	} else {
		refHiddenInput.value = refHiddenInput.value + refValue
	}

	refInput.value = refHiddenInput.value
	refInput.focus()
}

function adapt_name(name) {
	return name.replace(/ /g, '_').replace(/\(/g, 'A').replace(/\)/g, 'A').replace(/\//g, 'A').replace(/\"/g, 'A').replace(/,/g, 'A').replace(/&/g, 'n')
}

function show_element(value) {
	$('#reference-window-back').append('<div id="reference-data" class="' + adapt_name(value) + '">' + get_representation(value) + '<br/><br/></div>')
	$('#reference-data.' + adapt_name(value)).hide();
	$('#reference-data.' + adapt_name(value)).delay(50).fadeIn(500);
}
