function solution(clothes) {
    let map = {};
    let answer = 1;
    
    for(let i=0; i<clothes.length; i++) {
        const type = clothes[i][1];
        
        if(map[type] === undefined) {
            map[type] = 0;
        }
        
        map[type]++;
    }
    
    for(let key in map) {
        answer *= (map[key] + 1);
    }
    
    return answer - 1;
}
