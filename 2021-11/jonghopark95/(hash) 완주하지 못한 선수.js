// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  return participant.find((val, idx) => val !== completion[idx]);
}
