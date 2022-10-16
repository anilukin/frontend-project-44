#!/usr/bin/env node

import { game } from '../src/index.js';

import { gcdTask, gcdGame } from '../src/games/gcd.js';

game(gcdTask, gcdGame);
