/*
	keypoint
  더하기 빼기로 구분할 수 있고 이를 통해 이진트리를 만들수 있다.
 */

// DFS
function solution(numbers, target) {
	const numsLength = numbers.length - 1;
	let answer = 0;

	function DFS(currentIdx, value) {
		if (currentIdx === numsLength) {
			if (value === target) answer++;
			return;
		}
		const nextIdx = currentIdx + 1;

		DFS(nextIdx, value + numbers[nextIdx]);
		DFS(nextIdx, value - numbers[nextIdx]);

		return answer;
	}

	return DFS(-1, 0);
}

// BFS
function solution(numbers, target) {
	const numsLength = numbers.length - 1;
	const searchArr = [[-1, 0]];
	let answer = 0;

	let i = 0;
	while (searchArr.length > i) {
		const [idx, value] = searchArr[i];

		if (idx === numsLength) {
			if (value === target) answer++;
			i++;
			continue;
		}

		const nextIdx = currentIdx + 1;

		searchArr.push([nextIdx, value + numbers[nextIdx]]);
		searchArr.push([nextIdx, value - numbers[nextIdx]]);
		i++;
	}

	return answer;
}

solution([1, 1, 1, 1, 1], 3); // 5

// DFS
// 테스트 1 〉	통과 (18.67ms, 31.7MB)
// 테스트 2 〉	통과 (13.88ms, 32.8MB)
// 테스트 3 〉	통과 (0.20ms, 30.3MB)
// 테스트 4 〉	통과 (0.87ms, 30.4MB)
// 테스트 5 〉	통과 (2.76ms, 32.1MB)
// 테스트 6 〉	통과 (0.59ms, 30MB)
// 테스트 7 〉	통과 (0.33ms, 30.2MB)
// 테스트 8 〉	통과 (1.96ms, 32.1MB)

// BFS
// 테스트 1 〉	통과 (279.87ms, 246MB)
// 테스트 2 〉	통과 (360.60ms, 244MB)
// 테스트 3 〉	통과 (0.70ms, 30.5MB)
// 테스트 4 〉	통과 (6.45ms, 33.9MB)
// 테스트 5 〉	통과 (19.77ms, 39.7MB)
// 테스트 6 〉	통과 (1.51ms, 30.5MB)
// 테스트 7 〉	통과 (0.74ms, 30.3MB)
// 테스트 8 〉	통과 (12.77ms, 35.6MB)