var abs = require('./2318-2번.js')

const readline = require('readline');

const abs_copy = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abs_copy.on('line', function(input){
    console.log(abs(input));
})