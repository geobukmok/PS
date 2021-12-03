function solution(name) {
  let alpha = name.split('');

	const change = alpha.reduce((a, b) => {
        const num = b.charCodeAt() - 65;
        return a += num > 13 ? 26 - num : num;
    }, 0);

	let move = alpha.length;
	let N = alpha.length
    
    for(let times = 0; times < 2; times++) {
        for(let i = 0; i < N; i++) {
            let j = i+1;
            while(j != i && alpha[j]=='A') j = (j+1)%N;
            move = Math.min(move, i + (N+i - j) % N)
        }
        
        const tmp = alpha[0];
        alpha = alpha.slice(1).reverse();
        alpha.unshift(tmp)
    }
    
	
  return change + move
}
