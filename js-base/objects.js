const person = {
  name: 'Artem',
  age: 21,
  isProgrammer: true,
  lang: ['ru', 'en', 'de'],
  test: 'tests',
  ['key' + (1 + 3)]: 'Computed key', // key4
  greet() {
    // method
    console.log('greet from person')
  },
  info() {
    console.log('this: ', this)
    console.log('Name: ' + this.name)
  },
}

// console.log(person.name)
// console.log(person.test)
// console.log(person['age'])
// console.log(person['key4'])

// delete person.key4
// console.log(person)

// const { name, age: PersonAge = 10 , lang } = person

// console.log(name)

// Iterator object

// danger опасен потому, что проходит и по прототипам
// for (const key in person) {
//   if (person.hasOwnProperty(key)) {
//     const element = person[key]
//     console.log('key :', element)
//   }
// }

// Object.keys(person).forEach((key) => console.log(person[key]))

// Context
// person.info()

const logger = {
  keys(obj) {
    console.log(Object.keys(this))
  },
  keysAndValues() {
    // const self = this
    Object.keys(this).forEach(
      function (key) {
        console.log(key + ':' + this[key])
      }.bind(this)
    )
  },
  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log('------------- Start ------------')
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`"${key}": ${this[key]}`)
      if (between && index !== array.length - 1) {
        console.log('-------------------')
      }
    })
    if (bottom) {
      console.log('------------- End ------------')
    }
  },
}
// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)

// logger.keysAndValues.call(person)

// logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])
