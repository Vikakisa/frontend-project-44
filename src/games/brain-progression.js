import { question } from "readline-sync";
import { getRandomInt } from "../utils.js";

export const gameDescription = 'What number is missing in the progression?'

export const generateRound = () => {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 50);
    const step = getRandomInt(1, 10);
    const hiddenIndex = getRandomInt(0, length - 1);
    const progression = Array.from(
        { length },
        (_, i) => start + i * step
    );
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    return { question: String(progression), correctAnswer };
};
