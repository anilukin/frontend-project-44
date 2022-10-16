#!/usr/bin/env node

import { game } from '../src/index.js';

import { evenTask, evenGame } from '../src/games/even.js';

game(evenTask, evenGame);
