export const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1
}

export const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return true
  }
  return false
}
