const formRef = document.querySelector('.feedback-form');
import throttle from 'lodash.throttle'

const checkLocal = () => {
  const LOCAL_PARSE = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (LOCAL_PARSE === null) {
    return;
  }

  const { email, message } = formRef.elements;
  email.value = LOCAL_PARSE.email;
  message.value = LOCAL_PARSE.message;
};

const submitForm = e => {
  e.preventDefault();
  const { email, message } = formRef.elements;
  const formValue = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
};

const getValueInput = e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  formRef.reset();
  localStorage.removeItem('feedback-form-state');
};

formRef.addEventListener('input',throttle(submitForm, 500));
window.addEventListener('load', checkLocal);
formRef.addEventListener('submit', getValueInput);


