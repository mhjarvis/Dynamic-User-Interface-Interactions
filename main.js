const ele = document.querySelector('.drop-down');

ele.addEventListener('mouseover', (event) => {
  const options = document.getElementsByClassName('menu1');
  for(let i = 0; i < options.length; i++) {
    .classList.add('show');
  }
})

ele.addEventListener('onmouseleave', (event) => {
  const options = document.getElementsByClassName('menu1');
  for(let i = 0; i < options.length; i++) {
    this.classList.add('hidden');
  }
})