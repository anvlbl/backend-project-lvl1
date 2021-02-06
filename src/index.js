import readlineSync from 'readline-sync';

const templates = {
  greeting: 'Welcome to Brain Games!',
  incorrect: 'is wrong answer ;(. Correct answer was',
  name: 'May I have your name?',
  hello: 'Hello',
  question: 'Question',
  answer: 'Your answer: ',
  'try again': 'Let\'s try again',
  correct: 'Correct!',
  congrats: 'Congratulations',
};

const sayPhrase = (phrase) => console.log(phrase);

const askQuestion = (question) => readlineSync.question(question);

const getName = () => askQuestion(templates['player name']);

const prepareForGame = (rules) => {
  sayPhrase(templates.greeting);
  sayPhrase(templates.name);
  const name = getName();
  sayPhrase(`${templates.hello}, ${name}`);
  sayPhrase(rules);
  return name;
};

const gameLoop = (rule, setQuestion, getResult) => {
  const name = prepareForGame(rule);

  const maxAnswersCount = 3;

  for (let i = 0; i < maxAnswersCount; i += 1) {
    const { question, data } = setQuestion();
    sayPhrase(`${templates.question}: ${question}`);

    const result = getResult(data);
    const answer = askQuestion(templates.answer);

    if (answer !== result.toString()) {
      sayPhrase(`${answer} ${templates.incorrect} ${result}`);
      sayPhrase(`${templates['try again']}, ${name}!`);
      return;
    }
    sayPhrase(templates.correct);
  }
  sayPhrase(`${templates.congrats}, ${name}!`);
};

export { templates, gameLoop };
