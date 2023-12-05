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

// //11/28 translation try
// const apiKey = 'AIzaSyDJ8gOe19lP2nUB3CpMWsJvYSDZ7u5kcxM';

// // Function to translate the entire document
// function translateDocument(targetLanguage) {
//     const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
//     elementsToTranslate.forEach(async (element) => {
//         const textToTranslate = element.textContent;
//         const translation = await translateText(textToTranslate, targetLanguage);
//         element.textContent = translation;
//     });
// }

// // Function to translate a text using the Google Cloud Translation API
// async function translateText(text, targetLanguage) {
//     const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

//     const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             q: text,
//             target: targetLanguage,
//         }),
//     });

//     const data = await response.json();
//     return data.data.translations[0].translatedText;
// }

// // Example: Translate the document to Chinese when the page loads
// document.addEventListener('DOMContentLoaded', function () {
//     translateDocument('zh-CN');  // 'zh-CN' is the code for Chinese
// });

// // Example: Add a button to manually trigger translation to Spanish
// const translateButton = document.createElement('button');
// translateButton.textContent = 'Translate to Spanish';
// translateButton.addEventListener('click', function () {
//     translateDocument('es');  // 'es' is the code for Spanish
// });

// document.body.appendChild(translateButton);


const express = require('express');
const translate = require('google-translate-api');

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  // Replace this with your actual content
  const textToTranslate = `
    Tea Explorer
    EXPLORE
    CATEGORIES
    LEARN MORE
  `;

  // Split the text into paragraphs for better translation handling
  const paragraphs = textToTranslate.split('\n');

  // Translate each paragraph to Chinese
  const chineseTranslations = await Promise.all(
    paragraphs.map(async (paragraph) => await translate(paragraph, { to: 'zh-CN' }))
  );

  // Translate each paragraph to Spanish
  const spanishTranslations = await Promise.all(
    paragraphs.map(async (paragraph) => await translate(paragraph, { to: 'es' }))
  );

  // Sending the translated content as an HTML response
  res.send(`
    <html>
      <head>
        <title>Your Website</title>
      </head>
      <body>
        <h1>Original Content</h1>
        ${paragraphs.map((p) => `<p>${p}</p>`).join('')}

        <h1>Chinese Translation</h1>
        ${chineseTranslations.map((t) => `<p>${t.text}</p>`).join('')}

        <h1>Spanish Translation</h1>
        ${spanishTranslations.map((t) => `<p>${t.text}</p>`).join('')}
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});




//12/5 countdown
const endTime = new Date();
endTime.setMinutes(endTime.getMinutes() + 10);

let alertShown = false;

function updateCountdown() {
    const currentTime = new Date();
    const timeDifference = endTime - currentTime;

    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `You have ${minutes} minutes and ${seconds} seconds to keep the items in your shopping cart!`;

    if (timeDifference <= 0 && !alertShown) {
        document.getElementById('countdown').innerHTML = "Time's up! Your items have been removed from the cart.";
        alert("We have removed your shopping cart items. If they are still available, please confirm your purchases within the next 10 minutes.");
        alertShown = true;  // Set the flag to true to indicate that the alert has been shown
    }

setInterval(updateCountdown, 1000);
updateCountdown();

  //11/5/23, user authentication
 let loggedInUser = null;
    let loggedInPassword = null;

    function createAccount() {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const errorElement = document.getElementById('error');

        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        // Basic validation
        if (enteredUsername && enteredPassword) {
            loggedInUser = enteredUsername;
            loggedInPassword = enteredPassword;
            updateUI();
        } else {
            errorElement.textContent = 'Please enter both username and password.';
        }
    }

    function logout() {
        loggedInUser = null;
        loggedInPassword = null;
        updateUI();
    }

    function updateUI() {
        const loginForm = document.getElementById('loginForm');
        const welcomeMessage = document.getElementById('welcomeMessage');
        const loggedInUserElement = document.getElementById('loggedInUser');
        const logoutButton = document.getElementById('logoutButton');
        const errorElement = document.getElementById('error');

        // Hide or show elements based on authentication state
        if (loggedInUser) {
            loginForm.style.display = 'none';
            welcomeMessage.style.display = 'block';
            loggedInUserElement.textContent = loggedInUser;
            logoutButton.style.display = 'block';
            errorElement.textContent = '';
        } else {
            loginForm.style.display = 'block';
            welcomeMessage.style.display = 'none';
            logoutButton.style.display = 'none';
        }
    }

    