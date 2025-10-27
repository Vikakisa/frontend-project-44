import { getRandomNumber } from '../utils.js'

const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return true
  }
  return false
}

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

export const generateRound = () => {
  const question = getRandomNumber()
  const correctAnswer = isNumberEven(question) ? 'yes' : 'no'
  return { question, correctAnswer }
}
