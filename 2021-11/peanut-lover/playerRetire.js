function solution(participant, completion) {
    const completeMap = new Map();
    for (let name of completion) {
        if (completeMap.get(name)) {
            let count = completeMap.get(name)
            completeMap.set(name, count + 1);
        } else {
            completeMap.set(name, 1);
        }
    }

    for (let name of participant) {
        const nameCount = completeMap.get(name)
        if (nameCount && nameCount > 0) {
            completeMap.set(name, nameCount - 1);
        } else {
            return name;
        }
    }
}