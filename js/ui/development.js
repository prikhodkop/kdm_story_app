const { get_random_draws, settlement_locations, gear_list, innovations } = require('./../ui/glossary')
const { cdnUrl } = require('./../ui/template-renderer')
const { titleCase } = require('./../ui/events')
const { getSettings } = require('./../ui/settings')
const { addTimer } = require('./../ui/timer')

const DEBUG_MODE = true
const INNOVATION_HIDE = 'slideRight'
const INNOVATION_CARD_SHOW = 'slideLeftReturn'
const INNOVATION_CARD_HIDE = 'rotateDown'//'holeOut'

module.exports = {
  addDevelopment,
  openLocation,
  getDevelopmentState,
  setDevelopmentState,
  addElement,
  addInnovation,
  addLocation,
  removeElement,
  removeInnovation,
  removeLocation
}

const always_on_locations = ['Throne', 'Lantern Hoard', 'Sacreed Pool', 'The Sun'];

function addDevelopment() {
  $('#container').append($('<div>', {
    // style: 'opacity:.9;',
    id: 'settlement_locations_window',
    // class: 'window',
  }));

  // Subwindow selection
  $('#settlement_locations_window').hide();

  $('#settlement_locations_window').append($('<div class="development_tab_wrapper"></div>'))
  $('.development_tab_wrapper').append($('<div class="development_tab_buttons"></div>'))
  $('.development_tab_buttons').append($('<div class="development_tab_button" id="locations_button">Locations</div>'));
  $('.development_tab_buttons').append($('<div class="development_tab_button" id="innovations_button">Innovations</div>'));
  $('.development_tab_buttons').append($('<div class="development_tab_button" id="endeavor_button">Actions</div>'));

  $('#locations_button').addClass('active')

  $('.development_tab_button').click(function() {
    if (!$(this).hasClass('active')) {
      $('.development_tab_button').each(function() {$(this).removeClass('active');})
      $(this).addClass('active');
      openWindow($(this).attr('id'));
    } else {
      //
    }
  });

  window.openLocation = openLocation;
  window.showInnovation = showInnovation;
  window.filterInnovations = filterInnovations;

  getDevelopmentState(); // initializes proper development state if not present
  setupLocations();
  setupInnovations();
  setupActions();

 openWindow("locations_button")

} // end of addDevelopment

function openWindow(type) {
  // Hide all old elements
  $('#development_tabs').hide();
  $('#innovations_tab').hide();
  $('.innovations_grid_wrapper').hide();
  $('#innovations_filter').hide();
  $(".tabcontent.visible").hide();
  $('.actions_grid_wrapper').hide();

  if (type == "locations_button") {
    $('#development_tabs').show();
    $(".tabcontent.visible").show();
  }
  if (type == "innovations_button") {
    $('#innovations_tab').show();
    $('.innovations_grid_wrapper').show();
    $('#innovations_filter').show();
    $('#innovations_filter').focus()
  }
  if (type == "endeavor_button") {
    // $('#innovations_tab').show();
    $('.actions_grid_wrapper').show();
    // $('#innovations_filter').show();
    // $('#innovations_filter').focus()
    updateActions();

  }
}

// #### Locations specific functions

