const requestURL = 'https://jsonplaceholder.typicode.com/users'

// XHR XML HTTP REQUEST

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json',
  }
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      return res.json().then((err) => {
        const e = new Error('Вы получили ошибку')
        e.data = err
        throw e
      })
    }
  })
}

// sendRequest('GET', requestURL)
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

const body = {
  name: 'Artem',
  age: 21,
}

sendRequest('POST', requestURL, body)
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.error(err)
  })
