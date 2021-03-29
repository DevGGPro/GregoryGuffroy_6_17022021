import { createLightbox } from './factoryElements'

const body = document.getElementsByTagName('body')
const modal = document.getElementById('modal-lightbox')
const close = document.getElementsByClassName('lightbox__close')
const previous = document.getElementsByClassName('lightbox__left')
const next = document.getElementsByClassName('lightbox__right')

function lightbox () {
  const media = document.getElementsByClassName('photographerLightbox__figure_media')
  let index
  for (let i = 0; i < media.length; i++) {
    media[i].addEventListener('click', function (e) {
      index = i
      launchModal()
      cleanLightbox()
      if (e.target.localName === 'video') {
        createLightbox(e.target.attributes.src.nodeValue, e.target.title)
      } else {
        createLightbox(e.target.attributes.src.nodeValue, e.target.alt)
      }
      close[0].addEventListener('click', closeModal)
      previous[0].addEventListener('click', previousMedia)
      next[0].addEventListener('click', nextMedia)
      window.addEventListener('keydown', k => {
        if (k.key === 'ArrowLeft') {
          previousMedia()
        }
        if (k.key === 'ArrowRight') {
          nextMedia()
        }
        if (k.key === 'Escape') {
          closeModal()
        }
      })
    })
  }
  function previousMedia () {
    index -= 1
    if (index === -1) {
      index = media.length - 1
    }
    cleanLightbox()
    if (media[index].tagName === 'VIDEO') {
      createLightbox(media[index].attributes.src.nodeValue, media[index].title)
    } else {
      createLightbox(media[index].attributes.src.nodeValue, media[index].alt)
    }
    close[0].addEventListener('click', closeModal)
    previous[0].addEventListener('click', previousMedia)
    next[0].addEventListener('click', nextMedia)
  }
  function nextMedia () {
    index += 1
    if (index === media.length) {
      index = 0
    }
    cleanLightbox()
    if (media[index].tagName === 'VIDEO') {
      createLightbox(media[index].attributes.src.nodeValue, media[index].title)
    } else {
      createLightbox(media[index].attributes.src.nodeValue, media[index].alt)
    }
    close[0].addEventListener('click', closeModal)
    previous[0].addEventListener('click', previousMedia)
    next[0].addEventListener('click', nextMedia)
  }
}

function launchModal () {
  body[0].style.overflow = 'hidden'
  modal.style.display = 'block'
}

function closeModal () {
  body[0].style.overflow = 'auto'
  modal.style.display = 'none'
}

function cleanLightbox () {
  const modal = document.getElementById('modal-lightbox')
  modal.innerHTML = ''
}

export { lightbox, cleanLightbox }
