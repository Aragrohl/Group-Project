import {}* as Papa from '/papaparse';

/*
Author Name: 14 Eyes - Mort Hedges
Project Name: In for a penny in for a pound
Date: 10/02/2020
Module: Computing project
Version: V1
*/

var questions = [
                 [], /*Level one*/
                 [], /*Level two*/
                 [], /*Level three*/
                 [], /*Level four*/
                 [], /*Level five*/
                 [], /*Level six*/
                 [], /*Level seven*/
                 [], /*Level eight*/
                 [], /*Level nine*/
                 []  /*Level ten*/
                ];   /*[Difficulty][Question][Components]*/ 

function readFile() {
    Papa.parse("../test.csv", {
        step: arrayAppend(row) 
    })

};

function randomNum() {
    var num = 0;
    num = Math.floor((Math.random() * 10) + 1);
    return num;   
}

function test() {
    readFile();
}

function arrayAppend(questionFromFile) {
    console.log()
    difficulty = questionFromFile[0];
    asked = questionFromFile[1];
    question = questionFromFile[2];
    answer1 = questionFromFile[3];
    answer2 = questionFromFile[4];
    answer3 = questionFromFile[5];
    answer4 = questionFromFile[6];

    questions[difficulty].push(asked,question,answer1,answer2,answer3,answer4);

}

/*
"What is 2 squared?", - Question
true, - Has it been asked?
4, - Correct answer
2, - Answer
9, - Answer
7  - Answer
*/ 
