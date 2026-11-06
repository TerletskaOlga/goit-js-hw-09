

const form = document.querySelector('.feedback-form');

const formState = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

// Відновлення даних із localStorage
const savedFormState = localStorage.getItem(STORAGE_KEY);

if (savedFormState) {
  const parsedState = JSON.parse(savedFormState);

  formState.email = parsedState.email || '';
  formState.message = parsedState.message || '';

  form.elements.email.value = formState.email;
  form.elements.message.value = formState.message;
}

// Відстеження введення даних у форму
form.addEventListener('input', event => {
  const { name, value } = event.target;

  formState[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
});

// Відправлення форми
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formState.email || !formState.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formState);

  localStorage.removeItem(STORAGE_KEY);

  form.reset();

  formState.email = '';
  formState.message = '';
});

