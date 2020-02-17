const { app } = require('electron').remote

const { cdnUrl } = require('./template-cdnurl.js')

const fs = require('fs')

// if (window.globals.process == 'local') {
//   const fs = require('fs')
// }

module.exports = {
  readFile,
  saveFile,
  exists,
  checkFile,
}

function readFile (path, app_path='', lang='', return_type='file') {
  let final_path = ''

  if (app_path == 'root') {
    final_path = app.getAppPath() + '/' // app.getAppPath() +
    final_path = final_path.replace('//', '/')
  }
  if (app_path == 'override') {
    final_path = app.getPath('documents') + '/KDM Story App/override/'
  }

  if (!(lang == '')) {
    final_path = final_path +'versions/'+lang+'/'
  }

  final_path = final_path + path

  // console.log('File path read: '+final_path)

  if (return_type == 'file') {
      return fs.readFileSync(final_path)
  } else if (return_type == 'path') {
      return final_path
  }

}

function checkFile (path, app_path='', lang='', check=true) {
  let final_path = ''

  if (app_path == 'root') {
    // final_path = '/' // app.getAppPath() +
    final_path = app.getAppPath() + '/' // app.getAppPath() +
    final_path = final_path.replace('//', '/')
  }
  if (app_path == 'override') {
    final_path = app.getPath('documents') + '/KDM Story App/override/'
  }

  if (!(lang == '')) {
    final_path = final_path +'versions/'+lang+'/'
  }

  final_path = final_path + path

  // console.log('File path check: '+final_path)

  // let cdnHost = (window.globals.template.cdnHost || '').replace(/^[.\/]+/, '')


  // if (fs.existsSync(final_path)) {
  if (check) {
    if (fs.existsSync(final_path)) {
      return final_path
    } else {
      return ''
    }
  } else {
    return final_path
  }
  // fs.stat(final_path, function(err, stat) {
  //   if(err == null) {
  //       // console.log('File exists');
  //   } else {
  //       console.log('Some other error: ', err.code);
  //       final_path = ''
  //   }
  // })
  // try {
  //   fs.stat(final_path)
  //   return final_path
  // } catch (e) {
  //   final_path = ''
  // }
  return final_path
}

function saveFile (data, path) {
  try {
    fs.writeFileSync(path, data)
  } catch (e) {
    alert('Failed to save the file !')
  }
}

function exists (path, app_path=false) {
  if (app_path) {
    path = app.getAppPath() + '/'+path
  }
  return fs.existsSync(path)
}

function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}
