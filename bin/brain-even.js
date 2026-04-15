#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { runEvenGame } from '../src/games/even.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

global.userName = name;

runEvenGame();