#!/usr/bin/env node
import { runGame } from '../src/game-engine.js'
import { gameDescription, generateRound } from '../src/games/brain-calc.js'

runGame(gameDescription, generateRound)