

function getFirstSelector(selector) {

  return document.querySelector(selector);

}

function nestedTarget() {

  var a =  document.getElementById('nested').querySelectorAll('div.target');

  for (var i = 0; i < a.length; i++) {
    return a[i];
  }
}

function deepestChild() {

  var a =  document.getElementById('grand-node').querySelectorAll('*');
  var a =  document.getElementById('grand-node').lastChild.nodeName;

  for (var i = 0; i < a.length; i++) {
    if (a[i].lastChild)
    return a[i];
  }
}
