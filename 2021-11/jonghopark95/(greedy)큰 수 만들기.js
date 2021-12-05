// https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    const item = number[i];

    if (stack.length === 0) {
      stack.push(item);
      continue;
    }

    while (stack[stack.length - 1] < item) {
      stack.pop();
      count++;

      if (count === k) return stack.join("") + number.slice(i);
      if (stack.length === 0) break;
    }
    stack.push(item);
  }

  return stack.join("").slice(0, number.length - k + count);
}

// 테스트 1 〉	통과 (0.07ms, 30.3MB)
// 테스트 2 〉	통과 (0.10ms, 30.4MB)
// 테스트 3 〉	통과 (0.11ms, 30.1MB)
// 테스트 4 〉	통과 (0.14ms, 30.3MB)
// 테스트 5 〉	통과 (0.20ms, 30.2MB)
// 테스트 6 〉	통과 (3.92ms, 33.2MB)
// 테스트 7 〉	통과 (3.75ms, 33.4MB)
// 테스트 8 〉	통과 (4.83ms, 33.2MB)
// 테스트 9 〉	통과 (0.18ms, 31.9MB)
// 테스트 10 〉	통과 (12.89ms, 35.9MB)
// 테스트 11 〉	통과 (0.09ms, 30.3MB)
// 테스트 12 〉	통과 (0.12ms, 30.2MB)

function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const current = number[i];

    while (k > 0 && stack[stack.length - 1] < current) {
      stack.pop();
      k--;
    }

    stack.push(current);
  }

  stack.splice(stack.length - k, k);
  return stack.join("");
}

// 테스트 1 〉	통과 (0.12ms, 30.3MB)
// 테스트 2 〉	통과 (0.11ms, 30.3MB)
// 테스트 3 〉	통과 (0.10ms, 30.4MB)
// 테스트 4 〉	통과 (0.19ms, 30.4MB)
// 테스트 5 〉	통과 (0.27ms, 30.3MB)
// 테스트 6 〉	통과 (4.09ms, 33.1MB)
// 테스트 7 〉	통과 (5.61ms, 34.2MB)
// 테스트 8 〉	통과 (9.51ms, 35.1MB)
// 테스트 9 〉	통과 (22.95ms, 49.9MB)
// 테스트 10 〉	통과 (31.47ms, 45.2MB)
// 테스트 11 〉	통과 (0.13ms, 30.3MB)
// 테스트 12 〉	통과 (0.06ms, 30.4MB)
