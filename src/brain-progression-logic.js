import { gameLoop } from './index.js';

const rule = 'What number is missing in the progression?';

const setQuestion = () => {
  const seqLength = Math.floor(Math.random() * 5) + 5;
  const stepSize = Math.floor(Math.random() * 9) + 1;
  const startValue = Math.floor(Math.random() * 60);
  const sequence = [startValue];

  for (let i = 0; i < seqLength; i += 1) {
    const step = sequence[i] + stepSize;
    sequence.push(step);
  }

  const hiddenIndex = Math.floor(Math.random() * seqLength);
  const data = sequence.splice(hiddenIndex, 1, '..')[0];
  const question = sequence.join(' ');
  return { question, data };
};

const getResult = (data) => data.toString();

export default () => gameLoop(rule, setQuestion, getResult);
