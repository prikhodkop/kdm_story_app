module.exports = {
  cdnUrl
}

function cdnUrl (file) {
  // return file without modification if it looks like it contains a scheme

  if (file.match(/:\/\//)) {
    return file
  }

  let cdnHost = (window.globals.template.cdnHost || '').replace(/^[.\/]+/, '')

  if (cdnHost.length) {
    cdnHost = `${cdnHost}/`
  }

  return cdnHost + file.replace(/^[.\/]+/, '')
}
