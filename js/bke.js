console.log("file loaded");
// variables van player wins en placements van X en o
let PlayerWins = 0;
let ComputerWins = 0;
let turn = true;
let placement1 = 0;
let placement2 = 0;
let placement3 = 0;
let placement4 = 0;
let placement5 = 0;
let placement6 = 0;
let placement7 = 0;
let placement8 = 0;
let placement9 = 0;
let playername1 = prompt("Whats Player 1 name?")
let playername2 = prompt("Whats Player 2 name?")

// document selecteren

const cell1 = document.querySelector(".Cell1");
const cell2 = document.querySelector(".Cell2");
const cell3 = document.querySelector(".Cell3");
const cell4 = document.querySelector(".Cell4");
const cell5 = document.querySelector(".Cell5");
const cell6 = document.querySelector(".Cell6");
const cell7 = document.querySelector(".Cell7");
const cell8 = document.querySelector(".Cell8");
const cell9 = document.querySelector(".Cell9");
const button1 = document.querySelector(".Button1");
const button2 = document.querySelector(".Button2");
const button3 = document.querySelector(".Button3");
const button4 = document.querySelector(".Button4");
const button5 = document.querySelector(".Button5");
const button6 = document.querySelector(".Button6");
const button7 = document.querySelector(".Button7");
const button8 = document.querySelector(".Button8");
const button9 = document.querySelector(".Button9");
const playerbox1 = document.querySelector(".player-title")
const playerbox2 = document.querySelector(".computer-title")

let playercounter = document.querySelector(".player-counter");
let computercounter = document.querySelector(".computer-counter");
//Player naamen
playerbox1.innerHTML = playername1
playerbox2.innerHTML = playername2


// button voor cellen
// en ook turn system voor spelers tegen spelers
// turn variable makes sure that whos turn it is

// click functies

button1.addEventListener("click", clickFunction);
button2.addEventListener("click", clickFunction2);
button3.addEventListener("click", clickFunction3);
button4.addEventListener("click", clickFunction4);
button5.addEventListener("click", clickFunction5);
button6.addEventListener("click", clickFunction6);
button7.addEventListener("click", clickFunction7);
button8.addEventListener("click", clickFunction8);
button9.addEventListener("click", clickFunction9);

function clickFunction() {
  if (turn == true) {
    cell1.innerHTML = "X";
    turn = false;
    placement1 = 2;
    button1.disabled = true;
  } else {
    cell1.innerHTML = "O";
    turn = true;
    placement1 = 3;
    cell1.disabled = true;
    button1.disabled = true;
  }
}

function clickFunction2() {
  if (turn == true) {
    cell2.innerHTML = "X";
    turn = false;
    cell2.disabled = true;
    placement2 = 2;
    button2.disabled = true;
  } else {
    cell2.innerHTML = "O";
    turn = true;
    cell2.disabled = true;
    placement2 = 3;
    button2.disabled = true;
  }
}

function clickFunction3() {
  if (turn == true) {
    cell3.innerHTML = "X";
    turn = false;
    placement3 = 2;
    button3.disabled = true;
  } else {
    cell3.innerHTML = "O";
    turn = true;
    console.log(cell3);
    placement3 = 3;
    button3.disabled = true;
  }
}

function clickFunction4() {
  if (turn == true) {
    cell4.innerHTML = "X";
    turn = false;
    placement4 = 2;
    button4.disabled = true;
  } else {
    cell4.innerHTML = "O";
    turn = true;
    placement4 = 3;
    button4.disabled = true;
  }
}

function clickFunction5() {
  if (turn == true) {
    cell5.innerHTML = "X";
    turn = false;
    placement5 = 2;
    button5.disabled = true;
  } else {
    cell5.innerHTML = "O";
    turn = true;
    placement5 = 3;
    button5.disabled = true;
  }
}

function clickFunction6() {
  if (turn == true) {
    cell6.innerHTML = "X";
    turn = false;
    placement6 = 2;
    button6.disabled = true;
  } else {
    cell6.innerHTML = "O";
    turn = true;
    placement6 = 3;
    button6.disabled = true;
  }
}

function clickFunction7() {
  if (turn == true) {
    cell7.innerHTML = "X";
    turn = false;
    placement7 = 2;
    button7.disabled = true;
  } else {
    cell7.innerHTML = "O";
    turn = true;
    placement7 = 3;
    button7.disabled = true;
  }
}

