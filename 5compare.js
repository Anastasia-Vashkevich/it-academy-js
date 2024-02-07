/*
Даны два 4-х значных числа с неповторяющимися цифрами. 
Надо определить сколько цифр в этих числах совпадают по значению и позиции.
И сколько только по значению (3487 и 3794 ---> 1 и 2 ) 
Код должен работать с любыми заданными 2 числами.
*/



function compareNumbers(num1, num2) {
  let exactNum = 0;
  let valueNum = 0;
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  for (let a = 0; a < strNum1.length; a++) {
    if (strNum1[a] === strNum2[a]) {
      exactNum++;
    } else if (strNum2.includes(strNum1[a])) {
      valueNum++;
    }
  }

  return [exactNum, valueNum];
}

console.log(compareNumbers(3487, 3794));
console.log(compareNumbers(1234, 4567))