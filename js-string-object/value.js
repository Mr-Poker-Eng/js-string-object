const person = {
    name: 'al munim',
    age: 23,
    profession: 'developer',
    salary: 25000,
    marrid: false,
    'fav place': ['bandorban', 'saintmartin', 'kuakata']
}

person.salary = 30000;
person['age'] = 24;
person["fav place"] = ['sajek', 'kashmir', 'maldives', 'bali', 'pataya', 'goa'];



const propName = 'profession';
person[propName] = 'devops';
console.log(person);