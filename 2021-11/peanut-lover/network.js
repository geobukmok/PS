function solution(n, computers) {
  let countOfGroup = 0;

  const visited = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    const connected = [];
    computers[i].forEach((isConnected, idx) => {
      if (isConnected && idx !== i) connected.push(idx);
    });

    visited[i] = true;
    while (connected.length > 0) {
      const node = connected.pop();
      visited[node] = true;
      computers[node].forEach((isConnected, idx) => {
        if (isConnected && idx !== i && !visited[idx]) connected.push(idx);
      });
    }
    countOfGroup++;
  }
  return countOfGroup;
}
