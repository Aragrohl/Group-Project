

/*
Author Name: 14 Eyes - Mort Hedges
Project Name: In for a penny in for a pound
Date: 10/02/2020
Module: Computing project
Version: V1
*/

var correctAns = 0;
var level = 0;

var questions = [

	["What is the command to copy","CTRL C","Shift C","CTRL A","CTRL V", 1],
	["What was Twitters original Name","Bluebird","Twitter","twttr","Tweeter", 3],
	["What is meteorology the study of?","Meteors","The Weather","Tides","The Moon", 2],
	["What is the symbol for potassium","Pk","P","Pt","K", 4],
	["How many molecules of oxygen does ozone have","3","1","0","5", 1],
	["What other name does “corn” go by?","Starch","Maize","Grain","Wheat", 2],
	["About how many taste buds does the average human tongue have?","10,000","100,000","1 Million","2,000", 1],
	["How many times does the heart beat per day","5,000","250,000","100,000","10,00", 3],
	["Which bone are babies born without?","Parts of the skull","Elbows","One set of ribs","Knee caps", 4],
	["Which American state is the largest (by area)?","Michagin","Alaska","Ohio","Washington", 2]
]

function randomNum() {
    var num = 0;
    num = Math.floor((Math.random() * 10) + 1);
    return num;   
}

function question() {

	document.getElementById("question").innerHTML = questions[level][0];
	
	document.getElementById("answer1").innerHTML = questions[level][1];
	document.getElementById("answer2").innerHTML = questions[level][2];
	document.getElementById("answer3").innerHTML = questions[level][3];
	document.getElementById("answer4").innerHTML = questions[level][4];
	
	correctAns = questions[level][5];

	i = 0;

	while (i < 9) {

		document.getElementById("Lvl" + (i + 1)).style.backgroundColor = "white";
		i = i + 1
	}
		
	document.getElementById("Lvl" + (level + 1)).style.backgroundColor = "rgb(0, 153, 153)";

}

function answerQuestion(answer) {

	if (correctAns == answer)
	{
		if (level < 10)
		{
			level = level + 1;
			question()
		}
	}
	else {
		document.getElementById("question").innerHTML = "You Lose!";
		level = 11;
	}
}