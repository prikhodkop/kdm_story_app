const remote = require('electron').remote

const { get_all_options, is_random_draw, get_random_draws, get_representation } = require('./glossary')
const { cdnUrl } = require('./template-renderer')
const { addTimer } = require('./timer')

module.exports = {
  createMenuButton,
  createReference,
  createSevereTables,
}

function createMenuButton () {
  document.onkeydown = function (evt) {
    evt = evt || window.event
    var isEscape = false
    if ('key' in evt) {
      isEscape = (evt.key === 'Escape' || evt.key === 'Esc')
    } else {
      isEscape = (evt.keyCode === 27)
    }
    if (isEscape) {
      if (!$('#esc-menu').hasClass('active')) {
        $('#reference-window-background').fadeIn(500)
        $('#esc-menu').fadeIn(500)
      } else {
        $('#esc-menu').fadeOut(100)
        $('#reference-window-background').fadeOut(100)
      }
      $('#esc-menu').toggleClass('active')
    }
  }

  $('#container').append($('<div>', {
    // style: 'opacity:.9;',
    id: 'esc-menu',
  }))

  $('#esc-menu').append($('<img>', {
    // style: 'opacity:.9;',
    id: 'esc-back',
    src: cdnUrl('images/reference/reference_back.png'),
  }))

  $('#esc-menu').append($('<div>', {
    // style: 'opacity:.9;',
    id: 'esc-text',
  }))

  $('#esc-menu').append($('<button>', {
    // style: 'opacity:.9;',
    id: 'esc-yes',
  }))

  $('#esc-menu').append($('<button>', {
    // style: 'opacity:.9;',
    id: 'esc-no',
  }))

  $('#esc-text').text('Do you really want to quit?')
  $('#esc-yes').text('Yes')
  $('#esc-no').text('No')

  $('#esc-yes').click(function () {
    remote.getCurrentWindow().close()
  })

  $('#esc-no').click(function () {
    $('#esc-menu').fadeOut(100)
    $('#reference-window-background').fadeOut(100)
    $('#esc-menu').removeClass('active')
  })

  $('#esc-menu').hide()

  /// /

  $('#container').append($('<a>', {
    href: 'javascript:void(0)',
    id: 'menu-toggle-wrapper',
  }))

  $('#container').append($('<div>', {
    style: 'opacity:.9;',
    id: 'menu',
  }))

  $('#menu-toggle-wrapper').append($('<div>', {
    id: 'menu-toggle',
  }))

  $('#menu').append($('<img>', {
    id: 'menu_img',
    src: cdnUrl('images/back.jpg'),
  }))

  $('#menu').append($('<div>', {
    id: 'menu-back',
  }))

  $('#menu').hide()

  $('#menu-toggle-wrapper').hover(function () {
    if (!$(this).hasClass('active')) {
      if (!$(this).hasClass('hoverd')) {
        $('#menu').fadeIn(500)
        $(this).toggleClass('active')
      }
    }
  }, function () {
    $(this).delay(500).removeClass('hoverd')
  })

  $('#menu-toggle-wrapper').click(function () {
    if (!$(this).hasClass('active')) {
      $('#menu').fadeIn(500)
    } else {
      $('#menu').hide()
    }
    $(this).toggleClass('active')
  })
}

function createSevereTables () {
  $('#container').append($('<img>', {
    id: 'severe-table',
    src: '',
  }))

  addLocationTable('brain', '11%')
  addLocationTable('head', '18%')
  addLocationTable('arms', '25%')
  addLocationTable('body', '32%')
  addLocationTable('waist', '39%')
  addLocationTable('legs', '46%')

  // $('#container').append($('<div>',{id:'severe-background'}));

  // $(document).on(
  // {
  //   mouseleave: function() {
  //       $(this).removeClass('active');
  //       hideLocationTable();
  //   },
  // },
  // 'aaa')
}

function addLocationTable (location, top) {
  $('#container').append($('<img>', {
    class: location,
    id: 'severe',
    src: cdnUrl('images/icons/' + location + '.png'),
    style: 'top:' + top + ';',
  }))

  $('#container').append($('<img>', {
    class: location,
    id: 'severe-table',
    src: cdnUrl('images/severe injuries/' + location + '.jpg'),
  }))

  $('#severe.' + location).hide()
  $('#severe-table.' + location).hide()
  $('#severe.' + location).delay(1000).fadeIn(2000)

  $('#severe.' + location).hover(function () {
    if (!$(this).hasClass('active')) {
      if (!$(this).hasClass('hoverd')) {
        // $("#menu").fadeIn(500);
        showLocationTable($(this).attr('class'))
        $(this).toggleClass('active')
      }
    }
  }, function () {
    $(this).delay(500).removeClass('hoverd')
  })

  $('#severe.' + location).click(function () {
    if (!$(this).hasClass('active')) {
      showLocationTable($(this).attr('class'))
    } else {
      hideLocationTable()
    }
    $(this).toggleClass('active')
  })

  $(document).on({
    mouseenter: function () {
      $('#divtwo').css('background-color', 'yellow')
    },
    mouseleave: function () {
      $(this).removeClass('active')
      hideLocationTable($(this).attr('class'))
    },
  }, '#severe')
}

