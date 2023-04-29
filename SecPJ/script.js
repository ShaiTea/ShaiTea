/*создаю переменные, в которых помещаю кнопки и html элементы*/ 
var scoreText1 = document.getElementById("score1");
var scoreText2 = document.getElementById("score2");
var totalText1 = document.getElementById("total1");
var totalText2 = document.getElementById("total2");
var buttons = document.getElementsByClassName("button");
var roll = document.getElementById("roll");
var hold = document.getElementById("hold");
var newGame = document.getElementById("newGame");
var playerText = document.getElementById("playerText");
var img = document.getElementById("img");
/*здесь же создаются переменные для результатов игры и игроков*/
var player = 1/*переменная очереди игроков*/, score1 = 0, score2 = 0/*переменные CurrentPoints*/, total1 = 0, total2 = 0;
/*переменные TotalPoints*/

/*Функция switchPlayer сменяет игрока и меняет заглавный текст*/
function switchPlayer() {
  if (player == 1) {
    player = 2;
    playerText.innerHTML = "Player 2's turn!";
  }
  else if (player == 2) {
    player = 1;
    playerText.innerHTML = "Player 1's turn!";
  }
}

/*функция isWinner проверяет достигли ли игроки победного результата по TotalPoints,
а также, в случае чьей-либо победы, игра не может продолжаться,
кнопки hold и roll становятся недоступны*/
function isWinner() {
  if (total1 >= 10 || total2 >= 10) {
    playerText.innerHTML = `Game Over`;
    hold.disabled = true;
    roll.disabled = true;
  }
}

/*при нажатии на кнопку hold проверяется сначала какой из игроков
её нажимает, после этого этому игроку начисляются CurrentPoints,
а CurrentPoints обнуляется.
Очередь переходит другому игроку.
Проверяется достиг ли один из игроков победного результата
с помощью функции isWinner*/
hold.onclick = function () {
  if (player == 1) {
    total1 += score1;
    totalText1.innerHTML = ` ${total1}`;
    score1 = 0;
    scoreText1.innerHTML = ` ${score1}`;
  }
  else if (player == 2) {
    total2 += score2;
    totalText2.innerHTML = ` ${total2}`;
    score2 = 0;
    scoreText2.innerHTML = ` ${score2}`;
  }
  switchPlayer();
  isWinner();
}

/*При нажатии на кнопку Новой игры заблокированные кнопки разблокируются,
все очки обнуляются и очередь переходит к первому игроку*/
newGame.onclick = function () {
  hold.disabled = false;
  roll.disabled = false;
  player = 1;
  score1 = 0;
  score2 = 0;
  total1 = 0;
  total2 = 0;
  totalText1.innerHTML = ` ${total1}`;
  totalText2.innerHTML = ` ${total2}`;
  scoreText1.innerHTML = ` ${score1}`;
  scoreText2.innerHTML = ` ${score2}`;
  playerText.innerHTML = "Player 1's turn!";
}

/**/
roll.onclick = function () {
  let number = Math.trunc(Math.random() * 6) + 1;

  if (score1 < 100 && score2 < 100) {  /*здесь мы сначала проверяем не превышают ли наши очки
  победного результата*/
    if (number == 1) { /*в этом условном операторе мы меняем изображения в соответствии
    с выпавшим числом, а также в случае выпадения единицы, СurrentPoints обнуляются,
    а очередь переходит другому игроку*/
      document.getElementById("img").src = "image/1.png"
      if (player == 1) {
        score1 = 0;
        scoreText1.innerHTML = ` ${score1}`;
      }
      else if (player == 2) {
        score2 = 0;
        scoreText2.innerHTML = ` ${score2}`;
      }
      switchPlayer();
      return;
    }
    else if (number == 2) {
      document.getElementById("img").src = "image/2.png"
    }
    else if (number == 3) {
      document.getElementById("img").src = "image/3.png"
    }
    else if (number == 4) {
      document.getElementById("img").src = "image/4.png"
    }
    else if (number == 5) {
      document.getElementById("img").src = "image/5.png"
    }
    else if (number == 6) {
      document.getElementById("img").src = "image/6.png"
    };

    if (player == 1) {  //благодаря этому условному оператору мы начисляем очки в СurrentScore
      score1 += number;
      scoreText1.innerHTML = ` ${score1}`;
    }
    else if (player == 2) {
      score2 += number;
      scoreText2.innerHTML = ` ${score2}`;
    }
  }

}

