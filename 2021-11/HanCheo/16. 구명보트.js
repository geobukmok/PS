function solution(people, limit) {
  var answer = 0;

  people.sort((a, b) => a - b);

  let i = 0;
  let j = people.length - 1;

  for (let k = 0; k < people.length; k++) {
    if (people[i] + people[j] <= limit) {
      i++;
      j--;
    } else {
      j--;
    }
    answer++;

    if (j + 1 <= i) break;
  }

  return answer;
}
