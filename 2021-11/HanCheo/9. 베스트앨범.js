function solution(genres, plays) {
  const answer = [];
  const gPlay = new Map();
  const gPlayDatas = new Map();

  genres.forEach((genre, idx) => {
    const beforePlay = gPlay.get(genre) || 0;
    gPlay.set(genre, beforePlay + plays[idx]);

    const beforeGenrePlayDatas = gPlayDatas.get(genre) || [];
    gPlayDatas.set(genre, [...beforeGenrePlayDatas, [idx, plays[idx]]]);
  });

  const genreRanking = [...gPlay].sort((a, b) => b[1] - a[1]).map((a) => a[0]);

  genreRanking.forEach((genre) => {
    answer.push(
      ...gPlayDatas
        .get(genre)
        .sort((a, b) => b[1] - a[1])
        .map((a) => a[0])
        .slice(0, 2)
    );
  });
  return answer;
}
