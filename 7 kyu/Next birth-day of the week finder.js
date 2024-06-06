// Можно ли узнать, через сколько лет день рождения человека приходится на тот же день недели, в который он родился?
// Например, день рождения Джой приходится на 16 октября 1990 года, то есть на пятницу.
// Через сколько лет его день рождения снова выпадет на пятницу? (это будет 11 лет)

// Примечание
// Месяц имеет нулевой индекс

// nextBirthdayOfTheWeek(new Date(1990, 9, 16)) //11
// nextBirthdayOfTheWeek(new Date(2012, 5, 20))  //6
// nextBirthdayOfTheWeek(new Date(1975, 2, 22))  //5
const nextBirthdayOfTheWeek = function (birthday) {
  let res = 1;
  let year = birthday.getFullYear();
  let month = birthday.getMonth();
  let day = birthday.getDate();
  while(new Date(year + res, month, day).getDay() !==  birthday.getDay()) {
    res++;
  }
  return res;
}

console.log(nextBirthdayOfTheWeek(new Date(1990, 10, 16)))// === 11, 'After 11 years');
console.log(nextBirthdayOfTheWeek(new Date(2012, 5, 20)))// === 6, 'After 6 years');