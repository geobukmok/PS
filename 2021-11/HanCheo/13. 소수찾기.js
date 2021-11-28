function solution(numbers) {
  let answer = 0;
  const numArr = numbers.split('');
  const checked = new Map();

  for (let i = 0; i < numArr.length; i++) {
    const nextArr = [...numArr.slice(0, i), ...numArr.slice(i + 1)];
    DFS(`${numArr[i]}`, nextArr);
  }

  function DFS(num, numsArr) {
    const checkNum = Number(num);
    if (!checked.get(checkNum) && isSosu(checkNum)) answer++;
    checked.set(checkNum, true);

    for (let i = 0; i < numsArr.length; i++) {
      const nextArr = [...numsArr.slice(0, i), ...numsArr.slice(i + 1)];
      DFS(`${num}${numsArr[i]}`, nextArr);
    }
  }

  return answer;
}

function isSosu(num) {
  if (num <= 1) return false;
  const max = Math.sqrt(num);

  for (let i = 2; i <= max; i++) {
    if (num % i === 0) return false;
  }

  return true;
}
