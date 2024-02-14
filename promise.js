/*
Решить используя промисы и async/await.
Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. 
Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.
*/



function createPromise(value, delay) {
    return new Promise(resolve => setTimeout(() => resolve(value), delay));
}

const promise1 = createPromise(1, Math.random() * 4000 + 1000);
const promise2 = createPromise(2, Math.random() * 4000 + 1000);
const promise3 = createPromise(3, Math.random() * 4000 + 1000);

async function racePromises() {
    const result = await Promise.race([promise1, promise2, promise3]);
    console.log(result);
}

racePromises();