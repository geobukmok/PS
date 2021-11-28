function findOne(map) {
    for(let name in map) {
        if(map[name] != 0) {
            return name;
        }
    }
}

function solution(participant, completion) {
    let map = {};

    for(let i=0; i<participant.length; i++) {
        const name = participant[i];
        if(map[name] === undefined) {
            map[name] = 0;
        }
        map[name]++;
    }
    
    for(let i=0; i<completion.length; i++) {
        const name = completion[i];
        map[name]--;
    }
    
    return findOne(map);
}
