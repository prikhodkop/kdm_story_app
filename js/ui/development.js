const { get_random_draws, settlement_locations } = require('./../ui/glossary')

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
  // $(document).on('mouseover', '.gear_card', function () {
  //   console.log($(this).parent())
  //   window.gear_card_timer = setTimeout(function(){
  //         // $("h3.better").animate({"left": "125px"}, 1200);
  //         console.log('!!!')
  //         $(this).parent().scrollTo($(this), duration = 100);
  //     }, 500);
  //   }, function(){
  //     console.log('22!!!')
  //     clearTimeout(window.gear_card_timer);
  // });

  // $(document).on('mouseover', '.gear_card', function (e) {
  //   // let name = $(this).text().slice(0, -1);
  //   console.log($(this).parent())
  //   // console.log($(this).parent)
  //   // $('#reference-window-back').animate({
  //   //     scrollTop: $('#reference-data.' + adapt_name(name)).offset().top
  //   // }, 1000);
  //
  //   $(this).parent().scrollTo($(this), duration = 100);
  //   // $('html,body').animate({
  //   //     scrollBot: $(this).offset().top},
  //   //     'slow');
  // });



}

function createLocation(location, default_open=false) {
  let button = $('<button>', {
    class: "tablinks",
    onclick: "openLocation(event, '"+location+"')",
    id: default_open ? "defaultOpen" : "",
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