function setupLocations() {
  $('#settlement_locations_window').append($('<div>', {
    // style: 'opacity:.9;',
    id: 'development_tabs',
    class: 'tab',
  }));

  $('#settlement_locations_window').append($('<img>', {
    // style: 'opacity:.9;',
    id: 'settlement_locations_window_background',
    src: cdnUrl('images/reference/reference_back.png'),
  }));

  let locations_list = get_random_draws('Location', false);

  if (DEBUG_MODE) {console.log('Locations list: '+locations_list)}

  for (let i = 0; i < locations_list.length; i++) {
    createLocation(locations_list[i], (i==0) ? true : false);
  }

  tippy('.tablinks[type = "location"]', {
    placement: 'bottom-start',
    content: '<b style="color:#cc0;">Click</b> to <b>show location</b>.<br/><br/><b style="color:#cc0;">Double click</b> to <b>toggle built status</b>.',
    duration: 50,
    delay: [600, 100],
    animation: 'shift-away-subtle',
    followCursor: true,
    theme: 'kdm',
  });

  allignItems('location');
  $('button.tablinks.selected:first').attr('id', "defaultOpen")

  $('.gear_card').hover(function () {
    let card = $(this)
    $(this).addClass('hoverd')
      if((!card.next().is('.gear_card'))||(!card.prev().is('.gear_card'))) {
          card.parent().scrollTo(card, duration = 500);
      }
    }, function(){
      $(this).removeClass('hoverd')
  });

  // $('#container').on("click", '.gear_card', function(e) {
  //   if (!$('.gear_card[value="'+$(this).attr('value')+'"]').hasClass('active')) {
  //     $('.gear_card[value="'+$(this).attr('value')+'"]').addClass('active')
  //   } else {
  //     $('.gear_card[value="'+$(this).attr('value')+'"]').removeClass('active')
  //   }
  // });

  $('#container').on("dblclick", '.tablinks[type = "location"]', function(e) {
    // console.log('!!Clicked on location!!')
    if (!$(this).hasClass('selected')) {
      $(this).addClass('selected')
      if ($(this).attr('value') == 'Lantern Hoard') {
        $('.tablinks[value = "Exhausted Lantern Hoard"]').removeClass('selected');
        moveItem('location', "Exhausted Lantern Hoard");
      }
      if ($(this).attr('value') == 'Exhausted Lantern Hoard') {
        $('.tablinks[value = "Lantern Hoard"]').removeClass('selected');
        moveItem('location', "Lantern Hoard");
      }

      moveItem($(this).attr('type'), $(this).attr('value'));
    } else {
      if (!(always_on_locations.includes($(this).attr('value'))) && !($(this).attr('value') == 'Exhausted Lantern Hoard')) {
        $(this).removeClass('selected');
        $(this).show();
        moveItem($(this).attr('type'), $(this).attr('value'));
      }
    }
 });

}

function createLocation(location, default_open=false) {
  let button = $('<button>', {
    class: "tablinks",
    onclick: "openLocation(event, '"+location+"')",
    val: location,
    name: location,
    type: 'location'
  })
  button.html(titleCase(location));
  $('#development_tabs').append(button);

  // button.tooltipster({animationDuration: 50,
  //   contentAsHTML: 'true',
  //   animation: 'fade',c
  //   content: '<b style="color:#cc0;">Click</b> to <b>show location</b>.<br/><br/><b style="color:#cc0;">Double click</b> to <b>toggle built status</b>.',
  //   position: 'right',
  //   // timer: 1500,
  //   delay: [500, 0],
  //   plugins: ['follower'],
  // })


  if (['Throne', 'Sacreed Pool', 'Lantern Hoard', 'Exhausted Lantern Hoard'].includes(location)) {
    let settings = getSettings();

    if ((settings['whiteboxes']['before the wall'] == 'Enabled') && !(settlement_locations[location]['gear']['1'].includes('Tabard'))) {
      settlement_locations[location]['gear']['1'].push('Tabard')
    }
    if (settings['whiteboxes']['before the wall'] == 'Disabled') {
        var index = settlement_locations[location]['gear']['1'].indexOf('Tabard');
        if (index !== -1) settlement_locations[location]['gear']['1'].splice(index, 1);
    }

    if ((settings['whiteboxes']['beyond the wall'] == 'Enabled') && !(settlement_locations[location]['gear']['1'].includes('Hard Breastplate'))) {
      settlement_locations[location]['gear']['1'].push('Hard Breastplate')
      settlement_locations[location]['gear']['1'].push('Cloth Leggings')
    }
    if (settings['whiteboxes']['beyond the wall'] == 'Disabled') {
        var index = settlement_locations[location]['gear']['1'].indexOf('Hard Breastplate');
        if (index !== -1) settlement_locations[location]['gear']['1'].splice(index, 1);
        index = settlement_locations[location]['gear']['1'].indexOf('Cloth Leggings');
        if (index !== -1) settlement_locations[location]['gear']['1'].splice(index, 1);
    }
  }

  if (DEBUG_MODE) {console.log('Location gear:'+settlement_locations[location]['gear']);}

  let content = $('<div>', {
    class: "tabcontent",
    id: location,
  });

  let columns = []
  let gear_name = ''

  for (let j = 0; j<4; j++) {
    if (j > 0) {
      columns.push($('<div>', {
        class: "column_"+(j+1)+" gear_column",
        id: (j+1),
      }));
    } else {
      columns.push($('<div>', {
        class: "column_"+(j+1),
        id: (j+1),
      }));
    }

    if (j == 0) {
      columns[j].append($('<img>', {
        class: "location_screen",
        src: cdnUrl("images/reference/Settlement Locations/"+titleCase(location)+".jpg"),
      }));
    } else {
      if (settlement_locations[location]['gear'][j].length > 0) {
        for (let i = 0; i < settlement_locations[location]['gear'][j].length; i++) {
          gear_name = settlement_locations[location]['gear'][j][i]
          // if (DEBUG_MODE) {console.log('Adding 1: '+i)}
          let element = $('<img>', {
            class: "gear_card",
            src: cdnUrl("images/reference/Gear/"+gear_name+".jpg"),
            value: gear_name
          })
          if ((location == 'Skyreef Sanctuary') && !(j == 2)) {
            element.css('height', '15.4%')
          }
          columns[j].append(element);
          if (gear_name in gear_list) {
            let tooltip = ''
            if ('innovation' in gear_list[gear_name]) {
              tooltip = tooltip + '<b style="color:#cc0;font-size:1em;">Required: '+gear_list[gear_name]['innovation']+'</b><br/><br/>'
            }
            if ('resources' in gear_list[gear_name]) {
              tooltip = tooltip + '<div style="font-size:1.0em;">'+gear_list[gear_name]['resources'].join('<br/>')+'</div'
            }
            element.tooltipster({animationDuration: 50,
              contentAsHTML: 'true',
              animation: 'fade',
              content: tooltip,
              position: 'left',
              delay: [300, 0],
              trigger: 'custom',
              triggerOpen: {
                mouseenter: true,
                click: true
              },
              triggerClose: {
                click: true,
                mouseleave: true
              }
            })
          }

        }
      }
    }

    content.append(columns[j]);
  }

  $('#settlement_locations_window').append(content);

}

