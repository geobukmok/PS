const A_CODE = 'A'.charCodeAt(0);
const Z_CODE = 'Z'.charCodeAt(0);

function getMaxBACount(name) {
    let al = 0;
    let ei = name.length - 1;
    let candi = 0;
    for(let i = 0; i < name.length; i++) {
        if(name[i] !== 'A') {
            if(al < candi) {
                al = candi;
                ei = i;
            }
            candi = 0;
        } else {
            candi++;
        }
    }
    if (al < candi) {
        al = candi;
        ei = name.length;
    }
    
    return [ei - al, al];
}

function getUpDownCount(C_CODE) {
    return Math.min(C_CODE - A_CODE, Z_CODE - C_CODE + 1);
}

function solution(name) {
    let answer = 0;
    let nl = name.length;
    const [bl, al] = getMaxBACount(name);
    
    if(bl === 0) {
        answer += nl - al
    } else if(bl <= al) {
        answer += 2 * (bl - 1) + nl - bl - al;
    }  else {
        answer += nl - 1
    }
    
    for(let i=0; i<nl; i++) {
        answer += getUpDownCount(name[i].charCodeAt(0));
    }
    
    return answer;
}
