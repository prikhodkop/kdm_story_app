var path_to_quary_events = 'images/hunt/quary_events/'

var quary_events = [
  'dung beetle knight 1.jpg',
  'dung beetle knight 2.jpg',
  'dung beetle knight 3.jpg',
  'dung beetle knight 4.jpg',
  'dung beetle knight 5.jpg',
  'dung beetle knight 6.jpg',
  'dung beetle knight 7.jpg',
  'gorm 1.jpg',
  'gorm 2.jpg',
  'gorm 3.jpg',
  'gorm 4.jpg',
  'gorm 5.jpg',
  'gorm 6.jpg',
  'gorm 7.jpg',
  'lion god 1.jpg',
  'lion god 2.jpg',
  'lion god 3.jpg',
  'lion god 4.jpg',
  'lion god 5.jpg',
  'lion god 6.jpg',
  'lion god 7.jpg',
  'lion god 8.jpg',
  'phoenix 1.jpg',
  'phoenix 2.jpg',
  'phoenix 3.jpg',
  'phoenix 4.jpg',
  'phoenix 5.jpg',
  'phoenix 6.jpg',
  'phoenix 7.jpg',
  'phoenix 8.jpg',
  'phoenix 9.jpg',
  'screaming antelope 1.jpg',
  'screaming antelope 2.jpg',
  'screaming antelope 3.jpg',
  'screaming antelope 4.jpg',
  'screaming antelope 5.jpg',
  'screaming antelope 6.jpg',
  'screaming antelope 7.jpg',
  'screaming antelope 8.jpg',
  'screaming antelope 9.jpg',
  'sunstalker 1.jpg',
  'sunstalker 2.jpg',
  'sunstalker 3.jpg',
  'sunstalker 4.jpg',
  'sunstalker 5.jpg',
  'sunstalker 6.jpg',
  'sunstalker 7.jpg',
  'sunstalker 8.jpg',
  'white lion 1.jpg',
  'white lion 2.jpg',
  'white lion 3.jpg',
  'white lion 4.jpg',
  'white lion 5.jpg',
  'white lion 6.jpg',
  'white lion 7.jpg'
]

function get_sequence (name) {
  let sequence = []

  for (let i = 0; i < quary_events.length; i++) {
    if (quary_events[i].includes(name.replace('showdown ', ''))) {
      sequence.push(path_to_quary_events + quary_events[i])
    }
  }

  return shuffle(sequence)
}

function next_event (sequence, idx) {
  if (idx >= sequence.length) {
    idx = 0
    sequence = shuffle(sequence)
  }

  let next = sequence[idx]
  idx += 1

  return next, sequence, idx
}

function idx_event (sequence, idx) {
  return sequence[idx]
}

function shuffle (a) {
  let j, x, i

  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }

  return a
}
