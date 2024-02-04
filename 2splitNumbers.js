/* Напишите код, который будет разбивать число на заданное количество рандомных чисел,
сумма которых будет равна изначальному числу. 

Пример: разбить 15 на 3 части (сумма всех чисел будет равна 15) (4,6,5)
Код должен работать с любым числом заданным в переменной (не только с 15)
и с любым количеством частей на которые надо разбить число.
*/

//а. целые числа
function splitNumber(number, parts) {
    let sum = 0;
    let result = [];
    for (let i = 0; i < parts - 1; i++) {
      result[i] = Math.floor(Math.random() * (number - sum)) + 1;
      sum += result[i];
    }
    result[parts - 1] = number - sum;
    return result;
  }
  //console.log(splitNumber(number, parts)); 
  console.log(splitNumber(15, 3)); 


  //b. дробные числа
  function splitNumberFloat(numberF, partsF) {
    let sumF = 0;
    let resultF = [];
    for (let ii = 0; ii < partsF - 1; ii++) {
      resultF[ii] = parseFloat((Math.random() * (numberF - sumF)).toFixed(2));
      sumF += resultF[ii];
    }
    resultF[partsF - 1] = parseFloat((numberF - sumF).toFixed(2));
    return resultF;
  }
  // console.log(splitNumber(numberF, partsF))
  console.log(splitNumberFloat(15, 3)); // Пример: разбиение числа 15 на 3 части

