function solution(n, lost, reserve) {
  const reserveSet = new Set(reserve);

  return (
    n -
    lost
      .filter((stu) => !reserveSet.delete(stu))
      .sort((a, b) => a - b)
      .filter((stu) => (
	reserveSet.delete(stu - 1) || 
	reserveSet.delete(stu + 1) ? false : true))
      .length
  );
}
