/*
Подсчитать количество пятниц 13-ого с любого заданного числа прошлого (например с 01.01.2000) до сегодня. 
Ваш код должен иметь возможность считать количество дней на любую заданную в переменной первоначальную дату и считать верно через 10-15-20 лет. 
Решение должно быть написано функцией.
*/


function countFridays13(startDate) {
  let count = 0;
  let start = new Date(startDate);
  let today = new Date();
  
  for (let year = start.getFullYear(); year <= today.getFullYear(); year++) {
    for (let month = 0; month < 12; month++) {
      
      if (year === start.getFullYear() && month < start.getMonth()) {
        continue;
      }
      // пятница?
      let date = new Date(year, month, 13);
      if (date.getDay() === 5) {
        count++;
      }
      // условия break
      if (year === today.getFullYear() && month >= today.getMonth()) {
        break;
      }
    }
  }
  
  return count;
}

let count = countFridays13("1995-01-01")
console.log ("Количество пятниц 13-ого с указанной даты до сегодняшней - " + count)