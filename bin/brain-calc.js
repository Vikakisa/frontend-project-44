#!/usr/bin/env node
import { getName } from '../src/cli.js'
const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
 }
console.log('Welcome to the Brain Games!')
const name = getName('May I have your name? ')
console.log('Hello, ' + name + '!')
console.log('What is the result of the expression?')
let correctAnswersCount = 0
while(correctAnswersCount < 3){
    const operators = ['+', '-', '*']
    const randomIndex = Math.floor(Math.random() * 3)
    const randomOperator = operators[randomIndex]
    const givenNumber = getRandomNumber()
    const givenNumber1 = getRandomNumber()
    console.log('Question: ', givenNumber, randomOperator, givenNumber1)
    const answer = getName('Your answer: ')
    const operator = randomOperator
    let result
    switch (operator) {
        case '+':
            result = givenNumber + givenNumber1
            break;
        case '-': 
            result = givenNumber - givenNumber1
            break;
        case '*':
            result = givenNumber * givenNumber1
            break;
    }

    if(+answer === result){
        console.log('Correct!')
        correctAnswersCount++
    }
    else{
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
        console.log("Let's try again, " + name + '!')
        break
    }
}
if(correctAnswersCount === 3){
    console.log('Congratulations, ' + name)
}
