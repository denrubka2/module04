'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (studentsArr, failedStudentsArr) => studentsArr.filter(item => !failedStudentsArr.includes(item));

console.log(filter(allStudents, failedStudents));