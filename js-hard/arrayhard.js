const people = [
  { name: 'Владилен', age: 25, budget: 40000 },
  { name: 'Елена', age: 17, budget: 3400 },
  { name: 'Игорь', age: 49, budget: 50000 },
  { name: 'Михаил', age: 15, budget: 1800 },
  { name: 'Василиса', age: 24, budget: 25000 },
  { name: 'Виктория', age: 38, budget: 2300 },
]

// for (let index = 0; index < people.length; index++) {
//   console.log(people[index], index)
// }

// for (const person of people) {
//   console.log(person)
// }

// ForEach
// people.forEach((person) => console.log(person))

// Map
// const newPeople = people.map((person) => `${person.name} (${person.age})`)
// console.log(newPeople)

// Filter
// const aduts = []
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     aduts.push(people[i])
//   }
// }
// console.log(aduts)

// const aduts = people.filter((p) => p.age >= 18)
// console.log(aduts)

// Reduce
// const budgetResult = people.reduce((total, p) => p.budget + total, 0)
// console.log(budgetResult)

// Find
// const myElem = people.find((p) => p.name === 'Игорь')
// console.log(myElem)

// FindIndex
// const myElemIndex = people.findIndex((p) => p.name === 'Игорь')
// console.log(myElemIndex)

// ==================== Chain

const newPeople = people
  .filter((p) => p.budget > 3000)
  .map((p) => {
    return {
      info: `${p.name} (${p.age})`,
      budget: Math.sqrt(p.budget),
    }
  })
  .reduce((t, p) => t + p.budget, 0)

console.log(newPeople)
