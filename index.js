

function getFirstSelector(selector) {

  return document.querySelector(selector);

}

function nestedTarget() {

  var a =  document.getElementById('nested').querySelector('div.target');

  for (var i = 0; i < a.length; i++) {
    return a[i].innerHTML
  }

}
