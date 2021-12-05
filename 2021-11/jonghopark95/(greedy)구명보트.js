// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let answer = 0;
  people.sort((l, r) => r - l);

  for (let l = 0, r = people.length - 1; l <= r; l++) {
    if (people[l] + people[r] <= limit) r--;
    answer++;
  }

  return answer;
}

// 첫 풀이...

function solution(people, limit) {
  let answer = 0;
  people = people.sort((l, r) => r - l);
  let l = 0;
  let r = people.length - 1;

  while (l <= r) {
    const check = people[l] + people[r];
    if (check > limit) l++;
    else {
      l++;
      r--;
    }
    answer++;
  }

  return answer;
}

// 시도 했던 거...

//     while(people.length > 0){
//         let limitIdx = 1;
//         if(people[0] + people[1] <= limit) limitIdx += 1;

//         people = people.slice(limitIdx);
//         answer++;
//     }
