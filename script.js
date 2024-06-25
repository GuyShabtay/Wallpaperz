const apiKey = '_aSzAKgtQz4tc_5-ALrt6aDH7YHIKdOP1RBF2qi5bFI';
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
  if (document.fullscreenElement) {
    mainContainer.classList.add('removed');
  } else {
    mainContainer.classList.remove('removed');
  }
}

// Add event listener for fullscreen change
document.addEventListener('fullscreenchange', handleFullscreenChange);

const backgroundImage = document.getElementById('background-image');

function preloadImage(url, callback) {
  const img = new Image();
  img.onload = () => callback(url);
  img.src = url;
}

function changeBackground() {
  const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const imgUrl = data.urls.regular;

      // Preload the image before applying the transition
      preloadImage(imgUrl, () => {
        // Apply transformation to move the image
        backgroundImage.style.transition = 'transform 20s';
        backgroundImage.style.transform = 'translateX(-10%)';

        // Change the image source after the transformation
        setTimeout(() => {
          backgroundImage.src = imgUrl;
          backgroundImage.style.transform = 'translateX(0%)';
        }, 10000); 
      });
    })
    .catch(error => console.error('Error fetching the image:', error));
}

// Initial background load once DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  // Initial background load
  changeBackground();
  
  // Change the background every 10 seconds
  setInterval(changeBackground, 10000);
});
