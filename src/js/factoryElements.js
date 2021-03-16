
function createHeaderWithNav (boolean) {
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
  if (boolean) {
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

function createMainWithTitle (id, boolean) {
  const wrapper = document.getElementsByClassName('wrapper')

  const main = document.createElement('main')
  main.setAttribute('id', id)

  if (boolean) {
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Nos photographes'
    main.appendChild(h1)
  }

  wrapper[0].appendChild(main)
}

function createSectionPhotographers (photographer) {
  const main = document.getElementById('mainIndex')

  const sectionPhotographer = document.createElement('section')
  sectionPhotographer.classList.add('photographer')

  const link = document.createElement('a')
  link.classList.add('photographer__link')
  link.setAttribute('href', './photographer_page.html?id=' + photographer.id)
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

function createSectionPhotographersProfils (photographer) {
  const main = document.getElementById('mainPhotographer')

  const section = document.createElement('section')
  section.classList.add('photographerProfils')

  const div = document.createElement('div')

  const h1 = document.createElement('h1')
  h1.classList.add('photographerProfils__name')
  h1.innerHTML = photographer.name
  div.appendChild(h1)

  const button = document.createElement('button')
  button.classList.add('photographerProfils__contact')
  button.classList.add('button')
  button.innerHTML = 'Contactez-moi'
  div.appendChild(button)

  section.appendChild(div)

  const pCity = document.createElement('p')
  pCity.classList.add('photographerProfils__city')
  pCity.innerHTML = photographer.city
  section.appendChild(pCity)

  const pTagline = document.createElement('p')
  pTagline.classList.add('photographerProfils__tagline')
  pTagline.innerHTML = photographer.tagline
  section.appendChild(pTagline)

  const ul = document.createElement('ul')
  ul.classList.add('photographerProfils__tags')
  section.appendChild(ul)
  for (const t in photographer.tags) {
    const li = document.createElement('li')
    li.classList.add('tags')
    li.setAttribute('data-value', photographer.tags[t].toLowerCase())
    ul.appendChild(li)

    const a = document.createElement('a')
    a.setAttribute('href', 'index.html?tags=' + photographer.tags[t].toLowerCase())
    a.innerHTML = '#' + photographer.tags[t].toLowerCase()
    li.appendChild(a)
  }

  const image = document.createElement('img')
  image.classList.add('photographerProfils__portrait')
  image.setAttribute('src', './assets/images/photographers/' + photographer.portrait)
  image.setAttribute('alt', photographer.name)
  section.appendChild(image)

  main.appendChild(section)
}

function createAsidePhotographersInfo (nombreDeLike, photographer) {
  const main = document.getElementById('mainPhotographer')

  const aside = document.createElement('aside')
  aside.classList.add('photographerInfo')

  const plike = document.createElement('p')
  plike.classList.add('photographerInfo__like')
  plike.innerHTML = nombreDeLike
  aside.appendChild(plike)

  const i = document.createElement('i')
  i.classList.add('fas')
  i.classList.add('fa-heart')
  aside.appendChild(i)

  const price = document.createElement('p')
  price.classList.add('photographerInfo__price')
  price.innerHTML = photographer.price + '€/jour'
  aside.appendChild(price)

  main.appendChild(aside)
}

function createSectionPhotographerLightbox (listmedia) {
  const main = document.getElementById('mainPhotographer')

  const section = document.createElement('section')
  section.classList.add('photographerLightbox')
  main.appendChild(section)

  const h2 = document.createElement('h2')
  h2.classList.add('photographerLightbox__titre')
  h2.innerHTML = 'Trier par'
  section.appendChild(h2)

  const div = document.createElement('div')
  div.classList.add('photographerLightbox__select')
  // section.appendChild(div)

  const select = document.createElement('section')
  const liste = ['Popularité', 'Date', 'Titre']
  for (const l in liste) {
    const option = document.createElement('option')
    option.setAttribute('value', liste[l].toLowerCase())
    option.innerHTML = liste[l]
    select.appendChild(option)
  }
  div.appendChild(select)

  let name

  for (const m in listmedia) {
    const figure = document.createElement('figure')
    if (Object.keys(listmedia[m])[Object.values(listmedia[m]).indexOf(listmedia[m].image)] === 'image') {
      figure.classList.add('photographerLightbox__image')
      section.appendChild(figure)

      const a = document.createElement('a')
      a.setAttribute('href', '#')
      figure.appendChild(a)

      const img = document.createElement('img')
      img.setAttribute('src', './assets/images/photos/' + listmedia[m].image)
      img.setAttribute('alt', 'nom')
      a.appendChild(img)

      name = listmedia[m].image
    }
    if (Object.keys(listmedia[m])[Object.values(listmedia[m]).indexOf(listmedia[m].video)] === 'video') {
      figure.classList.add('photographerLightbox__video')
      section.appendChild(figure)

      const a = document.createElement('a')
      a.setAttribute('href', '#')
      figure.appendChild(a)

      const video = document.createElement('video')

      const source = document.createElement('source')
      source.setAttribute('src', './assets/videos/' + listmedia[m].video)
      source.setAttribute('type', 'video/mp4')
      video.appendChild(source)

      a.appendChild(video)

      name = listmedia[m].video
    }

    const figcaption = document.createElement('figcaption')
    figcaption.classList.add('photographerLightbox__info')
    figure.appendChild(figcaption)

    const divFig = document.createElement('div')
    figcaption.appendChild(divFig)

    const pNom = document.createElement('p')
    pNom.classList.add('photographerLightbox__info_nom')
    pNom.innerHTML = getNameFromData(name)
    divFig.appendChild(pNom)

    const price = document.createElement('p')
    price.classList.add('photographerLightbox__info_price')
    price.innerHTML = listmedia[m].price + '€'
    divFig.appendChild(price)

    const span = document.createElement('span')
    span.classList.add('photographerLightbox__info_like')
    span.innerHTML = listmedia[m].likes
    figcaption.appendChild(span)

    const i = document.createElement('i')
    i.classList.add('far')
    i.classList.add('fa-heart')
    figcaption.appendChild(i)
  }
}

function getNameFromData (string) {
  const regex = /(_|Fashion_|Event_|Art_|Sport_|Animals_|Architecture_|Portrait_|Travel_)|\.(jpg|mp4)/g
  return String(string).replace(regex, ' ')
}

export {
  createHeaderWithNav,
  createMainWithTitle,
  createSectionPhotographers,
  createSectionPhotographersProfils,
  createAsidePhotographersInfo,
  createSectionPhotographerLightbox
}
