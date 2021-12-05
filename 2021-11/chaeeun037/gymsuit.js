function solution(n, lost, reserve) {
    let answer = n;
    let arr = Array(n).fill(1);
    for(let i=0; i<lost.length; i++) {
        arr[lost[i] - 1] -= 1;
    }
    for(let i=0; i<reserve.length; i++) {
        arr[reserve[i] - 1] += 1;
    }
    for(let i=0; i<n; i++) {
        if(arr[i] > 0) {
            continue;
        }
        if(i - 1 >= 0 && arr[i - 1] >= 2) {
            arr[i] = 1;
            arr[i - 1] = 1;
        }else if(i + 1 < n && arr[i + 1] >= 2) {
            arr[i] = 1;
            arr[i + 1] = 1;
        } else {
            answer--;
        }
    }
    return answer;
}
