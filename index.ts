#! /usr/bin/env node
import inquirer from "inquirer"

// 1 computer will generate a number
// 2 user input for guessing number :user guess krega number ko
// 3 compare user input with computer generated number and show results

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type : "number", 
        message :"please guess any number between 1 to 10",
    },
    
]) ; 

if (answers.userGuessedNumber === randomNumber)
{
    console.log("Congratulations! you guessed a right number")
}
else
{
    console.log("Sorry you guessed a wrong number");

}
