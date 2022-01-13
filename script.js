function clickJoinButtonEvent() {
  const emailInput = document.querySelector('#user-email');
  const passwordInput = document.querySelector('#user-password');
  if (!(emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456')) {
    alert('Email ou senha inválidos.');
    return;
  }
  alert('Olá, Tryber!');
}

function textAreaEvent() {
  const textArea = document.querySelector('#textarea');
  const count = document.querySelector('#counter');
  count.innerHTML = 500 - textArea.value.length;
}

function sendForm() {
  const checkbox = document.getElementById('agreement');
  const submitBtn = document.getElementById('submit-btn');
  if (checkbox.checked === true) {
    submitBtn.disabled = false;
  }
  /* if (checkbox.checked === false) {
    alert('nao enviou');
    event.preventDefault();
  } else { alert('enviou'); } */
}

function loadPage() {
  const joinButton = document.querySelector('#button-join');
  joinButton.addEventListener('click', clickJoinButtonEvent);
  const textArea = document.querySelector('#textarea');
  textArea.addEventListener('input', textAreaEvent);
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('click', sendForm);
}

window.onload = loadPage;