function clickFunction8() {
  if (turn == true) {
    cell8.innerHTML = "X";
    turn = false;
    placement8 = 2;
    button8.disabled = true;
  } else {
    cell8.innerHTML = "O";
    turn = true;
    placement8 = 3;
    button8.disabled = true;
  }
}

function clickFunction9() {
  if (turn == true) {
    cell9.innerHTML = "X";
    turn = false;
    placement9 = 2;
    button9.disabled = true;
  } else {
    cell9.innerHTML = "O";
    turn = true;
    placement9 = 3;
    button9.disabled = true;
  }
}

//win conditions en reset

function winconditions1() {
  if (placement1 == 2 && placement2 == 2 && placement3 == 2) {
    alert("X heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    PlayerWins++;
    playercounter.innerHTML = PlayerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}

setInterval(winconditions1, 100);

function winconditions2() {
  if (placement1 == 3 && placement2 == 3 && placement3 == 3) {
    alert("O heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    ComputerWins++;
    computercounter.innerHTML = ComputerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}

setInterval(winconditions2, 100);
function winconditions3() {
  if (placement4 == 3 && placement5 == 3 && placement6 == 3) {
    alert("O heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    ComputerWins++;
    computercounter.innerHTML = ComputerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions3, 100);

function winconditions4() {
  if (placement4 == 2 && placement5 == 2 && placement6 == 2) {
    alert("X heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    PlayerWins++;
    playercounter.innerHTML = PlayerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions4, 100);
function winconditions5() {
  if (placement7 == 2 && placement8 == 2 && placement9 == 2) {
    alert("X heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    PlayerWins++;
    playercounter.innerHTML = PlayerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions5, 100);
function winconditions6() {
  if (placement7 == 3 && placement8 == 3 && placement9 == 3) {
    alert("O heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    ComputerWins++;
    computercounter.innerHTML = ComputerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions6, 100);

function winconditions7() {
  if (placement1 == 2 && placement4 == 2 && placement7 == 2) {
    alert("X heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    PlayerWins++;
    playercounter.innerHTML = PlayerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions7, 100);

function winconditions8() {
  if (placement1 == 3 && placement4 == 3 && placement7 == 3) {
    alert("O heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    ComputerWins++;
    computercounter.innerHTML = ComputerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions8, 100);
function winconditions9() {
  if (placement2 == 3 && placement5 == 3 && placement8 == 3) {
    alert("O heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    ComputerWins++;
    computercounter.innerHTML = ComputerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions9, 100);
function winconditions10() {
  if (placement2 == 2 && placement5 == 2 && placement8 == 2) {
    alert("X heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    PlayerWins++;
    playercounter.innerHTML = PlayerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions10, 100);

function winconditions11() {
  if (placement3 == 2 && placement6 == 2 && placement9 == 2) {
    alert("X heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    PlayerWins++;
    playercounter.innerHTML = PlayerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions11, 100);
function winconditions12() {
  if (placement3 == 3 && placement6 == 3 && placement9 == 3) {
    alert("O heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    ComputerWins++;
    computercounter.innerHTML = ComputerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions12, 100);
function winconditions13() {
  if (placement1 == 3 && placement5 == 3 && placement9 == 3) {
    alert("O heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    ComputerWins++;
    computercounter.innerHTML = ComputerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions13, 100);

function winconditions14() {
  if (placement1 == 2 && placement5 == 2 && placement9 == 2) {
    alert("X heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    PlayerWins++;
    playercounter.innerHTML = PlayerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions14, 100);

function winconditions15() {
  if (placement3 == 2 && placement5 == 2 && placement7 == 2) {
    alert("X heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    PlayerWins++;
    playercounter.innerHTML = PlayerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions15, 100);
function winconditions16() {
  if (placement3 == 3 && placement5 == 3 && placement7 == 3) {
    alert("O heeft gewonnen!");
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    ComputerWins++;
    computercounter.innerHTML = ComputerWins;
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(winconditions16, 100);

// tie conditions
function tieconditions() {
  if (placement1 != 0 &&  placement2 != 0 && placement3 != 0 && placement4 != 0 && placement5 != 0 && placement6 != 0 && placement7 != 0 && placement8 != 0 && placement9 != 0) {
alert("Tie!")
    placement1 = 0;
    placement2 = 0;
    placement3 = 0;
    placement4 = 0;
    placement5 = 0;
    placement6 = 0;
    placement7 = 0;
    placement8 = 0;
    placement9 = 0;
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    turn = true;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }
}
setInterval(tieconditions, 100);