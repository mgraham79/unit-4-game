var numbers;
var putNumber;
var score;
var crystalBlue;
var crystalGreen;
var crystalRed;
var crystalYellow;
var wins = 0;
var losses = 0;

window.onload = function() {

  $("#blue-crystal").click(crystalNumbers.blue);
  $("#green-crystal").click(crystalNumbers.green);
  $("#red-crystal").click(crystalNumbers.red);
  $("#yellow-crystal").click(crystalNumbers.yellow);
  reset()
};

var crystalNumbers = {

	blue: function(){
		$("#score").html(score += crystalBlue);
		checkScore();
	},
	green: function(){
		$("#score").html(score += crystalGreen);
		checkScore();
	},
	red: function(){
		$("#score").html(score += crystalRed);
		checkScore();
	},
	yellow: function(){
		$("#score").html(score += crystalYellow);
		checkScore();
	},
};
//console.log(crystalNumbers);

function reset(){
	numbers = Math.floor(Math.random()*101)+19;
	putNumber = $("#game-number").html(numbers);
	score = 0;
	$("#score").html(score);
	$("#wins").html(wins);
  	$("#losses").html(losses);
  	crystalBlue = Math.floor(Math.random()*12)+1;
  	crystalGreen = Math.floor(Math.random()*12)+1;
  	crystalRed = Math.floor(Math.random()*12)+1;
  	crystalYellow = Math.floor(Math.random()*12)+1;
}
reset();

function checkScore (){
	if(score === numbers){
	    wins++;
	    alert("You Won!");
	    reset();
    }
    
	if(score > numbers){
		losses++;
		alert("You Lose!");
		reset();
	}
}
