$(document).ready(function(){
var turns = ["#","#","#","#","#","#","+","#"];
var computerTurn = "";
var turn = "";
var gameOn = false;
var count = 0;

var startTurn = prompt("Elige tu tipo", "Escribe X o O").toUpperCase();
switch (startTurn) {
    case "X":
        computerTurn = "O";
        turn = "X";
        $("#message").html("Jugador " + turn + " empieze!");
        break;
    case "O":
        computerTurn = "X";
        turn = "O";
        $("#message").html("Jugador " + turn + " empieze.");
        break;
    case null:
        alert("Perdon. Porfavor ingrese X o O");
        window.location.reload(true);
    break;
    default:
        alert("Perdon. Porfavor ingrese X o O");
        window.location.reload(true);
        break;
}

function computersTurn() {
    var taken = false;
    while (taken === false && count !== 5) {
        var computerMove = (Math.random() * 10).toFixed();
        var move = $("#" + computerMove).text();
        if (move === "#") {
            $("#" + computerMove).text(computerTurn);
            taken = true;
            turns[computerMove] = computerTurn;
        }
    }
}

function playerTurn (turn, id){
  var spotTaken = $("#"+id).text();
  if (spotTaken ==="#"){
    count++;
    turns[id] = turn;
    $("#"+id).text(turn);
    winCondition(turns,turn);
    if (gameOn === false){
      computersTurn();
      $("#message").html("Es " + turn +"'s turno.");
      winCondition(turns, computerTurn);
    }
  }
}

function winCondition(trackMoves, currentMove) {
    if (trackMoves[0] === currentMove && trackMoves[1] === currentMove && trackMoves[2] === currentMove) {
        gameOn = true;
        reset();
        alert("Jugador " + currentMove + " gana!");
    } else if (trackMoves[2] === currentMove && trackMoves[4] === currentMove && trackMoves[6] === currentMove) {
        gameOn = true;
        reset();
        alert("Jugador " + currentMove + " gana!");
    } else if (trackMoves[0] === currentMove && trackMoves[3] === currentMove && trackMoves[6] === currentMove) {
        gameOn = true;
        reset();
        alert("Jugador " + currentMove + " gana!");
    } else if (trackMoves[0] === currentMove && trackMoves[4] === currentMove && trackMoves[8] === currentMove) {
        gameOn = true;
        reset();
        alert("Jugador " + currentMove + " gana!");
    } else if (trackMoves[1] === currentMove && trackMoves[4] === currentMove && trackMoves[7] === currentMove) {
        gameOn = true;
        reset();
        alert("Jugador " + currentMove + " gana!");
    } else if (trackMoves[2] === currentMove && trackMoves[5] === currentMove && trackMoves[8] === currentMove) {
        gameOn = true;
        reset();
        alert("Jugador " + currentMove + " gana!");
    } else if (trackMoves[2] === currentMove && trackMoves[5] === currentMove && trackMoves[8] === currentMove) {
        gameOn = true;
        reset();
        alert("Jugador " + currentMove + " gana!");
    } else if (trackMoves[3] === currentMove && trackMoves[4] === currentMove && trackMoves[5] === currentMove) {
        gameOn = true;
        reset();
        alert("Jugador " + currentMove + " gana!");
    } else if (trackMoves[6] === currentMove && trackMoves[7] === currentMove && trackMoves[8] === currentMove) {
        gameOn = true;
        reset();
        alert("Jugador " + currentMove + " gana!");
    } else if(!(trackMoves.includes("#"))){
       gameOn = true;
      reset();
      alert("Empate!");
    }﻿ else {
        gameOn = false;
    }
}

$(".tic").click(function(){
  var slot = $(this).attr('id');
  playerTurn(turn,slot);
});

function reset(){
  turns = ["#","#","#","#","#","#","+","#"];
  count = 0;
  $(".tic").text("#");
  gameOn = true;
}

$("#reset").click(function(){
  reset();
});

});