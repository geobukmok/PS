function solution(participant, completion) {
  participant.sort();
  completion.sort();

  return participant.find((val, idx) => val !== completion[idx]);
}
