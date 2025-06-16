const fs = require('fs');

const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './input.txt',
    'utf-8'
  )
  .trim()
  .split('\n');

const arr = input.splice(1).map((element) => {
  return element.split(' ').map(Number);
});

const colorNum = [0, 0];

/**
 * 색종이 자르기 함수
 * @param firstArr
 */
const slicePaper = (firstArr) => {
  // arrayNum 값으로 첫번째 요소 초기화
  const arrayNum = firstArr[0][0];

  // 입력 배열의 길이가 1 일 경우, 자를 수 있는게 없기에 종료
  if (firstArr.length === 1) {
    if (arrayNum === 0) {
      colorNum[0]++;
    } else {
      colorNum[1]++;
    }

    return;
  }
  // 입력 배열의 길이가 1 이상인 경우

  // 같지 않은 값이 존재하는지 체크
  let flag = true;
  for (let i = 0; i < firstArr.length && flag; i++) {
    const childArr = firstArr[i];
    childArr.forEach((element) => {
      if (arrayNum !== element) {
        flag = false;
      }
    });
  }

  // 같지 않은 값이 존재할 때
  if (!flag) {
    const newArrays = Array.from({ length: 4 }, () => []);

    firstArr.forEach((secondArr, firstIdx) => {
      const newElement1 = secondArr.slice(0, secondArr.length / 2);
      const newElement2 = secondArr.slice(
        secondArr.length / 2,
        secondArr.length
      );

      if (firstIdx < firstArr.length / 2) {
        newArrays[0].push(newElement1);
        newArrays[1].push(newElement2);
      } else {
        newArrays[2].push(newElement1);
        newArrays[3].push(newElement2);
      }
    });

    newArrays.forEach((newArr) => {
      slicePaper(newArr);
    });
  } else {
    // 모든 값이 같은 경우
    if (arrayNum === 0) {
      colorNum[0]++;
    } else {
      colorNum[1]++;
    }
  }
};

slicePaper(arr);

colorNum.forEach((num) => console.log(num));
