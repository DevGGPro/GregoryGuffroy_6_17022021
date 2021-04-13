import data from '../assets/data/FishEyeDataFR.json'
import { lightbox, cleanLightbox } from './modalLightbox'
import {
  getPhotographerById,
  getPhotographerByTagsList,
  getNumberOfLikeByPhotographerId,
  getListMediaFromPhotographerId
} from './data'
import {
  createHeaderWithNav,
  createMainWithTitle,
  createSectionPhotographersProfils,
  createAsidePhotographersInfo,
  createFiltreAndSectionPhotographerLightbox,
  createFigurePhotographerLightbox
} from './factoryElements'
import {
  addToList,
  isInList,
  deleteFromList,
  changeTagsStyle,
  clearMainIndex,
  clearFigure,
  ancreController,
  likeController,
  createPhotographerfromList,
  orderByLikes,
  orderByDate,
  orderByName
} from './utils'

/**
 * Generate content of index.html
 */
function generateIndexHtml () {
  createHeaderWithNav(true)
  createMainWithTitle('mainIndex', true)

  ancreController()

  // HTMLElement[] de tout les tags de la page, nav + section profils
  let navTags
  // une liste des tags cliqués ou présents dans l'url
  let listeTags
  let listPhotographer

  const url = new URL(window.location.href)

  // Au chargement de la page
  listeTags = url.searchParams.getAll('tags')
  if (listeTags.length === 0) {
    createPhotographerfromList(data.photographers)
    navTags = document.querySelectorAll('li.tags')
  } else {
    listPhotographer = getPhotographerByTagsList(listeTags)
    createPhotographerfromList(listPhotographer)
    navTags = document.querySelectorAll('li.tags')
    for (const t in listeTags) {
      navTags.forEach(function (li) {
        if (li.getAttribute('data-value') === listeTags[t]) {
          changeTagsStyle(li, '#901C1C', '#FFF')
        }
      })
    }
  }
  // on appelle la fonction reloadPageSection au click sur un tag
  navTags.forEach(function (li) {
    li.addEventListener('click', reloadPageSection)
  })

  function reloadPageSection () {
    clearMainIndex()
    // on recupère la valeur du tag cliqué
    const tag = this.getAttribute('data-value')

    // -------------------- si le tag est dans la liste --------------------
    if (isInList(tag, listeTags)) {
      // on le supprime de la liste
      listeTags = deleteFromList(tag, listeTags)

      // on supprime tout les tags de l'url, recrée l'url à partir de la liste puis la remplace
      url.searchParams.delete('tags')
      for (const t in listeTags) {
        url.searchParams.append('tags', listeTags[t])
      }
      window.history.replaceState(null, null, url)

      // on recharge le contenu du main (les photographes) à partir de la nouvelle liste de tags
      listPhotographer = getPhotographerByTagsList(listeTags)
      if (listeTags.length === 0) {
        createPhotographerfromList(data.photographers)
        navTags = document.querySelectorAll('li.tags')
      }
      createPhotographerfromList(listPhotographer)

      // on actualise la liste de tout les tags présents dans la page
      navTags = document.querySelectorAll('li.tags')

      // on réinitialise le style de tout les tags
      navTags.forEach(function (li) {
        changeTagsStyle(li, '#FFF', '#901C1C')
      })
      // On change le style des tags toujours présents dans la liste
      for (const t in listeTags) {
        navTags.forEach(function (li) {
          if (li.getAttribute('data-value') === listeTags[t]) {
            changeTagsStyle(li, '#901C1C', '#FFF')
          }
        })
      }
      // on appelle la fonction reloadPageSection au click sur un tag
      navTags.forEach(function (li) {
        li.addEventListener('click', reloadPageSection)
      })

    // -------------------- Si le tag n'est pas dans la liste --------------------
    } else {
      // on l'ajoute dans la liste
      addToList(tag, listeTags)

      // on supprime tout les tags de l'url, recrée l'url à partir de la liste puis la remplace
      url.searchParams.delete('tags')
      for (const t in listeTags) {
        url.searchParams.append('tags', listeTags[t])
      }
      window.history.replaceState(null, null, url)

      // on recharge le contenu du main (les photographes) à partir de la nouvelle liste de tags
      listPhotographer = getPhotographerByTagsList(listeTags)
      createPhotographerfromList(listPhotographer)

      // on actualise la liste de tout les tags présents dans la page
      navTags = document.querySelectorAll('li.tags')

      // On change le style des tags présents dans la liste
      for (const t in listeTags) {
        navTags.forEach(function (li) {
          if (li.getAttribute('data-value') === listeTags[t]) {
            changeTagsStyle(li, '#901C1C', '#FFF')
          }
        })
      }

      // on appelle la fonction reloadPageSection au click sur un tag
      navTags.forEach(function (li) {
        li.addEventListener('click', reloadPageSection)
      })
    }
  }
}

