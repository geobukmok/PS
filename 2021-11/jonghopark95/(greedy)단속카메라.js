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
