const { get_random_draws, settlement_locations, gear_list, innovations } = require('./../ui/glossary')
const { cdnUrl } = require('./../ui/template-renderer')

module.exports = {
  addDevelopment,
  openLocation
}

const always_on_locations = ['Throne', 'Lantern Hoard'];

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
      // $(this).removeClass('active');
    }
  });

  // Locations window
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
  // let locations_list = ['AAA']

  console.log('Locations list: '+locations_list)

  for (let i = 0; i < locations_list.length; i++) {
    createLocation(locations_list[i], (i==0) ? true : false);
  }

  allignItems('location');

  window.openLocation = openLocation;
  window.showInnovation = showInnovation;
  window.filterInnovations = filterInnovations;

  $('.gear_card').hover(function () {
    console.log($(this).parent())
    let card = $(this)
    $(this).addClass('hoverd')
      if((!card.next().is('.gear_card'))||(!card.prev().is('.gear_card'))) {
          console.log('Last!')
          card.parent().scrollTo(card, duration = 500);
      }
    }, function(){
      console.log('22!!!')
      $(this).removeClass('hoverd')
  });

  $(document).on("dblclick", '.tablinks', function(e) {
    if (!$(this).hasClass('selected')) {
      $(this).addClass('selected')
      if ($(this).attr('type') == 'innovation') {
        showInnovation($(this).attr('value'));
        $(this).hide();
      }
    } else {
      if (!(always_on_locations.includes($(this).attr('value')))) {
        $(this).removeClass('selected')
        // $('.innovation_card[value="'+$(this).attr('value')+'"]').fadeOut(300, function() {
        //   $('.innovation_card[value="'+$(this).attr('value')+'"]').remove();
        // });
        $(this).show();
      }
    }
    moveItem($(this).attr('type'), $(this).attr('value'));
 });

 $(document).on("dblclick", '.innovation_card', function(e) {
   $('.tablinks[value="'+$(this).attr('value')+'"]').removeClass('selected')
   $('.tablinks[value="'+$(this).attr('value')+'"]').show();
   $('.innovation_card[value="'+$(this).attr('value')+'"]').fadeOut(300, function() {
     $('.innovation_card[value="'+$(this).attr('value')+'"]').remove();
   });

   moveItem('innovation', $(this).attr('value'));
  });

  $(document).on("click", '.innovation_card', function(e) {
    if (!$('.innovation_card[value="'+$(this).attr('value')+'"]').hasClass('active')) {
      $('.innovation_card[value="'+$(this).attr('value')+'"]').addClass('active')
    } else {
      $('.innovation_card[value="'+$(this).attr('value')+'"]').removeClass('active')
    }
   });

   $(document).on("click", '.gear_card', function(e) {
     if (!$('.gear_card[value="'+$(this).attr('value')+'"]').hasClass('active')) {
       $('.gear_card[value="'+$(this).attr('value')+'"]').addClass('active')
     } else {
       $('.gear_card[value="'+$(this).attr('value')+'"]').removeClass('active')
     }
    });

 // Innovations window
 $('#settlement_locations_window').append($('<div>', {
   // style: 'opacity:.9;',
   id: 'innovations_tab',
   class: 'tab',
 }));

 $('#settlement_locations_window').append($('<input>', {
   // style: 'opacity:.9;',
   id: "innovations_filter",
   type: 'search',
   onkeyup: "filterInnovations()",
   onsearch: "filterInnovations(true)",
   placeholder: "Search... (# for tags)"
 }));

 $('#innovations_filter').hide();

 $('#settlement_locations_window').append($('<div>', {
   // style: 'opacity:.9;',
   class: 'innovations_grid_wrapper',
 }));

 $('innovations_grid_wrapper').hide();

 $('.innovations_grid_wrapper').append($('<div>', {
   // style: 'opacity:.9;',
   class: 'innovations_grid',
 }));

 let innovations_list = get_random_draws('Innovation', false).sort();

 for (let i = 0; i < innovations_list.length; i++) {
   createInnovation(innovations_list[i]);
 }

 allignItems('innovation');

 $('innovations_grid').sortable();

let selected_innovations = getCurrentItems('innovation', true)

for (let i = 0; i < selected_innovations.length; i++) {
  showInnovation(selected_innovations[i]);
  $('.tablinks[value="'+selected_innovations[i]+'"]').hide();
}

 openWindow("locations_button")

} // end of addDevelopment

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
    console.log('Innovation:'+txtValue)
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

function openWindow(type) {
  // Hide all old elements
  $('#development_tabs').hide();
  $('#innovations_tab').hide();
  $('.innovations_grid_wrapper').hide();
  $('#innovations_filter').hide();
  $(".tabcontent.visible").hide();

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
}

