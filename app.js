'use strict';
// set variable equal to image tag
var imageEl = document.getElementsByTagName('img');

var totalClicks = -1;
// object constructor for all images
var allImages = [];
function Image(name, imageUrl){
  this.name = name;
  this.imageUrl = imageUrl;
  this.imageClicks = 0;
  this.imageViews = 0;
  allImages.push(this);
}
// We know what the first three images are

// Create images
new Image('bag', 'img/bag.jpg');
new Image('banana', 'img/banana.jpg');
new Image('bathroom', 'img/bathroom.jpg');
new Image('boots', 'img/boots.jpg');
new Image('breakfast', 'img/breakfast.jpg');
new Image('bubblegum', 'img/bubblegum.jpg');
new Image('chair', 'img/chair.jpg');
new Image('cthulu', 'img/cthulhu.jpg');
new Image('dog-duck', 'img/dog-duck.jpg');
new Image('dragon', 'img/dragon.jpg');
new Image('pen', 'img/pen.jpg');
new Image('pet-sweep', 'img/pet-sweep.jpg');
new Image('scissors', 'img/scissors.jpg');
new Image('shark', 'img/shark.jpg');
new Image('sweep', 'img/sweep.png');
new Image('tauntaun', 'img/tauntaun.jpg');
new Image('unicorn', 'img/unicorn.jpg');
new Image('water-can', 'img/water-can.jpg');
new Image('wine-glass', 'img/wine-glass.jpg');

// function for when there is an event
function displayImages(event) {
  totalClicks++;
  // first image rendered = random number * (imageEl -1)
  imageEl[1].src = allImages[Math.floor(Math.random() * allImages.length)].imageUrl;
  imageEl[2].src = allImages[Math.floor(Math.random() * allImages.length)].imageUrl;
  imageEl[3].src = allImages[Math.floor(Math.random() * allImages.length)].imageUrl;
}

// We call the imagewasclicked function first to generate 3 random images
displayImages();

// create an event listener for images
// make it listen to all images displayed except the first image as it is the logo
for (var i = 1; i < imageEl.length; i++) {
  imageEl[i].addEventListener('click', displayImages);
}