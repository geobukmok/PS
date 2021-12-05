// https://programmers.co.kr/learn/courses/30/lessons/42884

function solution(routes) {
  let answer = 0;
  routes.sort((l, r) => l[0] - r[0]);

  while (routes.length > 0) {
    const minOut = Math.min(...routes.map(([_, out]) => out));

    routes = routes.filter(([start]) => start > minOut);
    answer++;
  }

  return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.20ms, 30.2MB)
// 테스트 2 〉	통과 (0.23ms, 30.3MB)
// 테스트 3 〉	통과 (0.31ms, 30.4MB)
// 테스트 4 〉	통과 (0.29ms, 30.3MB)
// 테스트 5 〉	통과(0.29ms, 30.5MB)

// 효율성  테스트
// 테스트 1 〉	통과 (6.26ms, 33MB)
// 테스트 2 〉	통과 (6.07ms, 33MB)
// 테스트 3 〉	통과 (14.70ms, 34.4MB)
// 테스트 4 〉	통과 (0.60ms, 30MB)
// 테스트 5 〉	통과 (15.86ms, 34.3MB)
