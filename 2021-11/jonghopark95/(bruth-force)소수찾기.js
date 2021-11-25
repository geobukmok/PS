// https://programmers.co.kr/learn/courses/30/lessons/42839

const checkPrimeNumber = (val) => {
  if ([0, 1].includes(val)) return false;
  if (val === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(val)); i++) {
    if (val % i === 0) return false;
  }

  return true;
};

function solution(numbers) {
  const checked = [];
  const primeNumber = [];

  const traverse = (current, rest) => {
    rest.forEach((num, idx, arr) => {
      const target = current + num;
      if (checked.includes(target)) return;
      checked.push(target);

      const targetNum = Number(target);
      if (!primeNumber.includes(targetNum) && checkPrimeNumber(targetNum)) {
        primeNumber.push(targetNum);
      }

      traverse(
        target,
        arr.filter((_, i) => i !== idx)
      );
    });
  };

  traverse("", [...numbers]);

  return primeNumber.length;
}
