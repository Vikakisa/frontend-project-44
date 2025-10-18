import { getRandomNumber, getRandomOperator } from '../utils.js'

export const gameDescription = 'What is the result of the expression?'

export const generateRound = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const operator = getRandomOperator()

  const question = `${num1} ${operator} ${num2}`

  let correctAnswer

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2
      break
    case '-':
      correctAnswer = num1 - num2
      break
    case '*':
      correctAnswer = num1 * num2
      break
  }

  return { question, correctAnswer }
}
