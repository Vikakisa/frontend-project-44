import { getRandomNumber } from '../utils.js'

const isPrime = (num) => {
  if (num <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export const generateRound = () => {
  const question = getRandomNumber()
  const correctAnswer = isPrime(question) ? 'yes' : 'no'
  return { question, correctAnswer }
}
