#!/usr/bin/env node

import { game } from '../src/index.js';

import { progressionTask, progressionGame } from '../src/games/progression.js';

game(progressionTask, progressionGame);
