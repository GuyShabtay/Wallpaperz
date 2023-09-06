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


function changeBackground() {
  const imageUrl = 'https://source.unsplash.com/random';
  document.body.style.backgroundImage = `url('${imageUrl}')`;
}

// Call the function initially
changeBackground();

// Set an interval to change the background image every 2 seconds
setInterval(changeBackground, 2000); // 2000 milliseconds = 2 seconds

