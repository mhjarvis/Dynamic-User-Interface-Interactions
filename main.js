const ele = document.querySelector('.drop-down');

ele.addEventListener('mouseenter', (event) => {
  const options = document.getElementsByClassName('menu1');
  for(let i = 0; i < options.length; i++) {
    options[i].classList.add('show menu1');
  }
})

/* ele.addEventListener('onmouseleave', (event) => {
  const options = document.getElementsByClassName('menu1');
  for(let i = 0; i < options.length; i++) {
    options.classList.add('hidden');
  }
}) */