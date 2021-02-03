const numbers = [2, 3, 4 , 5, 6, 8, 9];
// const output = []
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
     
// }
// function square (element){
//     return element*element;
// }
// function square = element => element*element;

// function square = x => x*x;

// const result = numbers.map(function(element){
//     return element*element;
// })

// const result = numbers.map(x => x * x);
// console.log(result);
const bigger = numbers.filter(x => x > 5);
console.log(bigger);