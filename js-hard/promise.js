console.log('Request data...')

// setTimeout(() => {
//   console.log('Reparing data...')

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working',
//   }

//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data record', backendData)
//   }, 2000)
// }, 2000)
// Слишком большая вложенность колбеков

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Reparing data...')
//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working',
//     }
//     resolve(backendData)
//   }, 2000)
// })

// запись через точку называется чейн(цепь)

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true
//       resolve(data)
//     }, 2000)
//   })
// })
//   .then((clientData) => {
//     clientData.fromPromise = true
//     return clientData
//   })
//   .then((data) => {
//     console.log('Modified', data)
//   })
//   .catch((err) => console.error('Error', err))
//   .finally(() => {
//     console.log('Finally')
//   })

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms))

// sleep(2000).then(() => {
//   console.log('After 2 seconds')
// })

// Promise.all([sleep(2000), sleep(5000)]).then(() => console.log('All promises'))
Promise.race([sleep(2000), sleep(5000)]).then(() =>
  console.log('Race promises')
)
