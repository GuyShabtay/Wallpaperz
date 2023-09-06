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

const backgroundImage = document.getElementById('background-image');
function changeBackground() {
  const imageURL='https://source.unsplash.com/random/1920x1080';
  fetch(imageURL) // Change the size as needed
    .then(response => {
      if (response.ok) {
        return response.url;
      } else {
        throw new Error('Failed to fetch image from Unsplash.');
      }
    })
    .then(imageUrl => {
      backgroundImage.style.transform = 'translateX(-10%)'; 
      setTimeout(() => {
        backgroundImage.src = imageURL; // Change the background image
        backgroundImage.style.transform = 'translateX(0%)'; 
      }, 10000); // Adjust the duration (2 seconds) as needed
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
}

// Initial background load
changeBackground();

// Change the background every 3 seconds
setInterval(changeBackground, 10000);

