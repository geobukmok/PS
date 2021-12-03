function solution(routes) {
    let answer = 0;
    let cam = null;
    
    routes.sort((a, b) => {
        const [aStart, aEnd] = a;
        const [bStart, bEnd] = b;

        if (aEnd === bEnd) {
          return bStart - aStart;
        } else {
          return aEnd - bEnd;
        }
    })

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