function showLocationTable (location) {
  // $('#severe-background').fadeIn(500);
  // $('#severe-table').hide();
  // $('#severe-table').attr('src', cdnUrl('images/severe injuries/'+location+'.png'));
  $('#severe-table.' + location).delay(100).fadeIn(200)
  // $('#severe-table').slideLeft(1000);
}

function hideLocationTable (location) {
  $('#severe-table.' + location).fadeOut(100)
  // $('#severe-background').delay(500).fadeOut(00);
  // $('#severe-table').slideRight(1000);
}

function createReference () {
  let settings = JSON.parse(sessionStorage.getItem('settings'))

  $('#container').append($('<div>', {
    id: 'reference-window-background',
  }))

  $('#reference-window-background').hide()

  $('#container').append($('<img>', {
    id: 'reference',
    src: cdnUrl('images/icons/reference.png'),
  }))

  $('#reference').hide()
  $('#reference').delay(1000).fadeIn(2000)

  $('#container').append($('<div>', {
    id: 'reference-window-back0',
  }))

  $('#reference-window-back0').append($('<img>', {
    id: 'reference-window-back-img',
    src: cdnUrl('images/reference/reference_back.png'),
  }))

  // $('#reference-window-back').append('<label for="reference-window">Terms:</label>')
  $('#reference-window-back0').append('<select id="reference-window" class="reference-window" placeholder="Type term..."></select>')

  $('#reference-window-back0').append($('<div>', {
    id: 'reference-window-back',
  }))

  if (settings.onscreenKeypads === 'On') {
    $('#reference-window-back0').append($('<div>', {
      id: 'reference-window-keypad',
    }))
    populateRefKeypad()
  }

  $('#reference-window-back0').hide()

  $('#reference-window-back').append($('<img>', {
    id: 'glossary-symbols',
    src: cdnUrl('images/reference/symbols.png'),
  }))

  let all_option = get_all_options()
  //
  // console.log(all_option)

  var selectize = $('#reference-window').selectize({
    options: all_option,
    optgroups: [{
      value: 'random draws',
      label: 'Random Draws',
    },
    {
      value: 'settlement events',
      label: 'Settlement Events',
    },
    {
      value: 'settlement locations',
      label: 'Settlement Locations',
    },
    {
      value: 'glossary',
      label: 'Glossary',
    },
    {
      value: 'abilities',
      label: 'Abilities',
    },
    {
      value: 'fightning arts',
      label: 'Fightning Arts',
    },
    {
      value: 'disorders',
      label: 'Disorders',
    },
    {
      value: 'secret fightning arts',
      label: 'Secret Fightning Arts',
    },
    {
      value: 'survivor statuses',
      label: 'Survivor Statuses',
    },
    {
      value: 'armor sets',
      label: 'Armor Sets',
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
      direction: 'asc',
    },
    {
      field: '$score',
    },
    ],
    // ignoreFocusOpen: true,
    onItemRemove: function (values) {
      // return confirm(values);
      console.log(values)
      $('#reference-data.' + adapt_name(values)).fadeOut(500, function () {
        $(this).css({
          'visibility': 'hidden',
          display: 'block',
        }).slideUp()
      })
      // $('.selectize-dropdown').css("display", "none");

      addTimer(function () {
        $('#reference-data.' + adapt_name(values)).remove()
      }, 1500)
      // $('#reference-window').selectize.close();
      // $('#reference-window').setValue('Type here...');
      addTimer(function () {
        if (!$('.selectize-input').hasClass('has-items')) {
          $('#glossary-symbols').fadeIn(500)
        }
      }, 100)
    },
    onItemAdd: function (values, item) {
      // return confirm(item);
      // console.log(item);

      if (is_random_draw(values)) {
        let draws = get_random_draws(values)
        console.log(values)
        console.log('Draws:')
        console.log(draws)

        selectize.removeItem(values, true)
        $('#glossary-symbols').hide()
        for (let i = 0; i < draws.length; i++) {
          console.log(draws[i])
          addTimer(function () {
            selectize.addItem(draws[i], false)
            $('#glossary-symbols').hide()
          }, 500 * i)
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
        this.close()
      } else {
        $('#glossary-symbols').hide()
      }
    },

    onDropdownClose: function ($dropdown) {
      if (!$('.selectize-input').hasClass('has-items')) {
        $('#glossary-symbols').fadeIn(500)
      }
    },
  })[0].selectize

  window.selectize = selectize

  // selectize.on('item_remove', function() {
  //   selectize.close();
  // });

  // selectize.$control_input.on('keydown', function (e) {
  // 	// update hidden input buffer for onscreen keyboard
  // 	if (settings.onscreenKeypads === 'On') {
  // 		let refPadHiddenValue = document.getElementById("refPadHiddenValue")
  //     if (e.keyCode == 8 && selectize.$control_input.val().length < 2) {
  // 			selectize.close();
  // 		} else {
  //       refPadHiddenValue.value = refPadHiddenValue.value + e.key
  //     }
  //
  // 	}
  //
  //
  // });

  $(document).on('click', 'div.selectize-input div.item', function (e) {
    let name = $(this).text().slice(0, -1)
    console.log(name)
    // $('#reference-window-back').animate({
    //     scrollTop: $('#reference-data.' + adapt_name(name)).offset().top
    // }, 1000);
    $('#reference-window-back').scrollTo($('#reference-data.' + adapt_name(name)), duration = 1000)
  })
  $(document).on('click', '#reference-data', function () {
    $('#reference-window-back').scrollTo($(this), duration = 1000)
  })

  function populateRefKeypad () {
    const refPadArr = [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
      ['space', 'clear', 'random'],
    ]

    const keypadEl = $('#reference-window-keypad').empty()
    const txtPadEl = $("<input type='hidden' id='refPadHiddenValue'>")

    keypadEl.append(txtPadEl)

    for (let row of refPadArr) {
      let rowEl = $("<div class='refpad--row'></div>")

      for (let label of row) {
        let labelEl = $('<div></div>')
          .addClass('refpad__pad')
          .addClass(`-${label}`)
          .text(label)
          .on('click', function () {
            refPadEntry(label)
          })

        rowEl.append(labelEl)
      }

      keypadEl.append(rowEl)
    }
  }

  $('#reference').hover(function () {
    if (!$(this).hasClass('active')) {
      if (!$(this).hasClass('hoverd')) {
        $('#reference-window-back0').fadeIn(500)
        $('#reference-window-background').fadeIn(500)
        $('#reference').attr('src', cdnUrl('images/icons/reference_active.png'))
        selectize.focus()
        $(this).toggleClass('active')
      }
    }
  }, function () {
    $(this).delay(500).removeClass('hoverd')
  })

  $('#reference').click(function () {
    if (!$(this).hasClass('active')) {
      $('#reference-window-back0').fadeIn(500)
      $('#reference-window-background').fadeIn(500)
      $('#reference').attr('src', cdnUrl('images/icons/reference_active.png'))
      selectize.focus()
    } else {
      $('#reference-window-back0').fadeOut(500)
      $('#reference-window-background').fadeOut(500)
      $('#reference').attr('src', cdnUrl('images/icons/reference.png'))
    }
    $(this).toggleClass('active')
  })

  $('#reference-window-background').on('click', function () {
    $('#reference-window-back0').fadeOut(500)
    $('#reference-window-background').fadeOut(500)
    $('#reference').attr('src', cdnUrl('images/icons/reference.png'))
    $('#reference').removeClass('active')
    $('#esc-menu').fadeOut(100)
    $('#esc-menu').removeClass('active')
  })
}

function refPadEntry (refValue) {
  var refInput = $('#reference-window-selectized') // $('.selectize-input') // document.getElementById("reference-window-selectized")
  var refHiddenInput = document.getElementById('refPadHiddenValue')

  // if (!(refInput.is(':focus'))) {
  //   refInput.focus();
  // }
  window.selectize.focus()

  // let key_codes = {
  //   'q': 81,
  //   'w': 87,
  //   'e': 69,
  //   'r': 82,
  //   't': 84,
  //   'y': 89,
  //   'u': 85,
  //   'i': 73,
  //   'o': 79,
  //   'p': 80,
  //   'a': 65,
  //   's': 83,
  //   'd': 68,
  //   'f': 70,
  //   'g': 71,
  //   'h': 72,
  //   'j': 74,
  //   'k': 75,
  //   'l': 76,
  //   'z': 90,
  //   'x': 32,
  //   'c': 67,
  //   'v': 86,
  //   'b': 66,
  //   'n': 78,
  //   'm':77,
  //   'space': 32,
  //   'clear': 8
  //   // 'random',
  // };

  if (refValue == 'space') {
    let text = refInput.val()
    window.selectize.setTextboxValue(text + ' ')
  } else if (refValue == 'random') {
    let text = refInput.val()
    window.selectize.setTextboxValue(text + ' random ')
  } else if (refValue == 'clear') {
    window.selectize.setTextboxValue('')
  } else {
    // console.log('Trigger key press: '+refValue+' '+key_codes[refValue])
    // window.selectize.trigger(jQuery.Event('keypress', { keyCode: key_codes[refValue]}));
    let text = refInput.val()
    window.selectize.setTextboxValue(text + refValue)
  }
}

function adapt_name (name) {
  return name.replace(/ /g, '_').replace(/\(/g, 'A').replace(/\)/g, 'A').replace(/\//g, 'A').replace(/\"/g, 'A').replace(/,/g, 'A').replace(/&/g, 'n')
}

function show_element (value) {
  $('#reference-window-back').append('<div id="reference-data" class="' + adapt_name(value) + '">' + get_representation(value) + '<br/><br/></div>')
  $('#reference-data.' + adapt_name(value)).hide()
  $('#reference-data.' + adapt_name(value)).delay(50).fadeIn(500)
}
