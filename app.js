'use strict';

// starts with negative one as totalclicks is tallied when initial images are displayed
var totalClicks = -1;
// controls how many times a user can make a selection
var userCount = 25;
// number of images desired to display
var displayImgNum = 3;
// create image element
var imageEl = new Array(displayImgNum).fill(document.createElement('img'));
// initiates index arrays for displayed images
var currentImgIndex = new Array(displayImgNum).fill(0);
var nextImgIndex = new Array(displayImgNum).fill(0);
// object constructor for all images
var allImages = [];
function Image(name, imageUrl){
  this.name = name;
  this.imageUrl = imageUrl;
  this.imageClicks = 0;
  this.imageViews = 0;
  allImages.push(this);
}

// function that returns array containing property of objects. used part of demo code
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

// creates random color for dataset from https://stackoverflow.com/questions/1484506/random-color-generator
var clicksColorArray = [];
var viewColorArray = [];
function randomColorArray() {
  for (var j = 0; j < allImages.length; j++) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    //adds transparency to view bars
    viewColorArray[j] = color + '80';
    clicksColorArray[j] = color + `D0`;
  }
} 
randomColorArray();


// function for when there is an event
function displayImages(event) {
  if (totalClicks < userCount) {
    totalClicks++;
    }
    // pick x number of random images to display
    for (var i = 0; i <= displayImgNum; i++) {
      var tempNum = Math.ceil(Math.random() * allImages.length);
      while (currentImgIndex.includes(tempNum) || nextImgIndex.includes(tempNum)) {
        tempNum = Math.ceil(Math.random() * allImages.length);
      }
      // new indexes for images
      nextImgIndex[i] = tempNum; 

      // display new image
      imageEl[i].src = allImages[nextImgIndex[i]].imageUrl;
      // track image view
      allImages[nextImgIndex[i]].imageViews += 1;
      // if there was no event then ignore this condition
      if (event) {
          // log clicks per image
          if (event.srcElement.id === String(nextImgIndex[i])) {
            allImages[nextImgIndex[i]].imageClicks++;

    }

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
                backgroundColor: clicksColorArray,
                borderColor: 'red',
                borderWidth: 1.0,
                barPercentage: 1.0
            },{
                label: '# of Views',
                data: imageArray('imageViews'),
                backgroundColor: viewColorArray,
                borderColor: 'black',
                borderWidth: 1,
          }]
        },
        options: {
            scales: {
                xAxes: [{ stacked: true }],
                yAxes: [{
                    stacked:true,
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

