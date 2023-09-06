 // JavaScript to handle the fullscreen functionality
 const fullScreenButton = document.getElementById('fullscreen-button');

 // Function to enter fullscreen mode
 function enterFullScreen() {
     if (document.documentElement.requestFullscreen) {
         document.documentElement.requestFullscreen();
     } else if (document.documentElement.mozRequestFullScreen) { // Firefox
         document.documentElement.mozRequestFullScreen();
     } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
         document.documentElement.webkitRequestFullscreen();
     } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
         document.documentElement.msRequestFullscreen();
     }
 }

 // Attach the enterFullscreen function to the button click event
 fullScreenButton.addEventListener('click', enterFullScreen);

 fullScreenButton.addEventListener('click', () => {
  enterFullScreen();
  fullScreenButton.classList.add('removed');
});