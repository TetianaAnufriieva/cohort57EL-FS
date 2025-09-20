// 1. Явная и неявная типизация
// Создайте две переменные:
// a — с явной типизацией number
// b — с неявной типизацией числа
// Присвойте им значения и выведите в консоль.

let a: number = 5;
let b = 10;
console.log(a, b);

// 2. Типизация переменной строкой
// Создайте переменную greeting с типом string и значением "Hello, TypeScript!".
// Выведите её в консоль.

let greeting: string = "Hello, TypeScript!";
console.log(greeting);

// 3. Union Type
// Создайте переменную status с типом "success" | "error".
// Сначала присвойте "success", потом измените на "error". Выведите оба значения в консоль.

type Status = "success" | "error";
let result: Status = "success";
console.log(result);
result = "error";
console.log(result);

// 4. Расширенный Union Type
// Создайте тип Role = "admin" | "user".
// Создайте расширенный тип ExtendedRole, добавив "moderator".
// Создайте переменную myRole типа ExtendedRole и присвойте ей "moderator".

type Role = "admin" | "user";
type ExtendedRole = Role | "moderator";
let myRole: ExtendedRole = "moderator";
console.log(myRole);

// 5. Типизация массива
// Создайте массив cities с типом string[] и добавьте в него 3 города. Выведите в консоль длину массива.
let cities: string[] = ["London", "Paris", "Berlin"];
console.log(cities.length);

// 6. Типизация пустого массива
// Создайте пустой массив numbers типа number[].
// Добавьте в него 3 числа и выведите сумму этих чисел в консоль.
let numbers: number[] = [];
numbers.push(1, 2, 3);
console.log(numbers);

// 7. Типизация объекта (type)
// Создайте тип Book с полями:
// title — string
// pages — number
// Создайте переменную myBook типа Book и выведите её.

type Book = {
  title: string;
  pages: number;
};

const myBook: Book = {
  title: "ABC",
  pages: 345,
};

console.log(myBook);

// 8. Типизация объекта (interface)
// Создайте интерфейс Car с полями:
// brand — string
// year — number
// Создайте переменную myCar и присвойте ей значения.

interface Car {
  brand: string;
  year: number;
}

const myCar: Car = {
  brand: "BMW",
  year: 2025,
};

console.log(myCar);

// 9. Опциональные поля в интерфейсе
// Создайте интерфейс Movie с полями:
// title — string
// rating — number
// director — string (опционально)
// Создайте два объекта: один с директором, другой без.

interface Movie {
  title: string;
  rating: number;
  director?: string;
}

let movie1: Movie = {
  title: "A Fish Called Wanda",
  rating: 7.9,
  director: "Charles Crichton & John Cleese",
};
console.log(movie1);

let movie2: Movie = {
  title: "The Nutty Professor (1963)",
  rating: 6.6,
};
console.log(movie2);

// 10. Расширение интерфейсов
// Создайте интерфейс Animal с полями name (string) и isWild (boolean).
// Создайте интерфейс Bird, который расширяет Animal и добавляет поле canFly (boolean).
// Создайте переменную eagle типа Bird.

interface Animal {
  name: string;
  isWild: boolean;
}

interface Bird extends Animal {
  canFly: boolean;
}

let eagle: Bird = {
  canFly: true,
  name: "Tom",
  isWild: false,
};

console.log(eagle);

// 11. Интерфейс города
// Создайте интерфейс City с полями:
// name — string
// population — number
// isCapital — boolean (опционально)
// Создайте переменную Paris и присвойте ей значения.

interface City {
  name: string;
  population: number;
  isCapital?: boolean;
}

let paris: City = {
  name: "Paris",
  population: 2102650,
};

console.log(paris);

// 12. Функция с типами параметров
// Создайте функцию multiply(a: number, b: number): number, которая возвращает произведение двух чисел.
// Проверьте её на примере.
function multiply(a: number, b: number): number {
  return a * b;
}

const res = multiply(2, 100);
console.log(res);

// 13. Функция с типом возвращаемого значения
// Создайте функцию greet(name: string): string, которая возвращает "Hello, {name}!".
// Вызовите её с вашим именем.

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greet_res = greet("Tanja");
console.log(greet_res);

// 14. Функция, принимающая union type
// Создайте функцию printPet(pet: "cat" | "dog"), которая выводит сообщение "You have a {pet}".
// Проверьте на обоих вариантах.

function printPet(pet: "cat" | "dog") {
  return `You have a ${pet}`;
}

const myrzik = printPet("cat");
console.log(myrzik);

// 15. Тип для функции
// Создайте тип MathOperation = (a: number, b: number) => number.
// Создайте переменные add и subtract этого типа, реализовав сложение и вычитание.

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(4, 6));
console.log(subtract(10, 3));

// 16. Интерфейс самолёта
// Создайте интерфейс Airplane с полями:
// numberOfEngines — number
// isJet — boolean
// maxHeight — number
// capacity — number (опционально)
// Создайте переменные boeing747 и cessna172 типа Airplane.

interface Airplane {
  numberOfEngines: number;
  isJet: boolean;
  maxHeight: number;
  capacity?: number;
}

const boeing747: Airplane = {
  numberOfEngines: 4,
  isJet: false,
  maxHeight: 11000,
  capacity: 100,
};

const cessna172: Airplane = {
  numberOfEngines: 4,
  isJet: false,
  maxHeight: 9000,
};

console.log(boeing747, cessna172);

// 17. Типизация и массив объектов
// Создайте тип Product с полями:
// name — string
// price — number
// Создайте массив products: Product[] и добавьте 3 объекта. Выведите их в консоль.
type Product = {
  name: string;
  price: number;
};

let products: Product[] = [];
products.push({ name: "Bread", price: 2 });
products.push({ name: "Milk", price: 1.5 });
products.push({ name: "Cheese", price: 5 });
console.log(products);

// 18. Интерфейс с датой
    // Создайте интерфейс Event с полями:
    // title — string
    // date — Date
    // Создайте переменную concert и выведите дату в консоль в формате YYYY-MM-DD.

    interface MyEvent {
      title: string;
      date: Date;
    }

    const concert: MyEvent = {
      title: "ConcertExample",
      date: new Date("2025-09-20"),
    };

    console.log(concert);

// 19. Преобразование типов
// Создайте переменную numStr типа string со значением "42".
// Преобразуйте её в число и выведите сумму с числом 8.

let numStr: string = "42";
let num: number = Number(numStr);
let summa = num + 8;
console.log(summa);

// 20. Функция с необязательным параметром
// Создайте функцию introduce(name: string, age?: number), которая выводит:
// "My name is {name} and I am {age} years old" — если возраст указан
// "My name is {name}" — если возраст не указан.

function introduce(name: string, age?: number) {
  return age === undefined
    ? `My name is ${name}`
    : `My name is ${name} and I am ${age} years old`;
}

const man = introduce("Ben", 30);
console.log(man);

const woman = introduce("Anna");
console.log(woman);
