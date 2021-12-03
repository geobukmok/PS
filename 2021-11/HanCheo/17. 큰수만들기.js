function solution(number, k) {
  let numbers = number.split('');
	const answer = [numbers[0]];

  numbers.reduce((a, b) => {
    if (a < b && k > 0) {
      while (k > 0) {
        const popNum = answer[answer.length - 1];
        if (popNum < b) {
          answer.pop();
          k--;
        } else {
          break;
        }
      }
    }
    answer.push(b);
    return b;
  });

//   while (k > 0) {
//     answer.pop();
//     k--;
//   }

  return answer.slice(0, answer.length-k).join('');
}
