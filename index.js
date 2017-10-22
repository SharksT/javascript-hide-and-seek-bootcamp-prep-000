

function getFirstSelector(selector) {

  return document.querySelector(selector);

}

function nestedTarget() {

  var a =  document.getElementById('nested').querySelector('div.nested');

  for (var i = 0; i < a.length; i++) {
    return a[i].innerHTML
  }

}
