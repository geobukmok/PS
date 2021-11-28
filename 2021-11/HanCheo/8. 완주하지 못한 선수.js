function solution(participant, completion) {
  const obj = new Map();

  participant.forEach((person) => {
    const before = obj.get(person) || 0;
    obj.set(person, before + 1);
  });

  completion.forEach((person) => {
    obj.set(person, obj.get(person) - 1);
  });

  for (const [key, value] of obj) {
    if (value === 1) return key;
  }
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.13ms, 30.3MB)
// 테스트 2 〉	통과 (0.10ms, 30.3MB)
// 테스트 3 〉	통과 (0.24ms, 30MB)
// 테스트 4 〉	통과 (0.43ms, 30.4MB)
// 테스트 5 〉	통과 (0.33ms, 30.3MB)

// 효율성  테스트
// 테스트 1 〉	통과 (21.03ms, 45.4MB)
// 테스트 2 〉	통과 (29.27ms, 55.9MB)
// 테스트 3 〉	통과 (35.88ms, 58.2MB)
// 테스트 4 〉	통과 (35.72ms, 58.2MB)
// 테스트 5 〉	통과 (30.34ms, 56.9MB)

function solution(participant, completion) {
  const obj = {};

  participant.forEach((person) => {
    const before = obj[person] || 0;
    obj[person] = before + 1;
  });

  completion.forEach((person) => {
    obj[person]--;
  });

  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === 1) return keys[i];
  }
}

// 채점을 시작합니다.
// 정확성  테스트
// 테스트 1 〉	통과 (0.34ms, 30.4MB)
// 테스트 2 〉	통과 (0.23ms, 30.2MB)
// 테스트 3 〉	통과 (0.43ms, 30.2MB)
// 테스트 4 〉	통과 (0.43ms, 30.4MB)
// 테스트 5 〉	통과 (0.55ms, 30.3MB)
// 효율성  테스트
// 테스트 1 〉	통과 (25.38ms, 47.5MB)
// 테스트 2 〉	통과 (36.64ms, 52.3MB)
// 테스트 3 〉	통과 (40.07ms, 56MB)
// 테스트 4 〉	통과 (79.06ms, 64.5MB)
// 테스트 5 〉	통과 (54.06ms, 64.1MB)
