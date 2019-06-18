let loops = {}
let timers = {}

module.exports = {
  addLoop,
  clearLoops,
  addTimer,
  clearTimers,
}

function addLoop(handler, timeout = null) {
  const handle = setInterval(
    function() {
      delete loops[handle]

      handler.call(arguments)
    },
      timeout,
      ...Array.prototype.slice.call(arguments, 2))

  loops[handle] = true
}

function clearLoops() {
  for (let handle in loops) {
    clearInterval(handle)
  }

  loops = {}
}

function addTimer(handler, timeout = null) {
  const handle = setTimeout(
    function() {
      delete timers[handle]

      handler.call(arguments)
    },
      timeout,
      ...Array.prototype.slice.call(arguments, 2))

  timers[handle] = true
}

function clearTimers() {
  for (let handle in timers) {
    clearTimeout(handle)
  }

  timers = {}
}
