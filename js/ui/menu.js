const remote = require('electron').remote

const { get_all_options, is_random_draw, get_random_draws, get_representation, get_locations_list, get_bookmarks_list, get_innovations_list, init_glossary} = require('./glossary')
// const { cdnUrl } = require('./template-renderer')
const { addTimer, clearTimer } = require('./timer')
const { getDevelopmentState, addInnovation, removeInnovation, addSettlementLocation, removeSettlementLocation, addBookmark, removeBookmark, update_bonuses_list, update_bookmarks, init_bookmarks} = require('./development')
const { getSettings} = require('./settings')
const { pathToAsset, pathToAssetL } = require('./../ui/assets_loader')
const { getTerms } = require('./../ui/glossary')

window.severe_timers = {}

var tooltips = getTerms('tooltips')

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
  } else {

    if (selectize.$dropdown.css('display') == 'none') {
        $('.selectize-control').slideDown(0)
    }
    if ($('#reference').hasClass('active')&&!$('.selectize-input').hasClass('input-active')) {
      selectize.open()
      selectize.focus()
    }

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
  createBookmarksList,
  // bonusesSummary
}


// to use existing mechanism - app considers summary_screen to be another injury table
function bonusesSummary(top) {
  let development_state = getDevelopmentState();

  let button = $('<img>', {
    class: "summary",
    value: 'summary',
    id: 'severe',
    src: pathToAssetL('images/icons/about.png'),
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

  $("#severe-table.summary").append($('<div>', {
    class: "summary",
    value: "summary",
    id: 'severe-table0'
  }))

  update_bonuses_list()

  $("#severe-div.summary").empty()
  $("#severe-div.summary").append($('#severe-table.summary').clone())



  $("#severe-table.summary").append($('<img>', {
    id: 'summary-window-back-img',
    src: pathToAssetL('images/reference/reference_back.png'),
  }))

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
      src: pathToAssetL('images/reference/reference_back.png'),
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

    $('#esc-text').html('Do you really want to quit?<br/><b style="color:#990;font-size:0.5em;">Your draw settlement event and hunt board progress would be lost</b>')
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
      src: pathToAssetL('images/icons/book.png')
    })

    let menu_toggle_close = $('<div id="menu-toggle-close">&#10006;</div>')

    menu_toggle_wrapper.hide()
    menu_toggle_close.hide()

    $('#container').append(menu_toggle_wrapper)
    $('#container').append(menu_toggle_close)

    menu_toggle_wrapper.delay(100).fadeIn(500)
    menu_toggle_close.addClass('magictime')
    menu_toggle_wrapper.addClass('magictime')

    menu_toggle_wrapper.click(function () {
      // if (!menu_toggle_wrapper.hasClass('active')) {
        $('#menu').fadeIn(500);
        // menu_toggle_close.delay(200).fadeIn(300);
        addTimer(function(){
          menu_toggle_close.show()
          menu_toggle_close.removeClass('swashOut')
          menu_toggle_close.addClass('swashIn')
        }, 200)
        addTimer(function(){
          menu_toggle_close.removeClass('swashIn')
          $('#events_filter').focus()
        }, 400)
        // menu_toggle_wrapper.removeClass('swashIn')
        menu_toggle_wrapper.addClass('swashOut')
        // addTimer(function() {
          // menu_toggle_wrapper.removeClass('swashOut')
        // }, 500)
        // menu_toggle_wrapper.fadeOut(200);
      // } else {
      //   $('#menu').hide();
      //   menu_toggle_close.hide();
      //   menu_toggle_wrapper.fadeIn(500);
      // }
      // menu_toggle_wrapper.toggleClass('active')
    })

    menu_toggle_close.click(function () {
      $('#menu').fadeOut(200);
      // menu_toggle_close.fadeOut(200);
      menu_toggle_close.addClass('swashOut')
      menu_toggle_wrapper.addClass('magictime')
      menu_toggle_wrapper.removeClass('swashOut')
      menu_toggle_wrapper.addClass('swashIn')
      addTimer(function() {
        menu_toggle_wrapper.removeClass('swashIn')
      }, 200)
      window.filterEvents(true)
      // menu_toggle_wrapper.delay(200).fadeIn(300);
      // menu_toggle_wrapper.toggleClass('active')
    })

    menu_toggle_wrapper.tooltipster({
        animationDuration: 50,
        contentAsHTML: 'true',
        animation: 'fade',
        content: tooltips['story_events'].text,
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
      src: pathToAssetL('images/back.jpg'),
    }))

    $('#menu').append($('<div>', {
      id: 'menu-back',
    }))

    $('#menu-back').append($('<input>', {
      id: "events_filter",
      type: 'search',
      onkeyup: "filterEvents()",
      onsearch: "filterEvents(true)",
      placeholder: tooltips['search_word'].text
    }));

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
  window.open_locations = []

  $('#container').on({
    mouseenter: function () {
      if (!$(this).hasClass('hovered')) {
        $(this).addClass('hovered')
      }
      $('#divtwo').css('background-color', 'yellow')
      if (!$(this).hasClass('active')||(window.open_locations.length==0)) {
        $(this).addClass('active')
        showLocationTable($(this).attr('value'))
        if ($(this).hasClass('summary')) {
          // update_bonuses_list()
          $(this).attr('src', pathToAssetL('images/icons/about_active.png'))
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
            thise.attr('src', pathToAssetL('images/icons/about.png'))
          }
        }
        window.severe_hide_wait_time = 400
      }, window.severe_hide_wait_time)
    },
    click: function () {
      let thise = $(this)
      if (thise.hasClass('active')) {
          // thise.removeClass('hovered')
          clearTimer(window.severe_timers[thise.attr('value')])
          hideLocationTable(thise.attr('value'))
          thise.removeClass('active')
          if (thise.hasClass('summary')) {
            thise.attr('src', pathToAssetL('images/icons/about.png'))
          }
      } else {
        $(this).addClass('active')
        showLocationTable($(this).attr('value'))
        if ($(this).hasClass('summary')) {
          // update_bonuses_list()
          $(this).attr('src', pathToAssetL('images/icons/about_active.png'))
        }
      }
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
    content:tooltips['severe_table'].text,
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
    src: pathToAssetL('images/icons/' + location + '.png'),
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
  let timer = 300
  if (window.open_locations.length == 0) {
    timer = 50
  }
  window.severe_timers[location] = addTimer(function(){
    $('#severe-table.' + location).show("slide", { direction: "right" }, 200);
    window.open_locations.push(location)
  }, timer)

  // $('#severe-table').slideLeft(1000);
}

