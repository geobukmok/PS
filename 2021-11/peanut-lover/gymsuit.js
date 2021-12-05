function solution(n, lost, reserve) {
    const lostSet = new Set(lost);
    const reserveSet = new Set(reserve);

    for (const l of lost) {
        if (reserveSet.has(l)) {
            lostSet.delete(l);
            reserveSet.delete(l);
        }
    }

    for (let i = 0; i < n; i++) {
        if (lostSet.has(i)) {
            const left = i - 1;
            const right = i + 1;
            if (reserveSet.has(left)) {
                reserveSet.delete(left);
                lostSet.delete(i);
            } else if (reserveSet.has(right)) {
                reserveSet.delete(right);
                lostSet.delete(i);
            }
        }
    }
    return n - [...lostSet.values()].length;
}