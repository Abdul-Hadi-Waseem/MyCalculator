#! /usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
async function startCalculator() {
    let title = chalkAnimation.rainbow("---LET'S DO SOME MATHS ;)---");
    await stopAnimation();
    title.stop();
    console.log(chalk.rgb(0, 255, 127)(`
     _____________________
    |  _________________  |
    | |                 | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));
    console.log(chalk.rgb(155, 89, 182)(`CREATED BY ABDUL HADI WASEEM!!!`));
}
await startCalculator();
function stopAnimation() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}
async function askUser() {
    await inquirer.prompt([
        {
            type: "list",
            message: "Select An Option!",
            name: "displayChoices",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponent"]
        }, {
            type: "input",
            message: "Enter Number 1: ",
            name: "num1",
        }, {
            type: "input",
            message: "Enter Number 2: ",
            name: "num2",
        }
    ])
        .then((choice) => {
        if (choice.displayChoices == "Addition") {
            console.log(chalk.redBright(`\n${choice.displayChoices}: ${choice.num1} + ${choice.num2} = ${(+choice.num1) + (+choice.num2)}\n`));
        }
        else if (choice.displayChoices == "Subtraction") {
            console.log(chalk.redBright(`\n${choice.displayChoices}: ${choice.num1} - ${choice.num2} = ${(+choice.num1) - (+choice.num2)}\n`));
        }
        else if (choice.displayChoices == "Multiplication") {
            console.log(chalk.redBright(`\n${choice.displayChoices}: ${choice.num1} * ${choice.num2} = ${(+choice.num1) * (+choice.num2)}\n`));
        }
        else if (choice.displayChoices == "Division") {
            console.log(chalk.redBright(`\n${choice.displayChoices}: ${choice.num1} % ${choice.num2} = ${(+choice.num1) / (+choice.num2)}\n`));
        }
        else if (choice.displayChoices == "Exponent") {
            console.log(chalk.redBright(`\n${choice.displayChoices}: ${choice.num1} ^ ${choice.num2} = ${(+choice.num1) ** (+choice.num2)}\n`));
        }
    });
}
async function runAgain() {
    let optionSelected;
    do {
        await askUser();
        optionSelected = await inquirer.prompt([{
                message: "Do You Want To Run Again?\nHit Enter To Exit!",
                name: "opt",
                type: "input"
            }]);
    } while (optionSelected.opt == "y" || optionSelected.opt == "Y" || optionSelected.opt == "yes" || optionSelected.opt == "Yes");
}
await runAgain();
