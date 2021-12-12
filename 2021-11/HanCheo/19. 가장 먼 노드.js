function solution(n, edges) {
  let visited = new Array(n + 1).fill(false);
  let level = new Array(n + 1).fill(0);

  let queue = [1];
  visited[1] = true;

  let lev;
  let next = 0;
  while (queue[next] != undefined) {
    let node = queue[next];
    lev = level[node] + 1;
    for (let edge of edges) {
      if (edge[0] == node && !visited[edge[1]]) {
        queue.push(edge[1]);
        visited[edge[1]] = true;
        level[edge[1]] = lev;
      }
      if (edge[1] == node && !visited[edge[0]]) {
        queue.push(edge[0]);
        visited[edge[0]] = true;
        level[edge[0]] = lev;
      }
    }
    next++;
  }
  return level.filter((i) => i == lev - 1).length;
}
