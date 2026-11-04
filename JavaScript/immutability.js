const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);

console.log(doubled);
console.log(evens);

const sliced = nums.slice(1, 4);
console.log(sliced);

const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);