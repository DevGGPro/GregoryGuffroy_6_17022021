import {
  createSectionPhotographers
} from './factoryElements'

/**
 * Function to clear the main for index
 */
function clearMainIndex () {
  const main = document.getElementsByTagName('main')
  main.id = 'mainIndex'
  main[0].innerHTML = ''

  const titre = document.createElement('h1')
  titre.innerHTML = 'Nos photographes'
  main[0].appendChild(titre)
}

/**
 * Function to clear the section who contains the photographer medias
 */
function clearFigure () {
  const figure = document.querySelectorAll('figure.photographerLightbox__figure')
  figure.forEach(e => {
    e.remove()
  })
}

/**
 * Function to test if a specific tag is in a list of tags or not
 * @param {string} valeur tag
 * @param {string[]} liste tags list
 * @returns {boolean} true or false
 */
function isInList (valeur, liste) {
  if (liste.lenght === 0) {
    return false
  }
  for (const l in liste) {
    if (liste[l] === valeur) {
      return true
    }
  }
  return false
}

/**
 * Function to add a specific tag to a list of tags
 * @param {string} valeur tag
 * @param {string[]} liste tags list
 */
function addToList (valeur, liste) {
  if (!isInList(valeur, liste)) {
    liste.push(valeur)
  }
}

/**
 *  Function to remove a specific tag from a list of tags
 * @param {string} valeur tag
 * @param {string[]} liste tags list
 * @returns {string[]} tags list
 */
function deleteFromList (valeur, liste) {
  liste = liste.filter(item => item !== valeur)
  return liste
}

/**
 * Function to modify style from HTML DOM Element
 * @param {HTMLElement} dom HTML DOM element
 * @param {string} bgColor background color
 * @param {string} color text color
 */
function changeTagsStyle (dom, bgColor, color) {
  dom.style.backgroundColor = bgColor
  dom.firstChild.style.color = color
}

/**
 * Function to display or not an anchor from the window scroll position
 */
function ancreController () {
  const ancre = document.getElementsByClassName('ancreIndex')
  window.addEventListener('scroll', (e) => {
    if (window.scrollY <= 100) {
      ancre[0].style.display = 'block'
    } else {
      ancre[0].style.display = 'none'
    }
  })
}

/**
 * Function to update the number of like and modify style if like is clicked
 * @param {number} likeTotalFromData number of total like
 */
function likeController (likeTotalFromData) {
  const asideLike = document.getElementsByClassName('photographerInfo__like')
  const figureHeart = document.querySelectorAll('i.photographerLightbox__info_heart')
  figureHeart.forEach(function (span) {
    let isLike = false
    let likeFromFigure = parseInt(span.previousSibling.innerHTML)
    span.addEventListener('click', e => {
      updateLike()
    })
    span.addEventListener('keydown', k => {
      if (k.key === 'Enter') {
        updateLike()
      }
    })

    function updateLike () {
      if (isLike) {
        isLike = false
        likeFromFigure -= 1

        likeTotalFromData -= 1
        asideLike[0].innerHTML = likeTotalFromData

        span.previousSibling.innerHTML = likeFromFigure
        span.classList.replace('fas', 'far')
      } else {
        isLike = true
        likeFromFigure += 1

        likeTotalFromData += 1
        asideLike[0].innerHTML = likeTotalFromData

        span.previousSibling.innerHTML = likeFromFigure
        span.classList.replace('far', 'fas')
      }
    }
  })
}

/**
 * Generate < section > HTML DOM Element from a list
 * @param {Object[]} liste photographers list
 */
function createPhotographerfromList (liste) {
  for (const l in liste) {
    createSectionPhotographers(liste[l])
  }
}

/**
 * Function to sort list by likes
 * @param {Object[]} list medias list
 * @returns sorted list
 */
function orderByLikes (list) {
  return list.sort(function compare (a, b) {
    if (a.likes < b.likes) {
      return -1
    }
    if (a.likes > b.likes) {
      return 1
    }
    return 0
  })
}

/**
 * Function to sort list by dates
 * @param {Object[]} list medias list
 * @returns sorted list
 */
function orderByDate (list) {
  return list.sort(function (a, b) {
    a = new Date(a.date)
    b = new Date(b.date)
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  })
}

/**
 * Function to sort list by names
 * @param {Object[]} list medias list
 * @returns sorted list
 */
function orderByName (list) {
  return list.sort(function (a, b) {
    if (a.alt < b.alt) {
      return -1
    }
    if (a.alt > b.alt) {
      return 1
    }
    return 0
  })
}

export {
  clearMainIndex,
  clearFigure,
  isInList,
  addToList,
  deleteFromList,
  changeTagsStyle,
  ancreController,
  likeController,
  createPhotographerfromList,
  orderByLikes,
  orderByDate,
  orderByName
}
