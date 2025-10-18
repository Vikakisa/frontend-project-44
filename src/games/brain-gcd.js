import { getRandomNumber, calculateGCD} from '../utils.js'

export const gameDescription = 'Find the greatest common divisor of given numbers.'

export const generateRound = () => {
  const a = getRandomNumber()
  const b = getRandomNumber()
  const correctAnswer = calculateGCD(a, b) 
   const question = `${a} ${b}`

   return { question, correctAnswer }
}
