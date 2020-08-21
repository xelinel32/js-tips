let accordion = document.querySelectorAll('.accordion__title')

accordion.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.add('active')
    let panel = item.nextElementSibling
    if (panel.style.maxHeight) {
      item.classList.remove('active')
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
})

// <div class="accordion">
//   <div class="accordion__block">
//     <button type="button" class="accordion__title">
//       <span>Title 1</span><i class="material-icons">expand_more</i>
//     </button>
//     <div class="accordion__panel">
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
//         facilis recusandae eligendi dignissimos quis tempore exercitationem
//         distinctio dolorem ab alias.
//       </p>
//     </div>
//   </div>
//   <div class="accordion__block">
//     <button type="button" class="accordion__title">
//       <span>Title 2</span><i class="material-icons">expand_more</i>
//     </button>
//     <div class="accordion__panel">
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
//         facilis recusandae eligendi dignissimos quis tempore exercitationem
//         distinctio dolorem ab alias.
//       </p>
//     </div>
//   </div>
//   <div class="accordion__block">
//     <button type="button" class="accordion__title">
//       <span>Title 3</span><i class="material-icons">expand_more</i>
//     </button>
//     <div class="accordion__panel">
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
//         facilis recusandae eligendi dignissimos quis tempore exercitationem
//         distinctio dolorem ab alias.
//       </p>
//     </div>
//   </div>
// </div>
