import {
  createSectionPhotographers
} from './factoryElements'

function clearMainIndex () {
  const main = document.getElementsByTagName('main')
  main.id = 'mainIndex'
  main[0].innerHTML = ''

  const titre = document.createElement('h1')
  titre.innerHTML = 'Nos photographes'
  main[0].appendChild(titre)
}

function clearFigure () {
  const figure = document.querySelectorAll('figure.photographerLightbox__figure')
  figure.forEach(e => {
    e.remove()
  })
}

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

function addToList (valeur, liste) {
  if (!isInList(valeur, liste)) {
    liste.push(valeur)
  }
}

function deleteFromList (valeur, liste) {
  liste = liste.filter(item => item !== valeur)
  return liste
}

function changeTagsStyle (dom, bgColor, color) {
  dom.style.backgroundColor = bgColor
  dom.style.color = color
}

function ancreController () {
  const ancre = document.getElementsByClassName('ancreIndex')
  window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 100) {
      ancre[0].style.display = 'block'
    } else {
      ancre[0].style.display = 'none'
    }
  })
}

function likeController (likeTotalFromData) {
  const asideLike = document.getElementsByClassName('photographerInfo__like')
  const figureLike = document.querySelectorAll('span.photographerLightbox__info_like')
  figureLike.forEach(function (span) {
    let isLike = false
    let likeFromFigure = parseInt(span.innerHTML)
    span.addEventListener('click', e => {
      if (isLike) {
        isLike = false
        likeFromFigure -= 1

        likeTotalFromData -= 1
        asideLike[0].innerHTML = likeTotalFromData

        span.innerHTML = likeFromFigure
        span.nextSibling.classList.replace('fas', 'far')
      } else {
        isLike = true
        likeFromFigure += 1

        likeTotalFromData += 1
        asideLike[0].innerHTML = likeTotalFromData

        span.innerHTML = likeFromFigure
        span.nextSibling.classList.replace('far', 'fas')
      }
    })
  })
}

function createPhotographerfromList (liste) {
  for (const l in liste) {
    createSectionPhotographers(liste[l])
  }
}

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
