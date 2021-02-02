import { gameLoop } from './index.js';

const expressions = ['*', '+', '-'];

const rule = 'What is the result of the expression?';

const setQuestion = () => {
  const number1 = Math.floor(Math.random() * 20);
  const number2 = Math.floor(Math.random() * 20);
  const exp = expressions[Math.floor(Math.random() * 3)];
  const data = { number1, number2, exp };
  const question = `${number1} ${exp} ${number2}`;
  return { question, data };
};

const getResult = (data) => {
  const { number1, number2, exp } = data;
  switch (exp) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 'unknown operator';
  }
};

export default () => gameLoop(rule, setQuestion, getResult);