function openLocation(evt, locationName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].className = tabcontent[i].className.replace(" visible", "");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(locationName).style.display = "block";
  document.getElementById(locationName).className += " visible";
  evt.currentTarget.className += " active";

  $('button.tablinks#defaultOpen').attr('id', '')
  $('button.tablinks.active').attr('id', 'defaultOpen')
}

// #### Innovations specific functions

function setupInnovations() {
  let settings = getSettings();

  $('#settlement_locations_window').append($('<div>', {
    id: 'innovations_tab',
    class: 'tab',
  }));

  $('#settlement_locations_window').append($('<input>', {
    id: "innovations_filter",
    type: 'search',
    onkeyup: "filterInnovations()",
    onsearch: "filterInnovations(true)",
    placeholder: "Search..."
  }));

  $('#innovations_filter').tooltipster({animationDuration: 50,
    contentAsHTML: 'true',
    animation: 'fade',
    content: '<b style="color:#cc0;">Type</b> in the name you\'re looking for.</br><b>Start</b> with <b>#</b> to search for tags instead: <i>i.e. #principles, #death, #gormchymy</i>.',
    position: 'right',
    delay: 0,
  })

  $('#innovations_filter').hide();

  $('#settlement_locations_window').append($('<div>', {
    class: 'innovations_grid_wrapper',
  }));

  $('.innovations_grid_wrapper').hide();

  $('.innovations_grid_wrapper').append($('<div>', {
    class: 'innovations_grid use-hover',
  }));

  $('#settlement_locations_window').append($('<img>', {
    src: "#", //"images/reference/Innovations/"+innovation+".jpg",
    class: "tooltip_image_innovation"
  }))

  $('.tooltip_image_innovation').hide()

  $(document).on({
    mouseenter: function (e) {
      console.log('Show innovation tooltip!'+$(e.target).val())


      if (!$('#innovations_tab').hasClass('tablinks_hoverd')) {
        addTimer(function(){
          if ($('#innovations_tab').hasClass('tablinks_hoverd')) {
            $('.tooltip_image_innovation').show("slide", { direction: "left" }, 200);
          }
        }, 300)
        $('.innovations_grid').addClass('shaded')
      }
      $('#innovations_tab').addClass('tablinks_hoverd')

      $('.tooltip_image_innovation').attr('src', cdnUrl("images/reference/Innovations/"+$(e.target).val()+".jpg"))
    },
    mouseleave: function (e) {

      addTimer(function(){
        if (!$('#innovations_tab').hasClass('tablinks_hoverd')) {
          $('.tooltip_image_innovation').hide("slide", { direction: "left" }, 200);
          $('.innovations_grid').removeClass('shaded')
          $('#innovations_tab').removeClass('tablinks_hoverd')
        }
      }, 100)
      $('#innovations_tab').removeClass('tablinks_hoverd')
    },
  }, '.tablinks[type="innovation"]')

  console.log('++++Creating sortable!!')

  var dragging = false

  // $('.innovations_grid').load(function() {
  //   console.log('Creating sortable!!')

  $('.innovations_grid').sortable({
    animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
    // ghostClass: 'blue-background-class'
  	// easing: "cubic-bezier(1, 0, 0, 1)",
    // sort: false,  // sorting inside list
    // Called by any change to the list (add / update / remove)
    tolerance: "pointer",
    containment: "parent",
    cursor: "move",

    // revert: true,
    // containment: 'parent',
    start: function (event, ui) {
      // dragging = true;
      $(this).removeClass('use-hover');
      $('.innovations_grid').removeClass('use-hover')

    },
  	stop: function( event, ui ) {
  		// same properties as onEnd
      $(this).addClass('use-hover');
      $('.innovations_grid').addClass('use-hover')

      updateInnovationsState();
  	},
  })
  console.log('aaaa:'+'1fr '.repeat(settings['innovation_row_length']))
  $('.innovations_grid').css('grid-template-columns', '1fr '.repeat(settings['innovation_row_length']))

  let innovations_list = get_random_draws('Innovation', false).sort();

  for (let i = 0; i < innovations_list.length; i++) {
    createInnovation(innovations_list[i]);
  }

  tippy('.tablinks[type = "innovation"]', {
    placement: 'bottom-start',
    content:'<b style="color:#cc0;">Double click</b> to <b>add innovation</b>.<br/>',
    duration: 50,
    delay: [600, 100],
    animation: 'shift-away-subtle',
    followCursor: true,
    theme: 'kdm',
  });

  allignItems('innovation');

  // var grid = new Muuri('.innovations_grid');

 let selected_innovations = getDevelopmentState()['innovations']
 let activated = getDevelopmentState()['activated']['innovations']

 console.log('Activated: '+activated)

 if (DEBUG_MODE) {console.log('Selected innovations:'+selected_innovations)}

 for (let i = 0; i < selected_innovations.length; i++) {
   if (toShow(selected_innovations[i])) {
     showInnovation(selected_innovations[i], initialization=true);
     $('.tablinks[value="'+selected_innovations[i]+'"]').hide();
     if (activated.includes(selected_innovations[i])) {
       $('.innovation_card[value = "'+selected_innovations[i]+'"]').addClass('active')
     }
   } else {
     updateInnovationsState();
   }
 }

 $('#container').on("dblclick", '.tablinks[type = "innovation"]', function(e) {

   $(this).addClass('selected')
   $(this).hide();
   showInnovation($(this).attr('value'), initialization=false, newitem=true);
   updateInnovationsState();
   console.log('Selected innovations1:'+getDevelopmentState()['innovations'])

   moveItem($(this).attr('type'), $(this).attr('value'));
});

$('#container').on("dblclick", '.innovation_card', function(e) {
  $('.tablinks[value="'+$(this).attr('value')+'"]').removeClass('selected')
  $('.tablinks[value="'+$(this).attr('value')+'"]').show();
  $('.innovation_card[value="'+$(this).attr('value')+'"]').addClass('magictime')
  $('.innovation_card[value="'+$(this).attr('value')+'"]').addClass(INNOVATION_CARD_HIDE)
  $('.innovation_card[value="'+$(this).attr('value')+'"]').fadeOut(500, function() {
    $('.innovation_card[value="'+$(this).attr('value')+'"]').remove();
    updateInnovationsState();
    console.log('Selected innovations2:'+getDevelopmentState()['innovations'])
  });

  moveItem('innovation', $(this).attr('value'));
 });

 $('#container').on("click", '.innovation_card', function(e) {
   console.log('!!Clicked on innovation card!!')
   if ($('.innovation_card[value="'+$(this).attr('value')+'"]').hasClass('clickedOnce')) {
     $('.innovation_card[value="'+$(this).attr('value')+'"]').removeClass('clickedOnce')
     window.innovation_card_value = null
     console.log('Removed class clickedOnce')
   } else {
     $('.innovation_card[value="'+$(this).attr('value')+'"]').addClass('clickedOnce')
     window.innovation_card_value = $(this).attr('value')
     console.log('Added class clickedOnce')
   }
   addTimer(function() {
     let value = window.innovation_card_value
     console.log('Checking class clickedOnce '+$('.innovation_card[value="'+value+'"]').hasClass('clickedOnce'))
     if ($('.innovation_card[value="'+value+'"]').hasClass('clickedOnce')) {
       $('.innovation_card[value="'+value+'"]').removeClass('clickedOnce')
       window.innovation_card_value = null
       if (!$('.innovation_card[value="'+value+'"]').hasClass('active')) {
         $('.innovation_card[value="'+value+'"]').addClass('active')
         let state = getDevelopmentState();
         state['activated']['innovations'].push($(this).attr('value'))
         setDevelopmentState(state)
       } else {
         $('.innovation_card[value="'+value+'"]').removeClass('active')
         let state = getDevelopmentState();
         let index = state['activated']['innovations'].indexOf($(this).attr('value'));
         if (index !== -1) {
           state['activated']['innovations'].splice(index, 1);
         }
         setDevelopmentState(state)
       }
     }
   }, 200)
  });

  $('#container').on("mouseover",'.innovation_card', function(){
    console.log('Hovered innovation card '+$(this).attr('value'))
    $('.innovation_card[value="'+$(this).attr('value')+'"]').removeClass('magictime')
    $('.innovation_card[value="'+$(this).attr('value')+'"]').removeClass(INNOVATION_CARD_SHOW)
  })
}

