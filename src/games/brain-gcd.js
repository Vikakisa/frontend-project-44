import { getRandomNumber } from '../utils.js'

export const calculateGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % temp
    a = temp
  }
  return a
}

export const gameDescription = 'Find the greatest common divisor of given numbers.'

export const generateRound = () => {
  const a = getRandomNumber()
  const b = getRandomNumber()
  const correctAnswer = calculateGCD(a, b)
  const question = `${a} ${b}`

  return { question, correctAnswer }
}
