function solution(clothes) {
  let answer = 1;
  const clothesCount = new Map();

  clothes.forEach((cloth) => {
    const beforeCount = clothesCount.get(cloth[1]) || 0;
    clothesCount.set(cloth[1], beforeCount + 1);
  });

  clothesCount.forEach((cnt) => {
    answer *= cnt + 1;
  });

  return answer - 1;
}
