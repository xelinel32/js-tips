const citiesRussian = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussianWithPopulation = {
  Moscow: 20,
  SaintPeterburg: 8,
  Kazan: 5,
  Novosibirsk: 3,
}
const citiesEuropeWithPopulation = {
  Berlin: 10,
  Praha: 3,
  Paris: 2,
}

// Spread
// разворачивает елементы из масива например
// console.log(...citiesRussian)

// const allCities = [...citiesRussian, ...citiesEurope]
// аналогичная запись
// const allCities = citiesEurope.concat(citiesRussian)
// console.log(allCities)

// такой синтаксис не возможен
// console.log({ ...citiesRussianWithPopulation })
// console.log({ ...citiesRussianWithPopulation, ...citiesEuropeWithPopulation })

/// Practice
const numbers = [5, 37, 42, 17]
// Math.max(5, 37, 42, 17)
// console.log(Math.max(...numbers))
// console.log(Math.max.apply(null, numbers))

// const $divs = document.querySelectorAll('div')
// const nodes = [...$divs]
// console.log(nodes, Array.isArray(nodes))

/// Rest
// синтаксис такой же
function sum(a, b, ...rest) {
  return a + b + rest.reduce((a, i) => a + i, 0)
}
const numbersa = [1, 2, 3, 4, 5]

// Spread !!
// console.log(sum(...numbersa))

// const a = numbers[0]
// const b = numbers[1]

// const [...other] = numbers

// console.log(other)

const person = {
  name: 'Max',
  age: 20,
  city: 'Moscow',
}

const { ...other } = person

console.log(other)

// SPREAD - разворачивает масивы и объекты для создании масивов или объектов
// REST - собирает все параметры в масив или обьъекты
