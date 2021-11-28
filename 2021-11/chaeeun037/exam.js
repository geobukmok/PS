function solution(answers) {
    let answer = [];
    let pattern = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    let score = [0, 0, 0];
    let max = 0;
    
    for(let i=0; i<pattern.length; i++) {
        for(let j=0; j<answers.length; j++) {
            if(pattern[i][j % pattern[i].length] === answers[j]) {
                score[i]++;
                if(max < score[i]) {
                    max = score[i];
                }
            }
        }
    }
    
    for(let i=0; i<score.length; i++) {
        if (score[i] >= max) {
            answer.push(i + 1);
        }
    }
    
    return answer;
}
