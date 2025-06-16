const fs = require('fs');

const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './input.txt',
    'utf-8'
  )
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let totalCutHeight = 0;
let hHeight = 0;

arr.forEach((height) => {
  const cutHeight = height - hHeight > 0 ? height - hHeight : 0;
  totalCutHeight += cutHeight;
});

// 이진 탐색으로 구현 가능
