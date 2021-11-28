function solution(brown, yellow) {
  for (let i = 1; i <= yellow; i++) {
    if ((i + 2) * 2 + (yellow / i) * 2 === brown) 
			return [i + 2, yellow / i + 2].sort((a, b) => b - a);
  }
}
