function solution(genres, plays) {
    let indexMap = {};
    let index = 0;
    let arr = [];
    let answer = [];
    
    for(let i=0; i<genres.length; i++) {
        if (indexMap[genres[i]] === undefined) {
            indexMap[genres[i]] = index++;
            arr.push({genre: genres[i], musics: [], total: 0})
        }
        arr[indexMap[genres[i]]].musics.push({plays: plays[i], index: i});
        arr[indexMap[genres[i]]].total += plays[i];
    }
    
    arr.sort((a, b) => b.total - a.total);
    
    for(let i=0; i<arr.length; i++) {
        arr[i].musics.sort((a, b) => {
            if(a.plays === b.plays) {
                return a.index - b.index;
            }
            return b.plays - a.plays;
        })
        
        for(let j=0; j<Math.min(2, arr[i].musics.length); j++) {
            answer.push(arr[i].musics[j].index);
        }
    }
    
    return answer;
}
