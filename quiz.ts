#!/usr/bin/env node
import inquirer from "inquirer";

interface Quiz {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
}


  const quiz: Quiz = await inquirer.prompt([
    {
      name: "question_1",
      type: "list",
      message: "q1. What is the correct way to check if two values are not equal in TypeScript?",
      choices: ["a == b", "a === b", "a=b", "a !== b"]
    },
    {
      name: "question_2",
      type: "list",
      message: "q2. Which of the following characters is commonly allowed in a variable name in TypeScript?",
      choices: ["$", "@", "#", "&"]
    },
    {
      name: "question_3",
      type: "list",
      message: "q3. Which operator is commonly used for string concatenation in TypeScript?",
      choices: ["+", "-", "*", "/"]
    },
    {
      name: "question_4",
      type: "list",
      message: "q4. In TypeScript, which symbol is commonly used to terminate a statement?",
      choices: [".", ",", ":", ";"]
    },
    {
      name: "question_5",
      type: "list",
      message: "q5. Which method of inquirer.js is used to start the prompt?",
      choices: ["start()", "prompt", "init()", "run()"]
    }
  ]);

  let score = 0;

  switch (quiz.question_1) {
    case "a !== b":
      score++;
      break;
    default:
      console.log("1. Incorrect! Correct answer is: a !== b");
  }

  switch (quiz.question_2) {
    case "$":
      score++;
      break;
    default:
      console.log("2. Incorrect! Correct answer is: $");
  }

  switch (quiz.question_3) {
    case "+":
      score++;
      break;
    default:
      console.log("3. Incorrect! Correct answer is: +");
  }

  switch (quiz.question_4) {
    case ";":
      score++;
      break;
    default:
      console.log("4. Incorrect! Correct answer is: ;");
  }

  switch (quiz.question_5) {
    case "prompt":
      score++;
      break;
    default:
      console.log("5. Incorrect! Correct answer is: prompt");
  }

  console.log("Your score:", score, "/ 5");


