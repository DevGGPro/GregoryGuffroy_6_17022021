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

function getNameFromMediaLink (string) {
  const regex = /(_|Fashion_|Event_|Art_|Sport_|Animals_|Architecture_|Portrait_|Travel_|\.\/assets\/videos\/|\.\/assets\/images\/photos\/)|\.(jpg|mp4)/g
  return String(string).replace(regex, ' ')
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

function createPhotographerfromList (liste) {
  for (const l in liste) {
    createSectionPhotographers(liste[l])
  }
}

export {
  clearMainIndex,
  isInList,
  addToList,
  deleteFromList,
  changeTagsStyle,
  getNameFromMediaLink,
  ancreController,
  createPhotographerfromList
}
