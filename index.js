#! /usr/bin/
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t WELCOME TO CODE WITH NAZIA-CURRENCY CONVERTER\n"));
// Define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JyP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280, // Pakistani Rupees
    // Add more currency and their exchange rates here
};
// prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellow.bold("Select the currency to convert from:"),
        choices: ["USD", "EUR", "JyP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.bgCyan.bold("select the currency to convert into"),
        choices: ["USD", "EUR", "JyP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.bgMagentaBright.bold("Enter the amount to convert:")
    }
]);
// Perform currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted Amount = ${chalk.green.bold(converted_amount.toFixed(2))}`);
