import { getNameFromMediaLink } from './utils'
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
      createLightbox(e.target.attributes.src.nodeValue, getNameFromMediaLink(e.target.attributes.src.nodeValue))
      close[0].addEventListener('click', closeModal)
      previous[0].addEventListener('click', previousMedia)
      next[0].addEventListener('click', nextMedia)
    })
  }
  function previousMedia () {
    index -= 1
    if (index === -1) {
      index = media.length - 1
    }
    cleanLightbox()
    createLightbox(media[index].attributes.src.nodeValue, getNameFromMediaLink(media[index].attributes.src.nodeValue))
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
    createLightbox(media[index].attributes.src.nodeValue, getNameFromMediaLink(media[index].attributes.src.nodeValue))
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

export { lightbox }
