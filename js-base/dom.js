// Document Object Model
const ourHeading = document.getElementById('hello')
// const headingSecond = document.getElementsByTagName('h2')[0] // HTML Collection
// const headingSecond = document.getElementsByClassName('h2')
const headingSecond = document.querySelector('h2') // Возвращает всегда первый попавшийся елемент
const headingThirty = headingSecond.nextElementSibling
// console.log(headingThirty)

const h2List = document.querySelectorAll('h2')
// h2List.forEach(item => {
//   console.log(item)
// })
// console.log(h2List[1]) // Class List
// console.dir(ourHeading.textContent)
setTimeout(() => {
  addStylesTo(ourHeading, 'Artem')
}, 1500)
setTimeout(() => {
  addStylesTo(headingSecond, 'Sedlyar', 'orange')
}, 2500)
setTimeout(() => {
  addStylesTo(headingThirty.children[0], 'Blyad !!', 'blue', 2)
}, 3500)

function addStylesTo(node, text, color = 'red', fontSize) {
  node.textContent = `${text}`
  node.style.color = color
  node.style.textAlign = 'center'
  node.style.backgroundColor = '#000'
  node.style.padding = '2rem'
  node.style.borderRadius = '10px'
  node.style.display = 'block'
  // false: undefined, 0 , false, ''
  if (fontSize) {
    node.style.fontSize = fontSize + 'rem'
  }
}

ourHeading.addEventListener('click', function (e) {
  // console.log(e.target.setAttribute('data-set', 'getout'))
  e.preventDefault()
  if (this.style.color === 'red') {
    this.style.color = 'gray'
  } else {
    this.style.color = 'red'
  }
})
