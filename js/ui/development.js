const { get_random_draws } = require('./../ui/glossary')
const { titleCase } = require('./../ui/events')
const { getSettings } = require('./../ui/settings')
const { addTimer, clearTimer } = require('./../ui/timer')
const { pathToAsset, pathToAssetL } = require('./../ui/assets_loader')
// const { cdnUrl }

const { getTerms } = require('./../ui/glossary')

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
  addSettlementLocation,
  addBookmark,
  removeElement,
  removeInnovation,
  removeSettlementLocation,
  removeBookmark,
  hasInnovation,
  getHuntInnovationEffects,
  update_bonuses_list,
  updateActions,
  update_bookmarks,
  init_bookmarks
}

const always_on_locations = ['Throne', 'Lantern Hoard', 'Sacred Pool', 'The Sun'];

var lang = getSettings()['language']
var innovations = getTerms('innovations')
var settlement_locations = getTerms('settlement_locations')
var gear_list = getTerms('gear_list')
var settlement_events = getTerms('settlement_events')
var bookmarks = getTerms('bookmarks')
var armor_sets = getTerms('armor_sets')
var tooltips = getTerms('tooltips')
var tags_list = getTerms('tags')

function init_variables() {

}

function addDevelopment() {

  init_variables()

  if ($('#settlement_locations_window').length) {
      $('#settlement_locations_window').empty()
  } else {
    $('#container').append($('<div>', {
      // style: 'opacity:.9;',
      id: 'settlement_locations_window',
      // class: 'window',
    }));
  }

  // Subwindow selection
  $('#settlement_locations_window').hide();

  $('#settlement_locations_window').append($('<div class="development_tab_wrapper"></div>'))
  $('.development_tab_wrapper').append($('<div class="development_tab_buttons"></div>'))
  $('.development_tab_buttons').append($('<div class="development_tab_button" id="locations_button">'+tooltips['locations_word'].text+'</div>'));
  $('.development_tab_buttons').append($('<div class="development_tab_button" id="innovations_button">'+tooltips['innovations_word'].text+'</div>'));
  $('.development_tab_buttons').append($('<div class="development_tab_button" id="endeavor_button">'+tooltips['actions_word'].text+'</div>'));

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

  console.log('!!!1')
  getDevelopmentState(); // initializes proper development state if not present
  console.log('!!!2')
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
    src: pathToAssetL('images/reference/reference_back.png'),
  }));

  let locations_list = get_random_draws('Location', false);

  locations_list.sort()

  if (DEBUG_MODE) {console.log('Locations list: '+locations_list)}

  for (let i = 0; i < locations_list.length; i++) {
    // addTimer(function() {
      // console.log('Im checking: '+i+'  '+locations_list[i])
      createLocation(locations_list[i], (i==0) ? true : false);
    // }, 100*i);
  }

  addTimer(function(){
  tippy('.tablinks[type = "location"]', {
    placement: 'bottom-start',
    content: tooltips['location_entry'].text,
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

      if ('group' in settlement_locations[$(this).attr('value')]) {
        let my_group = settlement_locations[$(this).attr('value')].group
        for (var key in settlement_locations) {
            if ((settlement_locations.hasOwnProperty(key))&&!(key == $(this).attr('value'))) {
                if (('group' in settlement_locations[key])&&(settlement_locations[key].group == my_group)) {
                  $('.tablinks[value = "'+key+'"]').addClass('selected')
                  moveItem($(this).attr('type'), key);
                }
            }
        }
      }

    } else {
      if (!(always_on_locations.includes($(this).attr('value'))) && !($(this).attr('value') == 'Exhausted Lantern Hoard')) {
        $(this).removeClass('selected');
        $(this).show();
        moveItem($(this).attr('type'), $(this).attr('value'));

        if ('group' in settlement_locations[$(this).attr('value')]) {
          let my_group = settlement_locations[$(this).attr('value')].group
          for (var key in settlement_locations) {
              if ((settlement_locations.hasOwnProperty(key))&&!(key == $(this).attr('value'))) {
                  if (('group' in settlement_locations[key])&&(settlement_locations[key].group == my_group)) {
                    $('.tablinks[value = "'+key+'"]').removeClass('selected')
                    moveItem($(this).attr('type'), key);
                  }
              }
          }
        }
      }
    }
 });

 $('#container').on({
   mouseenter: function (e) {
     console.log('Show armor set tooltip!'+$(e.target).parent().attr('armor_set'))

     if ($(e.target).hasClass('multi_set')) {
       $('.tooltip_image_armor_set').attr('src', pathToAssetL("images/reference/Armor Sets/"+$(e.target).attr('set').split('#')[$(e.target).attr('set_idx')]+" Armor.jpg", 'localize'))
     } else {
       $('.tooltip_image_armor_set').attr('src', pathToAssetL("images/reference/Armor Sets/"+$(e.target).attr('set')+" Armor.jpg", 'localize'))
     }

     if (!$('#innovations_tab').hasClass('set_hoverd')) {
       addTimer(function(){
         if ($('#innovations_tab').hasClass('set_hoverd')) {
           $('.tooltip_image_armor_set').show("slide", { direction: "left" }, 200);
           $(e.target).parent().parent().find('.location_screen').addClass('shaded')
         }
       }, 300)
     }
     $('#innovations_tab').addClass('set_hoverd')

   },
   mouseleave: function (e) {

     addTimer(function(){
       if (!$('#innovations_tab').hasClass('set_hoverd')) {
         $('.tooltip_image_armor_set').hide("slide", { direction: "left" }, 200);
         $(e.target).parent().parent().find('.location_screen').removeClass('shaded')
       }
     }, 100)
     $('#innovations_tab').removeClass('set_hoverd')
     // $('#innovations_tab').removeClass('tablinks_hoverd')
   },
 }, '.gear_card.set')

 $('#container').on({
     click: function(e) {
       let sets_list = $(e.target).attr('set').split('#')
       console.log('Set attr: '+$(e.target).attr('set'))
       console.log('Set list: '+JSON.stringify(sets_list))
       console.log('Set list length: '+sets_list.length)
       console.log('Idx: '+$(e.target).attr('set_idx'))
       let idx = parseInt($(e.target).attr('set_idx'))
       idx = idx + 1
       if (idx == sets_list.length) {
         idx = 0
       }
       $(e.target).attr('set_idx', idx)
       $('.tooltip_image_armor_set').attr('src', pathToAssetL("images/reference/Armor Sets/"+sets_list[idx]+" Armor.jpg", 'localize'))
     }
   }, '.gear_card.multi_set')

 }, 100+100*locations_list.length);

}

