// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
document.getElementById("copy").addEventListener("click", function () {
  event.preventDefault();
  let input = document.getElementById("userInput1").value;
  document.getElementsByClassName("output")[0].textContent = input;
});
// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area
document.getElementById("userInput2").addEventListener("input", function () {
  document.getElementById("output2").textContent = this.value;
});
// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
