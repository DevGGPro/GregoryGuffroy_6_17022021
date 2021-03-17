import data from '../assets/data/FishEyeDataFR.json'
import {
  getPhotographerById,
  getPhotographerByTagsList,
  getNumberOfLikeByPhotographerId,
  getListMediaFromPhotographerId
} from './data'
import {
  createHeaderWithNav,
  createMainWithTitle,
  createSectionPhotographers,
  createSectionPhotographersProfils,
  createAsidePhotographersInfo,
  createSectionPhotographerLightbox
} from './factoryElements'
import { addToList, isInList, deleteFromList, changeTagsStyle, clearMainIndex } from './utils'

function generateIndexHtml () {
  createHeaderWithNav(true)
  createMainWithTitle('mainIndex', true)

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

function createPhotographerfromList (liste) {
  for (const l in liste) {
    createSectionPhotographers(liste[l])
  }
}

function generatePhotographerPageHtml () {
  const url = new URL(window.location.href)
  const id = url.searchParams.get('id')

  createHeaderWithNav(false)

  createMainWithTitle('mainPhotographer', false)

  createSectionPhotographersProfils(getPhotographerById(id))

  let numberOfLikeTotal = getNumberOfLikeByPhotographerId(id)
  createAsidePhotographersInfo(numberOfLikeTotal, getPhotographerById(id))
  const likeTotal = document.getElementsByClassName('photographerInfo__like')

  // const listeMedia = getListMediaFromPhotographerId(id)
  // getListMediaFromFactoryPage(listeMedia)

  createSectionPhotographerLightbox(getListMediaFromPhotographerId(id))
  const plike = document.querySelectorAll('span.photographerLightbox__info_like')
  plike.forEach(function (span) {
    let isLike = false
    let numberOfLike = parseInt(span.innerHTML)
    span.addEventListener('click', like)

    function like () {
      if (isLike) {
        isLike = false
        numberOfLike -= 1
        numberOfLikeTotal -= 1
        likeTotal[0].innerHTML = numberOfLikeTotal
        span.innerHTML = numberOfLike
        span.nextSibling.classList.replace('fas', 'far')
      } else {
        isLike = true
        numberOfLike += 1
        numberOfLikeTotal += 1
        likeTotal[0].innerHTML = numberOfLikeTotal
        span.innerHTML = numberOfLike
        span.nextSibling.classList.replace('far', 'fas')
      }
    }
  })
}

export { generateIndexHtml, generatePhotographerPageHtml }
