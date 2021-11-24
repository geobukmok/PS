// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const clothHash = {};
  const clothAmount = [];
  let clothAmountKey = 0;

  clothes.map(([_, kind]) => {
    if (!(kind in clothHash)) clothHash[kind] = clothAmountKey++;

    const key = clothHash[kind];
    clothAmount[key] = clothAmount[key] ? clothAmount[key] + 1 : 1;
  });

  return clothAmount.reduce((acc, curr) => acc * (curr + 1), 1) - 1;
}
