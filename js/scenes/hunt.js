const { createToc, titleCase, events_table } = require('./../ui/events')
const { clone } = require('./../ui/glossary')
const { get_sequence } = require('./../ui/hunt_events')
const { md_to_html_2 } = require('./../ui/hunt_events_table')
const { createMenuButton, createReference, createSevereTables } = require('./../ui/menu')
const { getSettings, addSettings } = require('./../ui/settings')
const { render } = require('./../ui/template-renderer')
const { setTransition, getBackTarget, getBackBackTarget } = require('./../ui/transition')

module.exports = class HuntScene {
  render () {
    document.getElementById('container').innerHTML = render('./partials/hunt.html')

    var start_delay = 1000

    let settings = getSettings()
    sessionStorage.setItem('settings', JSON.stringify(settings))

    console.log(sessionStorage)
    // let settings = JSON.parse(sessionStorage.getItem("settings"));

    var myself = 'hunt'
    document.title = myself

    window.reload = false
    setInterval(function () {
      if (window.reload) {
        setTransition(document.title, 'back', getBackTarget(), current_state())
      }
    }, 100)

    var music = new Howl({
      src: [events_table[myself].music],
      loop: true,
      volume: 0.8,
    })

    var speech = new Howl({
      src: [events_table[myself].speech],
      volume: 1.0,
    })

    $('#container').children().hide()

    var q_event_sequence = null
    var q_event_idx = 0

    createMenuButton()
    createToc()
    addSettings(settings)

    $('#random_event_icon').tooltipster({
      contentAsHTML: 'true',
      animation: 'grow',
      content: 'Roll random <b>Hunt Event</b>',
      position: 'top',
      delay: '600',
    })

    $('#random_event_icon_big').tooltipster({
      contentAsHTML: 'true',
      animation: 'grow',
      content: 'Roll random <b>Hunt Event</b>',
      position: 'top',
      delay: '600',
    })

    $('#random_event_input').tooltipster({
      contentAsHTML: 'true',
      animation: 'grow',
      content: 'Type <b>Hunt Event</b> number here',
      position: 'bottom',
      delay: '600',
    })

    var timeout = null

    // CREATES LINKS TO HUNT SCREENS FOR EACH MONSTER
    // ################
    var quaries = {
      'gorm': ['xmmrrmxrrmmr', [5, 8, 12], './images/hunt/gorm.png', 8, 40],
      'white lion': ['xmmrrmxrmmrr', [5, 8, 12], './images/hunt/white_lion.png', 8, 41],
      'screaming antelope': ['xmrmrrxmrmrr', [5, 8, 11],
        './images/hunt/screaming_antelope.png', 7, 38,
      ],
      'phoenix': ['xrmrmrxmrmrr', [6, 9, 12], './images/hunt/phoenix.png', 8, 42],
      'dung beetle knight': ['xrmmrrxmrrmr', [6, 9, 12],
        './images/hunt/dung_beetle_knight.png', 8, 40,
      ],
    }

    createHuntTable()
    $('#quaries_table').hide()

    // $("#menu-toggle-wrapper").show();
    // $("#settings").show();
    $('#back').show()
    // $("#back_button").show();

    var state = sessionStorage.getItem('hunt')
    var transition = sessionStorage.getItem('transition')
    var back_target = sessionStorage.getItem('back_target')

    console.log('Back:')
    console.log(back_target)

    console.log('Transition:')
    console.log(transition)

    console.log('State:')
    console.log(state)

    var anew = true
    var not_selected = true

    // if (sessionStorage.getItem("Mute") == "On") {
    //   music.mute(true);
    //   speech.mute(true);
    //   $("#mute.button").toggleClass('active');
    // }
    if (settings['music'] == 'Off') {
      music.mute(true)
    }
    if (settings['narration'] == 'Off') {
      speech.mute(true)
    }

    if ((transition == 'back') && !(state == null)) {
      console.log('Here!')
      state = JSON.parse(state)

      back_target = state.back_target
      anew = false

      // console.log(state.quarry_selected);
      // console.log(state["quarry_selected"]);
      // console.log(state);

      if (state.quarry_selected) {
        console.log('Truly!')
        not_selected = false
        set_hunt(state.monster_type, state.monster_ref, state)
      } else {
        console.log('Falsely!')
      };

      music.seek(state.music_position)

      if (state.music_playing) {
        music.volume(0.0)
        music.play()
        music.fade(0.0, 0.8, 500)
      };

      speech.seek(state.speech_position)

      if (state.speech_playing) {
        speech.volume(0.0)
        speech.play()
        speech.fade(0.0, 1.0, 500)
      }
    };

    if ((back_target == null) || (back_target == 'null') || (back_target == 'undefined')) {
      console.log('Hiding the button!')
      $('#back_button').hide()
    } else {
      $('#back_button').hide()
      $('#back_button').html('<svg class="back_button__icon" enable-background="new 0 0 492 492" version="1.1" viewBox="0 0 492 492" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m464.34 207.42l0.768 0.168h-329.22l103.5-103.72c5.068-5.064 7.848-11.924 7.848-19.124s-2.78-14.012-7.848-19.088l-16.104-16.112c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844l-177.41 177.4c-5.084 5.084-7.864 11.856-7.844 19.06-0.02 7.244 2.76 14.02 7.844 19.096l177.41 177.41c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652l-104.66-104.3h329.99c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"></path></svg><span class="back_button__text">' + events_table[back_target].label + '</span>')
      $('#back_button').delay(500).fadeIn(1000)
    };

    if (anew) {
      setTimeout(function () {
        speech.play()
      }, start_delay)

      music.play()
    };

    if (not_selected) {
      $('#hunt_icon').fadeIn(2000)
      $('#label_text').fadeIn(2000)
      $('#hunt_desc_text').delay(3500).fadeIn(2000)
      $('#quaries_table').delay(4000).fadeIn(2000)
      $('#hunt_icon').delay(1000).fadeOut(2000)
      $('#label_text').delay(1000).fadeOut(2000)
    };

    $('body').on('click', '#menu_item', function () {
      if ($(this).attr('target') == document.title) {
        setTransition($(this).attr('target'), 'menu', getBackTarget())
      } else {
        setTransition($(this).attr('target'), 'menu', document.title, current_state())
      }
    })

    $('body').on('click', '#back_button', function () {
      let back_target = getBackBackTarget()
      console.log(back_target)
      setTransition(getBackTarget(), 'back', back_target, null)
    })

    $('body').on('click', '#quary_popup', function () {
      $('#quary_popup').fadeOut(500)
      $('#quary_popup').toggleClass('hidden')
      // document.getElementById('quary_popup').style.webkitAnimationPlayState = "running";
      //
      // $('#quary_popup').on('webkitAnimationEnd', function() {
      //   this.style.webkitAnimationPlayState = "paused";
      // });
      $('#quary_popup_back').delay(500).fadeOut(500)
      // $('#random_event_icon').fadeOut(1000);
      // $('#random_event_input').fadeOut(1000);
      // $('#quary_popup_back').remove()

      // $('body').removeClass('is-dimmed');
    })

    $('body').on('click', '#quary_popup_back', function () {
      $('#random_popup').fadeOut(500)
      $('#quary_popup').fadeOut(500)
      // $('#quary_popup').toggleClass('hidden');
      // document.getElementById('quary_popup').style.webkitAnimationPlayState = "running";
      //
      // $('#quary_popup').on('webkitAnimationEnd', function() {
      //   this.style.webkitAnimationPlayState = "paused";
      // });
      $('#quary_popup_back').delay(500).fadeOut(500)
      // $('#random_event_icon').fadeOut(1000);
      // $('#random_event_input').fadeOut(1000);
      // $('#quary_popup_back').remove()

      // $('body').removeClass('is-dimmed');
    })

    $('body').on('click', '#random_event_icon', function () {
      showRandomEvent(getRandomInt(1, 100))
    })

    $('body').on('click', '#random_event_icon_big', function () {
      $('#input_container').fadeOut(500)
      showRandomEvent(getRandomInt(1, 100))
    })

    $('#random_event_input').on('keyup', function () {
      clearTimeout(timeout)

      let value = $(this).val()

      let clean = false

      console.log('I sense change!')

      let result = ''

      for (let i = 0; i < value.length; i++) {
        if (isNaN(value.charAt(i))) {
          clean = true
        }
      }

      if (clean) {
        $(this).val('')
      }

      if (!clean && !$(this).val() == '') {
        timeout = setTimeout(function () {
          if (value == '00') {
            value = 100
          } else {
            value = parseInt(value)
          }

          showRandomEvent(value)
        }, 1000)
      }
    })

    if (settings['onscreenKeypads'] == 'On') {
      $('#pad0').on('click', function () { addToEventNumber('0', false, false) })
      $('#pad1').on('click', function () { addToEventNumber('1', false, false) })
      $('#pad2').on('click', function () { addToEventNumber('2', false, false) })
      $('#pad3').on('click', function () { addToEventNumber('3', false, false) })
      $('#pad4').on('click', function () { addToEventNumber('4', false, false) })
      $('#pad5').on('click', function () { addToEventNumber('5', false, false) })
      $('#pad6').on('click', function () { addToEventNumber('6', false, false) })
      $('#pad7').on('click', function () { addToEventNumber('7', false, false) })
      $('#pad8').on('click', function () { addToEventNumber('8', false, false) })
      $('#pad9').on('click', function () { addToEventNumber('9', false, false) })
      $('#padClear').on('click', function () { addToEventNumber('', true, false) })
      $('#padSubmit').on('click', function () { addToEventNumber('', false, true) })
    } else {
      $('#random_event_pad_wrapper').hide()
    }

    function addToEventNumber (addThis, clearVal, submitVal) {
      if (submitVal) {
        randomEventInputChange()
      } else {
        let eventnumber = $('#random_event_input_big')

        // if value is already 2 characters clear it 1st
        if (eventnumber[0].value.length >= 2) {
          eventnumber.val('')
        }
        if (clearVal) {
          eventnumber.val('')
        } else {
          eventnumber.val(eventnumber[0].value + addThis)
        }
      }
    }

    function randomEventInputChange () {
      let eventnumber = $('#random_event_input_big')
      clearTimeout(timeout)

      let value = eventnumber.val()

      let clean = false

      console.log('I sense change!')

      let result = ''

      for (let i = 0; i < value.length; i++) {
        if (isNaN(value.charAt(i))) {
          clean = true
        }
      }

      if (clean) {
        eventnumber.val('')
      }

      if (!clean && !eventnumber.val() == '') {
        timeout = setTimeout(function () {
          $('#input_container').fadeOut(500)
          if (value == '00') {
            value = 100
          } else {
            value = parseInt(value)
          }
          showRandomEvent(value)
        }, 1000)
      }
    }

    $('#random_event_input_big').on('keyup', function () {
      randomEventInputChange()
    })

    $('body').on('click', '.re_key', function () {
      let classList = $(this).attr('class').split(/\s+/)

      let class_idx = classList[1]
      let table_idx = classList[2]

      console.log(class_idx + 'X' + table_idx)

      // let template = document.getElementById('random_popup')

      let event_idx = $('#hunt_event_title').attr('class')

      console.log('Event id:')
      console.log(event_idx)

      let event_html = $(md_to_html_2(event_idx, false, table_idx, class_idx, $(
        this).attr(
        'condition')))

      // template.innerHTML = event_html;
      $('#random_popup').append(event_html)
      event_html.show('slow')

      $('#random_popup').delay(500).animate({
        scrollTop: $('#random_popup').prop('scrollHeight'),
      }, 1000)

      console.log('Table idx:')
      console.log(table_idx)

      let table_type = $('table.' + table_idx).attr('class').split(/\s+/)[0]

      if (table_type == 'once') {
        $('table.' + table_idx).fadeOut(500, function () {
          $(this).css({
            'visibility': 'hidden',
            display: 'block',
          }).slideUp()
        })
      }

      // console.log('Classes are:');
      // console.log(classList)
      //  $.each(classList, function(index, item) {
      //     if (item === 'someClass') {
      //         //do something
      //     }
      // });
    })

    // Hide show hunt event
    $('body').on('click', '#common', function () {
      // let title = $(this).attr('title');
      //
      // if (title == 'Monster Hunt Event') {
      //   $('#quary_popup').attr('src',$(this).attr('href'))
      //   $('#quary_popup').fadeIn(3000)
      //   $('#quary_popup_back').fadeIn(3000)
      //
      // }

      var pos = $(this).attr('position')
      console.log(pos)
      $(this).fadeOut(1500)
      $('#lantern.' + pos).delay(1000).fadeIn(1500)
    })

    $('body').on('click', '#lantern', function () {
      var pos = $(this).attr('position')
      console.log(pos)
      $(this).fadeOut(1500)
      $('#common.' + pos).delay(1000).fadeIn(1500)
    })

    function set_hunt (name0, ref0, state) {
      let name = name0.substr(0)
      let ref = ref0.substr(0)

      if (state == null) {
        var survivors_pos = 1
        var monster_pos = null
        var board_state = '-------------'
        q_event_sequence = get_sequence(ref)
        q_event_idx = 0
      } else {
        var survivors_pos = state.survivors_pos // 1;
        var monster_pos = state.monster_pos // null;
        var board_state = state.board_state // "---oo-ooo----";
        q_event_sequence = state.q_event_sequence
        q_event_idx = state.q_event_idx
      };

      console.log(q_event_sequence)

      createSevereTables()
      createReference()

      $('#quaries_table').hide()
      $('#random_event_icon').hide()

      $('#label_text').text(name)
      $('#label_text').css('color', '#999')
      $('#label_text').css('width', '800px')
      $('#label_text').css('margin-left', '-400px')

      $('#hunt_desc_text').hide()
      $('#hunt_desc_text').text(name)
      $('#hunt_desc_text').css('color', '#555')
      $('#hunt_desc_text').css('font-size', '2em')
      $('#hunt_desc_text').fadeIn(2000)

      $('#hunt_back').fadeIn(4000)
      $('#random_event_icon').fadeIn(5000)
      $('#random_event_input').fadeIn(5000)
      $('#random_event_input').val('')

      console.log(name)

      $('<img class="token" id="herb_gathering" title="" src="./images/hunt/herbs_gathering.png" width="8%" style="left:25%; top:74%;">')
        .load(function () {
          $(this).appendTo('body')
          $(this).hide()
          $(this).delay(2000).fadeIn(4000)
          $(this).tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: '<b>Herb Gathering</b><br />Survivors eat berries on the way<br />All survivors get <b>+1 survival</b>',
            position: 'top',
            delay: '600',
          })
          $(this).tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: '<i>Sickle required!</i>',
            position: 'bottom',
            delay: '600',
            multiple: 'true',
          })
        })

      $('<img class="token" id="mineral_gathering" title="" src="./images/hunt/mineral_gathering.png" width="8%" style="left:67%; top:74%;">')
        .load(function () {
          $(this).appendTo('body')
          $(this).hide()
          $(this).delay(2000).fadeIn(4000)
          $(this).tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: '<b>Mineral Gathering</b>',
            position: 'top',
            delay: '600',
          })
          $(this).tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            content: '<i>Pickaxe required!</i>',
            position: 'bottom',
            delay: '600',
            multiple: 'true',
          })
        })

      var token_size = 7.298
      var token_heigh = 40.5

      var monster = quaries[ref.replace('showdown ', '')]

      console.log(ref)
      console.log(monster)

      place_events(monster[0], token_size, token_heigh, 'common', q_event_sequence)

      if ((monster_pos == null) || (monster_pos == 'null') || (monster_pos ==
                'undefined')) {
        if (name.includes('Lv.1')) {
          var monster_pos = monster[1][0]
        }
        if (name.includes('Lv.2')) {
          var monster_pos = monster[1][1]
        }
        if (name.includes('Lv.3')) {
          var monster_pos = monster[1][2]
        }
      };

      loadHuntImage(monster[2], monster_pos, monster[3], monster[4], 'monster', 'target="' +
                ref + '"')

      setTimeout(function () {
        var i
        for (i = 1; i < 13; i++) {
          if (board_state.charAt(i - 1) == 'o') {
            console.log('Will hide this one:')
            console.log(i)
            $('#common.' + i).fadeOut(500)
            $('#lantern.' + i).delay(500).fadeIn(1000)
          }
        }
      },
      500)

      setTimeout(function () {
        loadHuntImage('images/hunt/darkness.png', 7, 7.322, 32.2, 'darkness',
          'overwhelming darkness')
      }, 4300)

      loadHuntImage('images/hunt/starvation.png', 13, 7.298, 32.3, 'starvation')

      loadHuntImage('images/hunt/survivors.png', survivors_pos, 6, 40, 'survivors')

      $('body').on('click', '#monster', function () {
        setTransition(ref, 'menu', document.title, current_state())
      })

      $('body').on('click', '#herb_gathering', function () {
        setTransition('herb gathering', 'menu', document.title, current_state())
      })

      $('body').on('click', '#mineral_gathering', function () {
        setTransition('mineral gathering', 'menu', document.title,
          current_state())
      })

      $('body').on('click', '#darkness', function () {
        setTransition('overwhelming darkness', 'menu', document.title,
          current_state())
      })
    } // end of set_hunt

    function showRandomEvent (event_idx) {
      $('#random_popup').hide()
      let template = document.getElementById('random_popup')
      let event_html = md_to_html_2(event_idx)
      template.innerHTML = event_html
      $('#quary_popup').fadeOut(1000)
      $('#random_popup').delay(500).fadeIn(1500)
      $('#quary_popup_back').fadeIn(1500)
      $('#random_event_icon').delay(1000).fadeIn(3000)
      $('#random_event_input').delay(1000).fadeIn(3000)
      $('#random_event_input').val('')
      $(':focus').blur()
    }

    function createHuntTable () {
      let names = Object.keys(clone(quaries))

      let settings = JSON.parse(sessionStorage.getItem('settings'))

      for (let i = names.length - 1; i >= 0; i--) {
        console.log(names[i])
        if ((names[i] in settings['expansions']) && !(settings['expansions'][names[i]] == 'All content')) {
          names.splice(i, 1)
          console.log('Removed!')
        }
      }

      let container = document.getElementById('container')

      // CREATE QUARIES TABLE
      let tbl = document.createElement('table')
      // tbl1.style.width  = '80%';
      // tbl1.style.top  = '3%';
      tbl.setAttribute('id', 'quaries_table')
      tbl.style.cssText += 'width:80%; top:30%; position: absolute; left:15%;'

      let tbdy = document.createElement('tbody')

      for (let i = 0; i < names.length; i++) {
        let name = names[i].replace('showdown ', '')

        let tr = document.createElement('tr')
        tr.className = 'spaceUnder'
        // tr.style.cssText += 'width: 100%; position:static;'

        let td = document.createElement('td')
        td.style.cssText += 'width:32%;'

        let a = document.createElement('div')
        a.setAttribute('id', 'quary_name')
        a.innerHTML += titleCase(name)

        td.appendChild(a)
        tr.appendChild(td)

        for (let j = 1; j < 4; j++) {
          let td1 = document.createElement('td')
          td1.style.cssText += 'width:16%;'
          let a1 = document.createElement('div')
          a1.setAttribute('id', name.replace(/ /g, '_') + '_' + j)
          a1.className = 'quarry'
          a1.innerHTML += 'Lv. ' + j

          td1.appendChild(a1)
          tr.appendChild(td1)
        }

        tbdy.appendChild(tr)
      }

      tbl.appendChild(tbdy)
      container.appendChild(tbl)

      // var quary = ''
      var titled = []
      for (let i = 0; i < names.length; i++) {
        let titled = titleCase(names[i])

        for (let j = 1; j < 4; j++) {
          // console.log(titled+" Lv."+j);
          $('#' + names[i].replace(/ /g, '_') + '_' + j).click(function () {
            set_hunt(titled + ' Lv.' + j, 'showdown ' + names[i], null)
          })
        };
      };
    }

    function place_events (events_string, size, height, id, sequence) {
      var random_event = './images/hunt/random_hunt_event.png'
      var monster_event = './images/hunt/monster_hunt_event.png'

      let q_event_idx = 0

      var i
      for (i = 0; i < events_string.length; i++) {
        if (events_string.charAt(i) == 'x') {
          continue
        } else {
          let q_link = ''

          if (events_string.charAt(i) == 'm') {
            var event = monster_event
            q_link = 'href="' + sequence[q_event_idx] + '"'
            q_event_idx += 1
          }
          if (events_string.charAt(i) == 'r') {
            var event = random_event
          }
          if (events_string.charAt(i) == 'o') {}

          loadHuntImage(event, i + 1, size, height, id, q_link)
        }
      }
    };

    function loadHuntImage (path, position, width, top, type, ref = '') {
      var coord = 2.65 + 7.298 * (position - 1 / 2) - width / 2.0

      let title

      if (type === 'common') {
        if (path.includes('random')) {
          title = 'Random Hunt Event'
        }
        if (path.includes('monster')) {
          title = 'Monster Hunt Event'
        };
      };

      if (type === 'monster') {
        title = 'Start the <b>Showdown</b>!'
      };

      if (type === 'survivors') {
        title = 'Survivors'
        coord = coord + 0.9
      };

      if (type === 'darkness') {
        title = '<b>Overwhelming Darkness</b>'
        coord = coord + 0.032335
      };

      if (type === 'starvation') {
        title =
                '<b>Starvation</b> <br /> Survivors must spend <b>1d5</b> basic resources'
      };

      $('<img class="token ' + position + '" position="' + position + '" id="' + type +
                '" title="' +
                title + '" src="' + path + '" width="' + width + '%" style="left: ' + coord +
                '%; top:' + top +
                '%;"' + ref + ')>').load(function () {
        $(this).appendTo('body')
        $(this).hide()
        if (type == 'darkness') {
          $(this).show()
        } else {
          $(this).delay(2000).fadeIn(4000)
        }

        $(this).attr('position', position)

        if (type == 'monster') {
          $(this).draggable({
            containment: '#hunt_back',
            create: function () {
              $(this).data('posit', $(this).position())
            },
            axis: 'x',
            cursor: 'move',
            stop: scaling_board_function,
          })
          $(this).tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            delay: '600',
            plugins: ['follower'],
          })
          $(this).droppable({
            drop: function (event, ui) {
              // setTransition(ref, 'menu', document.title, current_state())
              if ($('#monster').attr('position') == 13) {
                $('#quary_popup_back').fadeIn(500)
                var temp_text = document.getElementById(
                  'label_text').innerHTML
                document.getElementById('label_text')
                  .innerHTML =
                                    'Starvation<br/>Survivors must spend <b>1d5</b> basic resources!'
                // $('#label_text').innerHTML = 'Starvation<br/>Survivors must spend <b>1d5</b> basic resources!'
                $('#hunt_icon').attr('src',
                  'images/hunt/starvation_icon.png')
                $('#label_text').css('z-index', '9')
                $('#hunt_icon').css('z-index', '9')
                $('#label_text').css('color', '#fff')
                $('#label_text').delay(500).fadeIn(1000)
                $('#hunt_icon').delay(500).fadeIn(1000)
                $('#label_text').delay(2700).fadeOut(1000)
                $('#hunt_icon').delay(2700).fadeOut(1000)
                setTimeout(function () { $('#label_text').hide() }, 3750)
                setTimeout(function () {
                  document.getElementById(
                    'label_text').innerHTML =
                                        temp_text
                  // $('#label_text').css('color','#999');
                  // let state = current_state();
                  // state.monster_type = temp_text;
                  setTransition($('#monster').attr('target'), 'menu', document.title, current_state())
                }, 4000)
              } else {
                setTransition($('#monster').attr('target'),
                  'menu', document.title,
                  current_state())
              }
            },
          })
        };

        if (type == 'survivors') {
          $(this).draggable({
            containment: '#hunt_back',
            create: function () {
              $(this).data('posit', $(this).position())
            },
            axis: 'x',
            cursor: 'move',
            stop: scaling_board_function,
          })
        };

        if (type == 'darkness' || type == 'starvation') {
          $(this).tooltipster({
            contentAsHTML: 'true',
            animation: 'grow',
            delay: '600',
          })
          $(this).droppable({
            drop: function (event, ui) {
              snapToMiddle(ui.draggable, $(this))
              if ((ui.draggable[0]['id'] == 'survivors') && (
                type == 'darkness')) {
                if ($('#monster').attr('position') == $(this)
                  .attr('position')) {
                  // setTransition($('#monster').attr('target'), 'menu', document.title, current_state());
                  // continue;
                  console.log(
                    'Ignoring Overwhelming Darkness to start showdown!'
                  )
                } else {
                  setTransition('overwhelming darkness',
                    'menu', document.title,
                    current_state())
                }
              };
            },
          })
        };

        if (type == 'common') {
          $(this).droppable({
            drop: function (event, ui) {
              snapToMiddle(ui.draggable, $(this))
              let title = $(this).attr('title')

              if (ui.draggable[0]['id'] == 'survivors') {
                if (title == 'Monster Hunt Event') {
                  $('#quary_popup').attr('src', $(this)
                    .attr('href'))
                  $('#quary_popup').delay(500).fadeIn(1000)
                  $('#quary_popup').toggleClass('hidden')
                  $('#quary_popup_back').fadeIn(1500)
                  // $('#random_event_icon').delay(1000).fadeIn(3000);
                  // $('#random_event_input').delay(1000).fadeIn(3000);
                  // $('#random_event_input').val('')
                }

                if (title == 'Random Hunt Event') {
                  $('#quary_popup_back').fadeIn(1500)
                  $('#input_container').delay(500).fadeIn(
                    1000)
                  $('#random_event_input_big').val('')
                  $('#random_event_icon').fadeOut(500)
                  $('#random_event_input').fadeOut(500)
                  setTimeout(function () {
                    $('#random_event_input_big')
                      .focus()
                  }, 1600)
                }

                let pos = $(this).attr('position')
                console.log(pos)
                $(this).fadeOut(1500)
                $('#lantern.' + pos).delay(1000).fadeIn(1500)
              }
            },
          })
        };
      })

      if (type == 'common') {
        var lantern_width = 7.455
        // var coord = 9.842 + 7.31*(position-2) + 7.35/2 - lantern_width/2.;
        var coord = 2.65 + 7.298 * (position - 1 / 2) - lantern_width / 2.0
        $('<img class="token ' + position + '" position="' + position +
                    '" id="lantern" title="Event Cleared" src="images/hunt/lantern.png" width="' +
                    lantern_width +
                    '%" style="left: ' + coord + '%; top:' + (top) + '%;">').load(
          function () {
            $(this).appendTo('body')
            $(this).hide()
            $(this).attr('position', position)
            $(this).droppable({
              drop: function (event, ui) {
                snapToMiddle(ui.draggable, $(this))
              },
            })
          }
        )
      };
    };

    function snapToMiddle (dragger, target) {
      console.log('Caught drop event!')
      // var topMove = target.position().top - dragger.data('position').top + (target.outerHeight(true) - dragger.outerHeight(true)) / 2;
      var width = dragger.width() / dragger.parent().width() * 100
      var position = target.attr('position')
      var leftMove = 2.65 + 7.298 * (position - 1 / 2) - width / 2.0
      // var leftMove= target.position().left + target.width()/2  - dragger.data('posit').left - dragger.width() / 2;

      console.log(dragger.width())
      console.log(dragger)
      console.log(dragger[0]['id'])

      if (dragger[0]['id'] == 'survivors') {
        $('#survivors').attr('position', position)
      };
      if (dragger[0]['id'] == 'monster') {
        $('#monster').attr('position', position)
      };

      console.log(leftMove)

      dragger.animate({
        left: leftMove + '%',
      }, {
        duration: 600,
        easing: 'easeOutBack',
      })
    };

    function setCharAt (str, index, chr) {
      if (index > str.length - 1) return str
      return str.substr(0, index) + chr + str.substr(index + 1)
    };

    var scaling_board_function = function (e, ui) {
      var perc = ui.position.left / ui.helper.parent().width() * 100
      var percy = ui.position.top / ui.helper.parent().height() * 100

      ui.helper.css('left', perc + '%')
      ui.helper.css('top', percy + '%')

      console.log('top coord:')
      console.log(percy)
    }

    function current_state () {
      var current_state = new Object()

      let quarry_selected = true

      if ($('#hunt_back').css('display') == 'none') {
        quarry_selected = false
      }

      current_state.quarry_selected = quarry_selected

      if (quarry_selected) {
        let type = document.getElementById('label_text').textContent

        current_state.monster_type = type
        current_state.survivors_pos = $('#survivors').attr('position')
        current_state.monster_pos = $('#monster').attr('position')

        current_state.monster_ref = 'showdown ' + type.substr(0, type.length - 1).replace(' Lv.', '').toLowerCase() // $('#monster').attr('ref');

        var board_state = '-'
        var i
        for (i = 2; i < 13; i++) {
          var display = $('#common.token.' + i).css('display')
          if (i == 7) {
            var state = '-'
            continue
          }
          if (display == 'none') {
            var state = 'o'
          } else {
            var state = '-'
          }
          board_state = board_state + state
        };

        current_state.board_state = board_state
      };

      // current_state.muted = $("#mute.button").hasClass('active');

      current_state.speech_playing = speech.playing()

      if (speech.playing()) {
        current_state.speech_position = speech.seek()
      } else {
        current_state.speech_position = -1
      }

      current_state.music_playing = music.playing()

      if (music.playing()) {
        current_state.music_position = music.seek()
      } else {
        current_state.music_position = -1
      }

      current_state.back_target = sessionStorage.getItem('back_target')
      // if ( typeof q_event_sequence === 'undefined' || q_event_sequence === null ) {
      //   current_state.q_event_sequence = null;
      //   current_state.q_event_idx = null;
      // } else {
      //   current_state.q_event_sequence = q_event_sequence;
      //   current_state.q_event_idx = q_event_idx;
      // }
      current_state.q_event_sequence = q_event_sequence
      current_state.q_event_idx = q_event_idx

      return JSON.stringify(current_state)
    }

    function isHidden (el) {
      var style = window.getComputedStyle(el)
      return (style.display === 'none')
    }

    function getRandomInt (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