function filterInnovations(clear=false) {

  let input, filter;
  input = document.getElementById("innovations_filter");
  filter = input.value.toUpperCase();
  let show = false

  if (clear) {
    input.value = ''
  } else {
    if (filter.charAt( 0 ) == '#') {
      if (!$('#innovations_filter').hasClass('tags')) {
        $('#innovations_filter').addClass('tags')
      }
      input.value = '#'+input.value.substr(1).replace(/ +(?= )/g,'');
      input.value = '#'+input.value.substr(1).replace(/[^A-Za-z ]/gi, '')
    } else {
      if ($('#innovations_filter').hasClass('tags')) {
        $('#innovations_filter').removeClass('tags')
      }
      input.value = input.value.replace(/ +(?= )/g,'');
      input.value = input.value.replace(/[^A-Za-z \-]/gi, '')
    }
  }

  if (filter.replace((/ /g, '')) == '#') {
    return
  }

  $('#innovations_tab > button:not(.selected)').each(function() {
    let txtValue = $(this).text();
    if (DEBUG_MODE) {console.log('Innovation:'+txtValue)}
    if (filter.charAt( 0 ) == '#') {
      if (innovations[txtValue]['tags'].join(', ').toUpperCase().indexOf(filter.substr(1)) > -1) {
        $(this).css("display", "block");
      } else {
        $(this).css("display", "none");
      }
    } else {
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        $(this).css("display", "block");
      } else {
        $(this).css("display", "none");
      }
    }
  })
}

