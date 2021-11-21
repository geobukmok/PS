// https://programmers.co.kr/learn/courses/30/lessons/43164#

function solution(tickets) {
  let answer;
  tickets.sort();

  const traverse = (paths, rest) => {
    if (answer) return;
    if (!rest.length) {
      if (paths.length === tickets.length + 1) answer = paths;
      return;
    }

    const beginAirport = paths[paths.length - 1];
    const endAirports = rest.filter(([begin]) => begin === beginAirport);

    endAirports.forEach(([start, end]) => {
      const findIdx = rest.findIndex(([b, e]) => b === start && e === end);
      traverse(
        [...paths, end],
        rest.filter((_, idx) => idx !== findIdx)
      );
    });
  };

  traverse(["ICN"], tickets);

  return answer;
}
