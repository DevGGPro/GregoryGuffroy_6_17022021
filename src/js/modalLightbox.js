import { createLightbox } from './factoryElements'

const body = document.getElementsByTagName('body')
const wrapper = document.getElementsByClassName('wrapper')
const modal = document.getElementById('modal-lightbox')
const close = document.getElementsByClassName('lightbox__close')
const previous = document.getElementsByClassName('lightbox__left')
const next = document.getElementsByClassName('lightbox__right')

function lightbox () {
  const media = document.getElementsByClassName('photographerLightbox__figure_media')
  let index
  // on ajoute un event click/keydown sur chaque media de la page
  for (let i = 0; i < media.length; i++) {
    media[i].addEventListener('click', (e) => {
      generateLightbox(i, e)
    })
    media[i].addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault()
        generateLightbox(i, e)
      }
    })
  }

  function generateLightbox (i, e) {
    index = i
    launchModal()
    cleanLightbox()
    // Check if media is a video or an image
    if (e.target.localName === 'video') {
      createLightbox(e.target.attributes.src.nodeValue, e.target.title)
    } else {
      createLightbox(e.target.attributes.src.nodeValue, e.target.alt)
    }
    close[0].addEventListener('click', closeModal)
    close[0].addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        e.preventDefault()
        previous[0].focus()
      }
    })
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
    previous[0].focus()
  }

  /**
   * function to go to the previous media
   */
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
    close[0].addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        e.preventDefault()
        previous[0].focus()
      }
    })
    previous[0].addEventListener('click', previousMedia)
    next[0].addEventListener('click', nextMedia)
    previous[0].focus()
  }

  /**
   * function to go to the next media
   */
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
    close[0].addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        e.preventDefault()
        previous[0].focus()
      }
    })
    previous[0].addEventListener('click', previousMedia)
    next[0].addEventListener('click', nextMedia)
    previous[0].focus()
  }
}

/**
 * Function to launch the modal
 */
function launchModal () {
  body[0].style.overflow = 'hidden'
  modal.style.display = 'block'
  modal.setAttribute('aria-hidden', 'false')
  wrapper[0].setAttribute('aria-hidden', 'true')
}

/**
 * Function to close the modal
 */
function closeModal () {
  body[0].style.overflow = 'auto'
  modal.style.display = 'none'
  modal.setAttribute('aria-hidden', 'true')
  wrapper[0].setAttribute('aria-hidden', 'false')
}

/**
 * Function to clear the lightbox
 */
function cleanLightbox () {
  const modal = document.getElementById('modal-lightbox')
  modal.innerHTML = ''
}

export { lightbox, cleanLightbox }
