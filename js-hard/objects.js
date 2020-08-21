// Гибкая насройка объектов
const person = Object.create(
  {
    calculateAge() {
      console.log('Age: ', new Date().getFullYear - this.birthYear)
    },
  },
  {
    name: {
      value: 'Artem',
      enumerable: true, // позволяет видеть ключи
      writable: true, // позволяет редактировать ключи
      configurable: true, // позволяет удалять ключи delete
    },
    birthYear: {
      value: 1999,
      enumerable: false,
      writable: true,
    },
    age: {
      get() {
        return new Date().getFullYear - this.birthYear
      },
      set(value) {
        this.birthYear = value // any actions
      },
    },
  }
)

// person.name = 'Maxim'

for (let key in person) {
  // не пробегает по прототипу
  if (person.hasOwnProperty(key)) {
    console.log('Key', key, person[key])
  }
}