function allignItems(type) {
  let development_status = JSON.parse(localStorage.getItem('development'));
  let settings = JSON.parse(sessionStorage.getItem('settings'));

  console.log('Dev status'+development_status)

  let updated = false
  // check if selected locations list is stored in local storage, and if not initialize it
  if ((development_status == null) || (development_status == 'undefined')) {
    development_status = {}
    development_status['locations'] = always_on_locations
    development_status['innovations'] = [];
    updated = true
  } else {
    if (!('locations' in development_status)) {
      development_status['locations'] = always_on_locations
      updated = true
    }
    if (!('innovations' in development_status)) {
      development_status['innovations'] = []
      updated = true
    }
  }

  if (updated) {
    localStorage.setItem('development', JSON.stringify(development_status))
  }

  let selected_items = development_status[type+'s'];
  let items_list = getCurrentItems(type)

  for (let i = items_list.length - 1; i >= 0 ; i--) {
    if (selected_items.includes(items_list[i])) {
      $('button.tablinks[value="'+items_list[i]+'"]').addClass('selected')
      $('button.tablinks[value="'+items_list[i]+'"]').detach().insertBefore('button.tablinks[type="'+type+'"]:first');
    }

  }
  if (type == 'location') {
    $('button.tablinks.selected:first').attr('id', "defaultOpen")
  }

  // openLocation($('button#defaultOpen'))

} // end of alignItems

function moveItem(type, name) {

  if ((type == 'location')) {
    if (always_on_locations.includes(name)) {
      return
    }
  }

  let development_status = JSON.parse(localStorage.getItem('development'));
  let this_element = $('button.tablinks[type="'+type+'"][value="'+name+'"]')
  let needed_value = null
  var cnt = 0;
  this_element.addClass('moving')
  if (this_element.hasClass('selected')) {
    development_status[type+'s'].push(name)
    $('button.tablinks[type="'+type+'"].selected:not(.moving)').each(function () {
      if ($(this).attr('value') < name) {
        needed_value = $(this).attr('value')
      }
      cnt = cnt + 1;
    })

  } else {
    let index = development_status[type+'s'].indexOf(name);
    if (index !== -1) {
      development_status[type+'s'].splice(index, 1);
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
      this_element.detach().insertBefore('button.tablinks[type="'+type+'"]:not(.selected):not(.moving):first');
    }

  } else {
    this_element.detach().insertAfter('button.tablinks[type="'+type+'"][value="'+needed_value+'"]');
  }

  if (this_element.hasClass('selected')) {
    this_element.parent().scrollTo($('button.tablinks[type="'+type+'"]:first'), duration = 500);
  }

  this_element.removeClass('moving')

  localStorage.setItem('development', JSON.stringify(development_status))

} // end of moveLocation

function getCurrentItems(type, selected=false) {
  let items = [];

  if (selected) {
    $('button.tablinks[type="'+type+'"].selected').each(function () {
      items.push($(this).attr('value'))
    })
  } else {
    $('button.tablinks[type="'+type+'"]').each(function () {
      items.push($(this).attr('value'))
    })
  }


  return items

}

function createInnovation(innovation) {
  let button = $('<button>', {
    class: "tablinks",
    // onclick: "showInnovation(event, '"+innovation+"')",
    // id: default_open ? "defaultOpen" : "",
    val: innovation,
    type: 'innovation'
  })
  button.html(titleCase(innovation).replace(' Of ', ' of ').replace(' The ', ' the '));
  $('#innovations_tab').append(button);

  let img_element = $('<img>', {
    src: "images/reference/Innovations/"+innovation+".jpg",
    class: "tooltip_image_innovation"
  })

  button.tooltipster({
    contentAsHTML: true,
    animation: 'grow',
    // content: '<img class="tooltip_image_innovation" src="images/reference/Innovations/'+innovation+'.jpg"/>',
    content: img_element,
    position: 'right',
    delay: [1500, 100],
    maxWidth: 200,
    trigger: 'custom',
    triggerOpen: {
      mouseenter: true,
      click: true
    },
    triggerClose: {
      click: true,
      mouseleave: true
    }
  });




}

