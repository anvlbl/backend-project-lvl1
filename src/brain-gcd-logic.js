import { gameLoop } from './index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const setQuestion = () => {
  const number1 = Math.floor(Math.random() * 20);
  const number2 = Math.floor(Math.random() * 20);
  const data = { number1, number2 };
  const question = `${number1} ${number2}`;
  return { question, data };
};

const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }
  return Math.abs(a);
};

const getResult = (data) => {
  const { number1, number2 } = data;
  return gcd(number1, number2);
};

export default () => gameLoop(rule, setQuestion, getResult);
