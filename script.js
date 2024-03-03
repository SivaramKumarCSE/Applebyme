document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById('myVideo');
    var overlayImage = document.getElementById('overlayImage');
    var overlayText = document.getElementById('overlayText');
    var playButton = document.getElementById('playButton');
  
    video.addEventListener('play', function () {
      console.log('Video is playing.');
      // Add your custom logic here
    });
  
    // Add more event listeners or functions as needed
    video.addEventListener('pause', function () {
      console.log('Video is paused.');
      // Additional logic for when the video is paused
    });
  
    // Function to play the video
    function playVideo() {
      video.play();
      overlayImage.style.opacity = 0.5; // Example: reduce opacity of the overlay image
      overlayText.innerHTML = 'Video is playing'; // Example: change overlay text
      customFunction(); // Call the custom function
    }
  
    // You can continue to add more event listeners or functions
  });
  
  
