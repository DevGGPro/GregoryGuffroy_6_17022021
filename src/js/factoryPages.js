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
  createFigurePhotographerLightbox,
  createAncreIndex
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

function generateIndexHtml () {
  createAncreIndex()
  createHeaderWithNav(true)
  createMainWithTitle('mainIndex', true)

  ancreController()

  let navTags
  let listPhotographer
  let listeTags

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

  // Quand on click sur un tag
  navTags.forEach(function (li) {
    li.addEventListener('click', reloadPageSection)
  })

  function reloadPageSection () {
    clearMainIndex()

    const tag = this.getAttribute('data-value')

    if (isInList(tag, listeTags)) {
      listeTags = deleteFromList(tag, listeTags)

      url.searchParams.delete('tags')
      for (const t in listeTags) {
        url.searchParams.append('tags', listeTags[t])
      }
      window.history.replaceState(null, null, url)

      listPhotographer = getPhotographerByTagsList(listeTags)
      if (listeTags.length === 0) {
        createPhotographerfromList(data.photographers)
        navTags = document.querySelectorAll('li.tags')
      }

      createPhotographerfromList(listPhotographer)

      navTags = document.querySelectorAll('li.tags')

      navTags.forEach(function (li) {
        changeTagsStyle(li, '#FFF', '#901C1C')
      })
      for (const t in listeTags) {
        navTags.forEach(function (li) {
          if (li.getAttribute('data-value') === listeTags[t]) {
            changeTagsStyle(li, '#901C1C', '#FFF')
          }
        })
      }
      navTags.forEach(function (li) {
        li.addEventListener('click', reloadPageSection)
      })
    } else {
      addToList(tag, listeTags)

      url.searchParams.delete('tags')
      for (const t in listeTags) {
        url.searchParams.append('tags', listeTags[t])
      }
      window.history.replaceState(null, null, url)

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
      navTags.forEach(function (li) {
        li.addEventListener('click', reloadPageSection)
      })
    }
  }
}

function generatePhotographerPageHtml () {
  const url = new URL(window.location.href)
  const id = url.searchParams.get('id')

  // On créer un header avec ou sans nav
  createHeaderWithNav(false)

  // on créer un main avec un id spécifique et avec ou sans titre principal
  createMainWithTitle('mainPhotographer', false)

  // On créer une section contenant les informations du photographe spécifié dans l'url
  createSectionPhotographersProfils(getPhotographerById(id))

  // on créer la section contenant les médias puis on créer et ajoute le filtre de tri
  createFiltreAndSectionPhotographerLightbox()

  // on créer des figures contenant les differents médias et on les ajoutent à la section
  createFigurePhotographerLightbox(orderByLikes(getListMediaFromPhotographerId(id)))

  // on recupère le nombre de like total par photographer et on créer l'aside récapitulatif
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
  })
  liListMenu.forEach(li => {
    li.addEventListener('click', e => {
      btnMenu[0].innerHTML = e.target.innerText + '<span class="fas fa-chevron-up" aria-hidden="true"></span>'
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
  })
}

export { generateIndexHtml, generatePhotographerPageHtml }
