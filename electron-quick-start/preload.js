// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
  window.$ = window.jQuery = require('jquery');// import jquery
  var fs = require('fs'); // import le module file
  require('bootstrap');
  require('bootstrap-table');
  require('popper.js');

  // fs.rename(__dirname + '/data1/Nouveau document texte.txt',__dirname + '/data1/grand_succes.txt', (err) => {
  //   if (err) throw err;
  //   console.log('renamed complete');
  // });

  fs.readdir(__dirname + '/data1/', function (err, files) {
    if (err !== null) {
      console.log(err);
      return;
    }
    files.forEach(function (file) {
      $('#data').append($('<li/>').html(file));
    })
  })

})
