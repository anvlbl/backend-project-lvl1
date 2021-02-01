import readlineSync from 'readline-sync';
import { phrases } from './index.js';

const expressions = ['*', '+', '-'];

const setQuestion = () => {
  const number1 = Math.floor(Math.random() * 20);
  const number2 = Math.floor(Math.random() * 20);
  const exp = expressions[Math.floor(Math.random() * 3)];
  const questionData = { number1, number2, exp };
  const question = `${number1}${exp}${number2}`;
  return { question, questionData };
};
