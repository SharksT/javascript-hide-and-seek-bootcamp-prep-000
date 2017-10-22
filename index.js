

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
  var c =  document.getElementById('grand-node').querySelectorAll('*');
  var last = c[c.length -1 ]
  return last;

}

function increaseRankBy(n) {

var a =  document.getElementById('app').querySelectorAll('ul.ranked-list li')
for (let i = 0; i < a.length; i++) {
  a[i].innerHTML = (n).toString()
}
}
