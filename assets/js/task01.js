'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (studentsArr, failedStudentsArr) => {
  if(!Array.isArray(studentsArr) || !Array.isArray(failedStudentsArr)) return 'Не массив';

  const arr = [...studentsArr];

  return arr.filter(item => !failedStudentsArr.includes(item));
}

console.log(filter(allStudents, failedStudents));