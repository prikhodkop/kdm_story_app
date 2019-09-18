const { get_random_draws, settlement_locations, gear_list } = require('./../ui/glossary')
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

  $('#settlement_locations_window').hide();

  $('#settlement_locations_window').append($('<div>', {
    // style: 'opacity:.9;',
    id: 'development_tabs',
    class: 'tab',
  }));

  // $('#settlement_locations_window').append($('<img>', {
  //   // style: 'opacity:.9;',
  //   id: 'locations_button',
  //   src: 'images/reference/location_icon.png',
  // }));
  //
  // $('#settlement_locations_window').append($('<img>', {
  //   // style: 'opacity:.9;',
  //   id: 'innovations_button',
  //   src: 'images/reference/innovation_icon.png',
  // }));
  //
  // $('#settlement_locations_window').append($('<img>', {
  //   // style: 'opacity:.9;',
  //   id: 'endeavor_button',
  //   src: 'images/reference/endeavor_icon.png',
  // }));

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

  allignLocations();

  window.openLocation = openLocation;

  $('.gear_card').hover(function () {
    console.log($(this).parent())
    let card = $(this)
    $(this).addClass('hoverd')
    // card.animate({"height": "24%"}, 100);
    // window.gear_card_timer = setTimeout(function(){
    //       console.log('!!!')
    //       if(!card.next().is('.gear_card')) {
    //           console.log('Last!')
    //           card.parent().scrollTo(card, duration = 500);
    //       }
    //   }, 500);
      if((!card.next().is('.gear_card'))||(!card.prev().is('.gear_card'))) {
          console.log('Last!')
          card.parent().scrollTo(card, duration = 500);
      }
    }, function(){
      console.log('22!!!')
      // $(this).animate({"height": "19%"}, 100);
      // clearTimeout(window.gear_card_timer);
      $(this).removeClass('hoverd')
  });

  $(document).on("dblclick", '.tablinks', function(e) {
    // $(this).fadeOut(300, function () {
    //   $(this).css({
    //     'visibility': 'hidden',
    //     'display': 'block',
    //   }).slideUp()
    // })
    if (!$(this).hasClass('selected')) {
      $(this).addClass('selected')
    } else {
      if (!(always_on_locations.includes($(this).attr('value')))) {
        $(this).removeClass('selected')
      }
    }
    moveLocation($(this).attr('value'));
 });
}

function allignLocations() {
  let development_status = JSON.parse(localStorage.getItem('development'));
  let settings = JSON.parse(sessionStorage.getItem('settings'));

  console.log('Dev status'+development_status)

  let updated = false
  // check if selected locations list is stored in local storage, and if not initialize it
  if ((development_status == null) || (development_status == 'undefined')) {
    development_status = {}
    development_status['locations'] = always_on_locations
    updated = true
  } else {
    if (!('locations' in development_status)) {
      development_status['locations'] = always_on_locations
      updated = true
    }
  }

  if (updated) {
    localStorage.setItem('development', JSON.stringify(development_status))
  }

  let selected_locations = development_status['locations'];
  let locations_list = getCurrentLocations()

  for (let i = locations_list.length - 1; i >= 0 ; i--) {
    if (selected_locations.includes(locations_list[i])) {
      $('button.tablinks[value="'+locations_list[i]+'"]').addClass('selected')
      $('button.tablinks[value="'+locations_list[i]+'"]').detach().insertBefore("button.tablinks:first");
    }

  }

  $('button.tablinks.selected:first').attr('id', "defaultOpen")
  // openLocation($('button#defaultOpen'))


}

function moveLocation(location) {

  if (always_on_locations.includes(location)) {
    return
  }

  let development_status = JSON.parse(localStorage.getItem('development'));
  let this_element = $('button.tablinks[value="'+location+'"]')
  let needed_value = null
  this_element.addClass('moving')
  if (this_element.hasClass('selected')) {
    development_status['locations'].push(location)
    $('button.tablinks.selected:not(.moving)').each(function () {
      if ($(this).attr('value') < location) {
        needed_value = $(this).attr('value')
      }
    })

  } else {
    let index = development_status['locations'].indexOf(location);
    if (index !== -1) {
      development_status['locations'].splice(index, 1);
    }
    $('button.tablinks:not(.selected):not(.moving)').each(function () {
      if ($(this).attr('value') < location) {
        needed_value = $(this).attr('value')
      }
    })
    // if (needed_value == null) {
    //   needed_value = $('button.tablinks:not(.selected)')
    // }
  }

  if (needed_value == null) {
    if (this_element.hasClass('selected')) {
      this_element.detach().insertBefore('button.tablinks.selected:not(.moving):first');
    } else {
      this_element.detach().insertBefore('button.tablinks:not(.selected):not(.moving):first');
    }

  } else {
    this_element.detach().insertAfter('button.tablinks[value="'+needed_value+'"]');
  }

  if (this_element.hasClass('selected')) {
    this_element.parent().scrollTo($('button.tablinks:first'), duration = 500);
  }

  this_element.removeClass('moving')

  localStorage.setItem('development', JSON.stringify(development_status))

}

function getCurrentLocations() {
  let locations = [];

  $('button.tablinks').each(function () {
    locations.push($(this).attr('value'))
  })

  return locations

}

function createLocation(location, default_open=false) {
  let button = $('<button>', {
    class: "tablinks",
    onclick: "openLocation(event, '"+location+"')",
    // id: default_open ? "defaultOpen" : "",
    val: location,
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
    columns.push($('<div>', {
      class: "column_"+(j+1),
      id: (j+1),
    }));

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
          })
          columns[j].append(element);
          if (gear_name in gear_list) {
            let tooltip = ''
            if ('innovation' in gear_list[gear_name]) {
              tooltip = tooltip + '<b style="color:#cc0;">Required: '+gear_list[gear_name]['innovation']+'</b><br/><br/>'
            }
            if ('resources' in gear_list[gear_name]) {
              tooltip = tooltip + gear_list[gear_name]['resources'].join('<br/>')
            }
            element.tooltipster({
              contentAsHTML: 'true',
              animation: 'grow',
              content: tooltip,
              position: 'left',
              delay: 500,
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
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(locationName).style.display = "block";
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
