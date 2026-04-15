import { runGame } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// проверка на простое число
const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRandomNumber();

  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export const runPrimeGame = () => {
  runGame(description, getQuestionAndAnswer);
};