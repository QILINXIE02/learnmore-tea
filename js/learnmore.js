const toggleModeButton = document.getElementById('toggle-mode');
const shoppingCart = [];

toggleModeButton.addEventListener('click', function () {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
  } else {
    document.body.classList.add('dark-mode');
  }
});

const confirmButton = document.getElementById('confirmButton');
if (confirmButton) {
  confirmButton.addEventListener('click', function () {
    if (shoppingCart.length > 0) {
     
      alert("Hey, thanks for purchasing teas here! Call our global line 1-503-###-##### for the next step!");
    } else {
      
      alert("Your shopping cart is empty. Add items before confirming.");
    }
  });
}
function updateGreeting() {
  const nameInput = document.getElementById('nameInput');
  const greetingElement = document.getElementById('greeting');
  const name = nameInput.value.trim();

  if (name) {
    greetingElement.textContent = `Hey, ${name}! Thanks for learning more about our teas. If you're ready to purchase, add items to shopping cart below and please call 1-503-###-##### to route to nearby store.`;
  } else {
    showError(greetingElement, 'Please enter your name to start ordering.');
  }
}

function changePageColor() {
  const colorInput = document.getElementById('colorInput');
  const color = colorInput.value;

  if (color) {
    document.body.style.backgroundColor = color;
  }
}

function showError(element, message) {
  element.textContent = message;
  element.style.color = 'red';
}

function inputIsValid(input) {
  return input.trim() !== '';
}

function promptWithValidation(message, validationFunction) {
  let input;
  do {
    input = prompt(message);
  } while (!validationFunction(input));
  return input;
}

function addToCart(item) {
  shoppingCart.push(item);
  updateCartIcon();
}

function updateCartIcon() {
  const cartIcon = document.getElementById('cartIcon');
  if (cartIcon) {
    cartIcon.textContent = `Cart ☕️(${shoppingCart.length})`;
  }
}

function showShoppingCart() {
  alert(`Items in the Cart:\n${shoppingCart.join('\n')}`);
}

function displayTeaImages() {
  const teaInput = document.getElementById('teaInput');
  const teaCount = parseInt(teaInput.value);

  const teaImagesContainer = document.getElementById('teaImages');
  teaImagesContainer.innerHTML = '';

  if (!isNaN(teaCount) && teaCount > 0 && teaCount <= 100) {
    const teas = [
      { name: 'Japanese Green Tea', imageUrl: 'img/greentea.jpg', link: 'https://team-quicm.github.io/Tea-Explorer/teas.html' },
      { name: 'Earl Grey Tea', imageUrl: 'img/Earl-Grey-tea.jpg', link: 'https://team-quicm.github.io/Tea-Explorer/teas.html' },
      { name: 'Chamomile Tea', imageUrl: 'img/Chamomile.jpg', link: 'https://team-quicm.github.io/Tea-Explorer/teas.html' },
      { name: 'Yerba Mate', imageUrl: 'img/yerba-mate-tea.jpg', link: 'https://team-quicm.github.io/Tea-Explorer/teas.html' },
      { name: 'South African Rooibos', imageUrl: 'img/South-African-Rooibos-tea.jpg', link: 'https://team-quicm.github.io/Tea-Explorer/teas.html' },
      { name: 'Australian Lemon Myrtle Tea', imageUrl: 'img/Australian-Lemon-Myrtle-Tea.jpg', link: 'https://team-quicm.github.io/Tea-Explorer/teas.html' }
    ];

    const teasToShow = Math.min(teaCount, teas.length);

    const row = document.createElement('div');
    row.className = 'image-row';

    for (let i = 0; i < teasToShow; i++) {
      const imageContainer = document.createElement('div');
      imageContainer.className = 'tea-image-container';

      const image = document.createElement('img');
      image.src = teas[i].imageUrl;
      image.width = 100;
      image.height = 100;
      image.alt = `${teas[i].name} #${i + 1}`;

      const teaName = teas[i].name;
      const teaNameElement = document.createElement('p');
      teaNameElement.textContent = teaName;

      const teaLink = document.createElement('a');
      teaLink.href = teas[i].link;
      teaLink.target = '_blank';
      teaLink.appendChild(image);
      imageContainer.appendChild(teaLink);

      imageContainer.appendChild(teaNameElement);

      const addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.addEventListener('click', function () {
        addToCart(`${teas[i].name} #${i + 1}`);
      });
      imageContainer.appendChild(addToCartButton);

      row.appendChild(imageContainer);
    }

    teaImagesContainer.appendChild(row);
  } else if (teaCount > 100) {
    showError(teaImagesContainer, 'We are limited to 100 sales or less.');
  } else {
    showError(teaImagesContainer, 'Please enter a valid number greater than 0.');
  }
}

//11/28 translation try
// Call updateUI() when the page loads
document.addEventListener('DOMContentLoaded', updateUI);

// Function to change the language
function changeLanguage() {
  const languageSelect = document.getElementById('languageSelect');
  currentLanguage = languageSelect.value;

  // Call a function to update the UI based on the selected language
  updateUI();
}

// Function to update the UI based on the selected language
function updateUI() {
  // Hide all elements with lang attribute
  const langElements = document.querySelectorAll('[lang]');
  langElements.forEach((element) => {
    element.style.display = element.lang === currentLanguage ? 'block' : 'none';
  });
}
