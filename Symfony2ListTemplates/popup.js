var renderTemplates = function(templates) {
  var container = document.getElementById('templates'), ul, li;
  container.innerHTML = '';
  if (templates.length) {
    ul = document.createElement('ul');
    templates.forEach(function(template, i) {
      li = document.createElement('li');
      li.innerHTML = template;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  } else {
    container.innerHTML = 'Templates not found.';
  }
};

var getTemplates = function() {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {type: 'templates'}, function(response) {
      renderTemplates(response.templates);
    });
  });
};


chrome.extension.onRequest.addListener(function(request, sender, callback) {
  if (request.id === 'templates') {
    renderTemplates(request.templates);
  }
});

getTemplates();