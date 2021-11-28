function solution(brown, yellow) {
    let w, h = 0;
    let length = (brown + 4) / 2;
    for(h = 1; h < length; h++) {
        w = length - h;
        if (brown + yellow === h * w) {
            break;
        }
    }
    
    return [w, h];
}
