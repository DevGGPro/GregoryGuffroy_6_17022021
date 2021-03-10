import data from '../assets/data/FishEyeDataFR.json'
import { getPhotographerByTagsList } from './data'
import { createHeaderWithNav, createMain, createSectionPhotographers } from './factoryElements'
import { addToList, isInList, deleteFromList, changeTagsStyle, clearMainIndex } from './utils'

function generateIndexHtml () {
  createHeaderWithNav(true)
  createMain()

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
    li.addEventListener('click', test)
  })

  function test () {
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
        li.addEventListener('click', test)
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
        li.addEventListener('click', test)
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
  console.log('je suis sur la page photographer_page.html')
}
export { generateIndexHtml, generatePhotographerPageHtml }
