function solution(people, limit) {
    let answer = people.length;
    let arr = people.slice().sort((a, b) => b - a);
    let left = 0, right = arr.length - 1;
    while(left < right) {
        if(arr[left] + arr[right] <= limit) {
            left++;
            right--;
            answer--;
        } else {
            left++;
        }
    }
    return answer;
}
