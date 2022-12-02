import throttle from 'lodash.throttle' 

const formEl = document.querySelector('.feedback-form')

formEl.addEventListener('input', throttle(onListenerInput, 500))
formEl.addEventListener('submit', onReset)

function onListenerInput (e) {
    if(e.target.nodeName !== 'INPUT' && e.target.nodeName !== 'TEXTAREA') {
        return
    }
    const formUser = {
        email: formEl.email.value,
        message: formEl.message.value
    }
    const formUserJSON = JSON.stringify(formUser)
    localStorage.setItem("feedback-form-state", formUserJSON)
}

function onReset (e) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')))
    e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function LocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    formEl.email.value = data.email;
    formEl.message.value = data.message;
  }
}

LocalStorage()