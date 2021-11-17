let answer;

function isDiffOnlyOne(word, target) {
    let n = 0;
    for(let i=0; i<word.length; i++) {
        if(word[i] != target[i]) {
            n++;
        }
        if(n >= 2) {
            return false;
        }
    }
    return true;
}

function solve(begin, target, words, n) {
    if(n >= answer) {
        return;
    }
    
    if(begin == target) {
        answer = Math.min(answer, n);
        return;
    }
    
    for(let i=0; i<words.length; i++) {
        if(isDiffOnlyOne(words[i], begin)) {
            solve(words[i], target, words, n + 1);
        }
    }

}

function solution(begin, target, words) {
    answer = words.length;
    
    if(!words.includes(target)) {
        return 0;
    }  else {
        solve(begin, target, words, 0);
    }
    
    return answer;
}
