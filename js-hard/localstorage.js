const myNumber = 42
// работа только со строками
// localStorage.setItem('Number', myNumber.toString())
// console.log(localStorage.getItem('Number'))
// localStorage.removeItem('Number')
// console.log(localStorage.getItem('Number'))
// localStorage.clear()
// console.log(localStorage.getItem('Number'))

const person = {
  name: 'Max',
  age: 20,
}

localStorage.setItem('Person', JSON.stringify(person))
// console.log(JSON.parse(localStorage.getItem('Person')))
const eow = JSON.parse(localStorage.getItem('Person'))
console.log(eow.name)

//===========
// вызывается событие только в другой вкладке
window.addEventListener('storage', (e) => {
  console.log(event)
})

// localstorage больше по объему чем coockie, и куки улетаю с запросом на сервер
