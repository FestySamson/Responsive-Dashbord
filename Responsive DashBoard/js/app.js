const btn = document.getElementById('btn')
const  menu = document.querySelector('.menu')
const close = document.getElementById('close')
const myHeader = document.getElementById('my-header')


btn.addEventListener('click', ()=>{
    menu.classList.add('show')
    myHeader.style.zIndex ='0'
})
close.addEventListener('click',()=>{
    menu.classList.remove('show')
})