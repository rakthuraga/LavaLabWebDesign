
function toggleConnection(button) {
  // Toggle text and background color
  if (button.innerHTML === 'Connect') {
    button.innerHTML = 'Connected';
    button.style.backgroundColor = '#dffde0';
  } else {
    button.innerHTML = 'Connect';
    button.style.backgroundColor = '#FFFFFF';
  }
}

function alertMessage() {
  alert("Nah.");
}

function alertMessageBack() {
  alert("No! Click Finish Now!");
}

function alertRandomLady() {
  alert("Idk who this random lady is tbh.");
}

function redirectToYouTube() {
  var youtubeVideoUrl = "https://www.youtube.com/watch?v=UWq-WsNxqDE&ab_channel=CashNasty";
  window.open(youtubeVideoUrl, '_blank');
}