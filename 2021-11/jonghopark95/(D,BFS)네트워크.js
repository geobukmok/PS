// https://programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let answer = 0;
  const visited = [];

  const traverse = (curr) => {
    visited[curr] = true;
    computers[curr].forEach((isConnected, idx) => {
      if (isConnected && idx !== curr && !visited[idx]) {
        traverse(idx);
      }
    });
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      traverse(i);
      answer++;
    }
  }

  return answer;
}
