import { getName } from './cli.js'
import { welcome } from './welcome.js'

export const runGame = (gameDescription, generateRound) => {
  const name = welcome()
  console.log(gameDescription)

  const roundsToWin = 3
  let correctAnswersCount = 0

  while (correctAnswersCount < roundsToWin) {
    const { question, correctAnswer } = generateRound()
    console.log('Question:', question)
    const answer = getName('Your answer: ')

    if (answer === String(correctAnswer)) {
      console.log('Correct!')
      correctAnswersCount++
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log('Let\'s try again, ' + name + '!')
      return
    }
  }

  console.log('Congratulations, ' + name + '!')
}
