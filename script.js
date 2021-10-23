// Nav variables
const dropdowns = document.querySelectorAll('.dropdown-container > ul')

const product = document.querySelector('.product')
const company = document.querySelector('.company')
const connect = document.querySelector('.connect')

const productButton = document.querySelector('.product-button')
const companyButton = document.querySelector('.company-button')
const connectButton = document.querySelector('.connect-button')

const productUl = document.querySelector('.product > ul')
const companyUl = document.querySelector('.company > ul')
const connectUl = document.querySelector('.connect > ul')

const body = document.querySelector('body')
const check = document.getElementById('check')
const checkLabel = document.querySelectorAll('.checkbtn > img')
const menuBackground = document.querySelector('.menu-bg')


// nav functions
productButton.addEventListener('mouseover', ()=>{
    productUl.classList.add('show')
})
companyButton.addEventListener('mouseover', ()=>{
    companyUl.classList.add('show')
})
connectButton.addEventListener('mouseover', ()=>{
    connectUl.classList.add('show')
})

product.addEventListener('mouseleave', ()=>{
    productUl.classList.remove('show')
})
company.addEventListener('mouseleave', ()=>{
    companyUl.classList.remove('show')
})
connect.addEventListener('mouseleave', ()=>{
    connectUl.classList.remove('show')
})

product.addEventListener('click', ()=>{
    dropdowns.forEach((dropdown)=>{
        dropdown.classList.remove('show')
        productUl.classList.add('show')
    })
})
company.addEventListener('click', ()=>{
    dropdowns.forEach((dropdown)=>{
        dropdown.classList.remove('show')
        companyUl.classList.add('show')
    })
})
connect.addEventListener('click', ()=>{
    dropdowns.forEach((dropdown)=>{
        dropdown.classList.remove('show')
        connectUl.classList.add('show')
    })
})


addBackground = () =>{
    if(check.checked === false){
        menuBackground.setAttribute('style', 'display: block')
        body.setAttribute('style', 'overflow: hidden')
    }else{
        menuBackground.setAttribute('style', 'display: none')
        body.setAttribute('style', 'overflow: scroll')
    }
}

checkLabel.forEach((btn) => {
    btn.addEventListener('click', () => {
        addBackground()
    })
})


window.addEventListener('scroll', function () {
    let nav = this.document.querySelector('nav');
    let windowPosition = window.scrollY > 420;
    
    nav.classList.toggle('scrolling-active', windowPosition);
})

