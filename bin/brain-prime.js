#!/usr/bin/env node
import { runGame } from '../src/game-engine.js'
import { gameDescription, generateRound } from '../src/games/brain-prime.js'

runGame(gameDescription, generateRound)
