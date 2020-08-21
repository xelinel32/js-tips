/// 1. Переменные
// styleguide: camelCase in js core
// const firstName = 'Artem'
// var name = 'Artemy' // string
// const lastname = 'Sedlyar'
// const age = 21 // number
// const isProgrammer = true // boolean

// const _private = 'private'
// const $private = '$private'

// const withNum5 = '5'
// const 32sasdda = 'error'

/// 2. Мутирования
// console.log('Имя человека: ' + firstName + ' Возраст ' + age)
// Сам ЖС это структура языка и синтаксис, все зависит от апи где он выполняется
// alert('Имя человека: ' + firstName + ' Возраст ' + age)

// const lastName = prompt('Введите фамилию ', 'Sedlyar')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = new Date().getFullYear()
// const birthYear = 1999

// const age = currentYear - birthYear

// const a = 10
// const b = 5
// let c = 32
// c += a // equal c = c + a
// c -= a
// c *= a
// c /= a

// console.log(a + b, a - b, a * b, a / b)
// console.log(++currentYear) // increment, приорите выполнения постфиксный и префиксный
// console.log(c)

/// 4. Типы данных
// const isProgrammer = true // boolean
// const name = 'Artem'
// const age = 21
// let x
// примитивы
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

/// 5. Приоритет операторов
// const fullAge = 21
// const birthYear = 1999
// const currentYear = 2020

// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

/// 6. Условные операторы
// const courseStatus = 'pending'
// для оптимизации, по другому программа проверяет 2 блока условия
// if (courseStatus === 'ready') {
//   console.log('Course is ready and should him read')
// } else if (courseStatus === 'pending') {
//   console.log('Course be in the development process ')
// } else {
//   console.log('Course is failed')
// }

// const isRady = false

// if (isRady) {
//   console.log('True')
// } else {
//   console.log('False')
// }
// ternar condition
// isRady ? console.log('Hello') : console.log('false')

// условия возвращает тру или фолс
// const num1 = 42 // number
// const num2 = '42' // string
// console.log(num1 === num2)

/// 7. Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

/// 8. Функции

// function calcAge(year) {
//   return new Date().getFullYear() - year
// }

// console.log(calcAge(1999))

// function getInfo(name, year) {
//   const age = calcAge(year)
//   age > 0 ? console.log(name, age) : console.log('GG')
// }

// getInfo('Artem', 2020)

/// 9. Масивы

// const cars = ['Мазда', 'Мерседес', 'Форд']
// const mas = [1, 2, 3]
// console.log(cars)

// cars[0] = 'Porshe'
// cars[3] = 'Mada'
// console.log(cars)

// const newAr = cars.concat(mas)
// console.log(newAr)

/// 10. Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд']

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i])
// }

// for (const car of cars) {
//   console.log(car)
// }

/// 11. Объекты
// это модели чего-то
// const person = {
//   firstName: 'Artem',
//   greet(name) {
//     this.firstName = name
//     console.log(this.firstName)
//   },
//   get() {
//     return this.firstName.toUpperCase()
//   },
// }

// person.greet('Vlad')
