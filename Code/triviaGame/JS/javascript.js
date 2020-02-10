/*
Author Name: 14 Eyes - Mort Hedges
Project Name: Who wants to win £1
Date: 10/02/2020
Module: Computing project
Version: V1
*/


var questions = [[], [], [], [], []];

questions.push("What is 2 squared?",true,1,2,4,7)


i = 0;
j = 0;

/*
function readFile() {
    for() {
        
    }
};
*/

function randomNum() {
    var num = 0;
    num = Math.floor((Math.random() * /*Length of question row*/) + 1);
    return num;   
}

function processQuestions()

function arrayAppend(difficulty,question) {

    questions[difficulty].push(question)

}

function printQuestions() {

    document.getElementById().textContent = questions;
}