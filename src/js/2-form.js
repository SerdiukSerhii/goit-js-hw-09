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

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

 const trimmedEmail = formData.email.trim();
 const trimmedMessage = formData.message.trim();

 if (trimmedEmail === '' || trimmedMessage === '') {
   alert('Fill please all fields');
   return;
 }

 console.log({ email: trimmedEmail, message: trimmedMessage });
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData.email = '';
  formData.message = '';
});
