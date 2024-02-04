// 1.Выполнить сложение различных типов
// string+boolean
console.log("Anastasiya" + true); // "Anastasiyatrue"

// string + number
console.log("Anastasiya" + 3); // "Anastasiya3"

// number + boolean
console.log(3 + true); // 4, прикольно, что true преобразуется в 1, a false-в 0


//2.Выполнить умножение различных типов
// string * boolean
console.log("3" * false); // 0

// string * number
console.log("5" * 2); // 10

// number * boolean
console.log(3 * true); // 3


// 3.Выполнить деление различных типов
// string / boolean
console.log("10" / true); // 10

// string / number
console.log("10" / 2); // 5

// number / boolean
console.log(10 / false); // Infinity, потому что false=0


// 4.Выполнить явное преобразование
// преобразование в number
console.log(Number("123")); // 123
console.log(Number(true)); // 1

// преобразование в string
console.log(String(123)); // "123"
console.log(String(false)); // "false"

// преобразование в boolean
console.log(Boolean(123)); // true
console.log(Boolean("")); // false