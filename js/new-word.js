const body = document.querySelector('body');
const insertWord = document.querySelector('.insert-word');
const saveButton = document.querySelector('.start-button');
const alertRules = document.querySelector('ul');

export var words = [
  'abacate',
  'manga',
  'laranja',
  'pepino',
  'banana',
  'kiwi',
  'aipim',
];

words = JSON.parse(localStorage.getItem('words'));

function saveLocalStorage() {
  localStorage.setItem('words', JSON.stringify(words));
}

if (localStorage.length == 0) {
  body.onload = saveLocalStorage();
}

function checkChar(e) {
  const pattern = '[a-z]';
  const char = e.key;
  if (char.match(pattern)) {
    return true;
  }
}

document.addEventListener('keypress', (e) => {
  if (!checkChar(e)) {
    e.preventDefault();
    alertFuncOn();
  }
});

saveButton.addEventListener('click', () => {
  if (
    insertWord.value != '' &&
    !JSON.parse(localStorage.getItem('words')).includes(insertWord.value) &&
    insertWord.value.length < 9
  ) {
    words.push(insertWord.value);
    localStorage.setItem('words', JSON.stringify(words));
    window.location = './new-game.html';
    console.log(words);
  } else if (insertWord.value.length > 8) {
    console.log(words);
    insertWord.value = '';
    alertFuncOn();
  }
});

function alertFuncOn() {
  alertRules.style.display = 'inline';
  setTimeout(alertFuncOff, 2000);
}

function alertFuncOff() {
  alertRules.style.display = 'none';
}
