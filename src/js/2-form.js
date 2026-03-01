import '../css/2-form.css';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email ?? '';
  formData.message = parsedData.message ?? '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// ================== delegation ====================
form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

// -=============== submit ======================
form.addEventListener('submit', evt => {
  evt.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  // ======= valid ============
  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  //===== оновлення form========
  formData.email = email;
  formData.message = message;

  form.elements.email.value = email;
  form.elements.message.value = message;

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();

  formData.email = '';
  formData.message = '';
});