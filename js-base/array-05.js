/// Масивы

const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']
// const people = [
//   {
//     name: 'Artem',
//     age: 21,
//     budget: 2001,
//   },
//   {
//     name: 'Vlad',
//     age: 21,
//     budget: 3500,
//   },
//   {
//     name: 'Alex',
//     age: 21,
//     budget: 4020,
//   },
// ]
const fib = [1, 2, 3, 5, 8, 13]

// // end
// cars.push('Porsche')
// console.log(cars)

// // start
// cars.unshift('Reno')
// console.log(cars)

// // del start(return current elem)
// const elemReno = cars.shift('Reno')
// console.log(cars)
// console.log(elemReno)

// // del last(return current elem)
// const backPorsche = cars.pop('Porsche')
// console.log(cars)
// console.log(backPorsche)

// console.log(cars)
// console.log(cars.reverse()) // revers array
// let letFinedPerson
// for (const person of people) {
//   if(person.name === 'Artem'){
//     letFinedPerson = person
//   }
// }

// console.log(letFinedPerson)

// const index = cars.indexOf('BMW') // return index our element
// console.log(index)
// const index = people.findIndex((person) => {
//   return person.name === 'Alex'
// })

// console.log(cars.includes('Mazda')) // Есть ли значение в масиве

// const upperCaseCars = cars.map((car) => car.toUpperCase()) // всегда возвращает новый масив
// console.log(upperCaseCars)

// const pow2 = (num) => num ** 2
// const sqrt = (num) => Math.sqrt(num)

// const pow2fib = fib.map(pow2).map(sqrt)
// console.log(pow2fib)
// const pow2fib = fib.map(pow2)
// const filteredNumbers = pow2fib.filter(num => num > 20)
// console.log(pow2fib)
// console.log(filteredNumbers)

const people = [
  {
    name: 'Artem',
    age: 21,
    budget: 2001,
  },
  {
    name: 'Vlad',
    age: 21,
    budget: 3500,
  },
  {
    name: 'Alex',
    age: 21,
    budget: 4020,
  },
]

// containt('name') содержиться ли подстрока в строке

// chain
const sumAll = people
  .filter((p) => p.budget > 2000)
  .reduce((total, person) => {
    return (total += person.budget)
  }, 0)
console.log(sumAll)
// Task #1
// split('') // разбивает new String на масив строк
// join('') // соиденяет елементы
// const text = 'Привет мы изучаем Javascript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)
