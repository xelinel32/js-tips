// const person = {
//   name: 'Maxim',
//   age: 25,
//   greet: () => {
//     console.log('Greet!')
//   },
// }

// instance объекта глобального класса Object

const person = new Object({
  name: 'Maxim',
  age: 25,
  greet: () => {
    console.log('Greet!')
  },
})

// объект у радительских елементов наследования, верхний уровень к нижнему

Object.prototype.sayHello = (value) => {
  console.log(`Hello ${value}`)
}

// прототип идёт сверху вниз и ищет ключи

const lena = Object.create(person)
lena.name = 'Elena'

// Прототип - это объект который присудствует у объктов и вызывается по цепочке сверху вниз

const str = new String('I am string')
// все в javascript это объекты
