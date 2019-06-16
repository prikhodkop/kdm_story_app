const HuntScene = require('../scenes/hunt')
const ImageScene = require('../scenes/image')
const IndexScene = require('../scenes')
const SettlementScene = require('../scenes/settlement')
const VideoScene = require('../scenes/video')

const name = document.body.getAttribute('scene-name')

let scene

switch (name.toLowerCase()) {
  case 'hunt': scene = HuntScene; break
  case 'image': scene = ImageScene; break
  case 'index': scene = IndexScene; break
  case 'settlement': scene = SettlementScene; break
  case 'video': scene = VideoScene; break
}

if (!scene) {
  throw `invalid scene ${scene}`
}

new scene()
