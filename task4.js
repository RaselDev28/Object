let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
delete student.age;
const count=Object.keys(student).length;
console.log(count);