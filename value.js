const person = {
    name: 'Naeem Tasir',
    age: 23,
    profession: 'Developer',
    salary: 45000,
    isMarried: false,
    'fav palaces': ['Bandarban', 'Kuakata', 'Kashmir', 'Sajek']
}

person.salary = 60000;
person['age'] = 25;
person['fav palaces'] = ['Rangamati', 'Guliakhali', 'Cox bazar' ];

const propName = 'profession';
person[propName] = 'devOps';
console.log(person);