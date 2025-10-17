import { getRandomNumber } from '../utils.js'
import { calculate, getRandomOperator } from '../brain-calc.js'

export const gameDescription = 'What is the result of the expression?'

export const generateRound = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const operator = getRandomOperator()
  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = calculate(num1, operator, num2)
  return { question, correctAnswer }
}
