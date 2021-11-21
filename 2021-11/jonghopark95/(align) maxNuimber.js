// https://programmers.co.kr/learn/courses/30/lessons/42746#

// 구글링
function solution(numbers) {
  let answer = numbers
    .map((a) => String(a))
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

// 내 풀이

// function solution(numbers){
//     let answer = 0;

//     const getValidPosNumber = (number, pos) => {
//         let num = number.toString()[pos];
//         while(num === undefined){
//             pos = pos - 1;
//             num = number.toString()[pos];
//         }

//         return num;
//     }

//     const sortAsPos = (pos) => {
//         const sorted = numbers.sort((l, r) => {
//             const rPos = getValidPosNumber(r, pos);
//             const lPos = getValidPosNumber(l, pos);

//             return rPos - lPos;
//         });

//         return sorted;
//     }

//     for(let i = 0; i <= 4; i++){
//         numbers = sortAsPos(i);
//         const concatedNum = parseInt(numbers.join(''));
//         if(concatedNum > answer) answer = concatedNum;
//     }

//     return answer.toString();
// }
