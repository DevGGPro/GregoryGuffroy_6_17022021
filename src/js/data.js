// on importe la base de donnée
import data from '../assets/data/FishEyeDataFR.json'
import { isInList } from './utils'

function getPhotographerById (id) {
  for (const p in data.photographers) {
    if (data.photographers[p].id === parseInt(id)) {
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

function getNumberOfLikeByPhotographerId (id) {
  let n = 0
  for (const m in data.media) {
    if (data.media[m].photographerId === parseInt(id)) {
      n += data.media[m].likes
    }
  }
  return n
}

function getListMediaFromPhotographerId (id) {
  const listMedia = []
  for (const m in data.media) {
    if (data.media[m].photographerId === parseInt(id)) {
      listMedia.push(data.media[m])
    }
  }
  return listMedia
}

export {
  getPhotographerById,
  getPhotographerByTagsList,
  getNumberOfLikeByPhotographerId,
  getListMediaFromPhotographerId
}
