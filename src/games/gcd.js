import { runGame } from '../index.js';

const description = 'Find the greatest common divisor of given numbers';
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));

  return [question, correctAnswer];
};

export const runGcdGame = () => {
  runGame(description, getQuestionAndAnswer);
};
