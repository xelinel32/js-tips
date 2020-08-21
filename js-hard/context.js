function hello() {
  console.log('Hello', this)
}

const person = {
  name: 'Artem',
  age: 21,
  sayHello: hello,
  sayHelloWindow: hello.bind(this || window),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd
  },
}

// Контекст указывает на контекст объкта в котором он был вызван
// он динамический

const lena = {
  name: 'Lena',
  age: '23',
}

// person.logInfo.bind(lena, 'Frontend', '0935039351')()
// person.logInfo.call(lena, 'Frontend', '0935039351')
person.logInfo.apply(lena, ['Frontend', '77'])

/// ======================

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//   return arr.map((i) => {
//     return i + n
//   })
// }

Array.prototype.multBy = function (n) {
  return this.map((i) => {
    return i * n
  })
}

console.log(array.multBy(20))
