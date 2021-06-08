const numbers = [2, 3, 4, 5, 6, 7];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const square = element * element;
//     console.log(square);
// }
// const result = numbers.filter(x => x > 4);
// console.log(result);

// function square (element) {
//     return element * element;
// }

// const result = numbers.map(square);
// console.log(result);

// const result = numbers.map(function (element) {
//     return element * element;
// })

// console.log(result);

// const result = numbers.filter(x => x < 5);
// console.log(result);

// const result = numbers.find(x => x > 5);
// console.log(result)

const info = [
    {fname: 'Wahidul', lname: 'Islam'},
    {fname: 'Abdul', lname: 'Kadir'},
    {fname: 'Abdus', lname: 'Salam'}
]

// const fullName = info.map(x => x.fname + ' ' + x.lname);
// console.log(fullName);
 

// const result = info.filter(x => x.fname.length > 5);
// console.log(result);

const result = info.find(x => x.fname.length > 5);
console.log(result);