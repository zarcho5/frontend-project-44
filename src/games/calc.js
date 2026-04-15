import { runGame } from '../index.js';

const description = 'What is the result of the expression?';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return String(a + b);
    case '-':
      return String(a - b);
    case '*':
      return String(a * b);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator);

  return [question, correctAnswer];
};

export const runCalcGame = () => {
  runGame(description, getQuestionAndAnswer);
};