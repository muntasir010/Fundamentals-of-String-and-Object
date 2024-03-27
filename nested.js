const college = {
    name: 'VNC',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        shirtColor: 'Blue',
        pantColor: 'Black',
        result: {
            gpa: 5,
            merit: 'top',
        }
    }
}
console.log(college.unique.result.merit);
college.unique.result.merit = 'top top top most result';
console.log(college['unique'].result.merit);
college.events[1] = '16 december';
console.log(college.events[1]);

// Delete property
delete college.class;

console.log(college);