function createLocation(location, default_open=false) {
  let settings = getSettings()
  // let gear_list = Object.assign(window.globals.glossary[settings['language']].gear_list)

  let development = getDevelopmentState()
  let gormchymy_innovations = ['Albedo', 'Nigredo', 'Citrinitas', 'Rubedo']

  let button = $('<button>', {
    class: "tablinks",
    onclick: "openLocation(event, '"+location+"')",
    val: location,
    name: location,
    type: 'location'
  })
  button.html(settlement_locations[location].label);
  $('#development_tabs').append(button);


  if (['Throne', 'Sacred Pool', 'Lantern Hoard', 'Exhausted Lantern Hoard'].includes(location)) {
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

  content.hide()

  let columns = []
  let gear_name = ''

  let num_gear_columns = 0

  for (let j = 1; j<4; j++) {
    if (settlement_locations[location]['gear'][j].length > 0) {
      num_gear_columns = num_gear_columns + 1;
    }
  }

  let gear_column_width = 62.8/num_gear_columns;

  let column = ''

  let cln_cnt = 2

  for (let j = 0; j<4; j++) {
    if (j > 0) {
      if (settlement_locations[location]['gear'][j].length > 0) {
        column = $('<div>', {
          class: "gear_column",
          // id: (j+1),
          id: cln_cnt,
        })
        column.css('width', gear_column_width+'%')
        column.css('left', (38+gear_column_width*(cln_cnt-2))+'%')

        cln_cnt = cln_cnt + 1;

        if (('armor_set' in settlement_locations[location]) && (j == 1)) {
          column.addClass('armor_set')
          column.attr('armor_set', settlement_locations[location]['armor_set'])
        }

        content.append(column);
        // columns.push($('<div>', {
        //   class: "column_"+(j+1)+" gear_column",
        //   id: (j+1),
        // }));
        // content.append(columns[j]);
      }

    } else {
      column = $('<div>', {
        class: "column_"+(j+1),
        id: (j+1),
      });
      content.append(column);
      // columns.push($('<div>', {
      //   class: "column_"+(j+1),
      //   id: (j+1),
      // }));
      // content.append(columns[j]);
    }

    if (j == 0) {
      // columns[j].append($('<img>', {
      column.append($('<img>', {
        class: "location_screen",
        src: pathToAssetL("images/reference/Settlement Locations/"+titleCase(location)+".jpg"),
      }));
    } else {
      if (settlement_locations[location]['gear'][j].length > 0) {
        for (let i = 0; i < settlement_locations[location]['gear'][j].length; i++) {
          gear_name = settlement_locations[location]['gear'][j][i]
          // if (DEBUG_MODE) {console.log('Adding 1: '+i)}
          let max_width = 31
          let normal_height = Math.min(23.75, 95/settlement_locations[location]['gear'][j].length)
          if (num_gear_columns == 1) {
            max_width = 29
          } else if (num_gear_columns == 2) {
            max_width = 27.9
          } else {
            max_width = 25.5
          }

          let element = $('<img>', {
            class: "gear_card",
            src: pathToAssetL("images/reference/Gear/"+gear_name+".jpg"),
            value: gear_name,
            // hover_width: max_width+'%',
            hover_height: max_width +'%',
            normal_height:normal_height+'%'
          })
          // if ((location == 'Skyreef Sanctuary') && !(j == 2)) {
          //   element.css('height', '15.4%')
          // }
          element.css('height', normal_height+'%') //0.93*gear_column_width
          // element.css('width', 'auto')

          element.hover(function () {
              console.log('I hovered this gear!')
              $(this).css('height', $(this).attr('hover_height')) //0.93*gear_column_width
          }, function () {
              $(this).css({
                'height': $(this).attr('normal_height'), //0.93*gear_column_width
                // 'width': 'auto'
              }) //0.93*gear_column_width
          });
          // columns[j].append(element);
          column.append(element);
          if (gear_name in gear_list) {
            let tooltip = ''

            let sets_text = []
            let sets_list = []

            if ('set' in gear_list[gear_name]) {
              // console.log('!!! Gear: '+gear_name)

              for (let i=0; i<gear_list[gear_name]['set'].length; i++) {
                let add = false
                // console.log('Sets '+gear_list[gear_name]['set'][i])
                // console.log('Option: '+settings['expansions']['lion knight'])
                if ((['Dancer', 'Brawler', 'Warlord'].includes(gear_list[gear_name]['set'][i]))&&!(settings['expansions']['lion knight'] == 'Disabled')) {
                  // console.log('!!! LION GUY !!!')
                  add = true
                }
                if ((['Vagabond'].includes(gear_list[gear_name]['set'][i]))&&!(settings['whiteboxes']['before the wall'] == 'Disabled')) {
                  add = true
                }
                if (!['Dancer', 'Brawler', 'Warlord', 'Vagabond'].includes(gear_list[gear_name]['set'][i])) {
                  add = true
                }

                if (add) {
                  sets_text.push(armor_sets[gear_list[gear_name]['set'][i]+' Armor'].label)
                  sets_list.push(gear_list[gear_name]['set'][i])
                }
              }
              // if (sets_list.length == 0) {
              //   delete gear_list[gear_name]['set']
              // }

            }

            if (sets_list.length > 0) {
              tooltip = tooltip + tooltips['set_word'].text.replace('$G$', sets_text.join(', '))+'<br/><br/>'
              element.addClass('set')
              element.attr('set', sets_list.join('#'))
              if (sets_list.length > 1) {
                element.addClass('multi_set')
                element.attr('set_idx', 0)
              }
            }

            if ('gormchymy' in gear_list[gear_name]) {
              let cnt = 1
              for (let ik = 0; ik < gormchymy_innovations.length; ik++) {
                if (development['innovations'].includes(gormchymy_innovations[ik])) {
                  cnt = cnt + 1
                }
              }
              tooltip = tooltip + tooltips['roll_word'].text.replace('$G$', cnt)+'<br/>'
            }

            if (('innovation' in gear_list[gear_name])&&!(gear_list[gear_name]['innovation'] == '')) {
              console.log('Innovation label: '+gear_list[gear_name]['innovation'])
              tooltip = tooltip + tooltips['required_word'].text.replace('$G$', innovations[gear_list[gear_name]['innovation']].label)+'<br/><br/>'
            }

            if (('roll' in gear_list[gear_name])&&!(gear_list[gear_name]['roll'] == '')) {
              console.log('Roll label: '+gear_list[gear_name]['roll'])
              tooltip = tooltip + tooltips['required_word'].text.replace('$G$', gear_list[gear_name]['roll'])+'<br/><br/>'
            }

            if (('resources' in gear_list[gear_name])&&!(gear_list[gear_name]['resources'] == '')) {
              tooltip = tooltip + '<div style="font-size:1.0em;">'+gear_list[gear_name]['resources'].join('<br/>')+'</div'
            }

            let delay = 200
            if (i >= 4) {
              delay = 500
            }
            element.tooltipster({animationDuration: 50,
              contentAsHTML: 'true',
              animation: 'fade',
              content: tooltip,
              position: 'left',
              delay: [delay, 100],
              trigger: 'custom',
              // trackOrigin: true,
              triggerOpen: {
                mouseenter: true,
                click: true,
              },
              triggerClose: {
                click: false,
                mouseleave: true
              }
            })
          }

        }
      }
    }
  }

  $('#settlement_locations_window').append(content);

  $('#settlement_locations_window').append($('<img>', {
    src: "#", //"images/reference/Innovations/"+innovation+".jpg",
    class: "tooltip_image_armor_set"
  }))

  $('.tooltip_image_armor_set').hide()

  tippy('.gear_card.multi_set', {
    placement: 'bottom-start',
    content:tooltips['armor_set_hover'].text,
    duration: 50,
    delay: [600, 100],
    animation: 'shift-away-subtle',
    followCursor: true,
    theme: 'kdm',
  });

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
    placeholder: tooltips['search_word'].text
  }));

  $('#innovations_filter').tooltipster({animationDuration: 50,
    contentAsHTML: 'true',
    animation: 'fade',
    content: tooltips['innovations_filter'].text,
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

  $('#container').on({
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

      $('.tooltip_image_innovation').attr('src', pathToAssetL("images/reference/Innovations/"+$(e.target).val()+".jpg", 'localize'))
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

  // $('.innovations_grid').on('load', function() {
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
  if ('1fr '.repeat(settings['innovation_row_length']) == '') {
    settings['innovation_row_length'] = 5
  }

  $('.innovations_grid').css('grid-template-columns', '1fr '.repeat(settings['innovation_row_length']))

  let innovations_list = get_random_draws('Innovation', false).sort();

  for (let i = 0; i < innovations_list.length; i++) {
    createInnovation(innovations_list[i]);
  }

  tippy('.tablinks[type = "innovation"]', {
    placement: 'bottom-start',
    content:tooltips['innovation_entry'].text,
    duration: 50,
    delay: [600, 100],
    animation: 'shift-away-subtle',
    followCursor: true,
    theme: 'kdm',
  });

  allignItems('innovation');


 let selected_innovations = getDevelopmentState()['innovations']
 let activated = getDevelopmentState()['activated']['innovations']

 console.log('Activated: '+activated)

 if (DEBUG_MODE) {console.log('Selected innovations:'+JSON.stringify(selected_innovations))}

 for (let i = 0; i < selected_innovations.length; i++) {
   if (toShow(selected_innovations[i])) {
     // try {
       showInnovation(selected_innovations[i], initialization=true);
     $('.tablinks[value="'+selected_innovations[i]+'"]').hide();
     if (activated.includes(selected_innovations[i])) {
       $('.innovation_card[value = "'+selected_innovations[i]+'"]').addClass('active')
     }
   // } catch {
   //
   // }
   } else {
     // updateInnovationsState();
   }
 }

 $('#container').on("click", '.tablinks[type = "innovation"]', function(e) {

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
      input.value = '#'+input.value.substr(1).replace(/[^A-Za-z \-]/gi, '')
    } else {
      if ($('#innovations_filter').hasClass('tags')) {
        $('#innovations_filter').removeClass('tags')
      }
      input.value = input.value.replace(/ +(?= )/g,'');
      // input.value = input.value.replace(/[^A-Za-z ,\-]/gi, '')
    }
  }

  if (filter.replace((/ /g, '')) == '#') {
    return
  }

  filter = filter.replace(/\s*,\s*/g, ",");
  filter = filter.split(",");

   console.log('Filter: '+filter)

  let show_innovation = false

  $('#innovations_tab > button:not(.selected)').each(function() {
    let txtValue = $(this).val();
    let tag_labels = []
    for (let i=0; i < innovations[txtValue]['tags'].length; i++) {
      if (innovations[txtValue]['tags'][i] in tags_list) {
        tag_labels.push(tags_list[innovations[txtValue]['tags'][i]].label)
      } else {
        tag_labels.push(innovations[titleCase(innovations[txtValue]['tags'][i]).replace('Of', 'of').replace('The', 'the')].label.toLowerCase())
      }

    }
    console.log('Tag labels: '+tag_labels)
    if (DEBUG_MODE) {console.log('Innovation:'+txtValue)}
    if (filter[0].charAt( 0 ) == '#') {
      // if (innovations[txtValue]['tags'].join(', ').toUpperCase().indexOf(filter[0].substr(1)) > -1) {
      if (tag_labels.join(', ').toUpperCase().indexOf(filter[0].substr(1)) > -1) {

        $(this).css("display", "block");
      } else {
        $(this).css("display", "none");
      }
    } else {
      show_innovation = false
      for (let k = 0; k < filter.length; k++) {
        if (innovations[txtValue].label.toUpperCase().indexOf(filter[k]) > -1) {
          show_innovation = true
        }
      }

      if (show_innovation) {
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

function update_bonuses_list(state='') {
  // if (state == '') {
  state = getDevelopmentState()
  // }

  let settings = getSettings()
  console.log('!!!Campaign try: '+settings['campaign']+'#Hidden')
  if (settings['campaign']+'#Hidden' in innovations) {
    console.log('Adding hidden!')
    state['innovations'].push(settings['campaign']+'#Hidden')
  }

  if (('innovations' in state) && (state['innovations'].length > 0)) {
      form_bonuses_list(state['innovations'], state['events'], state['bookmarks'])
  }
}

function form_bonuses_list(innovation_names, event_names, bookmark_names) {
  let set = {}
  let keys = []

  for (let i=0; i<innovation_names.length; i++) {
    if ((toShow(innovation_names[i])||(innovation_names[i].includes('#Hidden')))&&('passive' in innovations[innovation_names[i]])) {
      keys = Object.keys(innovations[innovation_names[i]]['passive'])
      for (let j=0; j<keys.length; j++) {
        if (!(keys[j] in set)) {
          set[keys[j]] = []
        }
        set[keys[j]] = set[keys[j]].concat(innovations[innovation_names[i]]['passive'][keys[j]].map(function(e) {
          if (!innovations[innovation_names[i]].label.includes('#')) {
              e += ' <i class="event_sup">['+innovations[innovation_names[i]].label+']</i>';
          }
          return e;
        }))
      }
    }
  }

  for (let i=0; i<event_names.length; i++) {
    if (toShow(event_names[i])&&('passive' in settlement_events[event_names[i]])) {
      keys = Object.keys(settlement_events[event_names[i]]['passive'])
      for (let j=0; j<keys.length; j++) {
        if (!(keys[j] in set)) {
          set[keys[j]] = []
        }
        set[keys[j]] = set[keys[j]].concat(settlement_events[event_names[i]]['passive'][keys[j]].map(function(e) {
          if (!settlement_events[event_names[i]].label.includes('#')) {
            e += ' <i class="event_sup">['+settlement_events[event_names[i]].label+']</i>';
          }
          return e;
        }))
      }
    }
  }

  for (let i=0; i<bookmark_names.length; i++) {
    if (toShow(bookmark_names[i])&&('passive' in bookmarks[bookmark_names[i]])) {
      keys = Object.keys(bookmarks[bookmark_names[i]]['passive'])
      for (let j=0; j<keys.length; j++) {
        if (!(keys[j] in set)) {
          set[keys[j]] = []
        }
        set[keys[j]] = set[keys[j]].concat(bookmarks[bookmark_names[i]]['passive'][keys[j]].map(function(e) {
          if (!bookmarks[bookmark_names[i]].label.includes('#')) {
            e += ' <i class="event_sup">['+bookmarks[bookmark_names[i]].label+']</i>';
          }
          return e;
        }))
      }
    }
  }

  // console.log('Set: '+JSON.stringify(set))

 $('#severe-table0.summary').empty()
 let result = $('#severe-table0.summary')

 let categories = {
               'all': tooltips['bonusses_summary'].text,
               'settlement': '<img style="display: inline-block;width:3vmin;" src="'+pathToAssetL('images/settlement/settlement.png')+'"/> '+tooltips['settlement_word'].text+':',
               'newborn': tooltips['newborns_word'].text+':',
               'departing': tooltips['departing_word'].text+':',
               'hunt': '<img style="display: inline-block;width:3vmin;vertical-allign:middle;" src="'+pathToAssetL('images/hunt_icon.png')+'"/> '+tooltips['hunt_word'].text+':',
               'showdown': '<img style="display: inline-block;width:3vmin;vertical-allign:middle;" src="'+pathToAssetL('images/hunt/starvation_icon.png')+'"/> '+tooltips['showdown_word'].text+':',
               'actions': tooltips['survival_actions_word'].text+':',
              }

let categories_order

if (document.title == 'hunt') {
   categories_order = ['all', 'departing', 'hunt', 'settlement', 'newborn', 'showdown', 'actions']
 } else if (document.title.indexOf('showdown')>-1) {
   categories_order = ['all', 'showdown', 'actions', 'settlement', 'newborn', 'departing', 'hunt']
 } else {
   categories_order = ['all', 'settlement', 'newborn', 'departing', 'hunt', 'showdown', 'actions']
 }



  // let categories_order = Object.keys(categories)

  let set_keys = Object.keys(set)

  set_keys.sort(function(a, b) {
    return categories_order.indexOf(a) - categories_order.indexOf(b);
  })

  let cnts = {}
  let cnts_labels = {}
  let cur
  let cur_label
  let cur_cnt

  // console.log('Bonuses set: '+JSON.stringify(set))
  if ((set == {})) {
    return ''
  }

  if (!('all' in set)) {
    result.append($('<div id="summary-title" class="big">'+categories['all']+'</div>'))
  }

  // console.log('Alls: '+JSON.stringify(set))
  let toggle = true

  for (let i=0; i<set_keys.length; i++) {
    set[set_keys[i]].sort()
    for (let j=0; j<set[set_keys[i]].length; j++) {
      if (set[set_keys[i]][j].includes('$')) {
        cur = set[set_keys[i]][j].split(' <i')[0]
        cur_cnt = getNum(cur)
        cur_label = cur.replace(/\$.*\$/, 'XXX')
        // console.log('Proceesed string: '+cur+' '+cur_cnt+ ' '+cur_label)
        if (!(set_keys[i]+'_'+cur_label in cnts)) {
          cnts[set_keys[i]+'_'+cur_label] = 0
        }
        cnts[set_keys[i]+'_'+cur_label] = cnts[set_keys[i]+'_'+cur_label] + cur_cnt
        console.log('Current key: '+set_keys[i]+' '+set[set_keys[i]][j])
        if (!(set_keys[i]+'_'+cur_label in cnts_labels)) {
          cnts_labels[set_keys[i]+'_'+cur_label] = []
        }
        if (set[set_keys[i]][j].includes(['['])) {
          cnts_labels[set_keys[i]+'_'+cur_label].push(set[set_keys[i]][j].split('[')[1].split(']')[0])
        } else {
          // cnts_labels[set_keys[i]+'_'+cur_label].push(set[set_keys[i]][j])
        }

        set[set_keys[i]][j] = cur_label
      }
    }
    set[set_keys[i]] = removeDuplicates(set[set_keys[i]])
  }

  // console.log('Current cnts: '+JSON.stringify(cnts))

  // set_keys.sort()
  let text
  for (let i=0; i<set_keys.length; i++) {
    if (set_keys[i] == 'all') {
      result.append($('<div id="summary-title" class="big">'+categories[set_keys[i]]+'</div>'))
    } else {
        if (toggle) {
          result.append($('<div id="summary-title" style="background:rgba(100, 100, 100, .1);">'+categories[set_keys[i]]+'</div>'))
          toggle = false
        } else {
          toggle = true
          result.append($('<div id="summary-title">'+categories[set_keys[i]]+'</div>'))

        }
    }

    for (let j=0; j<set[set_keys[i]].length; j++) {
      text = set[set_keys[i]][j]
      if (set_keys[i]+'_'+text in cnts) {
        // console.log('To replace: '+text)
        console.log('Text: '+set_keys[i]+'_'+text)
        console.log('Labels: '+JSON.stringify(Object.keys(cnts_labels)))
        text = text.replace('XXX', cnts[set_keys[i]+'_'+text])+(cnts_labels[set_keys[i]+'_'+text]==''?'':' <i class="event_sup">['+cnts_labels[set_keys[i]+'_'+text].join(', ')+']</i>')
      }
      // if (set_keys[i] == 'newborn') {
      //   text = text.replace('Gain', 'All <b>newborn</b> survivors gain ')
      // }
      // if (set_keys[i] == 'departing') {
      //   text = text.replace('Gain', 'All <b>departing</b> survivors gain ')
      // }
      // if (set_keys[i] == 'settlement') {
      //   text = text.replace('Survival Limit +', '<b>Survival Limit</b> +')
      // }
      if (toggle) {
        result.append($('<div id="summary-text"> - '+text+'</div>'))
      } else {
        result.append($('<div id="summary-text" style="background:rgba(100, 100, 100, .1);"> - '+text+'</div>'))
      }
    }
    // result.append('<hr/>')
  }

  return result
}

function getNum(str) {
  return  parseInt(str.substring(
    str.indexOf("$") + 1,
    str.lastIndexOf("$")
  ))
  // return  Number.parseInt(str.match(/\$.*\$/))
}

function countDuplicates(original) {

  let counts = {},
    duplicate = 0;
  original.forEach(function(x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  for (var key in counts) {
    if (counts.hasOwnProperty(key)) {
      counts[key] > 1 ? duplicate++ : duplicate;
    }
  }

  return duplicate;

}

function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b)
};

function createInnovation(innovation) {
  let button = $('<button>', {
    class: "tablinks",
    val: innovation,
    type: 'innovation'
  })


  button.html(innovations[innovation].label.replace(' Of ', ' of ').replace(' The ', ' the '));
  $('#innovations_tab').append(button);

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
    src: pathToAssetL('images/reference/Innovations/'+innovationName+'.jpg', 'localize'),
  });

  img.addClass(getColorTag(innovationName))
  img.css({
    'border':'0.1rem solid '+tags_list[getColorTag(innovationName)].color,
  })

  img.hide();

  if (($('.innovation_card').length) && (!initialization)){
		img.insertBefore('.innovation_card:first');
	} else {
		$('.innovations_grid').append(img);
	}

  // img.on('load', function() {
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
    content:tooltips['innovation_card'].text,
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
      // updateActions()
    } else {
      $(this).removeClass('active')
      let state = getDevelopmentState();
      let index = state['activated']['actions'].indexOf($(this).attr('value'));
      if (index !== -1) {
        state['activated']['actions'].splice(index, 1);
      }
      setDevelopmentState(state)
      // updateActions()
    }
  });

  // $('#container').on("dblclick", '.action_card', function(e) {
  //   if (!$(this).hasClass('active')) {
  //     $(this).addClass('active')
  //     let state = getDevelopmentState();
  //     console.log('State prepared: '+ JSON.stringify(state))
  //     state['activated']['actions'].push($(this).attr('value'))
  //     console.log('State prepared: '+ JSON.stringify(state))
  //     setDevelopmentState(state)
  //   } else {
  //     $(this).removeClass('active')
  //     let state = getDevelopmentState();
  //     let index = state['activated']['actions'].indexOf($(this).attr('value'));
  //     if (index !== -1) {
  //       state['activated']['actions'].splice(index, 1);
  //     }
  //     setDevelopmentState(state)
  //   }
  // });

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
        // if (development['activated']['actions'].includes(development['locations'][i])) {
        if (checkActiveAction(development['locations'][i], 'locations')) {
          $('.action_card[value = "'+development['locations'][i]+'"]').addClass('active')
        }

        if ('num_actions' in settlement_locations[development['locations'][i]]) {
          for (let j = 1; j < settlement_locations[development['locations'][i]]['num_actions']; j++) {
            addAction(development['locations'][i]+'_'+j, 'location')
            // if (development['activated']['actions'].includes(development['locations'][i]+'_'+j)) {
            if (checkActiveAction(development['locations'][i], 'locations', j)) {
              $('.action_card[value = "'+development['locations'][i]+'_'+j+'"]').addClass('active')
            }

          }
        }
      }
    }
  }

  for (let i = 0; i < development['events'].length; i++) {
    if (('action' in settlement_events[development['events'][i]]) && settlement_events[development['events'][i]]['action']) {
      if (toShow(development['events'][i])) {
        console.log('Adding event: '+development['events'][i])
        addAction(development['events'][i], 'event')
        // if (development['activated']['actions'].includes(development['locations'][i])) {
        if (checkActiveAction(development['events'][i], 'events')) {
          $('.action_card[value = "'+development['events'][i]+'"]').addClass('active')
        }

        if ('num_actions' in settlement_events[development['events'][i]]) {
          for (let j = 1; j < settlement_events[development['events'][i]]['num_actions']; j++) {
            addAction(development['events'][i]+'_'+j, 'event')
            // if (development['activated']['actions'].includes(development['locations'][i]+'_'+j)) {
            if (checkActiveAction(development['events'][i], 'events', j)) {
              $('.action_card[value = "'+development['events'][i]+'_'+j+'"]').addClass('active')
            }

          }
        }
      }
    }
  }

  let tag = ''
  for (let i = 0; i < development['innovations'].length; i++) {
    if (('action' in innovations[development['innovations'][i]]) && innovations[development['innovations'][i]]['action']) {
      let tag = getColorTag(development['innovations'][i])
      if (toShow(development['innovations'][i])) {
        console.log('Adding innovation: '+development['innovations'][i])
        addAction(development['innovations'][i], 'innovation', tag)
        if (checkActiveAction(development['innovations'][i], 'innovations')) {
          $('.action_card[value = "'+development['innovations'][i]+'"]').addClass('active')
        }
        $('.action_card[value = "'+development['innovations'][i]+'"]').addClass(tag)
        $('.action_card[value = "'+development['innovations'][i]+'"]').css({
          'border':'0.1rem solid '+tags_list[tag].color,
        })
        if ('num_actions' in innovations[development['innovations'][i]]) {
          for (let j = 1; j < innovations[development['innovations'][i]]['num_actions']; j++) {
            addAction(development['innovations'][i]+'_'+j, 'innovation', tag)
            if (checkActiveAction(development['innovations'][i], 'innovations', j)) {
              $('.action_card[value = "'+development['innovations'][i]+'_'+j+'"]').addClass('active')
            }
            $('.action_card[value = "'+development['innovations'][i]+'"]').addClass(tag)
            $('.action_card[value = "'+development['innovations'][i]+'"]').css({
              'border':'0.1rem solid '+tags_list[tag].color,
            })
          }
        }
      }
    }
  }

  // $('.actions_grid').on('load', function () {
    addTimer(function() {var grid = new Muuri('.actions_grid', {
      dragEnabled: false,
      layoutOnInit: false,
      layoutDuration: 200,
      layout: {
        round: false,
        // horizontal: true,
        fillGaps: true,
      },
      sortData: {
        id: function(item, element) {
          if (element.children[0].children[0].classList.contains('active')) {
            return 10.
          } else {
            if (element.children[0].children[0].classList.contains('event')) {
              return 2.
            }
            if (element.children[0].children[0].classList.contains('location')) {
              return 1.
            } else {
              if (element.children[0].children[0].classList.contains('art')) {
                return 3.
              } else if (element.children[0].children[0].classList.contains('education')) {
                return 4.
              } else if (element.children[0].children[0].classList.contains('faith')) {
                return 5.
              } else if (element.children[0].children[0].classList.contains('home')) {
                return 6.
              } else if (element.children[0].children[0].classList.contains('music')) {
                return 7.
              } else if (element.children[0].children[0].classList.contains('science')) {
                return 8.
              } else if (element.children[0].children[0].classList.contains('principle')) {
                return 9.
              } else {
                return 2
              }

            }
          }
        }
      }
    });
    grid.sort('id', {layout: 'instant'})
  }, 200)
// })
 // addTimer(function() {window.dispatchEvent(new Event('resize'))}, 300)

}

