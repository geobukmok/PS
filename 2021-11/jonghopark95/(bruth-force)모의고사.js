// https://programmers.co.kr/learn/courses/30/lessons/42840

const way = {
  1: [1, 2, 3, 4, 5],
  2: [2, 1, 2, 3, 2, 4, 2, 5],
  3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
};

function solution(answers) {
  const amount = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
  ]);
  let answer = [];

  const answerChecker = (answer, answerNum, pickList) =>
    answer === pickList[answerNum % pickList.length];

  answers.forEach((ans, idx) => {
    for (let i = 1; i <= 3; i++) {
      if (answerChecker(ans, idx, way[i])) amount.set(i, amount.get(i) + 1);
    }
  });

  amount.forEach((v, k) => {
    if (!answer[0]) return answer.push(k);
    if (v > amount.get(answer[0])) return (answer = [k]);
    if (v === amount.get(answer[0])) return answer.push(k);
  });

  return answer;
}
