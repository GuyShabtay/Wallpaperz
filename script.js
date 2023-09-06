// JavaScript to handle the fullscreen functionality
const fullscreenButton = document.getElementById('fullscreen-button');

// Function to enter fullscreen mode
function enterFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    // Firefox
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    // IE/Edge
    document.documentElement.msRequestFullscreen();
  }
}

// Attach the enterFullscreen function to the button click event
fullscreenButton.addEventListener('click', enterFullscreen);

// Function to handle fullscreen change event
function handleFullscreenChange() {
  document.fullscreenElement !== null
    ? fullscreenButton.classList.add('removed')
    : fullscreenButton.classList.remove('removed');
}

// Add event listener for fullscreen change
document.addEventListener('fullscreenchange', handleFullscreenChange);

const imageElement = document.getElementById('image');
const showImageButton = document.getElementById('showImage');

function changeBackground() {

  fetch('https://source.unsplash.com/random')
      .then(response => {
          if (response.ok) {
            imageElement.src = response.url;
            // imageElement.style.transition= 'opacity 3s'; 
          
            
           
            // imageElement.classList.toggle('animate');
            // imageElement.classList.toggle('animate2');
          } else {
              console.error('Failed to fetch image from Unsplash.');
          }
      })
      .catch(error => {
          console.error('Error fetching image:', error);
      });
}

let leftPosition = 0;

function moveLeft() {
  leftPosition -= 50; // Move 50 pixels to the left

  // Animate the element's left position
  $('#moving-element').animate({ left: leftPosition }, 1000); // Adjust the duration as needed
}


console.log("first")
// Call the function initially
// changeBackground();

// setInterval(function () {element.innerHTML += "Hello"}, 1000);


// Set an interval to change the background image every 2 seconds
setInterval((changeBackground,moveLeft), 3000); 

