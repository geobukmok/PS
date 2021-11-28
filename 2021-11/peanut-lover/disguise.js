function solution(clothes) {
    const clothMap = new Map();
    for (const [name, type] of clothes) {
        const count = clothMap.get(type);
        if (count === undefined) {
            clothMap.set(type, 1);
        } else {
            clothMap.set(type, count + 1);
        }
    }

    // 특정 의상을 안 입었을 경우의 수 하나 더 추가해줘야합니다.
    const result = Array.from(clothMap.values()).reduce((acc, cur) => acc * (cur + 1), 1);

    return result - 1;
}