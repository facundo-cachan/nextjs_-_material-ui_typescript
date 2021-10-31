const isEven = (n: number) => n % 2 === 0;
const isOdd = (n: number) => Math.abs(n % 2) === 1;
const evenOrOdd = (arr: []) => {
    const grouped = {
        even: [],
        odd: [],
        others: [],
    };
    arr.forEach((a, i) => {
        if (isEven(i)) {
            grouped.even.push(a);
        } else if (isOdd(i)) {
            grouped.odd.push(a);
        } else {
            grouped.others.push(a);
        }
    });
    return grouped;
};
export { isEven, isOdd, evenOrOdd };
