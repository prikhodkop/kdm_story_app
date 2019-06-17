module.exports = {
  remote: {
    app: {
      getAppPath () {
        return '.'
      },
      getPath (name) {
        return name
      },
    },
    getCurrentWindow () {
      return window
    },
  },
  screen: {
    getPrimaryDisplay () {
      return {
        size: {
          height: window.innerHeight,
          width: window.innerWidth,
        },
      }
    },
  },
  shell: {
    openExternal (url) {
      window.open(url, '_blank').focus()
    },
  },
}
