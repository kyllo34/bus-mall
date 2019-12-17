'use strict';
// set variable equal to image tag
var imageEl = document.getElementsByTagName('img');
var imageIndex1 = 0;
var imageIndex2 = 0;
var imageIndex3 = 0;
var totalClicks = -1;
// controls how many times a user can make a selection
var userCount = 5;
// object constructor for all images
var allImages = [];
function Image(name, imageUrl){
  this.name = name;
  this.imageUrl = imageUrl;
  this.imageClicks = 0;
  this.imageViews = 0;
  allImages.push(this);
}

// function that returns array containing. used part of demo code
function imageArray(property) {
  var answer = [];
  for (var i = 0; i < allImages.length; i++) {
    answer[i] = allImages[i][property];
  }
  return answer;
}
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
  if (totalClicks < userCount) {
    totalClicks++;
    // if there was no event then ignore this condition
    if (event) {
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
    while ((nextImageIndex1 === imageIndex1) || (nextImageIndex1 === imageIndex2) || (nextImageIndex1 === imageIndex3) || (nextImageIndex1 === imageIndex3)) {
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
    for (var i = 1; i < imageEl.length; i++) {
      imageEl[i].removeEventListener('click', displayImages);
    }
    // create list of products with views and clicks
    var listContainer = document.getElementsByTagName('ul')[0];
    for (var i = 0; i < allImages.length; i ++  ) {
      var listItem = document.createElement('li');
      listItem.textContent = `${allImages[i].name}: ${allImages[i].imageClicks} votes, ${allImages[i].imageViews} views.` ;
      listContainer.appendChild(listItem);
    }
    var ctx = document.getElementById('resultsChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: imageArray('name'),
            datasets: [{
                label: '# of Votes',
                data: imageArray('imageClicks'),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }
      
}

// create an event listener for images
// make it listen to all images displayed except the first image as it is the logo
for (var i = 1; i < imageEl.length; i++) {
  imageEl[i].addEventListener('click', displayImages);
}

displayImages();