function updateInnovationsState() {
  let development_state = getDevelopmentState();

  development_state['innovations'] = getCurrentItems('innovation', selected=true, element='.innovation_card')
  setDevelopmentState(development_state)

  if (DEBUG_MODE) {console.log(development_state['innovations'])}

}

function createInnovation(innovation) {
  let button = $('<button>', {
    class: "tablinks",
    val: innovation,
    type: 'innovation'
  })
  button.html(titleCase(innovation).replace(' Of ', ' of ').replace(' The ', ' the '));
  $('#innovations_tab').append(button);
  // button.tooltipster({animationDuration: 50,
  //   contentAsHTML: 'true',
  //   animation: 'fade',
  //   content: '<b style="color:#cc0;">Double click</b> to <b>add innovation</b>.<br/>',
  //   position: 'bottom',
  //   delay: [800, 0],
  //   plugins: ['follower'],
  //   // timer: 1000,
  // })

}

function showInnovation(innovationName, initialization=false, newitem=false) {
  // need a better solution one day - but it destroys all the duplicates that appear on windows reload
  if ($('.innovation_card[value="'+innovationName+'"]').length > 0) {
    $('.innovation_card[value="'+innovationName+'"]').each(function() {
      $(this).remove();
    })
  }

  let img = $('<img>', {
    class: 'innovation_card use-hover',
    value: innovationName,
    src: cdnUrl('images/reference/Innovations/'+innovationName+'.jpg'),
  });

  img.hide();

  // img.tooltipster({animationDuration: 50,
  //   contentAsHTML: 'true',
  //   animation: 'fade',
  //   content: '<b style="color:#cc0;">Click</b> to activate.<br/><br/><b style="color:#cc0;">Double click</b> to remove.</b>.<br/><br/><b style="color:#cc0;">Drag</b> to rearange.</b>.',
  //   position: 'bottom',
  //   delay: [300, 0],
  //   trigger: 'custom',
  //   triggerOpen: {
  //     mouseenter: true,
  //     click: true
  //   },
  //   triggerClose: {
  //     click: true,
  //     mouseleave: true
  //   },
  //   plugins: ['follower'],
  // })

  if (($('.innovation_card').length) && (!initialization)){
		img.insertBefore('.innovation_card:first');
	} else {
		$('.innovations_grid').append(img);
	}

  // img.load(function() {
  //
  // })
  if (!newitem) {
    $('.innovation_card[value="'+innovationName+'"]').delay(50).fadeIn(300);
  } else {
    $('.innovation_card[value="'+innovationName+'"]').delay(50).fadeIn(100);
    $('.innovation_card[value="'+innovationName+'"]').removeClass('magictime')
    $('.innovation_card[value="'+innovationName+'"]').removeClass(INNOVATION_CARD_SHOW)
    $('.innovation_card[value="'+innovationName+'"]').removeClass(INNOVATION_CARD_HIDE)
    $('.innovation_card[value="'+innovationName+'"]').addClass('magictime')
    $('.innovation_card[value="'+innovationName+'"]').addClass(INNOVATION_CARD_SHOW)
  }

  tippy('.innovation_card[value="'+innovationName+'"]', {
    placement: 'bottom-start',
    content:'<b style="color:#cc0;">Click</b> to activate.<br/><br/><b style="color:#cc0;">Double click</b> to remove.</b>.<br/><br/><b style="color:#cc0;">Drag</b> to rearange.</b>.',
    duration: 50,
    delay: [600, 100],
    animation: 'shift-away-subtle',
    followCursor: true,
    theme: 'kdm',
    // updateDuration: 400,
  });

};

