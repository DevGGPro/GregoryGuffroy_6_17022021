// database import
import data from '../assets/data/FishEyeDataFR.json'
import { isInList } from './utils'

/**
 * Get Photographer by his id
 * @param {number} id photographer id
 * @returns {Object} photographer object
 */
function getPhotographerById (id) {
  for (const p in data.photographers) {
    if (data.photographers[p].id === parseInt(id)) {
      return data.photographers[p]
    }
  }
  return false
}

/**
 * Get a list of photographer object from a list of tags
 * @param {string[]} liste tags list
 * @returns {Object[]} list of photographer
 */
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

/**
 * Get total number of like from a photographer
 * @param {number} id photographer id
 * @returns {number} the total number of like
 */
function getNumberOfLikeByPhotographerId (id) {
  let n = 0
  for (const m in data.media) {
    if (data.media[m].photographerId === parseInt(id)) {
      n += data.media[m].likes
    }
  }
  return n
}

/**
 * Get a list of all the media from a photographer
 * @param {number} id photographer id
 * @returns {Object[]} list of media
 */
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
