

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
  var c =  document.getElementById('grand-node').lastChild.nodeName;
  var a =  document.getElementById('grand-node').querySelectorAll(c);
  

  for (var i = 0; i < a.length; i++) {
    if (a[i].lastChild)
    return a[i];
  }
}
