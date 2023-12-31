const fullscreenButton = document.getElementById('fullscreen-button');
const mainContainer = document.getElementById('main-container');

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
    ? mainContainer.classList.add('removed')
    : mainContainer.classList.remove('removed');
}

// Add event listener for fullscreen change
document.addEventListener('fullscreenchange', handleFullscreenChange);

const imageElement = document.getElementById('image');
const showImageButton = document.getElementById('showImage');

const backgroundImage = document.getElementById('background-image');
function changeBackground() {
  const imageURL = 'https://source.unsplash.com/random/1920x1080';
  fetch(imageURL)
    .then((response) => {
      if (response.ok) {
        return response.url;
      } else {
        throw new Error('Failed to fetch image from Unsplash.');
      }
    })
    .then((imageUrl) => {
      backgroundImage.style.transform = 'translateX(-10%)';
      setTimeout(() => {
        backgroundImage.src = imageURL; // Change the background image
        backgroundImage.style.transform = 'translateX(0%)';
      }, 10000);
    })
    .catch((error) => {
      console.error('Error fetching image:', error);
    });
}

// Initial background load
changeBackground();

// Change the background every 3 seconds
setInterval(changeBackground, 10000);
