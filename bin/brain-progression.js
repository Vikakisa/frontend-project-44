#!/usr/bin/env node
import { getName } from '../src/cli.js'
const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
}
console.log('Welcome to the Brain Games!')
const name = getName('May I have your name? ')
console.log('Hello, ' + name + '!')
console.log('What number is missing in the progression?')
let correctAnswersCount = 0
while (correctAnswersCount < 3) {
    const generateRound = () => {
        const length = getRandomInt(5, 10);
        const start = getRandomInt(1, 50);
        const step = getRandomInt(1, 10);
        const hiddenIndex = getRandomInt(0, length - 1);
        currentElement = start + index * step
        const progression = Array.from(
            { length },
            (_, i) => start + i * step
        );
        const correctAnswer = progression[hiddenIndex];
        progression[hiddenIndex] = '..';
        return { progression, correctAnswer };
    };
    const { progression, correctAnswer } = generateRound()

}

if (+progression === result) {
    console.log('Correct!')
    correctAnswersCount++
}
else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
    console.log("Let's try again, " + name + '!')

}

if (correctAnswersCount === 3) {
    console.log('Congratulations, ' + name)
}
 