// #### Actions specific functions

function setupActions() {
  // $('#settlement_locations_window').append($('<div>', {
  //   id: 'innovations_tab',
  //   class: 'tab',
  // }));

  $('#settlement_locations_window').append($('<div>', {
    class: 'actions_grid_wrapper',
  }));

  $('.actions_grid_wrapper').hide();

  $('.actions_grid_wrapper').append($('<div>', {
    class: 'actions_grid use-hover',
  }));

  // $('#container').on("click", '.action_card', function(e) {
  //   $(this).toggleClass('active')
  // });
  $('#container').on("click", '.action_card', function(e) {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active')
      let state = getDevelopmentState();
      console.log('State prepared: '+ JSON.stringify(state))
      state['activated']['actions'].push($(this).attr('value'))
      console.log('State prepared: '+ JSON.stringify(state))
      setDevelopmentState(state)
    } else {
      $(this).removeClass('active')
      let state = getDevelopmentState();
      let index = state['activated']['actions'].indexOf($(this).attr('value'));
      if (index !== -1) {
        state['activated']['actions'].splice(index, 1);
      }
      setDevelopmentState(state)
    }
  });

  $('.action_card').hover(function () {
    let card = $(this)
    $(this).addClass('hoverd')
    $(this).parent().scrollTo($(this), duration = 500);
    }, function(){
      $(this).removeClass('hoverd')
  });
}

