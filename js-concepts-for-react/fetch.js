//JSON = stringify and parse
const student = {
    name: 'Shakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);


//fetch
 fetch('url')
 .then(res => res.json())
 .then(data => console.log(data))


 //keys, values
 const keys = Object.keys(student);
 const values = Object.values(students);

 //for in array
 const numbers = [23, 54, 67, 87, 23, 78]; 
 numbers.forEach( num => console.log(num));
 numbers.map(num => num*2);


 //



