let answer = 0;

function solve(numbers, target, n, sum) {
    if(n >= numbers.length) {
        if (sum == target) {
            answer++;
        }
        return;
    }
    
    solve(numbers, target, n + 1, sum + numbers[n]);
    solve(numbers, target, n + 1, sum - numbers[n]);
}

function solution(numbers, target) {
    solve(numbers, target, 0, 0);
    return answer;
}
