const college = { 
    name: 'vnc',
    class: ['10', '11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5.00,
            merit: 'top',
        }
    }
}



console.log(college)
console.log(college.name)
console.log(college.unique.color)
console.log(college['unique']['color'])
console.log(college.unique.result.gpa)
console.log(college.unique.result.merit)
college.unique.result.merit = 'top most'
console.log(college.unique.result.merit)

console.log(college.events)
console.log(college.events[1])
college.events[1] = '16 dec'
console.log(college.events[1])
console.log(college.events)
console.log(college)
delete college.class;

console.log(college)