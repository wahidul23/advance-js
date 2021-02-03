const student =[
    {id: 69, name: "wahidul islam"},
    {id: 19, name: "wahidul islam"},
    {id: 23, name: "wahidul islam"}
];

const names = student.map(s => s.name);
const ids = student.filter(s => s.id> 40);
const biggerOne = student.find(s => s.id <= 40);
console.log(names, biggerOne);