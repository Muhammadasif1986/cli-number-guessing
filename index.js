#! /usr/bin/env node
import inquirer from "inquirer";
const rendomNumber = Math.floor(Math.random() * 6 + 1);
const anwers = await inquirer.prompt([{
        name: "userGuesNumber",
        type: 'number',
        message: 'please guess you are number between 1 to 6: ',
    }]);
if (anwers.userGuesNumber == rendomNumber) {
    console.log('Congratulate  you choose a Right Number');
    console.log(` Nubmber is !\t${rendomNumber}`);
    const anwers = await inquirer.prompt([{
            name: "userGuesNumber",
            type: 'number',
            message: 'please guess again you are number between 1 to 6: ',
        }]);
    if (anwers.userGuesNumber == rendomNumber) {
        console.log('Congratulate  you win');
        console.log(` Nubmber is !\t${rendomNumber}`);
    }
    else if (anwers.userGuesNumber > 6) {
        console.log('You was selected wrong Number! please Selcet Number between 1 to 6 ');
    }
    else {
        console.log('you guess wrong Number ! Game is Over');
        console.log(` Nubmber is !\t${rendomNumber}`);
    }
}
else if (anwers.userGuesNumber > 6) {
    console.log('You was selected wrong Number! please Selcet Number between 1 to 6 ');
}
else {
    console.log('you guess wrong Number ! Game is Over');
    console.log(` Nubmber is !\t${rendomNumber}`);
}
