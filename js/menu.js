const menu = document.querySelector('.menu__boby')
const menuBtn = document.querySelector('.menu__icon')
const btnClose = document.querySelector('.menu-close')


const boby =document.body;




if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open')
    menuBtn.classList.toggle('active')
    boby.classList.toggle('lock')

  })

  menu.querySelectorAll('.menu-link').forEach(link =>{
    link.addEventListener('click', ()=>{
      menu.classList.remove('is-open')
      menuBtn.classList.remove('active')
      boby.classList.remove('lock')
    }
    )
  })


}

if ( btnClose){
  btnClose.addEventListener('click', ()=>{
    menu.classList.remove('is-open')
    menuBtn.classList.remove('active')
    boby.classList.remove('lock')
  })
}
