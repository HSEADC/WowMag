const gallery = document.querySelector('.S_Gallery')
const antitrends = gallery.querySelectorAll('.M_Antitrend')
const background = document.querySelector('.Q_BackgroundBlur')

const options = document.querySelectorAll('.W_AntitrendOption')

const marginget = document.querySelector('.O_Footer')
const marginleft = parseInt(
  window.getComputedStyle(marginget).getPropertyValue('margin-left')
)

function galleryInit() {
  for (let i = 0; i < options.length; i++) {
    const option = options[i]
    option.addEventListener('click', () => search(option))
  }
  background.style.marginLeft = '-' + marginleft + 'px'
}

function search(option) {
  let antitrend = option.querySelector('.M_Antitrend')
  antitrend.classList.toggle('active')
  antitrend.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'end'
  })
  background.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', galleryInit())
