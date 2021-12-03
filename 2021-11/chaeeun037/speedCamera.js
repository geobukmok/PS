function solution(routes) {
    let answer = 0;
    let cam = null;
    
    routes.sort((a, b) => a[1] - b[1]);

    for(let i=0; i<routes.length; i++) {
        const [start, end] = routes[i];
        if(cam && cam >= start && cam <= end) {
            continue;
        }
        cam = end;
        answer++;
    }
    
    return answer;
}
