function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Select elements
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Function to create a collection of boxes
function createBoxes(amount) {
  boxesContainer.innerHTML = ''; // Clear existing content

  let size = 30; // Initial size for the first box
  const fragment = document.createDocumentFragment(); // For better performance

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px'; // Space between boxes
    size += 10; // Increase size for the next box

    fragment.appendChild(box);
  }

  boxesContainer.appendChild(fragment); // Add all boxes to the DOM
}

// Function to clear all boxes
function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Clear container content
}

// Event listener for the create button
createButton.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);

  // Validate the input value is between 1 and 100
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Clear input after creating boxes
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

// Event listener for the destroy button
destroyButton.addEventListener('click', destroyBoxes);
</script>
</body>
</html>