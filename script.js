let myButtons = document.querySelectorAll('.btn');
let screen = document.querySelector('.screen');

myButtons.forEach(bt =>{
    bt.addEventListener('click', (e) =>{
        // console.log(e.target.innerHTML);
        // par.textContent += e.target.innerHTML
        screen.value += e.target.innerHTML
    });
  });
