const solution = require('./solution');
const assert = require('assert');

const steps = 354;
const iterations = 2017;

const answer = solution(steps, iterations);

assert(answer === 1889, answer);