function updateActions() {
  let development = getDevelopmentState();
  let settings = getSettings();

  $('.actions_grid').empty();

  for (let i = 0; i < development['locations'].length; i++) {
    if (('action' in settlement_locations[development['locations'][i]]) && settlement_locations[development['locations'][i]]['action']) {
      if (toShow(development['locations'][i])) {
        console.log('Adding location: '+development['locations'][i])
        addAction(development['locations'][i], 'location')
        if (development['activated']['actions'].includes(development['locations'][i])) {
          $('.action_card[value = "'+development['locations'][i]+'"]').addClass('active')
        }
        if ('num_actions' in settlement_locations[development['locations'][i]]) {
          for (let j = 1; j < settlement_locations[development['locations'][i]]['num_actions']; j++) {
            addAction(development['locations'][i]+'_'+j, 'location')
            if (development['activated']['actions'].includes(development['locations'][i]+'_'+j)) {
              $('.action_card[value = "'+development['locations'][i]+'_'+j+'"]').addClass('active')
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < development['innovations'].length; i++) {
    if (('action' in innovations[development['innovations'][i]]) && innovations[development['innovations'][i]]['action']) {
      if (toShow(development['innovations'][i])) {
        console.log('Adding innovation: '+development['innovations'][i])
        addAction(development['innovations'][i], 'innovation')
        if (development['activated']['actions'].includes(development['innovations'][i])) {
          $('.action_card[value = "'+development['innovations'][i]+'"]').addClass('active')
        }
        if ('num_actions' in innovations[development['innovations'][i]]) {
          for (let j = 1; j < innovations[development['innovations'][i]]['num_actions']; j++) {
            addAction(development['innovations'][i]+'_'+j, 'innovation')
            if (development['activated']['actions'].includes(development['innovations'][i]+'_'+j)) {
              $('.action_card[value = "'+development['innovations'][i]+'_'+j+'"]').addClass('active')
            }
          }
        }
      }
    }
  }


  addTimer(function() {var grid = new Muuri('.actions_grid', {
    dragEnabled: false,
    layoutOnInit: true,
    layout: {
      round: false,
      // horizontal: true,
      fillGaps: true,
    },
  });}, 100)
 // addTimer(function() {window.dispatchEvent(new Event('resize'))}, 300)

}

function addAction(name, type) {

let item = $('<div>', {
  class: 'item '+type,
  id: 'action-card'
})

let item_content = $('<div>', {
  class: 'item-content',
  id: 'action-card'
})

let img = $('<img>', {
  class: 'action_card use-hover',
  value: name,
  src: cdnUrl('images/settlement/actions/'+name+'.jpg'),
});

// img.tooltipster({animationDuration: 50,
//   contentAsHTML: 'true',
//   animation: 'fade',
//   content: '<b>Source: '+name.split('_')[0]+'</b><br/><br/><b style="color:#cc0;">Click</b> to activate.',
//   position: 'left',
//   delay: [500, 0],
//   trigger: 'custom',
//   triggerOpen: {
//     mouseenter: true,
//     click: true
//   },
//   triggerClose: {
//     click: true,
//     mouseleave: true
//   },
//   plugins: ['follower'],
// })

item_content.append(img)
item.append(item_content)

// img.hide();

 $('.actions_grid').append(item)

 img.load(function() {
   $(this).delay(50).fadeIn(300);
 })

 tippy('.action_card[value="'+name+'"]', {
   placement: 'bottom-start',
   content:'<b>Source: '+name.split('_')[0]+'</b><br/><br/><b style="color:#cc0;">Click</b> to activate.',
   duration: 50,
   delay: [600, 100],
   animation: 'shift-away-subtle',
   followCursor: true,
   theme: 'kdm',
   // updateDuration: 400,
 });
}

// #### General purpose functions
function getDevelopmentState() {
  let development_state = JSON.parse(localStorage.getItem('development'));

  let updated = false
  // check if development has the right format and is stored in local storage, and if not initialize it
  if ((development_state == null) || (development_state == 'undefined')) {
    development_state = {}
    development_state['locations'] = always_on_locations
    development_state['innovations'] = [];
    development_state['activated'] = {};
    development_state['activated']['innovations'] = [];
    development_state['activated']['actions'] = [];
    updated = true
  } else {
    if (!('locations' in development_state)) {
      development_state['locations'] = always_on_locations
      updated = true
    }
    if (!('innovations' in development_state)) {
      development_state['innovations'] = []
      updated = true
    }
    if (!('activated' in development_state)) {
      development_state['activated'] = {}
      development_state['activated']['innovations'] = []
      development_state['activated']['actions'] = []
      updated = true
    } else {
      if (!('innovations' in development_state['activated'])) {
        development_state['activated']['innovations'] = []
      }
      if (!('actions' in development_state['activated'])) {
        development_state['activated']['actions'] = []
      }
    }
  }

  console.log('Dev state: '+JSON.stringify(development_state))

  if (updated) {
    setDevelopmentState(development_state)
  }

  return development_state
}

function setDevelopmentState(development_state) {
  development_state['locations'] = development_state['locations'].filter(function(item, pos) {
    return development_state['locations'].indexOf(item) == pos;
  })
  development_state['innovations'] = development_state['innovations'].filter(function(item, pos) {
    return development_state['innovations'].indexOf(item) == pos;
  })

  development_state['activated']['innovations'] = development_state['activated']['innovations'].filter(function(item, pos) {
    return development_state['activated']['innovations'].indexOf(item) == pos;
  })
  development_state['activated']['actions'] = development_state['activated']['actions'].filter(function(item, pos) {
    return development_state['activated']['actions'].indexOf(item) == pos;
  })
  // console.log('State to write: '+ JSON.stringify(development_state['activated']))

  localStorage.setItem('development', JSON.stringify(development_state))
}

function allignItems(type) {
  let development_state = getDevelopmentState();
  let settings = getSettings

  if (DEBUG_MODE) {console.log('Dev state'+development_state)}

  let selected_items = development_state[type+'s'];
  let items_list = getCurrentItems(type);

  for (let i = items_list.length - 1; i >= 0 ; i--) {
    // if (selected_items.includes(items_list[i])
    if (!($.inArray(items_list[i], selected_items) == -1)) {
      $('button.tablinks[value="'+items_list[i]+'"]').addClass('selected')
      $('button.tablinks[value="'+items_list[i]+'"]').detach().insertBefore('button.tablinks[type="'+type+'"]:first');
    }
  }
} // end of alignItems

function moveItem(type, name) {

  // if ((type == 'location')) {
  //   if (always_on_locations.includes(name)) {
  //     return
  //   }
  // }

  let development_state = getDevelopmentState();
  let this_element = $('button.tablinks[type="'+type+'"][value="'+name+'"]')
  let needed_value = null
  var cnt = 0;
  this_element.addClass('moving')
  if (this_element.hasClass('selected')) {
    development_state[type+'s'].push(name)
    $('button.tablinks[type="'+type+'"].selected:not(.moving)').each(function () {
      if ($(this).attr('value') < name) {
        needed_value = $(this).attr('value')
      }
      cnt = cnt + 1;
    })

  } else {
    let index = development_state[type+'s'].indexOf(name);
    if (index !== -1) {
      development_state[type+'s'].splice(index, 1);
    }
    $('button.tablinks[type="'+type+'"]:not(.selected):not(.moving)').each(function () {
      if ($(this).attr('value') < name) {
        needed_value = $(this).attr('value')
      }
    })
    // if (needed_value == null) {
    //   needed_value = $('button.tablinks:not(.selected)')
    // }
  }

  if (needed_value == null) {
    if (this_element.hasClass('selected')) {
      if (cnt > 0) {
        this_element.detach().insertBefore('button.tablinks[type="'+type+'"].selected:not(.moving):first');
      } else {
        this_element.detach().insertBefore('button.tablinks[type="'+type+'"]:not(.selected):first');
      }
    } else {
      this_element.detach().insertAfter('button.tablinks.selected[type="'+type+'"]:not(.moving):last');
    }

  } else {
    this_element.detach().insertAfter('button.tablinks[type="'+type+'"][value="'+needed_value+'"]');
  }

  if (this_element.hasClass('selected')) {
    this_element.parent().scrollTo($('button.tablinks[type="'+type+'"]:first'), duration = 500);
  }

  this_element.removeClass('moving')

  setDevelopmentState(development_state)

} // end of moveLocation

function getCurrentItems(type, selected=false, element='default') {
  let items = [];

  if (element == 'default') {
    if (selected) {
      $('button.tablinks[type="'+type+'"].selected').each(function () {
        items.push($(this).attr('value'))
      })
    } else {
      $('button.tablinks[type="'+type+'"]').each(function () {
        items.push($(this).attr('value'))
      })
    }
  } else {
    $(element).each(function () {
      items.push($(this).attr('value'))
    })
  }

  return items

}

function toShow(name) {
  let list = []
  let visibility = []

  console.log('To consider: '+name)
  if (!($.inArray(name, Object.keys(settlement_locations)) == -1)) {
    list = settlement_locations
    visibility = ['All content']
    console.log('It is location.')
  }
  else if (!($.inArray(name, Object.keys(innovations)) == -1)) {
    list = innovations
    visibility = ['Cards only', 'All content']
    console.log('It is innovation.')
  } else {
    console.log('Can not say what it is...')
    return false
  }

  let settings = JSON.parse(sessionStorage.getItem('settings'));

  if (('campaign' in list[name]) && !(list[name]['campaign'].includes(settings['campaign']))) {
    console.log('Different campaign.')
    return false
  } else if (('expansion' in list[name]) && !(visibility.includes(settings['expansions'][list[name]['expansion']]))) {
    console.log('Expansion '+list[name]['expansion']+' is '+ settings['expansions'][list[name]['expansion']])
    console.log('Expansion disabled.')
    return false
  } else {
    console.log('Good to show!.')
    return true
  }

}

function addElement(name, type) {
  let development_state = getDevelopmentState();

  if (!development_state[type].includes(name)) {
    development_state[type].unshift(name);
  }
  setDevelopmentState(name)
}

function addInnovation(name) {
  addElement(name, 'innovations')
}
function addLocation(name) {
  addElement(name, 'locations')
}

function removeElement(name, type) {
  let development_state = getDevelopmentState();

  if (development_state[type].includes(name)) {
    development_state[type].splice(development_state[type].indexOf(name), 1);
  }
  setDevelopmentState(name)
}
function removeInnovation(name) {
  removeElement(name, 'innovations')
}
function removeLocation(name) {
  removeElement(name, 'locations')
}
