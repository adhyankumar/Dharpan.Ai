const texts = [
  "Increase sales per square foot",
  "Validate new designs efficiently",
  "Reducing sample production costs",
  "Reduce Return"
];

let index = 0;
const textContainer = document.getElementById('text-container');

function showNextText() {
  textContainer.style.opacity = 0;

  setTimeout(() => {
    textContainer.textContent = texts[index];
    textContainer.style.opacity = 1;
    index = (index + 1) % texts.length;
  }, 1000);
}

setInterval(showNextText, 3000); // Change text every 3 seconds
showNextText(); // Initial call to show the first text