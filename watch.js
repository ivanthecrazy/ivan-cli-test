#!/usr/bin/env node

const [,, ...args] = process.argv;

console.log(`Watching changes [pushed to git] with ${args}`);