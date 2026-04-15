import { runGame } from '../index.js';

const description = 'What number is missing in the progression?';

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// создаём прогрессию
const createProgression = (start, step, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }

  return result;
};

const getQuestionAndAnswer = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 5);

  const progression = createProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export const runProgressionGame = () => {
  runGame(description, getQuestionAndAnswer);
};