// Как строгий старший брат, я ограничиваю младшего брата Васю во времени,
// которое он проводит за компьютерными играми. Я определяю прайм-тайм как период времени,
// до которого Васе разрешено играть в компьютерные игры.
// Я указываю час начала и час окончания как пару целых чисел.

// Мне нужна функция, которая будет принимать три числа - текущий момент (текущий час),
// час начала разрешенного периода времени и час окончания разрешенного периода времени.
// Функция должна давать ответ на вопрос (в виде логического значения): "Сможет ли Вася сыграть за указанное время?"

// Если я говорю, что прайм-тайм с 12 до 15, это означает, что в 12:00 можно играть в компьютер,
// но в 15:00 игр уже не должно быть.

// Я позволю Васе играть хотя бы час в день.
// 1 вариант
// function canIPlay(now,start,end) {
//   if (end < start) {
//       if (now >= start || now < end) {
//         return true; 
//       } else {
//         return false; 
//       }
//     } else {
//       if (now >= start && now < end) {
//         return true; 
//       } else {
//         return false; 
//       }
//     }
//   }
// 2 вариант
function canIPlay(now,start,end) {
  //10, ...11,12,13,14
  // i = 10 не должен быть равен end 
  // шаг i = 10, i = (10 + 1) % 24 = 11 % 24 = 11
  // шаг i = 11, i = (11 + 1) % 24 = 13 % 24 = 12
  // шаг i = 13, i = (11 + 1) % 24 = 13 % 24 = 13
  //....
  // шаг i = 23, i = (23 + 1) % 24 = 24 % 24 = 0 
  for(let i = start; i != end; i = (i + 1) % 24){
     if(i === now){
       return true
     }
  }
  return false
}
console.log( canIPlay(12, 10, 14)) //true,  "12:00 should match to 10:00-14:00 prime-time");
console.log( canIPlay(12, 13, 14)) //false, "12:00 shouldn't match to 13:00-14:00 prime-time");
console.log( canIPlay(15, 12, 15)) //false, "15:00 shouldn't match to 12:00-15:00 prime-time");
console.log( canIPlay(23, 22,  1)) //true,  "23:00 should match to 22:00-01:00 prime-time"
