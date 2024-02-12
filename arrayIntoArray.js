/*
 Напишите функцию, которая вставит данные в массив с заданного места в массиве. 
 Например дан массив [1, 2, 3, 4, 5] в функцию передается место 3 и [ 'a', 'b', 'c']
  получается массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
*/

function putIntoArray(originalArray, index, dataArray) {
    if (index < 0 || index > originalArray.length) {
        return "Неверный индекс";
    }

    let part1 = originalArray.slice(0, index);
    let part2 = dataArray;
    let part3 = originalArray.slice(index);
    return part1.concat(part2, part3);
}


let originalArray = [1, 2, 3, 4, 5];
let dataArray = ['a', 'b', 'c'];
let index = 1;

console.log(putIntoArray(originalArray, index, dataArray));