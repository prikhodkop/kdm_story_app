const { get_random_draws, settlement_locations, gear_list, innovations } = require('./../ui/glossary')
const { cdnUrl } = require('./../ui/template-renderer')
const { titleCase } = require('./../ui/events')

const { addTimer } = require('./../ui/timer')
const { setTransition, getBackTarget, getBackBackTarget } = require('./../ui/transition')

const quaries_events = [
  'showdown gorm',
  'showdown white lion',
  'showdown screaming antelope',
  'showdown phoenix',
  'showdown dung beetle knight',
  'showdown sunstalker',
  'showdown dragon king',
  'showdown lion god',
  'showdown flower knight',
  'showdown spidicules',
]

module.exports = {
  eventsSugar
}

function eventsSugar(name) {
  if (quaries_events.indexOf(name) >= 0) {
    console.log('Adding the button!')
    let return_button = $('<button>', {
      id: 'settlement_return_button'
    })
    return_button.text('Return to Settlement')
    return_button.tooltipster({
        contentAsHTML: 'true',
        animation: 'grow',
        content: '<b style="color:#cc0;">Click</b> to return to <b>Settlement</b>.',
        position: 'bottom',
        delay: [300, 100],
        fixedWidth: 250,
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
    // return_button.hide()
    $('#container').append(return_button)
    // return_button.delay(1000).fadeIn(2000)
    $('#container').on('click', '#settlement_return_button', function () {
      setTransition('settlement', 'menu', name)
    });
  }
}

// function generateCardGrid(names, type) {
//
// }
