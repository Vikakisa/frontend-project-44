import readlineSync from 'readline-sync';

export const getName = (input) => {
    const name = readlineSync.question(input);
    return name
}