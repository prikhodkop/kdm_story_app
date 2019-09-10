const { get_random_draws, settlement_locations } = require('./../ui/glossary')
const { simpleSwipe } = require('./../vendor/jquery.simple.swipe.js')

module.exports = {
  addDevelopment,
  openLocation
}

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

  $('#settlement_locations_window').append($('<img>', {
    // style: 'opacity:.9;',
    id: 'locations_add_button',
    src: 'images/reference/plus_icon.png',
  }));

  $('#settlement_locations_window').append($('<img>', {
    // style: 'opacity:.9;',
    id: 'settlement_locations_window_background',
    src: 'images/reference/reference_back.png',
  }));

  let locations_list = get_random_draws('Location', false);
  // let locations_list = ['AAA']

  console.log('Locations list: '+locations_list)

  for (let i = 0; i < locations_list.length; i++) {
    createLocation(locations_list[i], (i==0) ? true : false);
  }

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
    $(this).fadeOut(300, function () {
      $(this).css({
        'visibility': 'hidden',
        'display': 'block',
      }).slideUp()
    })
 });
}

function createLocation(location, default_open=false) {
  let button = $('<button>', {
    class: "tablinks",
    onclick: "openLocation(event, '"+location+"')",
    id: default_open ? "defaultOpen" : "",
    val: location,
  })
  button.html(titleCase(location));
  $('#development_tabs').append(button);

  console.log('Location gear:'+settlement_locations[location]['gear']);

  let content = $('<div>', {
    class: "tabcontent",
    id: location,
  });

  let column_1 = $('<div>', {
    class: "column_1",
    id: "1",
  })

  column_1.append($('<img>', {
    class: "location_screen",
    src: "images/reference/Settlement Locations/"+titleCase(location)+".jpg",
  }));

  let column_2 = $('<div>', {
    class: "column_2",
    id: "2",
  })
  if (settlement_locations[location]['gear']['1'].length > 0) {
    for (let i = 0; i < settlement_locations[location]['gear']['1'].length; i++) {
      console.log('Adding 1: '+i)
      column_2.append($('<img>', {
        class: "gear_card",
        src: "images/reference/Gear/"+settlement_locations[location]['gear']['1'][i]+".jpg",
      }));
    }
  }


  let column_3 = $('<div>', {
    class: "column_3",
    id: "3",
  })
  if (settlement_locations[location]['gear']['2'].length > 0) {
    for (let i = 0; i < settlement_locations[location]['gear']['2'].length; i++) {
      console.log('Adding 2: '+i)
      column_3.append($('<img>', {
        class: "gear_card",
        src: "images/reference/Gear/"+settlement_locations[location]['gear']['2'][i]+".jpg",
      }));
    }
  }

  let column_4 = $('<div>', {
    class: "column_4",
    id: "4",
  })

  if (settlement_locations[location]['gear']['2'].length > 0) {
    for (let i = 0; i < settlement_locations[location]['gear']['3'].length; i++) {
      console.log('Adding 3: '+i)
      column_4.append($('<img>', {
        class: "gear_card",
        src: "images/reference/Gear/"+settlement_locations[location]['gear']['3'][i]+".jpg",
      }));
    }
  }

  content.append(column_1);
  content.append(column_2);
  content.append(column_3);
  content.append(column_4);

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
