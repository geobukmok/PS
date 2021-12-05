// https://programmers.co.kr/learn/courses/30/lessons/42862#

function solution(n, lost, reserve) {
  const fReserve = reserve
    .filter((idx) => !lost.includes(idx))
    .sort((l, r) => r - l);
  const fLost = lost
    .filter((idx) => !reserve.includes(idx))
    .sort((l, r) => r - l);

  let answer = n - fLost.length;

  fLost.forEach((idx) => {
    const found = fReserve.findIndex((rIdx) => Math.abs(rIdx - idx) <= 1);
    if (found < 0) return;

    answer++;
    fReserve.splice(found, 1);
  });

  return answer;
}
