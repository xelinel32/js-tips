// Деструктуризация для масивов и объектов

function calcValues(a, b) {
  return [a + b, a - b, a * b, a / b]
}
// пропуск 1-го индекса пустой запятой
const [sub, subn = 'Вычитания нет', mult, ...other] = calcValues(42, 10)
// const sum = result[0]
// const sub = result[1]
// const [sum, sub] = result

// console.log(sub, mult, other, subn)

// Object

const person = {
  name: 'Max',
  age: 20,
  address: {
    country: 'Russia',
    city: 'Moscow',
  },
}

// const name = person.name
// const {
//   name: firstName = 'Artem',
//   age,
//   car = 'He is not a car',
//   address: { country, city },
// } = person
// console.log(firstName, age, car, country, city)

function logPerson({ name = 'Artem', age }) {
  console.log(name + ' ' + age)
}

logPerson(person)
