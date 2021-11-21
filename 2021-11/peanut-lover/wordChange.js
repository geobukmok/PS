function getDiffCount(word, target) {
  // NOTE: all word same length
  // if(word.length !== target.length) throw new Error();
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== target[i]) {
      count++;
    }
  }
  return count;
}

function solution(begin, target, words) {
  const visited = new Set();
  const stack = [[0, begin]];

  while (stack.length >= 1) {
    const [depth, word] = stack.shift();
    visited.add(word);
    for (const candidate of words) {
      if (!visited.has(candidate) && getDiffCount(word, candidate) === 1) {
        if (candidate === target) {
          return depth + 1;
        } else {
          stack.push([depth + 1, candidate]);
        }
      }
    }
  }

  return 0;
}
