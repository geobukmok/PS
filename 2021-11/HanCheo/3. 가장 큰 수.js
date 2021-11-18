function solution(numbers) {
	return BigInt(
		numbers
			.map(String)
			.sort((a, b) => (a + a + a < b + b + b ? -1 : 1))
			.reverse()
			.join('')
	).toString();
}
