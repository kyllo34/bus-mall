'use strict';
// set variable equal to image tag
var imageEl = document.getElementsByTagName('img');
var imageIndex1 = 0;
var imageIndex2 = 1;
var imageIndex3 = 2;
var totalClicks = -1;
// object constructor for all images
var allImages = [];
function Image(name, imageUrl, imageClicks, imageViews){
  this.name = name;
  this.imageUrl = imageUrl;
  this.imageClicks = 0;
  this.imageViews = 0;
  allImages.push(this);
}
// We know what the first three images are

// Create images
new Image('bag', 'img/bag.jpg',0, 1);
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
  if (totalClicks < 25) {
    totalClicks++;
    // if there was no event then ignore this condition
    if (event !== undefined) {
    // log clicks per image
      if (event.srcElement.id === '1') {
        allImages[imageIndex1].imageClicks++;
      } else if (event.srcElement.id === '2') {
        allImages[imageIndex2].imageClicks++;
      } else if (event.srcElement.id === '3') {
        allImages[imageIndex3].imageClicks++;
      }
    }
    // pick 3 random images to display
    var nextImageIndex1 = Math.floor(Math.random() * allImages.length);
    while ((nextImageIndex1 === imageIndex1) || (nextImageIndex1 === imageIndex2) || (nextImageIndex1 === imageIndex3)) {
      nextImageIndex1 = Math.floor(Math.random() * allImages.length);
    }
    var nextImageIndex2 = Math.floor(Math.random() * allImages.length);
    while ((nextImageIndex2 === imageIndex1) || (nextImageIndex2 === imageIndex2) || (nextImageIndex2 === imageIndex3) || (nextImageIndex2 === nextImageIndex1)) {
      nextImageIndex2 = Math.floor(Math.random() * allImages.length);
    }
    var nextImageIndex3 = Math.floor(Math.random() * allImages.length);
    while ((nextImageIndex3 === imageIndex1) || (nextImageIndex3 === imageIndex2) || (nextImageIndex3 === imageIndex3) || (nextImageIndex3 === nextImageIndex1) || (nextImageIndex3 === nextImageIndex2)) {
      nextImageIndex3 = Math.floor(Math.random() * allImages.length);
    }  
    // new indexes for images
    imageIndex1 = nextImageIndex1;
    imageIndex2 = nextImageIndex2;
    imageIndex3 = nextImageIndex3;
    // display new images
    imageEl[1].src = allImages[imageIndex1].imageUrl;
    imageEl[2].src = allImages[imageIndex2].imageUrl;
    imageEl[3].src = allImages[imageIndex3].imageUrl;
    // track views per image
    allImages[imageIndex1].imageViews += 1;
    allImages[imageIndex2].imageViews += 1;
    allImages[imageIndex3].imageViews += 1;
  } else {
    
  }
}

// create an event listener for images
// make it listen to all images displayed except the first image as it is the logo
for (var i = 1; i < imageEl.length; i++) {
  imageEl[i].addEventListener('click', displayImages);
}

displayImages();