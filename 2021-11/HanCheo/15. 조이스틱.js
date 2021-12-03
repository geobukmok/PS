function solution(name) {
  let maxALength = 0;

  const alphaNum = name.split('').map((a) => {
    const num = a.charCodeAt() - 65;
    return num > 13 ? 26 - num : num;
  });

  /**
   *
   * @param {*} nums findIndex를 좀더 쉽게 하기위한 alphaNum 슬라이스 배열
   * @param {*} i //slice된 배열이므로 현재 탐색중인 위치를 찾을수 없으므로 추가적 인자 주입
   */
  const checkALength = (nums, i) => {
    //연속적인 a의 갯수를 찾고 findIndex는 a보다 큰값을 찾으므로 자동적으로 cnt는 +1이 붙게됨.
    let cnt = nums.findIndex((a) => a > 0);
    //끝까지 a인 경우는 총 길이를 반환
    cnt = cnt < 0 ? nums.length : cnt;
    //총 a의 갯수에서 0에서 현재 위치 까지의 길이를 -
    // i에 -1을 해주는 이유는 현재위치가 A이기 때문에 왼쪽으로 가게되면 현재 A경로를 들릴 필요가 없기 때문
    // 이동경로를 뺀 a의 갯수가 maxALength보다 작으면 궅이 반대로 돌아갈 필요가 없음.
    cnt = cnt - (i - 1);
    // A 최대 갯수 비교 최종적으로 maxLength가 0 보다 크면 돌아가는것이 확정
    maxALength = cnt > maxALength ? cnt : maxALength;
  };

  //총 이동 경로를 구하는방법 무지성으로 오른쪽으로만 가면서 A를 만나면 A의 총 갯수를 구함.
  const totalMove = alphaNum.reduce((totalMove, letter, i) => {
    if (letter !== 0) return totalMove + alphaNum[i] + 1;

    //이전값에 A이면 궅이 재검사 할 필요 x
    if (i === 0 || alphaNum[i - 1] !== 0) checkALength(alphaNum.slice(i), i);

    return totalMove + 1;
  }, 0);

  // 총 이동경로에서 maxALength 빼기 -1을 해주는 이유는
  //totalMove구할때 i가 0이어도 이동했다는 +1을 추가하기 때문
  return totalMove - maxALength - 1;
}
