export function romanToInteger(str) {
    const table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    return [...str].reduce(
        (prev, curr, currInd, array) =>
            table[array[currInd + 1]] > table[curr]
                ? prev - table[curr]
                : prev + table[curr],
        0
    );
}
