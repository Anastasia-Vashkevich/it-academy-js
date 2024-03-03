//Учитывая данные,  определите интерфейс «Пользователь» и используйте его соответствующим образом
  
interface User {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}

const user1: User = {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
    car: "VW"
};

const user2: User = {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
    children: 2
};

const users: User[] = [user1, user2];
console.log(users);