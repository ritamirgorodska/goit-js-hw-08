import throttle from 'lodash.throttle';

const formElement = document.querySelector('.feedback-form');

formElement.addEventListener('input', throttle(onListenerInput, 500));
formElement.addEventListener('submit', onReset);

function onListenerInput(e) {
  if (e.target.nodeName !== 'INPUT' && e.target.nodeName !== 'TEXTAREA') {
    return;
  }
  const formUser = {
    email: formElement.email.value,
    message: formElement.message.value,
  };
  const formUserJSON = JSON.stringify(formUser);
  localStorage.setItem('feedback-form-state', formUserJSON);
}

function onReset(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function LocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    formElement.email.value = data.email;
    formElement.message.value = data.message;
  }
}

LocalStorage();
