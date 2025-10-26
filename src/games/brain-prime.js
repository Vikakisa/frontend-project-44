import { isPrime, getRandomNumber } from '../utils.js'

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export const generateRound = () => {
  const question = getRandomNumber()
  const correctAnswer = isPrime(question) ? 'yes' : 'no'
  return { question, correctAnswer }
}
