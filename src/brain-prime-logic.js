import { gameLoop } from './index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const setQuestion = () => {
  const data = Math.floor(Math.random() * 100);
  const question = `${data}`;
  return { question, data };
};

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) { if (number % i === 0) return false; }
  return number > 1;
};

const getResult = (data) => (isPrime(data) ? 'yes' : 'no');

export default () => gameLoop(rule, setQuestion, getResult);
