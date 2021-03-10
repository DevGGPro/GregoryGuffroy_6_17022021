
function createHeaderWithNav (reponse) {
  const wrapper = document.getElementsByClassName('wrapper')
  const header = document.createElement('header')
  header.classList.add('header')

  const a = document.createElement('a')
  a.classList.add('header__image')
  a.setAttribute('href', 'index.html')
  header.appendChild(a)

  const image = document.createElement('img')
  image.setAttribute('src', './assets/images/logo/logo.png')
  image.setAttribute('alt', 'FishEye Home Page')
  a.appendChild(image)

  wrapper[0].appendChild(header)
  if (reponse) {
    createNav()
  }
}

function createNav () {
  const header = document.getElementsByClassName('header')

  const nav = document.createElement('nav')
  nav.classList.add('header__nav')

  const ul = document.createElement('ul')
  nav.appendChild(ul)

  const tags = ['Portrait', 'Art', 'Fashion', 'Architecture', 'Travel', 'Sport', 'Animals', 'Events']
  for (const t in tags) {
    const li = createTags(tags[t])
    ul.appendChild(li)
  }

  header[0].appendChild(nav)
}

function createTags (tagsName) {
  const li = document.createElement('li')
  li.classList.add('tags')
  li.setAttribute('data-value', tagsName.toLowerCase())
  li.innerHTML = '#' + tagsName
  return li
}

function createMain () {
  const wrapper = document.getElementsByClassName('wrapper')

  const main = document.createElement('main')
  main.setAttribute('id', 'mainIndex')

  const h1 = document.createElement('h1')
  h1.innerHTML = 'Nos photographes'
  main.appendChild(h1)

  wrapper[0].appendChild(main)
}

function createSectionPhotographers (photographer) {
  const main = document.getElementById('mainIndex')

  const sectionPhotographer = document.createElement('section')
  sectionPhotographer.classList.add('photographer')

  const link = document.createElement('a')
  link.classList.add('photographer__link')
  link.setAttribute('href', 'photographer_page.html?id=' + photographer.id)
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

  const tags = document.createElement('ul')
  tags.classList.add('photographer__tags')
  for (const tag in photographer.tags) {
    const li = createTags(photographer.tags[tag])
    tags.appendChild(li)
  }
  sectionPhotographer.appendChild(tags)

  main.appendChild(sectionPhotographer)
}

export { createHeaderWithNav, createMain, createSectionPhotographers }
