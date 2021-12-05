function solution(people, limit) {
    let answer = people.length;
    let left = 0, right = people.length - 1;
    
    people.sort((a, b) => b - a);
    
    while(left < right) {
        if(people[left] + people[right] <= limit) {
            left++;
            right--;
            answer--;
        } else {
            left++;
        }
    }
    
    return answer;
}
