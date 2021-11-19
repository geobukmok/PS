let N;
let isVisit;

function dfs(n, computers) {
    for(let i=0; i<N; i++) {
        if(!isVisit[i] && computers[n][i]) {
            isVisit[i] = true;
            dfs(i, computers);
        }
    }
}

function solution(n, computers) {
    N = computers.length;
    isVisit = new Array(N).fill(false);
    
    let answer = 0;
    
    for(let i=0; i<N; i++) {
        if(!isVisit[i]) {
            answer++;
            isVisit[i] = true;
            dfs(i, computers);
        }
    }
    
    return answer;
}
