'use strict';
// set variable equal to image tag
var imageEl = document.getElementsByTagName('img');
// object constructor for all images
var allImages = [];
function Image(name, imageUrl){
  this.name = name;
  this.imageUrl = imageUrl;
  this.imageClicks = 0;
  this.imageViews = 0;
  allImages.push(this);
}

// Create images
new Image('bag', 'img/bag.jpg');
new Image('banana', 'img/banana.jpg');
new Image('bathroom', 'img/bathroom.jpg');
new Image('boots', 'img/boots.jpg');
new Image('breakfast', 'img/breakfast.jpg');
new Image('bubblegum', 'img/bubblegum.jpg');
new Image('bus', 'img/bus.jpg');
new Image('chair', 'img/chair.jpg');
new Image('cthulu', 'img/cthulhu.jpg');
new Image('bag', 'img/bag.jpg');


// function for when there is an event
function imageWasClicked(event) {
  console.log('image was clicked');

}



// create an event listener for images
// make it listen to all images displayed except the first image as it is the logo
for (var i = 1; i < imageEl.length; i ++) {
  imageEl[i].addEventListener('click', imageWasClicked);
}