function hideLocationTable (location) {
  // $('#severe-table.' + location).fadeOut(100)
  $('#severe-table.' + location).hide("slide", { direction: "right" }, 100);
  let index = window.open_locations.indexOf(location);
  if (index !== -1) window.open_locations.splice(index, 1);

  // $('#severe-background').delay(500).fadeOut(00);
  // $('#severe-table').slideRight(1000);
}

function createReference () {
  window.globals.reordering_happened = 0
  window.globals.reordering_active = ''
  let settings = getSettings()
  window.blur_mode = false

  $('#container').append($('<div>', {
    id: 'reference-window-background',
    class: 'window-background'
  }))

  $('#reference-window-background').hide()

  let reference_icon = $('<img>', {
    id: 'reference',
    src: pathToAssetL('images/icons/reference.png'),
  })

  reference_icon.hide()

  $('#container').append(reference_icon)

  $('#reference').delay(100).fadeIn(500)

  $('#container').append($('<div>', {
    id: 'reference-window-back0',
  }))

  $('#reference-window-back0').append($('<img>', {
    id: 'reference-window-back-img',
    src: pathToAssetL('images/reference/reference_back.png'),
  }))


  $('#reference-window-back0').append('<select id="reference-window" class="reference-window" placeholder="'+tooltips['type_term'].text+'..."></select>')

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

  $('#container').on('DOMNodeInserted', '#reference-window-back', function(){
    $(this).children().last().delay(50).fadeIn(500)
  })

  var selectize = $('#reference-window').selectize({
    options: all_option,
    openOnFocus: true,
    searchField: ['search_name'],
    render: {
        option: function (item, escape) {
          if (item.label_eng != item.label) {
            return '<div class="option" data-value="'+item.value+'">'+ escape(item.label) + ((item.group_name == '')? '': ' <small style="color:#660;">('+escape(item.group_name)+')</small>')+' - <div style="color:#666;display:inline;font-size:0.9em;">'+escape(item.label_eng)+'</div>'+'</div>'
          } else {
            return '<div class="option" data-value="'+item.value+'">'+ escape(item.label) + ((item.group_name == '')? '': ' <small style="color:#660;">('+escape(item.group_name)+')</small>')+'</div>'
          }
        },
    },
    optgroups: [{
      value: 'random draws',
      label: tooltips['random draws'].text,
    },
    {
      value: 'abilities',
      label: tooltips['abilities'].text,
    },
    {
      value: 'fighting arts',
      label: tooltips['fighting arts'].text,
    },
    {
      value: 'disorders',
      label: tooltips['disorders'].text,
    },
    {
      value: 'secret fighting arts',
      label: tooltips['secret fighting arts'].text,
    },
    {
      value: 'survivor statuses',
      label: tooltips['survivor statuses'].text,
    },
    {
      value: 'settlement events',
      label: tooltips['settlement events'].text,
    },
    {
      value: 'settlement locations',
      label: tooltips['settlement locations'].text,
    },
    {
      value: 'glossary',
      label: tooltips['glossary'].text,
    },
    {
      value: 'armor sets',
      label: tooltips['armor sets'].text,
    },
    {
      value: 'innovations',
      label: tooltips['innovations'].text,
    },
    {
      value: 'tactics',
      label: tooltips['tactics'].text,
    },
    {
      value: 'resources',
      label: tooltips['resources'].text,
    },
    {
      value: 'terrain',
      label: tooltips['terrain'].text,
    },
    ],
    optgroupField: 'class',
    lockOptgroupOrder: true,
    labelField: 'name',
    maxItems: 10,

    plugins: ['remove_button_2', 'silent_remove'],

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
    onItemRemove: function (values) {
      console.log('Removing: '+values)
      $('#reference-data.' + adapt_name(values)).fadeOut(500, function () {
        $(this).css({
          'visibility': 'hidden',
          display: 'block',
        }).slideUp()
      })

      addTimer(function () {
        $('#reference-data.' + adapt_name(values)).remove()
      }, 1500)
    },
    onItemAdd: function (values, item) {
      $('#glossary-symbols').hide()
      if (is_random_draw(values)) {
        let draws = get_random_draws(values)
        console.log(values)
        console.log('Draws:')
        console.log(draws)

        selectize.removeItem(values, true)
        window.blur_mode = true;
        for (let i = 0; i < draws.length; i++) {
          console.log(draws[i])
          addTimer(function () {
            selectize.addItem(draws[i], false)
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
    },

    onDropdownOpen: function ($dropdown) {
    },
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

    let text_to_show
    for (let row of refPadArr) {
      let rowEl = $("<div class='refpad--row'></div>")

      for (let label of row) {
        if (label == 'space') {
          text_to_show = tooltips['space_key'].text
        } else if (label == 'random') {
          text_to_show = tooltips['random_key'].text
        } else {
          text_to_show = label
        }
        let labelEl = $('<div></div>')
          .addClass('refpad__pad')
          .addClass(`-${label}`)
          .text(text_to_show)
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
    content: tooltips['reference_open'].text,
    position: 'right',
    delay: [0, 0],
  })

  $('#reference').click(function () {
    if (!$(this).hasClass('active')) {
      $('#reference-window-back0').fadeIn(500)
      $('#reference-window-background').fadeIn(500)
      $('#reference').attr('src', pathToAssetL('images/icons/reference_active.png'))
      // selectize.focus()
      $('#reference').tooltipster('content', tooltips['reference_close'].text)

    } else {
      $('#reference-window-back0').fadeOut(500)
      $('#reference-window-background').fadeOut(500)
      $('#reference').attr('src', pathToAssetL('images/icons/reference.png'))
      // selectize.clear()
      $('#reference').tooltipster('content', tooltips['reference_open'].text)
    }
    $(this).toggleClass('active')
  })

  $('#reference-window-background').on('click', function () {
    $('#reference-window-back0').fadeOut(500)
    $('#reference-window-background').fadeOut(500)
    $('#reference').attr('src', pathToAssetL('images/icons/reference.png'))
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
    render: {
        option: function (item, escape) {
          if (item.label_eng != item.label) {
            return '<div class="option" data-value="'+item.value+'">'+ escape(item.label) + ((item.group_name == '')? '': ' <small style="color:#660;">('+escape(item.group_name)+')</small>')+' - <div style="color:#666;display:inline;font-size:0.9em;">'+escape(item.label_eng)+'</div>'+'</div>'
          } else {
            return '<div class="option" data-value="'+item.value+'">'+ escape(item.label) + ((item.group_name == '')? '': ' <small style="color:#660;">('+escape(item.group_name)+')</small>')+'</div>'
          }
        },
    },
    optgroups: [{
      value: 'innovations',
      label: tooltips['innovations'].text,
    },
    ],
    optgroupField: 'class',
    labelField: 'name',
    searchField: ['search_name'],
    maxItems: 100,
    plugins: ['remove_button', 'silent_remove', 'drag_drop'],
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

      console.log('!!!Reordering: '+window.globals.reordering_happened)
      if (window.globals.reordering_happened > 0) {
        window.globals.reordering_happened -= 1
        if (window.globals.reordering_happened == 0) {
          let new_values = selectize_innovations.getValue()
          console.log('!!!New innovations: '+new_values)
          let dev_state = getDevelopmentState()
          console.log('!!!Dev state: '+JSON.stringify(dev_state['innovations']))
          for (let i=new_values.length-1; i>=0; i--) {
            removeInnovation(new_values[i])
            addInnovation(new_values[i])
          }
          dev_state = getDevelopmentState()
          console.log('!!!Dev state2: '+JSON.stringify(dev_state['innovations']))
          selectize_innovations.blur()
          selectize_innovations.focus()
        }

        return
      }
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
      content: tooltips['innovations_list'].text,
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
    render: {
        option: function (item, escape) {
          if (item.label_eng != item.label) {
            return '<div class="option" data-value="'+item.value+'">'+ escape(item.label) + ((item.group_name == '')? '': ' <small style="color:#660;">('+escape(item.group_name)+')</small>')+' - <div style="color:#666;display:inline;font-size:0.9em;">'+escape(item.label_eng)+'</div>'+'</div>'
          } else {
            return '<div class="option" data-value="'+item.value+'">'+ escape(item.label) + ((item.group_name == '')? '': ' <small style="color:#660;">('+escape(item.group_name)+')</small>')+'</div>'
          }
        },
    },
    optgroups: [{
      value: 'settlement locations',
      label: tooltips['settlement locations'].text,
    },
    ],
    optgroupField: 'class',
    labelField: 'name',
    searchField: ['search_name'],
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

function updateBookmarksList() {
  $( '.bookmarks-list' ).empty();

  $('.bookmarks-list').append($('<select>', {
    id: "bookmarks-list-window",
    class: "bookmarks-list-window",
    placeholder: "Type Bookmark..."
  }))
  $('.bookmarks-list').hide();

  let options = get_bookmarks_list()

  var selectize_bookmarks = $('#bookmarks-list-window').selectize({
    options: options,
    optgroups: [{
      value: 'bookmarks',
      label: tooltips['bookmarks'].text,
    },
    ],
    // render: {
    //     option: function an96(item, escape) {
    //       let condition = getTerms('bookmarks')[item.value]['condition_text']
    //       return '<div class="option" data-value="'+item.value+'" style="color:#fff;">'+ escape(item.name) + ' - <small style="color:#ccc;">'+condition+'</small></div>'
    //     },
    // },
    render: {
        option: function (item, escape) {
          let condition = getTerms('bookmarks')[item.value]['condition_text']
          if (item.label_eng != item.label) {
            return '<div class="option" data-value="'+item.value+'">'+ escape(item.label) + ((item.group_name == '')? '': ' <small style="color:#660;">('+escape(item.group_name)+')</small>')+' - <div style="color:#666;display:inline;font-size:0.9em;">'+escape(item.label_eng)+'</div>'+' - <small style="color:#fff;">'+condition+'</small></div>'
          } else {
            return '<div class="option" data-value="'+item.value+'">'+ escape(item.label) + ((item.group_name == '')? '': ' <small style="color:#660;">('+escape(item.group_name)+')</small>')+' - <small style="color:#fff;">'+condition+'</small></div>'
          }
        },
    },
    optgroupField: 'class',
    labelField: 'name',
    searchField: ['search_name'],
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
      removeBookmark(values)
      selectize_bookmarks.setCaret(0)
      update_bookmarks()
    },
    onItemAdd: function (values, item) {
      console.log('Adding: '+values)
      addBookmark(values);
      selectize_bookmarks.setCaret(0)
      update_bookmarks()
    },
  })[0].selectize

  window.selectize_bookmarks = selectize_bookmarks

  let learnt_bookmarks = getDevelopmentState()['bookmarks']

  for (let i=learnt_bookmarks.length-1; i>=0; i--) {
    selectize_bookmarks.addItem(learnt_bookmarks[i]);
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
      content: tooltips['locations_list'].text,
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

function  createBookmarksList() {
  if ($( ".bookmarks-list" ).length) {
    $( '.bookmarks-list' ).empty();
    $('.bookmarks_button').off();
    $('#bookmarks-list_window-background').off();
  } else {

    let bookmarks_button_icon = $('<img>', {
      class: 'bookmarks_button',
      src: pathToAssetL('images/icons/bookmarks_button.png'),
    })

    bookmarks_button_icon.hide()

    $('#container').append(bookmarks_button_icon)

    $('#container').append($('<div>', {
      id: 'bookmarks-list_window-background',
      class: 'window-background'
    }))

    $('#bookmarks-list_window-background').hide()

    // $('.locations_button').hide()
    $('.bookmarks_button').delay(100).fadeIn(500)

    $('#container').append($('<div>', {
      class: 'bookmarks-list',
    }))

    $('.bookmarks_button').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: tooltips['bookmarks_list'].text,
      position: 'right',
      delay: [0, 0],
    })

  }

  updateBookmarksList()
  init_bookmarks()

  $('.bookmarks_button').click(function () {
    if (!$(this).hasClass('active')) {
      // $('#innovations-list-window').fadeIn(500)
      updateBookmarksList()
      $('.bookmarks-list').fadeIn(500);
      $('#bookmarks-list_window-background').fadeIn(400)
      window.selectize_bookmarks.focus()
      window.selectize_bookmarks.setCaret(0)

    } else {
      $('.bookmarks-list').fadeOut(500);
      $('#bookmarks-list_window-background').fadeOut(600)
    }
    $(this).toggleClass('active')
  })

  $('#bookmarks-list_window-background').on('click', function () {
    $('.bookmarks-list').fadeOut(500)
    $('#bookmarks-list_window-background').fadeOut(500)
    $('.bookmarks_button').removeClass('active')
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
    window.selectize.setTextboxValue(tooltips['random_key'].text)
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
  let element = $('<div id="reference-data" class="' + adapt_name(value) + '">' + get_representation(value) + '<br/><br/></div>')
  // .on('ready', function() {
  element.hide()
  $('#reference-window-back').append(element)

    // element.delay(50).fadeIn(500)
  // })
}
