//table data node
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");

var result = document.getElementById("result")
var flag;
var reset = document.getElementById("reset")

//reset function
function reset_board() {
  location.reload();
  document.getElementById('b1').innerHTML = "";
  document.getElementById('b2').innerHTML = "";
  document.getElementById('b3').innerHTML = "";
  document.getElementById('b4').innerHTML = "";
  document.getElementById('b5').innerHTML = "";
  document.getElementById('b6').innerHTML = "";
  document.getElementById('b7').innerHTML = "";
  document.getElementById('b8').innerHTML = "";
  document.getElementById('b9').innerHTML = "";
}

function situation_game() {
  var b1 = document.getElementById("b1").innerHTML;
  var b2 = document.getElementById("b2").innerHTML;
  var b3 = document.getElementById("b3").innerHTML;
  var b4 = document.getElementById("b4").innerHTML;
  var b5 = document.getElementById("b5").innerHTML;
  var b6 = document.getElementById("b6").innerHTML;
  var b7 = document.getElementById("b7").innerHTML;
  var b8 = document.getElementById("b8").innerHTML;
  var b9 = document.getElementById("b9").innerHTML;
  //check if X won
  if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
    document.getElementById('result').innerHTML = "Player X won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;

  } else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
    document.getElementById('result').innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;

  } else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('result').innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;

  } else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
    document.getElementById('result').innerHTML = "Player X won";
    document.getElementById("b8").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;

  } else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
    document.getElementById('result').innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("b6").disabled = true;

  } else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('result').innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b8").disabled = true;

  } else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('result').innerHTML = "Player X won";
    document.getElementById("b7").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b6").disabled = true;

  } else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
    document.getElementById('result').innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("b6").disabled = true;

  }

  //check if O won
  if ((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O') && (b3 == 'o' || b3 == 'O')) {
    document.getElementById('result').innerHTML = "Player O won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;

  } else if ((b4 == 'o' || b4 == 'O') && (b5 == 'o' || b5 == 'O') && (b6 == 'o' || b6 == 'O')) {
    document.getElementById('result').innerHTML = "Player O won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;

  } else if ((b7 == 'o' || b7 == 'O') && (b8 == 'o' || b8 == 'O') && (b9 == 'o' || b9 == 'O')) {
    document.getElementById('result').innerHTML = "Player O won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;

  } else if ((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O') && (b7 == 'o' || b7 == 'O')) {
    document.getElementById('result').innerHTML = "Player O won";
    document.getElementById("b8").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;

  } else if ((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O') && (b8 == 'o' || b8 == 'O')) {
    document.getElementById('result').innerHTML = "Player O won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("b6").disabled = true;

  } else if ((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O') && (b9 == 'o' || b9 == 'O')) {
    document.getElementById('result').innerHTML = "Player O won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b8").disabled = true;

  } else if ((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O') && (b9 == 'o' || b9 == 'O')) {
    document.getElementById('result').innerHTML = "Player O won";
    document.getElementById("b7").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b6").disabled = true;

  } else if ((b3 == 'o' || b3 == 'O') && (b5 == 'o' || b5 == 'O') && (b7 == 'o' || b7 == 'O')) {
    document.getElementById('result').innerHTML = "Player O won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("b6").disabled = true;

  } else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
    (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
    (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
    document.getElementById('result').innerHTML = "Match Tie";

  } else {
    if (flag == 1) {
      document.getElementById('result').innerHTML = "Player X Turn";
    } else {
      document.getElementById('result').innerHTML = "Player O Turn";
    }
  }
}

flag = 1;

b1.onclick = function() {
  if (flag == 1) {
    document.getElementById("b1").innerHTML = "X";
    document.getElementById("b1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b1").innerHTML = "O";
    document.getElementById("b1").disabled = true;
    flag = 1;
  }
  situation_game();
}

b2.onclick = function() {

  if (flag == 1) {
    document.getElementById("b2").innerHTML = "X";
    document.getElementById("b2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b2").innerHTML = "O";
    document.getElementById("b2").disabled = true;
    flag = 1;
  }
  situation_game();
}

b3.onclick = function() {

  if (flag == 1) {
    document.getElementById("b3").innerHTML = "X";
    document.getElementById("b3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b3").innerHTML = "O";
    document.getElementById("b3").disabled = true;
    flag = 1;
  }
  situation_game();
}

b4.onclick = function() {

  if (flag == 1) {
    document.getElementById("b4").innerHTML = "X";
    document.getElementById("b4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b4").innerHTML = "O";
    document.getElementById("b4").disabled = true;
    flag = 1;
  }
  situation_game();
}

b5.onclick = function() {

  if (flag == 1) {
    document.getElementById("b5").innerHTML = "X";
    document.getElementById("b5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b5").innerHTML = "O";
    document.getElementById("b5").disabled = true;
    flag = 1;
  }
  situation_game();
}

b6.onclick = function() {

  if (flag == 1) {
    document.getElementById("b6").innerHTML = "X";
    document.getElementById("b6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b6").innerHTML = "O";
    document.getElementById("b6").disabled = true;
    flag = 1;
  }
  situation_game();
}

b7.onclick = function() {

  if (flag == 1) {
    document.getElementById("b7").innerHTML = "X";
    document.getElementById("b7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b7").innerHTML = "O";
    document.getElementById("b7").disabled = true;
    flag = 1;
  }
  situation_game();
}

b8.onclick = function() {

  if (flag == 1) {
    document.getElementById("b8").innerHTML = "X";
    document.getElementById("b8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b8").innerHTML = "O";
    document.getElementById("b8").disabled = true;
    flag = 1;
  }
  situation_game();
}

b9.onclick = function() {

  if (flag == 1) {
    document.getElementById("b9").innerHTML = "X";
    document.getElementById("b9").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b9").innerHTML = "O";
    document.getElementById("b9").disabled = true;
    flag = 1;
  }
  situation_game();
}

reset.onclick = function() {
  reset_board();
}
