const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');
// const googleAppsScriptURL = 'https://script.google.com/macros/s/AKfycbxsKumOS1H7hEYljOZn8CiYZQ4JmYe18nLnGD_Uo2yupYwnWEFt4iAmxuSMFLMlb4U/exec'; // Replace with your Apps Script Web App URL
const googleAppsScriptURL = 'https://script.google.com/macros/s/AKfycbyAsh7mogeD7eQRYtWVBNF6_6AovA1zpWw_ZxkXyg/dev'; // Replace with your Apps Script Web App URL

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  fetch(googleAppsScriptURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      responseMessage.textContent = data.message;
      form.reset();
    })
    .catch((error) => {
      responseMessage.textContent = 'Error submitting the form. Please try again.';
      console.error('Error:', error);
    });
});