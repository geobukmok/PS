const supoUsers = [
  {
    role: [1, 2, 3, 4, 5],
    point: 0,
  },
  {
    role: [2, 1, 2, 3, 2, 4, 2, 5],
    point: 0,
  },
  {
    role: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    point: 0,
  },
];

function solution(answers) {
  let top = 0;
  let ans = [];

  answers.forEach((answer, idx) => {
    supoUsers.forEach((user) => answer === user.role[idx % user.role.length] && user.point++);
  });

  supoUsers.forEach((user, idx) => {
    if (user.point > top) {
      top = user.point;
      ans = [idx + 1];
    } else if (user.point == top) {
      ans.push(idx + 1);
    }
  });

  return ans;
}