function addAction(name, type, tag = '') {

name = name+''

let item = $('<div>', {
  class: 'item '+type,
  id: 'action-card'
})

let item_content = $('<div>', {
  class: 'item-content',
  id: 'action-card'
})

let img = $('<img>', {
  class: 'action_card use-hover '+type,
  value: name,
  src: pathToAssetL('images/settlement/actions/'+name+'.jpg'),
});

item_content.append(img)
item.append(item_content)

// img.hide();

console.log('!!! Name '+name)

let name_text
if (type == 'innovation') {
  name_text = innovations[name.split('_')[0]].label
}
if (type == 'location') {
  name_text = settlement_locations[name.split('_')[0]].label
}
if (type == 'event') {
  name_text = settlement_events[name.split('_')[0]].label
}

 $('.actions_grid').append(item)

 img.on('load', function() {
   $(this).delay(50).fadeIn(300);
 })

 console.log('Name2: '+name_text)
 let content = tooltips['source_word'].text.replace('$G$', name_text)

 if (!(tag == '')) {
   content = content + ' <b style="color:'+tags_list[tag].color+';">('+tags_list[tag].label+')</b>'
 }

 $('.action_card[value="'+name+'"]').tooltipster({
   animationDuration: 50,
   contentAsHTML: 'true',
   animation: 'fade',
   content: content,
   position: 'top',
   //   // timer: 1500,
   delay: [0, 0],
   //   plugins: ['follower'],
   // })
 })

 tippy('.action_card[value="'+name+'"]', {
   placement: 'bottom-start',
   content: tooltips['action_card'].text,
   duration: 50,
   delay: [600, 100],
   animation: 'shift-away-subtle',
   followCursor: true,
   theme: 'kdm',
   // updateDuration: 400,
 });
}

