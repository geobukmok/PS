function solution(name) {
  let alpha = name.split('');

	const change = alpha.reduce((a, b) => {
        const num = b.charCodeAt() - 65;
        return a += num > 13 ? 26 - num : num;
    }, 0);

	let move = alpha.length;
	let N = alpha.length
    
    for(let i = 0; i < N; i++) {
        let j = i+1;
        while(j != i && name[j]=='A') j = (j+1)%N;
        move = Math.min(move, i + (N+i - j) % N)
    }
	
  return change + move
}
