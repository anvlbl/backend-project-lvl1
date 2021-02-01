import readlineSync from 'readline-sync';
import { phrases } from './template.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const sayPhrase = (phrase) => console.log(phrase);
const askQuestion = (question) => readlineSync.question(question);
const getName = () => askQuestion(phrases['player name']);

const setNumber = () => Math.floor(Math.random() * 90);

const isEven = (number) => number % 2 === 0;

const getResult = (number) => (isEven(number) ? 'yes' : 'no');

const prepareForGame = (rules) => {
  sayPhrase(phrases.greeting);
  sayPhrase(phrases.name);
  const name = getName();
  sayPhrase(`${phrases.hello}, ${name}`);
  sayPhrase(rules);
  return name;
};

const theGame = () => {
  const name = prepareForGame(rule);
  const maxAnswersCount = 3;

  for (let i = 0; i < maxAnswersCount; i += 1) {
    const num = setNumber();

    const result = getResult(num);
    sayPhrase(`${phrases.question}: ${num}`);

    const answer = askQuestion(phrases.answer);

    if (answer !== result) {
      sayPhrase(`${answer} ${phrases.incorrect} ${result}`);
      sayPhrase(`${phrases['try again']}, ${name}!`);
      return;
    }
    sayPhrase(phrases.correct);
  }
  sayPhrase(`${phrases.congr}, ${name}!`);
};

export { theGame };
