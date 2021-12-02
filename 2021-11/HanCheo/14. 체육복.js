function solution(n, lost, reserve) {
  let answer = n;
  const reserveSet = new Set(reserve);

  return (
    answer -
    lost
      .filter((stu) => !reserveSet.delete(stu))
      .sort((a, b) => a - b)
      .filter((stu) => (
				reserveSet.delete(stu - 1) || 
				reserveSet.delete(stu + 1) ? false : true))
			.length
  );
}
