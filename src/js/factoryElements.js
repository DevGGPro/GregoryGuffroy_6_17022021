import { getNameFromMediaLink } from './utils'

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
      name = listmedia[m].image
      figure.classList.add('photographerLightbox__figure')
      section.appendChild(figure)

      const img = document.createElement('img')
      img.classList.add('photographerLightbox__figure_media')
      img.setAttribute('src', './assets/images/photos/' + listmedia[m].image)
      img.setAttribute('alt', getNameFromMediaLink(name))
      figure.appendChild(img)
    }
    if (Object.keys(listmedia[m])[Object.values(listmedia[m]).indexOf(listmedia[m].video)] === 'video') {
      name = listmedia[m].video
      figure.classList.add('photographerLightbox__figure')
      section.appendChild(figure)

      const video = document.createElement('video')
      video.classList.add('photographerLightbox__figure_media')
      video.setAttribute('src', './assets/videos/' + listmedia[m].video)
      video.setAttribute('type', 'video/mp4')
      figure.appendChild(video)
    }

    const figcaption = document.createElement('figcaption')
    figcaption.classList.add('photographerLightbox__info')
    figure.appendChild(figcaption)

    const divFig = document.createElement('div')
    figcaption.appendChild(divFig)

    const pNom = document.createElement('p')
    pNom.classList.add('photographerLightbox__info_nom')
    pNom.innerHTML = getNameFromMediaLink(name)
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

function createLightbox (link, alt) {
  const modal = document.getElementById('modal-lightbox')

  const section = document.createElement('section')
  section.classList.add('lightbox')
  modal.appendChild(section)

  const ileft = document.createElement('i')
  ileft.classList.add('fas')
  ileft.classList.add('fa-chevron-left')
  ileft.classList.add('lightbox__left')
  section.appendChild(ileft)

  const figure = document.createElement('figure')
  figure.classList.add('lightbox__figure')
  section.appendChild(figure)

  if (link.includes('mp4')) {
    const video = document.createElement('video')
    video.classList.add('lightbox__figure_media')
    video.setAttribute('src', link)
    video.setAttribute('type', 'video/mp4')
    video.setAttribute('controls', null)
    figure.appendChild(video)
  } else {
    const image = document.createElement('img')
    image.classList.add('lightbox__figure_media')
    image.setAttribute('src', link)
    image.setAttribute('alt', alt)
    figure.appendChild(image)
  }

  const figcaption = document.createElement('figcation')
  figcaption.classList.add('lightbox__name')
  figcaption.innerHTML = alt
  figure.appendChild(figcaption)

  const iright = document.createElement('i')
  iright.classList.add('fas')
  iright.classList.add('fa-chevron-right')
  iright.classList.add('lightbox__right')
  section.appendChild(iright)

  const iclose = document.createElement('i')
  iclose.classList.add('fas')
  iclose.classList.add('fa-times')
  iclose.classList.add('lightbox__close')
  section.appendChild(iclose)
}

function createForm (nom) {
  const modal = document.getElementById('modal-form')

  const form = document.createElement('form')
  form.classList.add('form')
  form.setAttribute('action', '')
  modal.appendChild(form)

  const h1 = document.createElement('h1')
  h1.classList.add('form__titre')
  h1.innerHTML = 'Contactez-moi <br>' + nom
  form.appendChild(h1)

  const divFirstname = document.createElement('div')
  divFirstname.classList.add('form__firstname')
  const labelFirstname = document.createElement('label')
  labelFirstname.setAttribute('for', 'firstname')
  labelFirstname.innerHTML = 'Prénom'
  divFirstname.appendChild(labelFirstname)
  const inputFirstname = document.createElement('input')
  inputFirstname.setAttribute('id', 'firstname')
  inputFirstname.setAttribute('type', 'text')
  divFirstname.appendChild(inputFirstname)
  form.appendChild(divFirstname)

  const divLastname = document.createElement('div')
  divLastname.classList.add('form__lastname')
  const labelLastname = document.createElement('label')
  labelLastname.setAttribute('for', 'lastname')
  labelLastname.innerHTML = 'Nom'
  divLastname.appendChild(labelLastname)
  const inputLastname = document.createElement('input')
  inputLastname.setAttribute('id', 'lastname')
  inputLastname.setAttribute('type', 'text')
  divLastname.appendChild(inputLastname)
  form.appendChild(divLastname)

  const divEmail = document.createElement('div')
  divEmail.classList.add('form__email')
  const labelEmail = document.createElement('label')
  labelEmail.setAttribute('for', 'email')
  labelEmail.innerHTML = 'Email'
  divEmail.appendChild(labelEmail)
  const inputEmail = document.createElement('input')
  inputEmail.setAttribute('id', 'email')
  inputEmail.setAttribute('type', 'text')
  divEmail.appendChild(inputEmail)
  form.appendChild(divEmail)

  const divMessage = document.createElement('div')
  divMessage.classList.add('form__message')
  const labelMessage = document.createElement('label')
  labelMessage.setAttribute('for', 'message')
  labelMessage.innerHTML = 'Votre message'
  divMessage.appendChild(labelMessage)
  const textarea = document.createElement('textarea')
  textarea.setAttribute('id', 'message')
  divMessage.appendChild(textarea)
  form.appendChild(divMessage)

  const button = document.createElement('button')
  button.classList.add('form__button')
  button.classList.add('button')
  button.innerHTML = 'Envoyer'
  form.appendChild(button)

  const i = document.createElement('i')
  i.classList.add('fas')
  i.classList.add('fa-times')
  i.classList.add('form__close')
  form.appendChild(i)
}

export {
  createHeaderWithNav,
  createMainWithTitle,
  createSectionPhotographers,
  createSectionPhotographersProfils,
  createAsidePhotographersInfo,
  createSectionPhotographerLightbox,
  createLightbox,
  createForm
}
