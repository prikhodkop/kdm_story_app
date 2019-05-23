

function readFile(path) {
  const fs = require("fs");

  return fs.readFileSync(path)
}

function saveFile(data, path) {
  var fs = require('fs');
  try { fs.writeFileSync(path, data); }
  catch(e) { alert('Failed to save the file !'); }
}
