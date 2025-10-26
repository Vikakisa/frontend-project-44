export const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1
}

export const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return true
  }
  return false
}

export const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operators.length)
  return operators[randomIndex]
}

export const calculateGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % temp
    a = temp
  }
  return a
}

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const isPrime = (num) => {
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
