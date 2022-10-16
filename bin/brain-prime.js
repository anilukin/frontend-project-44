#!/usr/bin/env node

import { game } from '../src/index.js';

import { primeTask, primeGame } from '../src/games/prime.js';

game(primeTask, primeGame);
