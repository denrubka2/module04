'use strict';

const firstLetterToUpperCase = (str) => {
  const sentences = str.split('.');
  let resultArr = [];

  sentences.forEach(sentence => {
    const sentenceTrim = sentence.trimStart();
    const sentenceLowerCase = sentenceTrim.toLowerCase();
    const sentenceFirstLetter = sentenceLowerCase.charAt(0);
    const restSentence = sentenceLowerCase.slice(1);
    const resultSentence = sentenceFirstLetter.toUpperCase() + restSentence;

    resultArr.push(resultSentence);
  });

  return resultArr.join('. ');
}

console.log(firstLetterToUpperCase('ПривеТ мИр. Я приШел с мИРом!'));
