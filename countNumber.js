/* 
Дана строка из четного количества цифр. 
Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
Если это так - выведите 'да', в противном случае выведите 'нет'. 
Решение должно быть написано функцией и принимать любое число.
*/

function isEqualSum(number) {
    const str = number.toString();
    const halfLength = str.length / 2;
    let sumFirstHalf = 0;
    let sumSecondHalf = 0;
    
    for (let i = 0; i < halfLength; i++) {
      sumFirstHalf += parseInt(str[i], 10);
      sumSecondHalf += parseInt(str[i + halfLength], 10);
    }
    
    return sumFirstHalf === sumSecondHalf ? 'да' : 'нет';
  }

  console.log(isEqualSum(123321));