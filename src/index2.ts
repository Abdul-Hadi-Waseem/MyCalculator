#! /usr/bin/env node


//sheban path to tell that our project will run in node environment
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

// let restrictRainbow=()=>{

//  return new Promise((resolve)=>{
//     setTimeout(resolve,5000)
//  })

// }
startCalculator();
async function startCalculator() {
let rainbowStart=chalkAnimation.rainbow("WELCOME")
console.log(chalk.red
// ("Welcome !");
(`_____________________
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
|_____________________|
\n\n\n\n`));  
// await restrictRainbow();
// rainbowStart.stop();
// console.log
// (`\n\n\n
//  _____________________
// |  _________________  |
// | |                 | |
// | |_________________| |
// |  ___ ___ ___   ___  |
// | | 7 | 8 | 9 | | + | |
// | |___|___|___| |___| |
// | | 4 | 5 | 6 | | - | |
// | |___|___|___| |___| |
// | | 1 | 2 | 3 | | x | |
// | |___|___|___| |___| |
// | | . | 0 | = | | / | |
// | |___|___|___| |___| |
// |_____________________|\n\n\n\n\n\n\n\n\n\n`)
await setTimeout(()=>{
    rainbowStart.stop();
},2000)

}
async function askUser() {
   const myObj= await inquirer.prompt([
        {
            type:"list",
            name:"displayChoices",
            message:"Select Your Choice!",
            choices: ["Addition","Subtraction","Multiplication","Division","Exponent"]
        },
        {
            type:"input",
            name:"num1",
            message:"Enter First Number: "
        },
        {
            type:"input",
            name:"num2",
            message:"Enter Second Number: "
        }
    ]);
    return myObj;
}

async function userChoice(){
    
    const choice= await askUser();

    if(choice.displayChoices == "Addition"){
        console.log(`${choice.displayChoices}: ${choice.num1} + ${choice.num2} = ${(+choice.num1)+(+choice.num2)}`);
        
    }else if(choice.displayChoices =="Subtraction"){
        console.log(`${choice.displayChoices}: ${choice.num1} - ${choice.num2} = ${(+choice.num1)-(+choice.num2)}`);
        
    }else if(choice.displayChoices == "Multiplication"){
        console.log(`${choice.displayChoices}: ${choice.num1} * ${choice.num2} = ${(+choice.num1)*(+choice.num2)}`);
        
    }else  if(choice.displayChoices == "Division"){
        console.log(`${choice.displayChoices}: ${choice.num1} % ${choice.num2} = ${(+choice.num1)/(+choice.num2)}`);
        
    }else  if(choice.displayChoices == "Exponent"){
        console.log(chalk.redBright(`${choice.displayChoices}: ${choice.num1} ^ ${choice.num2} = ${(+choice.num1)**(+choice.num2)}`));
        
    }
    return choice;
}

async function callCalculator(){
   
do{
   const obj= await userChoice();

  var optionSelected=await inquirer.prompt([
    {
        type:"input",
        name:"opt",
        message:"Run Again? \nPress 'Y' To Run Again \nHit Enter To Exit"
    }
])
}while(optionSelected.opt == "y" ||optionSelected.opt == "Y" ||optionSelected.opt == "yes" ||optionSelected.opt == "Yes" );
}
callCalculator();