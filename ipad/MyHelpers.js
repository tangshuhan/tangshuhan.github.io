
function $g(selector){
  let nodelist = document.querySelectorAll(selector);
  return nodelist.length == 1 ? nodelist[0] : nodelist ;
}
function $c(element) {
  return document.createElement(element);

}
function $cc (parent,element,text){
  let el = document.createElement(element);
  el.innerText = text ;
  parent.appendChild(el);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export { $g , $c , $cc , getRandom};