function solution(citations) {
	const totalCita = citations.length;
	
	citations.sort((a, b) => a - b);
	
	for(let i = 0; i < totalCita; i++) {
			if(citations[i] >= totalCita - i) 
					return totalCita - i;
	}
	
	return 0;
}