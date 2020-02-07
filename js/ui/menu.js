const remote = require('electron').remote

const { get_all_options, is_random_draw, get_random_draws, get_representation, get_locations_list, get_innovations_list, init_glossary} = require('./glossary')
// const { cdnUrl } = require('./template-renderer')
const { addTimer, clearTimer } = require('./timer')
const { getDevelopmentState, addInnovation, removeInnovation, addSettlementLocation, removeSettlementLocation, update_bonuses_list} = require('./development')
const { getSettings} = require('./settings')
const { pathToAsset, pathToAssetL } = require('./../ui/assets_loader')

window.severe_timers = {}

document.onkeydown = function (evt) {
  evt = evt || window.event
  var isEscape = false
  if ('key' in evt) {
    isEscape = (evt.key === 'Escape' || evt.key === 'Esc')
  } else {
    isEscape = (evt.keyCode === 27)
  }
  if (isEscape) {
    const escMenuEl = $('#esc-menu')
    if (!escMenuEl.length) {
      return
    }
    if (!escMenuEl.hasClass('active')) {
      $('#reference-window-background').fadeIn(500)
      escMenuEl.fadeIn(500)
    } else {
      escMenuEl.fadeOut(100)
      $('#reference-window-background').fadeOut(100)
    }
    escMenuEl.toggleClass('active')
  }

  // // down arrow
  // if (evt.keyKode == 40) {
  //   if
  // }
  //
  // // up arrow
  // if (evt.keyKode == 38) {
  //
  // }

}

module.exports = {
  createMenuButton,
  createReference,
  createSevereTables,
  createInnovationsList,
  createLocationsList,
  // bonusesSummary
}


// to use existing mechanism - app considers summary_screen to be another injury table
function bonusesSummary(top) {
  let development_state = getDevelopmentState();

  let button = $('<img>', {
    class: "summary",
    value: 'summary',
    id: 'severe',
    src: pathToAsset('images/icons/lantern.png'),
    style: 'top:'+top+';right: 1.1%;width: 2%;',
  })

  button.hide()
  button.delay(100).fadeIn(500)

  $('#container').append(button)

  // button.delay(2000).fadeIn(300)

  let summary_screen = $('<div>', {
    class: "summary",
    value: "summary",
    id: 'severe-table'
  })

  summary_screen.hide()

  $('#container').append(summary_screen)

  update_bonuses_list()

  $("#severe-div.summary").empty()
  $("#severe-div.summary").append($('#severe-table.summary').clone())

}


