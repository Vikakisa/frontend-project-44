import { getRandomNumber, isNumberEven } from '../utils.js'

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

export const generateRound = () => {
  const question = getRandomNumber()
  const correctAnswer = isNumberEven(question) ? 'yes' : 'no'
  return { question, correctAnswer }
}