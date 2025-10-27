import { getName } from './cli.js'

export const welcome = () => {
  console.log('Welcome to the Brain Games!')
  const name = getName('May I have your name? ')
  console.log('Hello, ' + name + '!')
  return name
}
