let map = {};

function isPrimeNumber(n) {
    if (n <= 1) {
        return false;
    }
    for(let i=2; i<n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function solve(n, cnt, isVisit, numbers, number) { 
    if(isPrimeNumber(number)) {
        map[parseInt(number)] = true;
    }
    for(let i=0;i<n;i++) {
        if(!isVisit[i]) {
            isVisit[i] = true;
            number += numbers[i];
            solve(n, cnt + 1, isVisit, numbers, number);
            isVisit[i] = false;
            number = number.slice(0, -1);
        }
    }
}

function solution(numbers) {
    solve(numbers.length, 0, [], numbers, '');
    return Object.keys(map).length;
}