/**
 * Generate content of photographer_page.html
 */
function generatePhotographerPageHtml () {
  const url = new URL(window.location.href)
  const id = url.searchParams.get('id')

  // On crée un header avec ou sans nav
  createHeaderWithNav(false)

  // on crée un main avec un id spécifique et avec ou sans titre principal
  createMainWithTitle('mainPhotographer', false)

  // On crée une section contenant les informations du photographe spécifié dans l'url
  createSectionPhotographersProfils(getPhotographerById(id))

  // on crée la section contenant les médias puis on crée et ajoute le filtre de tri
  createFiltreAndSectionPhotographerLightbox()

  // on crée des figures contenant les differents médias et on les ajoute à la section
  createFigurePhotographerLightbox(orderByLikes(getListMediaFromPhotographerId(id)))

  // on recupère le nombre de like total par photographer et on crée l'aside récapitulatif
  const likeTotalFromData = getNumberOfLikeByPhotographerId(id)
  createAsidePhotographersInfo(likeTotalFromData, getPhotographerById(id))

  // On contrôle et update les likes de la section et update celui de l'aside
  likeController(likeTotalFromData)

  // le FiltreMenu
  const btnMenu = document.getElementsByClassName('filtreMenu__bouton')
  const ulListMenu = document.getElementsByClassName('filtreMenu__list')
  const liListMenu = document.querySelectorAll('ul.filtreMenu__list > li')
  btnMenu[0].addEventListener('click', e => {
    ulListMenu[0].style.display = 'block'
    btnMenu[0].setAttribute('aria-expanded', 'true')
  })
  liListMenu.forEach(li => {
    // le FiltreMenu navigation souris
    li.addEventListener('click', e => {
      btnMenu[0].innerHTML = e.target.innerText + '<span class="fas fa-chevron-up" aria-hidden="true"></span>'
      btnMenu[0].setAttribute('aria-expanded', 'false')
      ulListMenu[0].style.display = 'none'
      if (e.target.innerText === 'Popularité') {
        clearFigure()
        createFigurePhotographerLightbox(orderByLikes(getListMediaFromPhotographerId(id)))
        likeController(likeTotalFromData)
        cleanLightbox()
        lightbox()
      }
      if (e.target.innerText === 'Date') {
        clearFigure()
        createFigurePhotographerLightbox(orderByDate(getListMediaFromPhotographerId(id)))
        likeController(likeTotalFromData)
        cleanLightbox()
        lightbox()
      }
      if (e.target.innerText === 'Titre') {
        clearFigure()
        createFigurePhotographerLightbox(orderByName(getListMediaFromPhotographerId(id)))
        likeController(likeTotalFromData)
        cleanLightbox()
        lightbox()
      }
    })

    // le FiltreMenu navigation clavier
    li.addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.target.innerText === 'Popularité') {
        btnMenu[0].innerHTML = e.target.innerText + '<span class="fas fa-chevron-up" aria-hidden="true"></span>'
        btnMenu[0].setAttribute('aria-expanded', 'false')
        ulListMenu[0].style.display = 'none'
        clearFigure()
        createFigurePhotographerLightbox(orderByLikes(getListMediaFromPhotographerId(id)))
        likeController(likeTotalFromData)
        cleanLightbox()
        lightbox()
      }
      if (e.key === 'Enter' && e.target.innerText === 'Date') {
        btnMenu[0].innerHTML = e.target.innerText + '<span class="fas fa-chevron-up" aria-hidden="true"></span>'
        btnMenu[0].setAttribute('aria-expanded', 'false')
        ulListMenu[0].style.display = 'none'
        clearFigure()
        createFigurePhotographerLightbox(orderByDate(getListMediaFromPhotographerId(id)))
        likeController(likeTotalFromData)
        cleanLightbox()
        lightbox()
      }
      if (e.key === 'Enter' && e.target.innerText === 'Titre') {
        btnMenu[0].innerHTML = e.target.innerText + '<span class="fas fa-chevron-up" aria-hidden="true"></span>'
        btnMenu[0].setAttribute('aria-expanded', 'false')
        ulListMenu[0].style.display = 'none'
        clearFigure()
        createFigurePhotographerLightbox(orderByName(getListMediaFromPhotographerId(id)))
        likeController(likeTotalFromData)
        cleanLightbox()
        lightbox()
      }
      // le focus
      if (e.key === 'Tab' && e.target.innerText === 'Titre') {
        e.preventDefault()
        document.getElementById('listbox').firstChild.focus()
      }
    })
  })
}

export { generateIndexHtml, generatePhotographerPageHtml }
