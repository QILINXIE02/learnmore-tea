// // translations.js

// const translations = {
//   'Select Language:': 'Selecciona Idioma:',
//   'English': 'Inglés',
//   'Español': 'Español',
//   // Add more translations as needed
// };

// function translateText(text) {
//   return translations[text] || text;
// }

// function applyTranslations() {
//   const elements = document.querySelectorAll('[data-translate]');
//   elements.forEach(element => {
//     const originalText = element.textContent;
//     const translatedText = translateText(originalText);
//     element.textContent = translatedText;
//   });
}

// In your translations.js file

let currentLanguage = 'en';

function changeLanguage() {
  const languageSelect = document.getElementById('languageSelect');
  currentLanguage = languageSelect.value;

  // Call a function to update the UI based on the selected language
  updateUI();
}

function updateUI() {
  // Hide all elements with lang attribute
  const langElements = document.querySelectorAll('[lang]');
  langElements.forEach((element) => {
    element.style.display = element.lang === currentLanguage ? 'block' : 'none';
  });
}