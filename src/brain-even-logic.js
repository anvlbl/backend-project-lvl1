import { gameLoop } from './index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const setQuestion = () => {
  const number = Math.floor(Math.random() * 90);
  const data = number;
  const question = `${number}`;
  return { question, data };
};

const isEven = (number) => number % 2 === 0;

const getResult = (number) => (isEven(number) ? 'yes' : 'no');

export default () => gameLoop(rule, setQuestion, getResult);
