import { getName } from '../src/cli.js'

  const getRandomNumber = () => {
      return Math.floor(Math.random() * 100) + 1
  }
  const calculateGCD = (a, b) => {
      while (b !== 0) {
        const temp = b;
        b = a % temp;
        a = temp;
      }
      return a;
  }

  console.log('Welcome to the Brain Games!')
  const name = getName('May I have your name? ')
  console.log('Hello, ' + name + '!')
  console.log('Find the greatest common divisor of given numbers.')

  let correctAnswersCount = 0

  while(correctAnswersCount < 3){
      const a = getRandomNumber()
      const b = getRandomNumber() 
      const question = `${a} ${b}` 

      console.log('Question: ', question)
      const answer = getName('Your answer: ')
      const correctAnswer = calculateGCD(a, b)
      if(answer === String(correctAnswer)){
          console.log('Correct!')
          correctAnswersCount++
      }
      else{
          console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
          console.log("Let's try again, " + name + '!')
          break
      }
  }

  console.log('Congratulations, ' + name)
