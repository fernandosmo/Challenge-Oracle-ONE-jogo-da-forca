var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'rgba(10,56,113,1)';
pincel.lineWidth = 6;

export function gibbets() {
  pincel.moveTo(10, 440);
  pincel.lineTo(300, 440);
  pincel.stroke();

  pincel.moveTo(10, 40);
  pincel.lineTo(10, 443);
  pincel.stroke();

  pincel.moveTo(7, 40);
  pincel.lineTo(200, 43);
  pincel.stroke();

  pincel.moveTo(200, 40);
  pincel.lineTo(200, 90);
  pincel.stroke();
}

export function drawHead() {
  pincel.beginPath();
  pincel.arc(200, 120, 30, 0, 2 * 3.14);
  pincel.stroke();
}

export function drawBody() {
  pincel.moveTo(200, 150);
  pincel.lineTo(200, 310);
  pincel.stroke();
}

export function drawLeftArm() {
  pincel.moveTo(200, 180);
  pincel.lineTo(150, 240);
  pincel.stroke();
}

export function drawRightArm() {
  pincel.moveTo(200, 180);
  pincel.lineTo(250, 240);
  pincel.stroke();
}

export function drawLeftLeg() {
  pincel.moveTo(200, 310);
  pincel.lineTo(150, 370);
  pincel.stroke();
}

export function drawRightLeg() {
  pincel.moveTo(200, 310);
  pincel.lineTo(250, 370);
  pincel.stroke();
}