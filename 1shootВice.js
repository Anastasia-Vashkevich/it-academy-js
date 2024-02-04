// 1. Игра в кости (попробовала сделать это без функций)

let numberOfThrows = 3; 
let player1Score = 0;
let player2Score = 0;

for (let a = 0; a < numberOfThrows; a++) {
  player1Score += Math.floor(Math.random() * 6) + 1;
  player2Score += Math.floor(Math.random() * 6) + 1;
}

console.log('Игрок 1: ' + player1Score);
console.log('Игрок 2: ' + player2Score);

if (player1Score > player2Score) {
  console.log('Игрок 1 выиграл!');
} else if (player2Score > player1Score) {
  console.log('Игрок 2 выиграл!');
} else {
  console.log('Ничья!');
}

//1. Игра в кости (с функциями)
function shootDice(times) {
    let score = 0;
    for (let b = 0; b < times; b++) {
      score += Math.floor(Math.random() * 6) + 1;
    }
    return score;
  }
  
  let numberOfThrowsF = 3;
  let player1ScoreF = shootDice(numberOfThrows);
  let player2ScoreF = shootDice(numberOfThrows);
  
  console.log('Игрок 1: ' + player1ScoreF);
  console.log('Игрок 2: ' + player2ScoreF);
  
  if (player1ScoreF > player2ScoreF) {
    console.log('Игрок 1 выиграл!');
  } else if (player2ScoreF > player1ScoreF) {
    console.log('Игрок 2 выиграл!');
  } else {
    console.log('Ничья!');
  }