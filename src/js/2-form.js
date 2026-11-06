
const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

// Відновлення даних із localStorage
const savedFormData = localStorage.getItem(STORAGE_KEY);

if (savedFormData) {
  const parsedData = JSON.parse(savedFormData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// Відстеження введення даних у форму
form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Відправлення форми
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  form.reset();

  formData.email = '';
  formData.message = '';
});