function createLocation(location, default_open=false) {
  let button = $('<button>', {
    class: "tablinks",
    onclick: "openLocation(event, '"+location+"')",
    // id: default_open ? "defaultOpen" : "",
    val: location,
    type: 'location'
  })
  button.html(titleCase(location));
  $('#development_tabs').append(button);

  // button.hide();

  // before 'Tabard',
  // beyond 'Hard Breastplate', 'Cloth Leggings'
  if (['Throne', 'Sacreed Pool', 'Lantern Hoard', 'Exhausted Lantern Hoard'].includes(location)) {
    let settings = JSON.parse(sessionStorage.getItem('settings'));

    if ((settings['whiteboxes']['before the wall'] == 'Enabled') && !(settlement_locations[location]['gear']['1'].includes('Tabard'))) {
      settlement_locations[location]['gear']['1'].push('Tabard')
    }
    if (settings['whiteboxes']['before the wall'] == 'Disabled') {
        var index = settlement_locations[location]['gear']['1'].indexOf('Tabard');
        if (index !== -1) settlement_locations[location]['gear']['1'].splice(index, 1);
    }
    //  else {
    //   var index = settlement_locations[location]['gear']['1'].indexOf('Tabard');
    //   if (index !== -1) settlement_locations[location]['gear']['1'].splice(index, 1);
    // }

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
    //  else {
    //   var index = settlement_locations[location]['gear']['1'].indexOf('Hard Breastplate');
    //   if (index !== -1) settlement_locations[location]['gear']['1'].splice(index, 1);
    //   index = settlement_locations[location]['gear']['1'].indexOf('Cloth Leggings');
    //   if (index !== -1) settlement_locations[location]['gear']['1'].splice(index, 1);
    // }
  }


  console.log('Location gear:'+settlement_locations[location]['gear']);

  let content = $('<div>', {
    class: "tabcontent",
    id: location,
  });

  let columns = []
  let gear_name = ''
  // let element = ''

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
          console.log('Adding 1: '+i)
          let element = $('<img>', {
            class: "gear_card",
            src: cdnUrl("images/reference/Gear/"+gear_name+".jpg"),
            value: gear_name
          })
          columns[j].append(element);
          if (gear_name in gear_list) {
            let tooltip = ''
            if ('innovation' in gear_list[gear_name]) {
              tooltip = tooltip + '<b style="color:#cc0;font-size:1em;">Required: '+gear_list[gear_name]['innovation']+'</b><br/><br/>'
            }
            if ('resources' in gear_list[gear_name]) {
              tooltip = tooltip + '<div style="font-size:1.0em;">'+gear_list[gear_name]['resources'].join('<br/>')+'</div'
            }
            element.tooltipster({
              contentAsHTML: 'true',
              animation: 'grow',
              content: tooltip,
              position: 'left',
              delay: [500, 300],
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

function showInnovation(innovationName) {
  if ($('.innovation_card[value="'+innovationName+'"]').length > 0) {
    $('.innovation_card[value="'+innovationName+'"]').remove()
  }
  let img = $('<img>', {
    // style: 'opacity:.9;',
    class: 'innovation_card',
    value: innovationName,
    src: cdnUrl('images/reference/Innovations/'+innovationName+'.jpg'),
  });
  img.hide();

  if($('.innovation_card').length){
		img.insertBefore('.innovation_card:first');
	}else{
		$('.innovations_grid').append(img);
	}
  // $('.innovations_grid').append(img);


  img.delay(50).fadeIn(300);
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

function titleCase (str) {
  let splitStr = str.toLowerCase().split(' ')

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  }

  return splitStr.join(' ')
}


// <!-- Image Map Generated by http://www.image-map.net/ -->
// <img src="Dragon Armory.jpg" usemap="#image-map">
//
// <map name="image-map">
//     <area target="" alt="Dragon Armor Set" title="Dragon Armor Set" href="#" coords="28,944,359,1484" shape="rect">
//     <area target="" alt="" title="" href="" coords="32,1546,562,1661" shape="0">
//     <area target="" alt="" title="" href="" coords="37,1680,561,1795" shape="0">
//     <area target="" alt="" title="" href="" coords="37,1819,563,1932" shape="0">
//     <area target="" alt="" title="" href="" coords="36,1948,563,2063" shape="0">
//     <area target="" alt="" title="" href="" coords="37,2153,562,2268" shape="0">
//     <area target="" alt="" title="" href="" coords="381,944,1125,1039" shape="0">
//     <area target="" alt="" title="" href="" coords="380,1052,1125,1151" shape="0">
//     <area target="" alt="" title="" href="" coords="379,1167,1122,1266" shape="0">
//     <area target="" alt="" title="" href="" coords="379,1284,1122,1382" shape="0">
//     <area target="" alt="" title="" href="" coords="379,1394,1119,1492" shape="0">
//     <area target="" alt="" title="" href="" coords="603,1549,1130,1659" shape="0">
//     <area target="" alt="" title="" href="" coords="603,1680,1129,1795" shape="0">
//     <area target="" alt="" title="" href="" coords="603,1811,1130,1930" shape="0">
//     <area target="" alt="" title="" href="" coords="601,1951,1129,2065" shape="0">
//     <area target="" alt="" title="" href="" coords="604,2152,1130,2268" shape="0">
// </map>
