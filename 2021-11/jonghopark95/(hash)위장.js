// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const clothHash = new Map();
  const clothAmount = [];
  let clothAmountKey = 0;

  clothes.map(([_, kind]) => {
    if (!clothHash.has(kind)) clothHash.set(kind, clothAmountKey++);

    const key = clothHash.get(kind);
    clothAmount[key] = (clothAmount[key] || 0) + 1;
  });

  return clothAmount.reduce((acc, curr) => acc * (curr + 1), 1) - 1;
}
