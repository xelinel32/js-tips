/// 1 .Функции

// Отличие это инициализация в среде. Функциональное
// выражение выполняется только постепенно, а именованую функцию можно записать где угодно и вызвать

// // Function Expression
// const greet2 = function (name) {
//   console.log(`Привет ${name}`)
// }

// // Function Declaration
// function greet(name) {
//   console.log(`Привет ${name}`)
// }

// greet('Artem')
// greet2('Lena')

// console.log(typeof greet2)
// console.dir(greet)

/// 2. Anonymous Function
// let counter = 0
// const interval = setTimeout(() => {
//   if (counter == 5) {
//     clearInterval(interval) // clearTimeout()
//   } else {
//     console.log(++counter)
//   }
// }, 2000)

/// 3. Arrow Function
// function name(name) {
//   console.log(`Привет ${name}`)
// }

// const arrow = (name, age) => console.log(`Привет ${name},${age}`)
// arrow('Artem', 21)

// const pow2 = num => num ** 2

// console.log(pow2(5))

/// 4. Параметры по умолчанию

// const sum = (a, b = 1) => a + b
// console.log(sum(41, 4))

// function sumAll(...all) {
//   let result = 0
//   for (const num of all) {
//     result += num
//   }
//   return result
// }

// console.log(sumAll(1, 2, 3, 4, 5, 6, 6))

/// 5. Замыкания
// польза их из-за приватных переменных
function createMember(name) {
  return function (lastName) {
    console.log(name, lastName)
  }
}

const log = createMember('Artem')
console.log(log('Sedlyar'))
