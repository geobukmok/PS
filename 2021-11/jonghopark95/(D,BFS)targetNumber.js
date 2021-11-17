// https://programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0;

  const traverse = (sum = 0, idx = 0) => {
    if (idx === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    traverse(sum + numbers[idx], idx + 1);
    traverse(sum - numbers[idx], idx + 1);
  };

  traverse();

  return answer;
}
