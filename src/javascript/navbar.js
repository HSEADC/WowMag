import '../index.css'
import './searchbar.jsx'

const menuButton = document.querySelector('.Q_NavBarBurger')
const closeButton = document.querySelector('.Q_Close')
const menu = document.querySelector('.M_Menu')
const menuContent = document.querySelector('.M_Menu > .C_NavBarCategories')
const marginget = document.querySelector('.O_Footer')
const marginleft = parseInt(
  window.getComputedStyle(marginget).getPropertyValue('margin-left')
)

let prevScrollpos = window.pageYOffset
let navbarHeight = document.querySelector('.S_NavBar').offsetHeight

const mediaphone = window.matchMedia(
  '(min-width: 360px) and (max-width: 767px)'
)

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.S_NavBar').style.top = '0'
  } else if (currentScrollPos < 100) {
    document.querySelector('.S_NavBar').style.top = '0'
  } else {
    document.querySelector('.S_NavBar').style.top = '-' + navbarHeight + 'px'
  }
  prevScrollpos = currentScrollPos
}

function marginInit() {
  document.querySelectorAll('section')[1].style.marginTop = +navbarHeight + 'px'
}

function menuInit() {
  menuContent.style.paddingLeft = +marginleft + 'px'
  closeButton.style.right = +marginleft + 'px'
  menuButton.addEventListener('click', menuOpen)
  closeButton.addEventListener('click', menuClose)
}

function menuOpen() {
  menu.style.right = '-' + marginleft + 'px'
  document.body.style.overflow = 'hidden'
}

function menuClose() {
  menu.style.right = '-120vw'
  document.body.style.overflow = 'scroll'
}

document.addEventListener('DOMContentLoaded', () => {
  marginInit()

  if (mediaphone.matches) {
    menuInit()
  }
})
