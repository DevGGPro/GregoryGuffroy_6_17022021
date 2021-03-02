function createSectionPhotographers (photographer) {
  const main = document.getElementsByTagName('main')

  const sectionPhotographer = document.createElement('section')
  sectionPhotographer.classList.add('photographer')

  const link = document.createElement('a')
  link.classList.add('photographer__link')
  link.setAttribute('href', '#')
  sectionPhotographer.appendChild(link)

  const portrait = document.createElement('img')
  portrait.classList.add('photographer__link_portrait')
  portrait.setAttribute('src', './assets/images/photographers/' + photographer.portrait)
  portrait.setAttribute('alt', 'Portrait de ' + photographer.name)
  link.appendChild(portrait)

  const name = document.createElement('h2')
  name.classList.add('photographer__link_name')
  name.innerHTML = photographer.name
  link.appendChild(name)

  const city = document.createElement('p')
  city.classList.add('photographer__city')
  city.innerHTML = photographer.city
  sectionPhotographer.appendChild(city)

  const tagline = document.createElement('p')
  tagline.classList.add('photographer__tagline')
  tagline.innerHTML = photographer.tagline
  sectionPhotographer.appendChild(tagline)

  const price = document.createElement('p')
  price.classList.add('photographer__price')
  price.innerHTML = photographer.price + '€/jour'
  sectionPhotographer.appendChild(price)

  const tags = document.createElement('div')
  tags.classList.add('photographer__tags')
  for (const tag in photographer.tags) {
    const span = document.createElement('span')
    span.classList.add('tags')
    span.innerHTML = '#' + photographer.tags[tag]
    tags.appendChild(span)
  }
  sectionPhotographer.appendChild(tags)

  main[0].appendChild(sectionPhotographer)
}

export { createSectionPhotographers }
