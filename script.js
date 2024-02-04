
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
  alert("You cannot finish what you have not started.");
}

function alertMessageBack() {
  alert("No.");
}

function alertRandomLady() {
  alert("Idk who this random lady is tbh.");
}