function solution(name) {
  let maxALength = 0;

  const alphaNum = name.split('').map((a) => {
    const num = a.charCodeAt() - 65;
    return num > 13 ? 26 - num : num;
  });

  const checkALength = (nums, i) => {
    let cnt = nums.findIndex((a) => a > 0);
    cnt = cnt < 0 ? nums.length : cnt;
    cnt = cnt - (i - 1);
    maxALength = cnt > maxALength ? cnt : maxALength;
  };

  const totalMove = alphaNum.reduce((totalMove, letter, i) => {
    if (letter !== 0) return totalMove + alphaNum[i] + 1;

    if (i === 0 || alphaNum[i - 1] !== 0) checkALength(alphaNum.slice(i), i);

    return totalMove + 1;
  }, 0);

  return totalMove - maxALength - 1;
}
