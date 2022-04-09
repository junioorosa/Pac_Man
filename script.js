var timerMouth;
var timerMove;
var number = 0;

let screen = document.getElementById("screen");
let ctx = screen.getContext("2d");

//Criando a primeira imagem ( Pac-Man boca aberta )
let pac1 = document.getElementById("pac1");

let pacOpen = {
  pac: pac1,
  x: -200,
  y: 125,
};

function imgPac1(c) {
  //Cria o background de fundo novamente
  ctx.beginPath();
  ctx.rect(0, 0, 1000, 500);
  ctx.fillStyle = "black";
  ctx.fill();
  //
  ctx.beginPath();
  ctx.drawImage(c.pac, c.x, c.y);
}
//

//Criando a segunda imagem ( Pac-Man boca fechada )
let pac2 = document.getElementById("pac2");

let pacClosed = {
  pac: pac2,
  x: -200,
  y: 125,
};

function imgPac2(c) {
  //Criar novamente o background
  ctx.beginPath();
  ctx.rect(0, 0, 1000, 500);
  ctx.rectStyle = "black";
  ctx.fill();
  //
  ctx.beginPath();
  ctx.drawImage(c.pac, c.x, c.y);
}
//

document.getElementById("buttonPlay").addEventListener("click", () => {
  timerMouth = setInterval(() => {
    if (number <= 2) {
      imgPac1(pacOpen);
    } else if (number >= 2 && number <= 3) {
      imgPac2(pacClosed);
    } else if (number >= 4) {
      number = 0;
    }
    number++;
  }, 70);

  timerMove = setInterval(() => {
    if (pacOpen.x <= 1020 && pacClosed.x <= 1020) {
      pacOpen.x += 3;
      pacClosed.x += 3;
    } else if (pacOpen.x > 1020 && pacClosed.x > 1020) {
      pacOpen.x = -200;
      pacClosed.x = -200;
    }
  }, 20);

  let buttonPlay = (document.getElementById("buttonPlay").style.display =
    "none");
  let buttonPause = (document.getElementById("buttonPause").style.display =
    "initial");
});

document.getElementById("buttonPause").addEventListener("click", () => {
  clearInterval(timerMouth);
  clearInterval(timerMove);

  let buttonPlay = (document.getElementById("buttonPlay").style.display =
    "initial");
  let buttonPause = (document.getElementById("buttonPause").style.display =
    "none");
});
