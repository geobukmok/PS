// https://programmers.co.kr/learn/courses/30/lessons/43163

const compareDifferentCharAmount = (str1, str2) => {
  let amount = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) amount++;
  }

  return amount;
};

function solution(begin, target, words) {
  let answer = 0;

  const queue = [];
  queue.push({ node: begin, depth: 0 });

  while (queue.length) {
    const { node, depth } = queue.shift();

    if (node === target) return (answer = depth);
    if (depth === words.length) return (answer = 0);

    words.forEach((w) => {
      if (compareDifferentCharAmount(node, w) === 1) {
        queue.push({ node: w, depth: depth + 1 });
      }
    });
  }

  return answer;
}
