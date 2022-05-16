function pickNumber() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = 'images/dice' + randomNumber + '.png';
  return randomDiceImage;
}

var imgList = document.querySelectorAll('img');
var number1 = pickNumber();
var number2 = pickNumber();
imgList[0].setAttribute('src', number1);
imgList[1].setAttribute('src', number2);

if (number1 > number2) {
  document.querySelector('h1').innerHTML = 'Player 1 Wins!';
} else if (number2 > number1) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins!';
} else {
  document.querySelector('h1').innerHTML = 'Draw!.';
}
