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
export { clearMainIndex, isInList, addToList, deleteFromList, changeTagsStyle }
