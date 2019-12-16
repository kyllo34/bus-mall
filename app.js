'use strict';
// set variable equal to image tag
var imageEl = document.getElementById('1');
// function for when there is an event
function imageWasClicked(event) {
  console.log('image was clicked');
}


// create an event listener for images
imageEl.addEventListener('click', imageWasClicked);
