#!/usr/bin/env node

import { game } from '../src/index.js';

import { calcTask, calcGame } from '../src/games/calc.js';

game(calcTask, calcGame);
