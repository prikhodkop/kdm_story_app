module.exports = {
  readFileSync (path) {
    console.debug('fs.readFileSync', path)

    if (path[0].match(/^[.\/]/)) {
      // if path begins with a slash or period it's part of the app filesystem,
      // use a synchronous http request to fetch it's content
      console.debug('ajax')

      let result

      $.ajax({
        url: path.replace(/^[.\/]+/, ''),
        dataType: 'text',
        type: 'get',
        async: false,
        success (data) {
          result = data
        },
        fail () {
          throw `failed to read file ${path}`
        },
      })

      return result
    } else {
      // otherwise it's part of localStorage
      console.debug('localStorage')

      return localStorage.getItem(`emulated/0/${path}`)
    }
  },
  writeFileSync (path, data) {
    console.debug('fs.writeFileSync', path)

    if (path[0].match(/^[./]/)) {
      console.debug('ajax')

      // or period if path begins with a slash it's part of the app filesystem,
      // writes are not supported so throw an exception
      throw `writing to ${path} is forbidden when not using a browser`
    } else {
      // otherwise it's part of localStorage
      console.debug('localStorage')

      localStorage.setItem(`emulated/0/${path}`, data)
    }
  },
  existsSync (path) {
    console.debug('fs.existsSync', path)

    if (path[0].match(/^[.\/]/)) {
      console.debug('ajax')

      // or period if path begins with a slash it's part of the app filesystem,
      // use a synchronous http request to fetch it's content
      let result

      $.ajax({
        url: path.replace(/^[.\/]+/, ''),
        type: 'head',
        async: false,
        success () {
          result = true
        },
        fail () {
          result = false
        },
      })

      return result
    } else {
      // otherwise it's part of localStorage
      console.debug('localStorage')

      return localStorage.getItem(`emulated/0/${path}`) !== null
    }
  },
}
