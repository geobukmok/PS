// https://programmers.co.kr/learn/courses/30/lessons/42860#

const A_ASCII = 65;
const TOTAL_ALPHA = 26;

const getCharASCIICode = (char) => char.charCodeAt(0);
const getShortestAmountFromA = (string) =>
  [...string].map((char) => {
    const CHAR_ASCII = getCharASCIICode(char);
    const forward = CHAR_ASCII - A_ASCII;
    const backward = Math.abs(TOTAL_ALPHA + A_ASCII - CHAR_ASCII);
    return Math.min(forward, backward);
  });

const getNextIndex = (arr, curr, isInverse) => {
  let count = 0;
  let nextIndex = null;
  while (count !== arr.length) {
    if (isInverse) curr = (curr - 1 + arr.length) % arr.length;
    else curr = (curr + 1) % arr.length;

    if (arr[curr]) {
      nextIndex = curr;
      break;
    }

    count++;
  }

  return nextIndex;
};

const getIntervalSum = (arr, start, end) => {
  let sum = 0;

  for (let i = start; i !== end; i++) {
    sum += arr[i];
    if (i + 1 === arr.length) i = -1;
  }
  sum += arr[end];

  return sum;
};

const getDistance = (arr, start, end) => {
  if (end >= start) return end - start;
  return end - start + arr.length;
};

function solution(name) {
  let answer = 0;

  const n = getShortestAmountFromA(name);
  answer += n[0];
  n[0] = 0;

  let currIdx = 0;
  while (!n.every((val) => val === 0)) {
    const forwardIdx = getNextIndex(n, currIdx);
    const backwardIdx = getNextIndex(n, currIdx, true);

    const forwardValue =
      getIntervalSum(n, currIdx, forwardIdx) +
      getDistance(n, currIdx, forwardIdx);
    const backwardValue =
      getIntervalSum(n, backwardIdx, currIdx) +
      getDistance(n, backwardIdx, currIdx);

    const target = forwardValue <= backwardValue ? forwardIdx : backwardIdx;
    const value = forwardValue <= backwardValue ? forwardValue : backwardValue;
    answer += value;
    n[target] = 0;
    currIdx = target;
  }

  return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.22ms, 30.5MB)
// 테스트 2 〉	통과 (0.21ms, 30.4MB)
// 테스트 3 〉	통과 (0.18ms, 30.3MB)
// 테스트 4 〉	실패 (0.22ms, 30.3MB)
// 테스트 5 〉	실패 (0.26ms, 30.1MB)
// 테스트 6 〉	통과 (0.26ms, 30.3MB)
// 테스트 7 〉	실패 (0.21ms, 30.3MB)
// 테스트 8 〉	통과 (0.24ms, 30.3MB)
// 테스트 9 〉	실패 (0.21ms, 30.4MB)
// 테스트 10 〉	통과 (0.20ms, 30.3MB)
// 테스트 11 〉	통과 (0.21ms, 30.4MB)
