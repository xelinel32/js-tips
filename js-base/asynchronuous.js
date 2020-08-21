// Асинхронность JS язык однопоточный, Event Loop

// const timeout = setTimeout(() => {
//   console.log('After timeout')
// }, 1000)

// clearTimeout(timeout)

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait)
// }

// delay(() => {
//   console.log('After two seconds')
// }, 2000)

/// Promise

const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve()
      reject((err = 'Что-то пошло не так'))
    }, wait)
  })
  return promise
}

// delay(2500)
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.error(err)
//   })
//   .finally(() => {
//     console.log('Finally')
//   })

const getData = () => new Promise((resolve) => resolve([1, 2, 3, 4, 5, 6]))

// getData().then((data) => console.log(data))

async function asyncExample() {
  try {
    await delay(3000)
    const data = await getData()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

asyncExample()
