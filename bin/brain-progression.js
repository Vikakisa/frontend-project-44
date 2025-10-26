#!/usr/bin/env node
import { runGame } from '../src/game-engine.js'
import { gameDescription, generateRound } from '../src/games/brain-progression.js'

runGame(gameDescription, generateRound)
