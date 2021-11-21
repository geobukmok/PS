function solution(numbers, target) {

    let count = 0;
    const stack = [[1], [-1]];

    while (stack.length > 0) {
        const flags = stack.pop();
        if (flags.length === numbers.length) {
            const result = numbers
                .map((number, idx) => number * flags[idx])
                .reduce((prev, curr) => prev + curr, 0)
            if (result === target) count++;
        } else {
            stack.push([...flags, 1])
            stack.push([...flags, -1])
        }
    }
    return count;
}