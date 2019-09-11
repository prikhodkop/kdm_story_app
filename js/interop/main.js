const router = require('../ui/router')

let hashbang = window.location.hash.match(/^#!\/([^\/?]+)/)

if (hashbang) {
  hashbang = hashbang[1]
} else {
  window.location.hash = '#!/index'
  hashbang = 'index'
}

router.route(hashbang, false)
