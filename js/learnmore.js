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
  element.style.color = 'black';
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

// //11/28 1st translation try
// // Call updateUI() when the page loads
// document.addEventListener('DOMContentLoaded', updateUI);

// // Function to change the language
// function changeLanguage() {
//   const languageSelect = document.getElementById('languageSelect');
//   currentLanguage = languageSelect.value;

//   // Call a function to update the UI based on the selected language
//   updateUI();
// }

// // Function to update the UI based on the selected language
// function updateUI() {
//   // Hide all elements with lang attribute
//   const langElements = document.querySelectorAll('[lang]');
//   langElements.forEach((element) => {
//     element.style.display = element.lang === currentLanguage ? 'block' : 'none';
//   });
// }

//12/5 afternoon 2nd attempt countdown timer to HTML page
const endTime = new Date();
endTime.setMinutes(endTime.getMinutes() + 10);

let alertShown = false;

function updateCountdown() {
    const currentTime = new Date();
    const timeDifference = endTime - currentTime;

    if (timeDifference <= 0 && !alertShown) {
        document.getElementById('countdown').innerHTML = "Time's up! Your items have been removed from the cart.";
        alert("We have removed your shopping cart items. If they are still available, please confirm your purchases within the next 10 minutes.");
        alertShown = true;
        clearInterval(countdownInterval); // Stop the interval once the time is up
    } else {
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `You have ${minutes} minutes and ${seconds} seconds to keep the items in your shopping cart!`;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


//12/5 afternnon 2nd attempt to add log in authentication
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


  if (loggedInUser) {
    loginForm.style.display = 'none';
    welcomeMessage.style.display = 'block';
    loggedInUserElement.textContent = loggedInUser;
    if (logoutButton) {
      logoutButton.style.display = 'block';
    }
    errorElement.textContent = '';
  } else {
    loginForm.style.display = 'block';
    welcomeMessage.style.display = 'none';
    if (logoutButton) {
      logoutButton.style.display = 'none';
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Focus on the username input when the page loads
  const usernameInput = document.getElementById('username');
  if (usernameInput) {
    usernameInput.focus();
  }

  const passwordInput = document.getElementById('password');
  if (passwordInput) {
    passwordInput.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
        createAccount();
      }
    });
  }
}); 


//1. avaScript for Submitting Reviews
function submitReview() {
  const userName = document.getElementById('userName').value;
  const rating = document.getElementById('rating').value;
  const reviewText = document.getElementById('reviewText').value;

  if (userName && rating && reviewText) {
    const review = {
      user: userName,
      rating: rating,
      text: reviewText,
      date: new Date().toISOString()  
    };

    let reviews = JSON.parse(localStorage.getItem('teaReviews')) || [];
    
    reviews.push(review);

    localStorage.setItem('teaReviews', JSON.stringify(reviews));

    displayReviews();

    document.getElementById('reviewForm').reset();
  } else {
    alert('Please fill in all fields before submitting the review.');
  }
}

//2. Displaying Reviews:
function displayReviews() {
  const reviewsContainer = document.getElementById('reviewsContainer');

  const reviews = JSON.parse(localStorage.getItem('teaReviews')) || [];

  reviewsContainer.innerHTML = '';

  reviews.forEach(review => {
    const reviewElement = document.createElement('div');
    reviewElement.innerHTML = `
      <p><strong>${review.user}</strong> - Rating: ${review.rating}</p>
      <p>${review.text}</p>
      <p>${review.date}</p>
      <hr>
    `;
    reviewsContainer.appendChild(reviewElement);
  });
}

document.addEventListener('DOMContentLoaded', displayReviews);

function shareOnFacebook() {
  const urlToShare = encodeURIComponent(window.location.href);
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`;
  openNewWindow(facebookShareUrl);
}

function shareOnTwitter() {
  const urlToShare = encodeURIComponent(window.location.href);
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${urlToShare}&text=Check out this amazing tea website!`;
  openNewWindow(twitterShareUrl);
}

function shareOnInstagram() {
  alert("To share on Instagram, please use the Instagram app or website manually.");
}

function openNewWindow(url) {
  window.open(url, '_blank', 'width=600,height=400');
}

//digital clock
function updateDigitalClock() {
    const currentDateTime = new Date();
    const hours = currentDateTime.getHours().toString().padStart(2, '0');
    const minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentDateTime.getSeconds().toString().padStart(2, '0');

    const digitalClock = `${hours}:${minutes}:${seconds}`;
    document.getElementById('digitalClock').innerHTML = digitalClock;
}

// Update the digital clock every second
setInterval(updateDigitalClock, 1000);
updateDigitalClock();
