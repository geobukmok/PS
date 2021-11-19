function solution(numbers) {
    let sorted = numbers.sort((a, b) => {
        return parseInt(`${b}${a}`) - parseInt(`${a}${b}`);
    });
    
    const answer = sorted.join("");
    if (answer[0] == "0") {
        return "0";
    } else {
        return answer;
    }
}
