/*
Написать функцию, которая будет записывать в массив ряд Фибоначчи, начиная с N члена с длинной массива M. 
В функцию надо передать номер числа фибоначчи с которого начинается массив (N) и длину, которой должен быть массив (M).
*/


function fibonacci(n, m) {
    if (n < 0 || m <= 0) {
        return "N and M must be greater than 0";
    }

    const fib = [0, 1];

    for (let i = 2; i < n + m; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib.slice(n, n + m);
}

const n = 0; 
const m = 10; 
console.log(fibonacci(n, m));