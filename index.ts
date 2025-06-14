import * as fs from 'fs';

const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './input.txt',
    'utf-8'
  )
  .trim()
  .split('\n');

const n = parseInt(input[0]);

const arr = input.splice(1).map((element) => {
  return element.split(' ').map(Number);
});

const colorNum = [0, 0];

const slicePaper = (arr: number[][]) => {
  let firstNum = -1;
  arr.forEach((secondArr, secondIndex) => {
    secondArr.forEach((element, index) => {
      // 첫번째 요소일 경우 firstNum 값으로 초기화
      if (secondIndex === 0 && index === 0) {
        firstNum = element;
      } else {
        // 전체 배열의 값이 다를 경우
        if (firstNum !== element) {
        }
      }
    });
  });
};
