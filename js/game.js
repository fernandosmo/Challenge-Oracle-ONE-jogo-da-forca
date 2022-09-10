import * as canva from './canva.js';
import { words } from './new-word.js'; // import {words} from './new-word.js'

const containerInserts = document.querySelector('.container-inserts');
const mobileInput = document.querySelector('.txt');
const createLetterDiv = (e) => document.createElement(e);

function gameStart(chooseWord) {
  for (let i = 0; i < chooseWord.length; i++) {
    canva.gibbets();

    var e = createLetterDiv('div');
    containerInserts.appendChild(e);
    e.setAttribute('class', 'insert-word');
    e.setAttribute('id', i);
  }
}

var Index = Math.floor(Math.random() * words.length);

const chooseWord = words[Index];
const chooseWordLength = chooseWord.length;
const wordsPressedRight = new Set();
const wordsPressedWrong = new Set();
var wordsPressedWrongArr = [];
var countRights = 0;

gameStart(chooseWord);

function checkChar(e) {
  const pattern = '[a-z]';
  const char = e.key;
  if (char.match(pattern)) {
    return true;
  }
}

document.addEventListener('keypress', (e) => {
  console.log(mobileInput.value);
  if (!checkChar(e)) {
    alert('Insira somente letras minusculas');
  } else {
    var index = [];
    var idx = chooseWord.indexOf(e.key);
    while (idx != -1) {
      index.push(idx);
      idx = chooseWord.indexOf(e.key, idx + 1);
    }
    if (!wordsPressedRight.has(e.key)) {
      for (let i = 0; i < index.length; i++) {
        const letterCorrectDiv = document.getElementById(index[i]);
        var letter = document.createTextNode(e.key);
        letterCorrectDiv.appendChild(letter);
        countRights++;
      }
    }

    if (chooseWord.includes(e.key)) wordsPressedRight.add(e.key);
    else wordsPressedWrong.add(e.key);
  }
  wordsPressedWrongArr = [...wordsPressedWrong];

  for (let i = 0; i < wordsPressedWrongArr.length; i++) {
    let e = JSON.stringify(wordsPressedWrongArr[i]);

    const letterWrongDiv = document.querySelector(`.wrong-word${i + 1}`);
    var letter = document.createTextNode(e.split(`"`).join(''));
    letterWrongDiv.innerText.length == 0
      ? letterWrongDiv.appendChild(letter)
      : '';
  }
  if (countRights == chooseWordLength) {
    setTimeout(
      `
      alert('Parabéns! Você ganhou!!');
      window.location = './new-game.html';
    `,
      300
    );
  }

  if (wordsPressedWrongArr.length == 1) {
    canva.drawHead();
  } else if (wordsPressedWrongArr.length == 2) {
    canva.drawBody();
  } else if (wordsPressedWrongArr.length == 3) {
    canva.drawRightArm();
  } else if (wordsPressedWrongArr.length == 4) {
    canva.drawLeftArm();
  } else if (wordsPressedWrongArr.length == 5) {
    canva.drawRightLeg();
  } else if (wordsPressedWrongArr.length == 6) {
    canva.drawLeftLeg();
    setTimeout(
      `
      alert('Que pena, você perdeu. A palavra correta é ${chooseWord}');
      window.location = './new-game.html';
    `,
      300
    );
  }
});
