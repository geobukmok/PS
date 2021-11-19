let MAX = 1000;

function solve(citations, left, right) {
    if (left > right) {
        return right;
    }
    
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    
    for(let i=0; i<citations.length; i++) {
        if(citations[i] >= mid) {
            count++;
        }
        if(count > mid) {
            return solve(citations, mid + 1, right);
        }
    }
    
    if(count == mid) {
        return mid;
    } else {
        return solve(citations, left, mid - 1);
    }
}

function solution(citations) {
    return solve(citations, 0, MAX);
}
