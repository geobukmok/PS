function solution(array, commands) {
	return commands.map(
		([start, end, target]) => array.slice(start - 1, end).sort((a, b) => a - b)[target - 1]
	);
}

solution(
	[1, 5, 2, 6, 3, 7, 4],
	[
		[2, 5, 3],
		[4, 4, 1],
		[1, 7, 3],
	],
	[5, 6, 3]
);
