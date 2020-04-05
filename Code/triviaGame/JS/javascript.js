/*
Author Name: 14 Eyes - Mort Hedges & Jack Starrs
Project Name: In for a penny in for a pound
Date: 04/04/2020
Module: Computing project
Version: V1
*/


var level = 0;
var fiftyUsed = false;
var hintUsed = false;

/*Stores the question, 1 correct answer, 3 incorrect ones and a hint*/
var questions = [
	["What is the command to copy","CTRL C","Shift C","CTRL A","CTRL V", 1,"It Involves C"],
	["What was Twitters original Name","Bluebird","Twitter","twttr","Tweeter", 3,"Less is more"],
	["What is meteorology the study of?","Meteors","The Weather","Tides","The Moon", 2,"Doesnt involve the moon"],
	["What is the symbol for potassium","Pk","P","Pt","K", 4,"Ok then"],
	["How many molecules of oxygen does ozone have","3","1","0","5", 1,"To be honest just good luck with this one"],
	["What other name does “corn” go by?","Starch","Maize","Grain","Wheat", 2,"Spooky"],
	["About how many taste buds does the average human tongue have?","10,000","100,000","1 Million","2,000", 1,"Multiple of 10,000"],
	["How many times does the heart beat per day","5,000","250,000","100,000","10,000", 3,"Starts with 1"],
	["Which bone are babies born without?","Parts of the skull","Elbows","One set of ribs","Knee caps", 4,"Not the skull"],
	["Which American state is the largest (by area)?","Michagin","Alaska","Ohio","Washington", 2,"No"]
];

/*Resets everything and sets the next question*/
function question() {

	/*Takes a question at the current level of difficulty from the questions array*/
	document.getElementById("question").textContent = questions[level][0];
	
	i = 1;

	/*Resets all of the answer buttons*/
	while (i < 5) {

		document.getElementById("answer" + (i)).textContent = questions[level][(i)];
		document.getElementById("answer" + (i)).style.backgroundColor = "rgb(255,255,255)";
		document.getElementById("answer" + (i)).disabled = false;

		i = i + 1;
	}
	
	i = 0;

	/*Resets the status bar at the side*/
	while(i < 10) {

		document.getElementById("Lvl" + (i + 1)).style.backgroundColor = "white"

		i = i + 1;
	}

	/*Resets the hint and sets the status bar to the next level*/
	document.getElementById("hint").textContent = "";
	document.getElementById("Lvl" + (level + 1)).style.backgroundColor = "rgb(0, 139, 139)"
}

/*Takes the players chosen answer and checks if it's correct*/
function questionAnswer(answer) {

	/*Checks if the player answered correctly, player wins after the 10th question*/
	if (answer == questions[level][5]) {

		if (level == 9) {

			document.getElementById("question").textContent = "You Win!";
		}			
		else if (level < 9) {

			level = level + 1;
			question()
		} 
	}

	/*Buttons are disabled after a loss*/
	else {

		document.getElementById("question").textContent  = "You Lose!";

		i = 0;

		while (i < 3) {

			document.getElementById("answer" + (i + 1)).disabled = true;
			i = i + 1;
		}
	}
}


/*Disables half of the buttons excluding the answer*/
function fifty() {

	if (!fiftyUsed) {

		fiftyUsed = true;

		/*Picks a random button that is not the answer to stay un-disabled*/
		while (true) { 

			unlocked = Math.floor((Math.random() * 4) + 1)

			if (unlocked != questions[level][5]) {

				break
			}
		}

		lockPool = [1,2,3,4]

		i = 0;

		/*Loops through the lockPool array and removes entries for the answer and unlocked*/
		for (x in lockPool) {

			if (lockPool[i] == questions[level][5] || lockPool[i] == (unlocked)) {

				lockPool.splice(i,1);
			}

			i = i + 1;
		}

		/*Disables the selected buttons*/
		document.getElementById("answer" + lockPool[0]).style.backgroundColor = "rgb(220,20,60)";
		document.getElementById("answer" + lockPool[0]).disabled = true;
		document.getElementById("answer" + lockPool[1]).style.backgroundColor = "rgb(220,20,60)";
		document.getElementById("answer" + lockPool[1]).disabled = true;
	}
}

/*Displays a hint from the questions array*/
function hints() {

	if (!hintUsed) {

		hintUsed = true;
		document.getElementById("hint").textContent = questions[level][6];
	}
}

/*Changes the question to another of the same level*/
function change() {

/*IDK Jack I need that array*/

}