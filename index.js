const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './input.txt',
    'utf8'
  )
  .toString()
  .split('\n');

console.log('input : ', input);
