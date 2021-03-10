// on importe la base de donnée
import data from '../assets/data/FishEyeDataFR.json'
import { isInList } from './utils'

function getPhotographerById (id) {
  for (const p in data.photographers) {
    if (data.photographers[p].id === id) {
      return data.photographers[p]
    }
  }
  return false
}

function getPhotographerByTagsList (liste) {
  const listPhotographerTmp = []
  let listPhotographer = []
  for (const d in data.photographers) {
    for (const t in data.photographers[d].tags) {
      if (isInList(data.photographers[d].tags[t], liste)) {
        listPhotographerTmp.push(data.photographers[d])
      }
    }
  }
  listPhotographer = Array.from(new Set(listPhotographerTmp))
  return listPhotographer
}

export { getPhotographerById, getPhotographerByTagsList }