function checkActiveAction(action, type, count = 0) {
  let development = getDevelopmentState();
  let active = false

  let source = innovations
  let condition_obj = 'none'
  let condition = true

  let action_num = action

  if (count > 0) {
    action_num = action + '_'+count
  }

  if (development['activated']['actions'].includes(action_num)) {
    active = true
  } else {
    if (type == 'innovations') {
      source = innovations
    }
    if (type == 'locations') {
      source = settlement_locations
    }
    if (type == 'events') {
      source = settlement_events
    }

    if ((type == 'innovations')&&(development['disables'].length > 0)) {
      // console.log('!!Innovation: '+source[action].label)
      // console.log('Innovation tags: '+JSON.stringify(source[action]['tags']))
      // console.log('Disables: '+JSON.stringify(development['disables']))
      // console.log('Result: '+development['disables'].filter(value => source[action]['tags'].includes(value)))

      if (!(development['disables'].filter(value => source[action]['tags'].includes(value))=='')) {
        active = true
      }
    }

    condition = true
    if ((!active)&&('action_enabler' in source[action])) {
      console.log('Checking enabler: '+action+'_'+count)
      if ((count == 0) && !('num_actions' in source[action])) {
        condition_obj = source[action]['action_enabler']
      } else {
        if (count in source[action]['action_enabler']) {
          condition_obj = source[action]['action_enabler'][count]
        }
      }

      if (!(condition_obj == 'none')) {
        console.log('Processing conditions.')
        if ('innovation' in condition_obj) {
          for (let j=0; j<condition_obj['innovation'].length; j++) {
            if (development['innovations'].includes(condition_obj['innovation'][j])) {
              condition = false
            }
          }
        }
        if ('location' in condition_obj) {
          for (let j=0; j<condition_obj['location'].length; j++) {
            if (development['locations'].includes(condition_obj['location'][j])) {
              condition = false
            }
          }
        }
      } else {
        condition = false
      }

      if (condition) {
        active = true
      }
    }

    condition = true
    if ((!active)&&('action_disabler' in source[action])) {
      console.log('Checking: '+action+'_'+count)
      if ((count == 0) && !('num_actions' in source[action])) {
        condition_obj = source[action]['action_disabler']
      } else {
        if (count in source[action]['action_disabler']) {
          condition_obj = source[action]['action_disabler'][count]
        }
      }

      if (!(condition_obj == 'none')) {
        console.log('Processing conditions.')
        if ('innovation' in condition_obj) {
          for (let j=0; j<condition_obj['innovation'].length; j++) {
            if (!development['innovations'].includes(condition_obj['innovation'][j])) {
              condition = false
            }
          }
        }
        if ('location' in condition_obj) {
          for (let j=0; j<condition_obj['location'].length; j++) {
            if (!development['locations'].includes(condition_obj['location'][j])) {
              condition = false
            }
          }
        }
      } else {
        condition = false
      }

      if (condition) {
        active = true
      }
    }


  }

  return active
}

