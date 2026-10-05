// Scratch pad for the non-coffee-shop examples in each chapter
// (greetings, switch/color picker, iterators, resize, timers, etc.).
// Clear it out whenever you start a new example.

document.getElementById("content").textContent = "Hello, World!"

firstNameTextBox = document.getElementById("firstName")
submitButton = document.getElementById("submit")
greetingContainer = document.getElementById("greeting")
submitButton.addEventListener("click", function() {
greetingContainer.textContent = "Hello, " + firstNameTextBox.value +
"!"
}
