/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

console.log('Herkansinkie');

var hamburgerDropdown = document.querySelector('nav#navigation > button');
var navigationItems = document.querySelector('nav#navigation > ul');

hamburgerDropdown.addEventListener("click", function(){
  if(navigationItems.classList.contains("dropdown")) {
    navigationItems.classList.remove("dropdown");
  } else {
    navigationItems.classList.add("dropdown");
  }
})


