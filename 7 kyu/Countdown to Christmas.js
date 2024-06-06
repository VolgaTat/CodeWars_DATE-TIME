// Полли 8 лет. Она с нетерпением ждет Рождества, так как у нее есть разногласия с Санта-Клаусом.
// В прошлом году она попросила лошадь, и он принес ей кукольный домик. Понятно, что она в ярости.

// Кажется, что дни тянутся и тянутся, поэтому Полли просит подругу помочь ей подсчитать,
// сколько дней осталось до Рождества. Она начнет отсчет с первого декабря.

// Ваша функция должна принимать 1 аргумент (объект Date), который будет текущим днем ​​года.
// Затем функция должна определить, сколько дней осталось до Рождества.

// Остерегайтесь високосных лет!


function daysUntilChristmas(date) {
  const currentYear = date.getFullYear(); //2016
  const factDayChristmas = new Date(currentYear, 11, 25);//
  const startDay = date.getTime();//1481230800000 мс
  const diffDay = factDayChristmas - startDay; //1382400000 мс
  const mcInDay = 86400000;
  return diffDay < 0 ? (new Date(currentYear + 1, 11, 25).getTime() - startDay) / mcInDay : Math.floor(diffDay / mcInDay);
}
console.log((daysUntilChristmas(new Date(2016,11,9))))//, 16);
console.log((daysUntilChristmas(new Date(2016,11,8))))//, 17);
console.log((daysUntilChristmas(new Date(1996,11,7))))//, 18);
console.log((daysUntilChristmas(new Date(2015,1,23))))//, 305);
console.log((daysUntilChristmas(new Date(2001,6,11))))//, 167);
console.log((daysUntilChristmas(new Date(2000,11,9))))//, 16);
console.log((daysUntilChristmas(new Date(1978,2,18))))//, 282);
console.log((daysUntilChristmas(new Date(2016,11,25))))//, 0);
console.log((daysUntilChristmas(new Date(2016,11,26))))//, 364);
console.log((daysUntilChristmas(new Date(2015,11,26))))//, 365);