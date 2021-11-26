// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const carpet = brown + yellow;

  for (let i = carpet; i >= Math.ceil(Math.sqrt(carpet)); i--) {
    if (carpet % i === 0) {
      const pair = [i, carpet / i];

      const [x, y] = pair;
      if ((x - 2) * (y - 2) === yellow) return pair;
    }
  }
}
