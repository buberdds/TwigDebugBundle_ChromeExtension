function getLogs() {
  var logs = [],
      rows = document.getElementsByClassName('Sf2TwigDebugList');
      
  if (rows) {
    for (var i = 0, l = rows.length; i < l; ++i) {
       logs.push(rows[i].innerHTML);
    }
  }
  return logs;
}

chrome.extension.onRequest.addListener(function(request, sender, callback) {
  if (request.type === 'templates') {
    callback({
      templates: getLogs()
    });
  }
});
