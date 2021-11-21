function solution(citations) {
  const sorted = citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    const h = sorted[i];
    const n = i + 1;
    if (h == n) {
      return h;
    } else if (h < n) {
      return n - 1;
    }
  }

  return citations.length;
}
