let answer = [];
let N;
let isVisit;

function dfs(begin, tickets) {
    if(answer.length == N) {
        answer.push(begin);
        return true;
    }

    for(let i=0; i<N; i++) {
        if(tickets[i][0] == begin && !isVisit[i]) {
            isVisit[i] = true;
            answer.push(begin);
            if(dfs(tickets[i][1], tickets)) {
                return true;
            }
            isVisit[i] = false;
            answer.pop();
        }
    }
    return false;
}

function solution(tickets) {
    N = tickets.length;
    isVisit = new Array(N).fill(false);

    tickets.sort((a, b) => {
        if(a[0] == b[0]) {
            return a[1] > b[1] ? 1 : -1;
        }
        return a[0] > b[0] ? 1 : -1;
    })

    dfs("ICN", tickets);

    return answer;
}
