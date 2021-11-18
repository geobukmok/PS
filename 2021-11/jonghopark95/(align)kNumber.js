// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  var answer = [];

  const command = (i, j, k) => {
    const slicedArr = array.slice(i - 1, j);
    return slicedArr.sort((l, r) => l - r)[k - 1];
  };

  commands.forEach(([i, j, k]) => {
    answer.push(command(i, j, k));
  });

  return answer;
}
