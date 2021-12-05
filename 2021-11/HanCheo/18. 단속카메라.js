function solution(routes) {
  var answer = 1;

  routes.sort((a, b) => a[0] - b[0]);

  let end = routes[0][1];

  routes.forEach(([x, y]) => {
    if (x > end) answer++;
    if (y < end || x > end) end = y;
  });

  return answer;
}