function getColorTag(name) {
  let tag = 'none'
  let tags = innovations[name]['tags']

  let tag_types = [
    'starting',
    'other',
    'science',
    'art',
    'faith',
    'home',
    'music',
    'education',
    'principle',
  ]

  let idx = tag_types.indexOf(innovations[name]['tags'][0])

  return tag_types[idx]
}

// #### General purpose functions
function getDevelopmentState() {
  let development_state = JSON.parse(localStorage.getItem('development'));
  // console.log('Get state: '+JSON.stringify(development_state))

  let updated = false
  // check if development has the right format and is stored in local storage, and if not initialize it
  if ((development_state == null) || (development_state == 'undefined')) {
    development_state = {}
    development_state['locations'] = always_on_locations
    development_state['innovations'] = [];
    development_state['bookmarks'] = [];
    development_state['activated'] = {};
    development_state['events'] = [];
    development_state['disables'] = [];
    development_state['activated']['innovations'] = [];
    development_state['activated']['actions'] = [];
    updated = true
  } else {
    if (!('locations' in development_state)) {
      development_state['locations'] = always_on_locations
      updated = true
    }
    if (development_state['locations'].indexOf('Sacreed Pool') > -1) {
      development_state['locations'][development_state['locations'].indexOf('Sacreed Pool')] = 'Sacred Pool'
    }
    if (!('events' in development_state)) {
      development_state['events'] = []
      updated = true
    }
    if (!('bookmarks' in development_state)) {
      development_state['bookmarks'] = []
      updated = true
    }
    if (!('disables' in development_state)) {
      development_state['disables'] = []
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

  // console.log('Dev state: '+JSON.stringify(development_state))

  if (updated) {
    setDevelopmentState(development_state)
  }

  return development_state
}

function setDevelopmentState(development_state) {
  console.log('!!! Updating state: '+JSON.stringify(development_state))
  console.log('!!! Current state: '+localStorage.getItem('development'))
  development_state['locations'] = development_state['locations'].filter(function(item, pos) {
    return development_state['locations'].indexOf(item) == pos;
  })
  development_state['innovations'] = development_state['innovations'].filter(function(item, pos) {
    return development_state['innovations'].indexOf(item) == pos;
  })

  development_state['bookmarks'] = development_state['bookmarks'].filter(function(item, pos) {
    return development_state['bookmarks'].indexOf(item) == pos;
  })

  development_state['activated']['innovations'] = development_state['activated']['innovations'].filter(function(item, pos) {
    return development_state['activated']['innovations'].indexOf(item) == pos;
  })
  development_state['activated']['actions'] = development_state['activated']['actions'].filter(function(item, pos) {
    return development_state['activated']['actions'].indexOf(item) == pos;
  })
  // console.log('State to write: '+ JSON.stringify(development_state['activated']))

  localStorage.setItem('development', JSON.stringify(development_state))

  try {
    update_bonuses_list(development_state);
  } catch (e) {

  }
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
  if (name in settlement_locations) { //!($.inArray(name, Object.keys(settlement_locations)) == -1)) {
    list = settlement_locations
    visibility = ['All content']
    console.log('It is location.')
  }
  else if (name in bookmarks) {
    list = bookmarks
    visibility = ['All content']
    console.log('It is location.')
  }
  else if (name in innovations) {
    list = innovations
    visibility = ['All content']
    console.log('It is innovation.')
  } else if (name in settlement_events) {
    list = settlement_events
    visibility = ['All content']
    console.log('It is settlement event.')
  } else {
    console.log('Can not say what it is...')
    return false
  }

  let settings = getSettings();

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
  setDevelopmentState(development_state)
}

function getHuntInnovationEffects() {
  let development_state = getDevelopmentState();

  let result = {}
  let innovation

  for (let i=0; i<development_state['innovations'].length; i++) {
    innovation = development_state['innovations'][i]

    if (('passive' in innovations[innovation]) && ('hunt' in innovations[innovation]['passive'])) {
      // it is assumed here that there is only 1 hunt effect per innovation
      // console.log('Adding text: '+'['+innovation+'] '+ innovations[innovation]['passive']['hunt'][0])
      result[innovation] = ''+ innovations[innovation]['passive']['hunt'][0]+'<sup class="event_sup">['+innovation+']</sup>'
    }

  }

  return result
}

function hasInnovation(name) {
  let development_state = getDevelopmentState();

  if (development_state['innovations'].includes(name)) {
    return true
  } else {
    return false
  }
}

function addInnovation(name) {
  addElement(name, 'innovations')
}
function addSettlementLocation(name) {
  addElement(name, 'locations')
}
function addBookmark(name) {
  addElement(name, 'bookmarks')
}

function removeElement(name, type) {
  let development_state = getDevelopmentState();

  if (development_state[type].includes(name)) {
    development_state[type].splice(development_state[type].indexOf(name), 1);
  }
  setDevelopmentState(development_state)
}
function removeInnovation(name) {
  removeElement(name, 'innovations')
}
function removeSettlementLocation(name) {
  removeElement(name, 'locations')
}
function removeBookmark(name) {
  removeElement(name, 'bookmarks')
}

function init_bookmarks() {
  $('#container').append($('<img>',{
    src: pathToAssetL('#'),
    id: 'bookmark_tooltip'
  }))
  $('#bookmark_tooltip').hide();

  $('#container').on({
    mouseenter: function (e) {
      if ($(e.target).closest('.bookmark').hasClass('hover_tooltip')) {
        $('#bookmark_tooltip').attr('src', pathToAssetL('images/reference/Bookmarks/'+$(e.target).val()+'.jpg'))
        window.bookmark_timer = addTimer(function(){
          $('#img').addClass('darkened')
          $('#bookmark_tooltip').show("slide", { direction: "down" }, 200);
        }, 400)
      }
    },
    mouseleave: function (e) {
      if ($(e.target).closest('.bookmark').hasClass('hover_tooltip')) {
        console.log('leave')
        clearTimer(window.bookmark_timer)
        $('#bookmark_tooltip').hide("slide", { direction: "down" }, 100);
        $('#img').removeClass('darkened')
      }
    },
  }, '.bookmark')

  update_bookmarks()
}
function update_bookmarks() {
  let myself = sessionStorage.getItem('target')
  $('.bookmark').remove()
  let current_bookmarks = getDevelopmentState()['bookmarks']
  let elems = []
  let cur_height = 45
  for (let i = 0; i < current_bookmarks.length; i++) {
    let current = current_bookmarks[i]
    let cur_obj = getTerms('bookmarks')[current]
    if (!cur_obj.targets.includes(myself)) {
      continue
    }
    let elem = $('<button>',{
      class: 'bookmark',
      value: current,
    })
    elem[0].innerHTML = cur_obj.button_text

    if ('width' in cur_obj) {
      elem.css('width', cur_obj.width)
    } else {
      elem.css('width', '10%')
    }
    elem.css('text-align', 'left')

    if ('hover_tooltip' in cur_obj) {
      elem.addClass('hover_tooltip')
    }
    elems.push(elem)
    elem[0].style.visibility = "hidden";
  }
  $(container).append(elems)

  for (let i=0; i<elems.length; i++) {
    elems[i].css('top', cur_height+'%')
    cur_height += 2 + elems[i][0].clientHeight/window.screen.height*100
    elems[i][0].style.visibility = "";
  }
}
