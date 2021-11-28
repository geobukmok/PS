function solution(genres, plays) {
    // 장르에 속한 애들을 묶어서 정렬,
    const genreCountMap = new Map();
    const musicbyGenreMap = new Map();

    for (let i in genres) {
        const name = genres[i];

        const countOfPlaying = genreCountMap.get(name);
        if (countOfPlaying === undefined) {
            genreCountMap.set(name, plays[i]);
        } else {
            genreCountMap.set(name, countOfPlaying + plays[i])
        }

        const musicList = musicbyGenreMap.get(name);
        if (musicList === undefined) {
            musicbyGenreMap.set(name, [[i, plays[i]]]);
        } else {
            musicbyGenreMap.set(name, [...musicList, [i, plays[i]]]);
        }
    }

    const sorted = [...genreCountMap.entries()].sort((a, b) => {
        const [keyA, countA] = a;
        const [keyB, countB] = b;
        if (countA > countB) {
            return -1;
        } else if (countA < countB) {
            return 1;
        } else {
            return 0;
        }
    });
    const sortedGenres = sorted.map(d => d[0]);

    const result = [];

    for (const genre of sortedGenres) {
        const musics = musicbyGenreMap.get(genre);
        const sortedMusicIdx = musics.sort((a, b) => {
            const [idxA, countA] = a;
            const [idxB, countB] = b;
            if (countA > countB) {
                return -1;
            } else if (countA < countB) {
                return 1;
            } else {
                return 0;
            }
        }).map(m => m[0]);

        if (sortedMusicIdx.length > 1) {
            result.push(sortedMusicIdx[0]);
            result.push(sortedMusicIdx[1]);
        } else {
            result.push(sortedMusicIdx[0]);
        }
    }
    return result.map(d => Number(d))
}