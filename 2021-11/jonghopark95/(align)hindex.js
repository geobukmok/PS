// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  let h = 0;

  while (true) {
    let overH = citations.filter((cit) => cit >= h);
    let rest = citations.filter((cit) => cit < h);
    if (overH.length >= h && rest.length <= h) h++;
    else break;
  }

  return h - 1;
}
