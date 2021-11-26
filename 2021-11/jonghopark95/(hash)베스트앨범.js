// https://programmers.co.kr/learn/courses/30/lessons/42579?language=javascript

function solution(genres, plays) {
  const genreMap = new Map();
  const amountMap = new Map();
  let answer = [];

  genres.forEach((genre, idx) => {
    const playInfo = [idx, plays[idx]];

    genreMap.set(genre, [...(genreMap.get(genre) || []), playInfo])
    amountMap.set(genre, (amountMap.get(genre) || 0) + plays[idx]);
  });

  const amount = [...amountMap].sort((l, r) => r[1] - l[1]);
  amount.forEach(([genre]) => {
    const bestOnGenre = genreMap
      .get(genre)
      .sort((l, r) => r[1] - l[1])
      .slice(0, 2)
      .map(([num]) => num);

    answer = [...answer, ...bestOnGenre];
  });

  return answer;
}
