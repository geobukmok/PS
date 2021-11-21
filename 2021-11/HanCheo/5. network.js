function solution(n, computers) {
	let answer = 0;
	const visited = Array(n).fill(0);

	for (const idx in computers) {
		if (visited[idx] === 0) answer++;
		dfs(idx);
	}

	function dfs(n) {
		visited[n] = 1;

		for (const idx in computers[n]) {
			if (visited[idx] === 0 && computers[n][idx] === 1) dfs(idx);
		}
	}

	return answer;
}
