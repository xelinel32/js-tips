// const name = 'Artemy'
// const age = 21

// const output = 'Hello, my name ' + name + ' my years old ' + age + ' age'
// const output = `Hello, my name ${name}, i ${age} years old`
// console.log(output)

// const output = `
// <div>Helllo</div>
// <p>Loreasdasdasd</p>
// `

// const name = 'Artemy'

// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.startsWith('Art'))
// console.log(name.repeat(3))

// const string = '           password                  '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
  if (age < 0) {
    age = 'Еще не родился'
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Artemy'
const personName2 = 'Maxim'
const personAge = 21
const personAge2 = -1

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output)
console.log(output2)
