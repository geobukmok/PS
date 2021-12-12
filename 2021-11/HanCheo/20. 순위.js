function solution(n, results) {
  const answer = 0;
  const users = [...Array(n).keys()].map((e) => e + 1);

  const wins = new Map();
  const loses = new Map();

  users.forEach((key) => {
    wins.set(key, new Set([]));
    loses.set(key, new Set([]));
  });

  results.forEach(([winner, loser]) => {
    wins.get(winner).add(loser);
    loses.get(loser).add(winner);
  });

  users.forEach((user) => {
    const winSet = wins.get(user);
    const losSet = loses.get(user);

    for (const winner of losSet) {
      for (const loser of winSet) wins.get(winner).add(loser);
    }
    for (const loser of winSet) {
      for (const winner of losSet) loses.get(loser).add(winner);
    }
  });

  users.forEach((user) => {
    wins.get(user).size + loses.get(user).size === n - 1 && answer++;
  });
}
