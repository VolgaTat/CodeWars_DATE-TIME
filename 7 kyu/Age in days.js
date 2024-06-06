// Вы когда-нибудь хотели узнать, сколько вам дней?
// Завершите функцию, которая возвращает ваш возраст в днях.
// День рождения указывается в следующем порядке: year, month, day.

// Например, если сегодня 30 ноября 2015 г., то

// ageInDays(2015, 11, 1) returns "You are 29 days old"
// Ожидается, что день рождения останется в прошлом.

// Предложения по улучшению ката приветствуются!
function ageInDays(year, month, day){
  let currentDate = new Date();
  let dateOfBirth = new Date(year + "-" + month + "-" + day);
  let difference = Math.abs(currentDate - dateOfBirth);
  let result = Math.round(difference / (1000 * 3600 * 24));
  return `You are ${result} days old`;
}
console.log(ageInDays(2009, 3, 12))