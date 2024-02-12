/*
Дан массив arr. 
Найдите среднее арифметическое его элементов. 
Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79. 
Решение должно быть написано функцией и принимать любой массив.
*/


function averageArray(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum / arr.length;
};

console.log (averageArray([12, 15, 20, 25, 59, 79]));