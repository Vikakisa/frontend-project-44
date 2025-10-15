#!/usr/bin/env node
import { getName } from '../src/cli.js'

const isNumberEven = (num) => {
    if(num % 2 === 0){
     return true
    }
    else {
     return false
    }
 }  
 const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
 }

console.log('Welcome to the Brain Games!')
const name = getName('May I have your name? ')
console.log('Hello, ' + name + '!')

console.log('Answer "yes" if the number is even, otherwise answer "no".')
let correctAnswersCount = 0
while(correctAnswersCount < 3){
    const givenNumber = getRandomNumber()
    console.log('Question: ', givenNumber)
    const answer = getName('Your answer: ')
    const correctAnswer = isNumberEven(givenNumber) ? 'yes':'no'

    if(answer === correctAnswer){
        console.log('Correct!')
        correctAnswersCount++
    }
    else{
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log("Let's try again, " + name + '!')
        correctAnswersCount = 0
    }
}
if(correctAnswersCount === 3){
    console.log('Congratulations, ' + name)
}
