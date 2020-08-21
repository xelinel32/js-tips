function prettyTab() {
  let headLink = document.querySelectorAll('.accordion__head-item')
  let bodyContent = document.querySelectorAll('.accordion__body-item')
  let bodyTab
  headLink.forEach((i) => {
    i.addEventListener('click', setTabLinks)
  })
  function setTabLinks(e) {
    headLink.forEach((i) => {
      i.classList.remove('active')
    })
    this.classList.add('active')
    bodyTab = e.target.dataset.tabName
    setTabContent(bodyTab)
  }
  function setTabContent(bodyTab) {
    bodyContent.forEach((i) => {
      i.classList.contains(bodyTab)
        ? i.classList.add('active')
        : i.classList.remove('active')
    })
  }
}

prettyTab()

// <div class="accordion">
//   <ul class="accordion__head">
//     <li class="accordion__head-item active" data-tab-name="tab-1">
//       One
//     </li>
//     <li class="accordion__head-item" data-tab-name="tab-2">
//       Second
//     </li>
//     <li class="accordion__head-item" data-tab-name="tab-3">
//       Three
//     </li>
//   </ul>
//   <div class="accordion__body">
//     <p class="accordion__body-item active tab-1">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
//       reiciendis aperiam optio atque incidunt eligendi sit dolore harum
//       sequi quia.
//     </p>
//     <p class="accordion__body-item tab-2">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint,
//       consequatur ut minima eos perspiciatis voluptates ullam corporis
//       necessitatibus dolorem?
//     </p>
//     <p class="accordion__body-item tab-3">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel
//       perspiciatis at ipsa, libero architecto debitis eaque exercitationem
//       saepe sint?
//     </p>
//   </div>
// </div>
