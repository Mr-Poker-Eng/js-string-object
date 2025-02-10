const person = {
        name: 'al munim',
        age: 23,
        profession: 'developer',
        salary: 25000,
        marrid: false,
        'fav place': ['bandorban', 'saintmartin', 'kuakata']
    }
// console.log(person);

//dot notation
//dot symbol diye object er property er value access kora
// console.log(person.name);

const income = person.salary;
// console.log(income)


//bracket notation
//third bracket diye access kora

console.log(person['age']);
const boyos = person['age'];
console.log(boyos);

// showing error
// console.log(person.'fav place')

// right code
console.log(person["fav place"])



const keyName = 'profession';
console.log(person[keyName])
