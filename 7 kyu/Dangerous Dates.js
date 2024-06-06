// Исправьте эту функцию, чтобы она правильно выводила список следующих пяти дней
// (начиная с даты ввода). Каждая дата должна быть в формате М/Д/ГГГГ. т.е. 12 марта 2013 г. будет 12.03.2013.

// Пример вывода: «14.03.2013, 15.03.2013, 16.03.2013, 17.03.2013, 18.03.2013».

// Есть трудный способ сделать это, и есть правильный путь.
// const nextFiveDays = date => {
//   const dates = []
//   for (let i = 0; i < 5; i++) {
//     date.setDate(date.getDate() + 1) //поменяли месяц на следующий
//     const day = date.getDate()
//     const month = date.getMonth()
//     const year = date.getFullYear()
//     dates.push(`${month + 1}/${day}/${year}`)
//   }
//   return dates.join(', ')
// }
// console.log(nextFiveDays(new Date(2012, 10, 2)))
//'11/3/2012, 11/4/2012, 11/5/2012, 11/6/2012, 11/7/2012'
// console.log(nextFiveDays(new Date(2013, 2, 7, 23, 59)))
//,'3/8/2013, 3/9/2013, 3/10/2013, 3/11/2013, 3/12/2013'

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
