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
  console.log(submitBtn.value);
  if (checkbox.checked === true) {
    submitBtn.disabled = false;
  }
}

function clearForm(form) {
  for (let i = form.childNodes.length - 1; i >= 0; i -= 1) {
    const item = form.childNodes[i];
    console.log(i, item);
    item.remove();
  }
}

function getFamily() {
  const family = document.querySelectorAll('[name=family]');
  let exit = null;
  for (let i = 0; i < family.length; i += 1) {
    const key = family[i];
    if (key.checked) {
      exit = key;
    }
  }
  return exit;
}

function getContentBox() {
  const contentBox = document.querySelectorAll('[name=content-box]');
  const array = [];
  for (let i = 0; i < contentBox.length; i += 1) {
    const key = contentBox[i];
    if (key.checked) {
      array.push(key.value);
    }
  }
  return array.toString().replace(/,/g, ', ');
}

function getRate() {
  const rate = document.querySelectorAll('[name=rate]');
  let exit = null;
  for (let i = 0; i < rate.length; i += 1) {
    const key = rate[i];
    if (key.checked) {
      exit = key;
    }
  }
  return exit;
}

function getArray() {
  const name = document.querySelector('[name=input-name]').value;
  const lastName = document.querySelector('[name=input-lastname]').value;
  const email = document.querySelector('[name=input-email]').value;
  const house = document.querySelector('[name=house]').value;
  const family = getFamily().value;
  const contentBox = getContentBox();
  const rate = getRate().value;
  const textarea = document.querySelector('[name=textarea]').value;
  const agreement = document.querySelector('[name=agreement]').value;
  return [name, lastName, email, house, family, contentBox, rate, textarea, agreement];
}

function appendSpan(father, str) {
  const span = document.createElement('span');
  span.innerHTML = str;
  father.appendChild(span);
}

function buttonSubmitEvent(event) {
  event.preventDefault();
  const form = document.querySelector('#evaluation-form');
  const array = getArray();

  clearForm(form);

  appendSpan(form, `Nome: ${array[0]} ${array[1]}`);
  appendSpan(form, `Email: ${array[2]}`);
  appendSpan(form, `Casa: ${array[3]}`);
  appendSpan(form, `Família: ${array[4]}`);
  appendSpan(form, `Matérias: ${array[5]}`);
  appendSpan(form, `Avaliação: ${array[6]}`);
  appendSpan(form, `Observações: ${array[7]}`);
}

function loadPage() {
  const joinButton = document.querySelector('#button-join');
  joinButton.addEventListener('click', clickJoinButtonEvent);
  const textArea = document.querySelector('#textarea');
  textArea.addEventListener('input', textAreaEvent);
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('click', sendForm);
  const button = document.getElementById('submit-btn');
  button.addEventListener('click', buttonSubmitEvent);
}

window.onload = loadPage;
