// Замыкания и как же они работают

// Замыкание - это функция внутри другой функции

// Т.к. мы возвращаем функцию внутрни другой, то входные параметры будут всегда замкнуты

// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n)
//   }
// }

// const calc = createCalcFunction(20)
// calc()

// function createIncrementor(n) {
//   return function (num) {
//     return n + num
//   }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)
// addOne(10)
// addTen(41)

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`
//   }
// }

// const comUrl = urlGenerator('com')

// console.log(comUrl('google'))

// practic

// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args)
//   }
// }

// function logPerson() {
//   console.log(`Person - ${this.name}, ${this.age}, ${this.job}`)
// }

// const person = {
//   name: 'Artem',
//   age: 21,
//   job: 'Frontend',
// }

// const myFunc = bind(person, logPerson)
// myFunc()