function createMenuButton () {

  init_glossary()

  let settings = getSettings();
  console.log('Settings: '+settings)

  if ((typeof remote.getCurrentWindow().setFullScreen === "function") && ('fullscreen' in settings)) {
    console.log('Method exists!!')
    var cur_window = remote.getCurrentWindow()
    if (settings['fullscreen'] == 'On') {
      cur_window.setFullScreen(true);
    } else {
      cur_window.setFullScreen(false);
    }
  }


  if (!$("#esc-menu").length) {
    $('#container').append($('<div>', {
      // style: 'opacity:.9;',
      id: 'esc-menu',
    }))

    $('#esc-menu').append($('<img>', {
      // style: 'opacity:.9;',
      id: 'esc-back',
      src: pathToAsset('images/reference/reference_back.png'),
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

  }

  if (!$("#menu-toggle-wrapper").length) {
    let menu_toggle_wrapper = $('<img>', {
      id: 'menu-toggle-wrapper',
      src: pathToAsset('images/icons/book.png')
    })

    let menu_toggle_close = $('<div id="menu-toggle-close">&#10006;</div>')

    menu_toggle_wrapper.hide()
    menu_toggle_close.hide()

    $('#container').append(menu_toggle_wrapper)
    $('#container').append(menu_toggle_close)

    menu_toggle_wrapper.delay(100).fadeIn(500)

    menu_toggle_wrapper.click(function () {
      // if (!menu_toggle_wrapper.hasClass('active')) {
        $('#menu').fadeIn(500);
        menu_toggle_close.delay(200).fadeIn(300);
        menu_toggle_wrapper.fadeOut(200);
      // } else {
      //   $('#menu').hide();
      //   menu_toggle_close.hide();
      //   menu_toggle_wrapper.fadeIn(500);
      // }
      // menu_toggle_wrapper.toggleClass('active')
    })

    menu_toggle_close.click(function () {
      $('#menu').fadeOut(200);
      menu_toggle_close.fadeOut(200);
      menu_toggle_wrapper.delay(200).fadeIn(300);
      // menu_toggle_wrapper.toggleClass('active')
    })

    menu_toggle_wrapper.tooltipster({
        animationDuration: 50,
        contentAsHTML: 'true',
        animation: 'fade',
        content: '<b style="color:#cc0;">Click</b> to show <b>Story Events</b> table.',
        position: 'left',
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
  }

  if (!$("#menu").length) {
    $('#container').append($('<div>', {
      style: 'opacity:.9;',
      id: 'menu',
    }))

    $('#menu-toggle-wrapper').append($('<div>', {
      id: 'menu-toggle',
    }))

    $('#menu').append($('<img>', {
      id: 'menu_img',
      src: pathToAsset('images/back.jpg'),
    }))

    $('#menu').append($('<div>', {
      id: 'menu-back',
    }))

    $('#menu').hide()
  }
}

function createSevereTables () {
  $('#container').append($('<img>', {
    id: 'severe-table',
    src: '',
  }))

  // addLocationTable('brain', '11%')
  // addLocationTable('head', '18%')
  // addLocationTable('arms', '25%')
  // addLocationTable('body', '32%')
  // addLocationTable('waist', '39%')
  // addLocationTable('legs', '46%')

  let start = 10
  let distance0 = 7
  let distance = 7

  bonusesSummary(start+'%')

  addLocationTable('brain', start+distance0+'%')
  addLocationTable('head', (start+distance0+distance*1)+'%')
  addLocationTable('arms', (start+distance0+distance*2)+'%')
  addLocationTable('body', (start+distance0+distance*3)+'%')
  addLocationTable('waist', (start+distance0+distance*4)+'%')
  addLocationTable('legs', (start+distance0+distance*5)+'%')

  window.severe_hide_wait_time = 400

  $('#container').on({
    mouseenter: function () {
      if (!$(this).hasClass('hovered')) {
        $(this).addClass('hovered')
      }
      $('#divtwo').css('background-color', 'yellow')
      if (!$(this).hasClass('active')) {
        $(this).addClass('active')
        showLocationTable($(this).attr('value'))
        if ($(this).hasClass('summary')) {
          // update_bonuses_list()
          $(this).attr('src', pathToAsset('images/icons/lantern_active.png'))
        }
      }
    },
    mouseleave: function () {
      let thise = $(this)
      thise.removeClass('hovered')
      clearTimer(window.severe_timers[thise.attr('value')])
      addTimer(function() {
        if (!(thise.hasClass('hovered'))&&!($('#severe-table.'+thise.attr('value')).hasClass('hovered'))) {
          thise.removeClass('active')
          hideLocationTable(thise.attr('value'))
          if (thise.hasClass('summary')) {
            thise.attr('src', pathToAsset('images/icons/lantern.png'))
          }
        }
        window.severe_hide_wait_time = 400
      }, window.severe_hide_wait_time)
    },
  }, '#severe')

  $('#container').on({
    mouseenter: function () {
      if (!$(this).hasClass('hovered')) {
        $(this).addClass('hovered')
      }
    },
    mouseleave: function () {
      $(this).removeClass('hovered')
      window.severe_hide_wait_time = 200
      $('#severe.'+$(this).attr('value')).trigger('mouseout');
    },
    click: function() {
      $(this).removeClass('hovered')
      window.severe_hide_wait_time = 0
      $('#severe.'+$(this).attr('value')).trigger('mouseout');
    }
  }, '#severe-table')

  tippy('#severe-table', {
    placement: 'bottom-start',
    content:'<b style="color:#cc0;">Click</b> to hide. ',
    duration: 50,
    delay: [600, 100],
    animation: 'shift-away-subtle',
    followCursor: true,
    theme: 'kdm',
    // updateDuration: 400,
  });

}

function addLocationTable (location, top) {
  let location_icon = $('<img>', {
    class: location,
    id: 'severe',
    value: location,
    src: pathToAsset('images/icons/' + location + '.png'),
    style: 'top:' + top + ';',
  })

  location_icon.hide()
  $('#container').append(location_icon)

  $('#container').append($('<img>', {
    class: location,
    value: location,
    id: 'severe-table',
    src: pathToAssetL('images/reference/severe injuries/' + location + '.jpg'),
  }))


  $('#severe-table.' + location).hide()
  $('#severe.' + location).delay(100).fadeIn(500)

}

function showLocationTable (location) {

  window.severe_timers[location] = addTimer(function(){
    $('#severe-table.' + location).show("slide", { direction: "right" }, 200);
  }, 300)

  // $('#severe-table').slideLeft(1000);
}

function hideLocationTable (location) {
  // $('#severe-table.' + location).fadeOut(100)
  $('#severe-table.' + location).hide("slide", { direction: "right" }, 100);
  // $('#severe-background').delay(500).fadeOut(00);
  // $('#severe-table').slideRight(1000);
}

function createReference () {
  let settings = JSON.parse(sessionStorage.getItem('settings'))
  window.blur_mode = false

  $('#container').append($('<div>', {
    id: 'reference-window-background',
    class: 'window-background'
  }))

  $('#reference-window-background').hide()

  let reference_icon = $('<img>', {
    id: 'reference',
    src: pathToAsset('images/icons/reference.png'),
  })

  reference_icon.hide()

  $('#container').append(reference_icon)

  $('#reference').delay(100).fadeIn(500)

  $('#container').append($('<div>', {
    id: 'reference-window-back0',
  }))

  $('#reference-window-back0').append($('<img>', {
    id: 'reference-window-back-img',
    src: pathToAsset('images/reference/reference_back.png'),
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
    src: pathToAssetL('images/reference/symbols.png'),
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
      value: 'fighting arts',
      label: 'Fighting Arts',
    },
    {
      value: 'disorders',
      label: 'Disorders',
    },
    {
      value: 'secret fighting arts',
      label: 'Secret Fighting Arts',
    },
    {
      value: 'survivor statuses',
      label: 'Survivor Statuses',
    },
    {
      value: 'armor sets',
      label: 'Armor Sets',
    },
    {
      value: 'innovations',
      label: 'Innovations',
    },
    {
      value: 'resources',
      label: 'Resources',
    },
    {
      value: 'terrain',
      label: 'Terrain',
    },
    ],
    optgroupField: 'class',
    labelField: 'name',
    searchField: ['name'],
    maxItems: 10,
    openOnFocus: false,
    plugins: ['remove_button_2', 'silent_remove'],
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
      console.log('Removing: '+values)
      $('#reference-data.' + adapt_name(values)).fadeOut(500, function () {
        $(this).css({
          'visibility': 'hidden',
          display: 'block',
        }).slideUp()
      })
      // $('.selectize-dropdown').css("display", "none");

      addTimer(function () {
        $('#reference-data.' + adapt_name(values)).remove()
        // window.selectize.blur()
      }, 1500)
      // addTimer(function () {
      //   window.selectize.blur()
      // }, 100)
      // $('#reference-window').selectize.close();
      // $('#reference-window').setValue('Type here...');
    },
    onItemAdd: function (values, item) {
      // return confirm(item);
      // console.log(item);
      $('#glossary-symbols').hide()
      if (is_random_draw(values)) {
        let draws = get_random_draws(values)
        console.log(values)
        console.log('Draws:')
        console.log(draws)

        selectize.removeItem(values, true)
        // $('#glossary-symbols').fadeOut(200)
        window.blur_mode = true;
        for (let i = 0; i < draws.length; i++) {
          console.log(draws[i])
          addTimer(function () {
            selectize.addItem(draws[i], false)
            // $('#glossary-symbols').hide()
          }, 1000 * i)
        }
        addTimer(function () {

          window.blur_mode = false;
        }, 1000 * draws.length)
      } else {
        show_element(values)
      }

      addTimer(function(){
        $('#reference-window-back').scrollTo($('#reference-data.' + adapt_name(values)), duration = 100)
      }, 100)
      // selectize.setCaret(0);
      // selectize.blur();
    },

    onDropdownOpen: function ($dropdown) {
      // if (!this.lastQuery.length) {
      //   this.close()
      // } else {
      //   $('#glossary-symbols').hide()
      // }
      // if (window.blur_mode) {
      //
      //   window.selectize.close();
      // }
      // window.selectize.setCaret(0);
      // if (!this.lastQuery.length) {
      //   this.close()
      // }
      // $('#glossary-symbols').hide()
    },
    //
    // onDropdownClose: function ($dropdown) {
    //   // if (!$('.selectize-input').hasClass('has-items')) {
    //   //   $('#glossary-symbols').fadeIn(100)
    //   // }
    //   window.selectize.blur();
    // },
    // onClear: function() {
    //   window.selectize.blur();
    // }
  })[0].selectize

  window.selectize = selectize

  $("input#reference-window-selectized").keyup(function() {
    console.log('Current input value:'+this.value)
    if (!this.value) {
        selectize.close()
    }
  });

  $('select.reference-window').change(function(){
    // window.selectize.setCaret(0);
    if (window.blur_mode) {
      window.selectize.blur();
    }
    window.selectize.close();

    if ($('select.reference-window option').length == 0) {
      $('#glossary-symbols').fadeIn(500)
    }
  })

  // $('body').on('DOMNodeInserted', 'select.reference-window > option', function () {
  //   //$(this).combobox();
  // });

  $(document).on('click', 'div.selectize-input div.item', function (e) {
    let name = $(this).text().slice(0, -1)
    console.log(name)
    // $('#reference-window-back').animate({
    //     scrollTop: $('#reference-data.' + adapt_name(name)).offset().top
    // }, 1000);
    $('#reference-window-back').scrollTo($('#reference-data.' + adapt_name(name)), duration = 100)
  })
  $(document).on('click', '#reference-data', function () {
    $('#reference-window-back').scrollTo($(this), duration = 100)
  })
  $(document).on('dblclick', '#reference-data', function () {
    let adapted_name = $(this).attr('class');

    // console.log($(this))

    let values = $('#reference-window').val()

    console.log(values)
    console.log(adapted_name)

    let the_value = ''

    for (let i=0; i<values.length; i++) {
      console.log('Adapted: '+adapt_name(values[i]))
      if (adapt_name(values[i]) == adapted_name) {
        the_value = values[i];
        break
      }
    }

    console.log('The value:'+the_value)

    selectize.removeItem(the_value)
  })

  function populateRefKeypad () {
    const refPadArr = [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
      ['space', "\u2190", 'random'],
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

  $('#reference').tooltipster({animationDuration: 50,
    contentAsHTML: 'true',
    animation: 'fade',
    content: '<b style="color:#cc0;">Click</b> to show <b>Reference</b> window.',
    position: 'right',
    delay: [0, 0],
  })

  $('#reference').click(function () {
    if (!$(this).hasClass('active')) {
      $('#reference-window-back0').fadeIn(500)
      $('#reference-window-background').fadeIn(500)
      $('#reference').attr('src', pathToAsset('images/icons/reference_active.png'))
      selectize.focus()

    } else {
      $('#reference-window-back0').fadeOut(500)
      $('#reference-window-background').fadeOut(500)
      $('#reference').attr('src', pathToAsset('images/icons/reference.png'))
      selectize.clear()
    }
    $(this).toggleClass('active')
  })

  $('#reference-window-background').on('click', function () {
    $('#reference-window-back0').fadeOut(500)
    $('#reference-window-background').fadeOut(500)
    $('#reference').attr('src', pathToAsset('images/icons/reference.png'))
    $('#reference').removeClass('active')
    $('#esc-menu').fadeOut(100)
    $('#esc-menu').removeClass('active')
  })
}

function updateInnovationsList() {
  $( ".innovations-list" ).empty();

  $('.innovations-list').append($('<select>', {
    id: "innovations-list-window",
    class: "innovations-list-window",
    placeholder: "Type Innovation..."
  }))
  $('.innovations-list').hide();

  let options = get_innovations_list()

  var selectize_innovations = $('#innovations-list-window').selectize({
    options: options,
    optgroups: [{
      value: 'innovations',
      label: 'Innovations',
    },
    ],
    optgroupField: 'class',
    labelField: 'name',
    searchField: ['name'],
    maxItems: 100,
    plugins: ['remove_button', 'silent_remove'],
    hideSelected: true,
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
      console.log('Removing: '+values)
      removeInnovation(values)
      selectize_innovations.setCaret(0)
    },
    onItemAdd: function (values, item) {
      console.log('Adding: '+values)
      addInnovation(values);
      selectize_innovations.setCaret(0)
    },
  })[0].selectize

  window.selectize_innovations = selectize_innovations

  let learnt_innovations = getDevelopmentState()['innovations']

  for (let i=learnt_innovations.length-1; i>=0; i--) {
    selectize_innovations.addItem(learnt_innovations[i]);
  }
}

function  createInnovationsList() {

  if ($( ".innovations-list" ).length) {
    $( ".innovations-list" ).empty();
    $('.innovations_button').off();
    $('#innovations-list_window-background').off();

  } else {
    let innovations_button_icon = $('<img>', {
      class: 'innovations_button',
      src: pathToAssetL('images/icons/innovations_button.png'),
    })

    innovations_button_icon.hide()

    $('#container').append(innovations_button_icon)

    $('#container').append($('<div>', {
      id: 'innovations-list_window-background',
      class: 'window-background'
    }))

    $('#innovations-list_window-background').hide()

    // $('.innovations_button').hide()
    $('.innovations_button').delay(100).fadeIn(500)

    $('#container').append($('<div>', {
      class: 'innovations-list',
    }))

    $('.innovations_button').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: '<b style="color:#cc0;">Click</b> to add/remove settlement <b>Innovations</b>.',
      position: 'right',
      delay: [0, 0],
    })

  }

  updateInnovationsList()

  $('.innovations_button').click(function () {
    if (!$(this).hasClass('active')) {
      // $('#innovations-list-window').fadeIn(500)
      updateInnovationsList()
      $('.innovations-list').fadeIn(500);
      $('#innovations-list_window-background').fadeIn(400)
      window.selectize_innovations.focus()
      window.selectize_innovations.setCaret(0)

    } else {
      $('.innovations-list').fadeOut(500);
      $('#innovations-list_window-background').fadeOut(600)
    }
    $(this).toggleClass('active')
  })

  $('#innovations-list_window-background').on('click', function () {
    $('.innovations-list').fadeOut(500)
    $('#innovations-list_window-background').fadeOut(500)
    $('.innovations_button').removeClass('active')
  })

  // selectize_innovations.hide();
}

function updateLocationsList() {
  $( '.locations-list' ).empty();

  $('.locations-list').append($('<select>', {
    id: "locations-list-window",
    class: "locations-list-window",
    placeholder: "Type Settlement Location..."
  }))
  $('.locations-list').hide();

  let options = get_locations_list()

  var selectize_locations = $('#locations-list-window').selectize({
    options: options,
    optgroups: [{
      value: 'settlement locations',
      label: 'Settlement Locations',
    },
    ],
    optgroupField: 'class',
    labelField: 'name',
    searchField: ['name'],
    maxItems: 100,
    plugins: ['remove_button', 'silent_remove'],
    hideSelected: true,
    sortField: [{
      field: 'name',
      direction: 'asc',
    },
    {
      field: '$score',
    },
    ],
    onItemRemove: function (values) {
      // return confirm(values);
      console.log('Removing: '+values)
      removeSettlementLocation(values)
      selectize_locations.setCaret(0)
    },
    onItemAdd: function (values, item) {
      console.log('Adding: '+values)
      addSettlementLocation(values);
      selectize_locations.setCaret(0)
    },
  })[0].selectize

  window.selectize_locations = selectize_locations

  let learnt_locations = getDevelopmentState()['locations']

  for (let i=learnt_locations.length-1; i>=0; i--) {
    selectize_locations.addItem(learnt_locations[i]);
  }
}

function  createLocationsList() {
  if ($( ".locations-list" ).length) {
    $( '.locations-list' ).empty();
    $('.locations_button').off();
    $('#locations-list_window-background').off();
  } else {

    let locations_button_icon = $('<img>', {
      class: 'locations_button',
      src: pathToAssetL('images/icons/locations_button.png'),
    })

    locations_button_icon.hide()

    $('#container').append(locations_button_icon)

    $('#container').append($('<div>', {
      id: 'locations-list_window-background',
      class: 'window-background'
    }))

    $('#locations-list_window-background').hide()

    // $('.locations_button').hide()
    $('.locations_button').delay(100).fadeIn(500)

    $('#container').append($('<div>', {
      class: 'locations-list',
    }))

    $('.locations_button').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: '<b style="color:#cc0;">Click</b> to add/remove <b>Settlement Locations</b>.',
      position: 'right',
      delay: [0, 0],
    })

  }

  updateLocationsList()

  $('.locations_button').click(function () {
    if (!$(this).hasClass('active')) {
      // $('#innovations-list-window').fadeIn(500)
      updateLocationsList()
      $('.locations-list').fadeIn(500);
      $('#locations-list_window-background').fadeIn(400)
      window.selectize_locations.focus()
      window.selectize_locations.setCaret(0)

    } else {
      $('.locations-list').fadeOut(500);
      $('#locations-list_window-background').fadeOut(600)
    }
    $(this).toggleClass('active')
  })

  $('#locations-list_window-background').on('click', function () {
    $('.locations-list').fadeOut(500)
    $('#locations-list_window-background').fadeOut(500)
    $('.locations_button').removeClass('active')
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
  console.log('Clicked on: '+refValue)
  if (refValue == 'space') {
    let text = refInput.val()
    window.selectize.setTextboxValue(text + ' ')
    window.selectize.open()
  } else if (refValue == 'random') {
    let text = refInput.val()
    window.selectize.setTextboxValue(text + ' random ')
    window.selectize.open()
  } else if (refValue == "\u2190") {
    window.selectize.setTextboxValue('')
    window.selectize.close()
  } else {
    // console.log('Trigger key press: '+refValue+' '+key_codes[refValue])
    // window.selectize.trigger(jQuery.Event('keypress', { keyCode: key_codes[refValue]}));
    let text = refInput.val()
    window.selectize.setTextboxValue(text + refValue)
    window.selectize.open()
  }

}

function adapt_name (name) {
  return name.replace(/ /g, '_').replace(/\(/g, 'A').replace(/\)/g, 'A').replace(/\//g, 'A').replace(/\"/g, 'A').replace(/,/g, 'A').replace(/&/g, 'n').replace(/\?/g, 'qqq')
}

function show_element (value) {
  $('#reference-window-back').append('<div id="reference-data" class="' + adapt_name(value) + '">' + get_representation(value) + '<br/><br/></div>')
  $('#reference-data.' + adapt_name(value)).hide()
  $('#reference-data.' + adapt_name(value)).delay(50).fadeIn(500)
}
