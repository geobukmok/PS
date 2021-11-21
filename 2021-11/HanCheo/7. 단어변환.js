function solution(begin, target, words) {
	if (!words.includes(target)) return 0;

	const visited = Array(words.length).fill(0);
	const queue = [[begin, 0]];

	while (queue) {
		const [currWord, count] = queue.shift();
		if (currWord === target) return count;

		words.forEach((word, idx) => {
			if (visited[idx] === 0) {
				const compareWord = currWord.split('');
				let compareCount = 0;
				for (let i in compareWord) {
					if (compareWord[i] !== word[i]) compareCount++;
					if (compareCount >= 2) break;
				}
				if (compareCount >= 2) return;
				visited[idx] = 1;
				queue.push([word, count + 1]);
			}
		});
	}

	return 0;
}
