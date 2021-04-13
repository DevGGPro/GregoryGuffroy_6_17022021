/**
 * Create < header > DOM Element with or without nav
 * @param {boolean} boolean boolean
 */
function createHeaderWithNav (boolean) {
  const wrapper = document.getElementsByClassName('wrapper')
  const header = document.createElement('header')
  header.classList.add('header')
  header.setAttribute('role', 'header')
  header.setAttribute('aria-hidden', 'false')

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

/**
 * Create < nav > DOM Element
 */
function createNav () {
  const header = document.getElementsByClassName('header')

  const nav = document.createElement('nav')
  nav.classList.add('header__nav')
  nav.setAttribute('role', 'navigation')
  nav.setAttribute('aria-label', 'photographers categories by HashTags')

  createAncreIndex(nav)

  const ul = document.createElement('ul')
  nav.appendChild(ul)

  const tags = ['Portrait', 'Art', 'Fashion', 'Architecture', 'Travel', 'Sport', 'Animals', 'Events']
  for (const t in tags) {
    const li = createTags(tags[t])
    ul.appendChild(li)
  }

  header[0].appendChild(nav)
}

/**
 * Create < li > DOM Element from a tagname
 * @param {string} tagsName Tag name
 * @returns {Object}
 */
function createTags (tagsName) {
  const li = document.createElement('li')
  li.classList.add('tags')
  li.setAttribute('data-value', tagsName.toLowerCase())
  li.setAttribute('aria-label', 'HashTag ' + tagsName.toLowerCase())

  const a = document.createElement('a')
  a.setAttribute('href', '')
  a.setAttribute('aria-label', 'HashTag ' + tagsName.toLowerCase())
  a.innerHTML = '#' + tagsName

  li.appendChild(a)

  return li
}

/**
 * Create < main > DOM Element with an id && with or without h1 title
 * @param {string} id id value
 * @param {boolean} boolean
 */
function createMainWithTitle (id, boolean) {
  const wrapper = document.getElementsByClassName('wrapper')

  const main = document.createElement('main')
  main.setAttribute('id', id)
  main.setAttribute('role', 'main')
  main.setAttribute('aria-label', 'photographers list')

  if (boolean) {
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Nos photographes'
    main.appendChild(h1)
  }

  wrapper[0].appendChild(main)
}

/**
 * Create < section > DOM Element who contains photographers datas for index
 *  * @param {Object} photographer photographers Objets from json data
 */
function createSectionPhotographers (photographer) {
  const main = document.getElementById('mainIndex')

  const sectionPhotographer = document.createElement('section')
  sectionPhotographer.classList.add('photographer')
  sectionPhotographer.setAttribute('aria-label', 'photographers ' + photographer.name)

  const link = document.createElement('a')
  link.classList.add('photographer__link')
  link.setAttribute('href', './photographer_page.html?id=' + photographer.id)
  sectionPhotographer.appendChild(link)

  const portrait = document.createElement('img')
  portrait.classList.add('photographer__link_portrait')
  portrait.setAttribute('src', './assets/images/photographers/' + photographer.portrait)
  portrait.setAttribute('alt', '')
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

/**
 * Create < section > DOM Element who contains photographers datas for photographer_page
 * @param {Object} photographer photographers Objets from json data
 */
function createSectionPhotographersProfils (photographer) {
  const main = document.getElementById('mainPhotographer')
  main.setAttribute('role', 'main')

  const section = document.createElement('section')
  section.classList.add('photographerProfils')
  section.setAttribute('aria-label', 'photographer informations')

  const h1 = document.createElement('h1')
  h1.classList.add('photographerProfils__name')
  h1.innerHTML = photographer.name
  section.appendChild(h1)

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
    a.setAttribute('aria-label', 'HashTag ' + photographer.tags[t].toLowerCase())
    a.innerHTML = '#' + photographer.tags[t].toLowerCase()
    li.appendChild(a)
  }

  const image = document.createElement('img')
  image.classList.add('photographerProfils__portrait')
  image.setAttribute('src', './assets/images/photographers/' + photographer.portrait)
  image.setAttribute('alt', photographer.name)
  image.setAttribute('aria-hidden', 'true')
  section.appendChild(image)

  const button = document.createElement('button')
  button.classList.add('photographerProfils__contact')
  button.classList.add('button')
  button.innerHTML = 'Contactez-moi'
  section.appendChild(button)

  main.appendChild(section)
}

/**
 * Create < aside > DOM Element who contains photographers like & price data for photographer_page
 * @param {number} nombreDeLike Total number of like
 * @param {Object} photographer photographers Objets from json data
 */
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

/**
 * Create < section > DOM Element with filter menu for photographer_page
 */
function createFiltreAndSectionPhotographerLightbox () {
  const main = document.getElementById('mainPhotographer')

  const section = document.createElement('section')
  section.classList.add('photographerLightbox')
  section.setAttribute('aria-label', 'photographer gallery')
  main.appendChild(section)

  const span = document.createElement('span')
  span.classList.add('photographerLightbox__titre')
  span.setAttribute('id', 'filterGallery')
  span.innerHTML = 'Trier par'
  section.appendChild(span)

  createFiltreMenu()
}

/**
 * Create < figure > DOM Element from a photographers list for photographer_page
 * @param {Object[]} listmedia
 */
function createFigurePhotographerLightbox (listmedia) {
  const section = document.getElementsByClassName('photographerLightbox')

  for (const m in listmedia) {
    const figure = document.createElement('figure')
    if (Object.keys(listmedia[m])[Object.values(listmedia[m]).indexOf(listmedia[m].image)] === 'image') {
      figure.classList.add('photographerLightbox__figure')
      section[0].appendChild(figure)

      const img = document.createElement('img')
      img.classList.add('photographerLightbox__figure_media')
      img.setAttribute('src', './assets/images/photos/' + listmedia[m].image)
      img.setAttribute('alt', listmedia[m].alt)
      img.setAttribute('tabindex', '0')

      figure.appendChild(img)
    }
    if (Object.keys(listmedia[m])[Object.values(listmedia[m]).indexOf(listmedia[m].video)] === 'video') {
      figure.classList.add('photographerLightbox__figure')
      section[0].appendChild(figure)

      const video = document.createElement('video')
      video.classList.add('photographerLightbox__figure_media')
      video.setAttribute('src', './assets/videos/' + listmedia[m].video)
      video.setAttribute('type', 'video/mp4')
      video.setAttribute('title', listmedia[m].alt)
      figure.appendChild(video)
    }

    const figcaption = document.createElement('figcaption')
    figcaption.classList.add('photographerLightbox__info')
    figure.appendChild(figcaption)

    const divFig = document.createElement('div')
    figcaption.appendChild(divFig)

    const pNom = document.createElement('p')
    pNom.classList.add('photographerLightbox__info_nom')
    pNom.innerHTML = listmedia[m].alt
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
    i.classList.add('photographerLightbox__info_heart')
    i.classList.add('far')
    i.classList.add('fa-heart')
    i.setAttribute('aria-label', 'likes')
    i.setAttribute('tabindex', '0')

    figcaption.appendChild(i)
  }
}

/**
 * Create < section > DOM Element modal Lightbox
 * @param {string} link relative media path
 * @param {string} alt media name
 */
function createLightbox (link, alt) {
  const modal = document.getElementById('modal-lightbox')

  const section = document.createElement('section')
  section.classList.add('lightbox')
  section.setAttribute('aria-label', 'image closeup view')
  modal.appendChild(section)

  // lien préccedent
  const ileft = document.createElement('a')
  ileft.classList.add('lightbox__left')
  ileft.setAttribute('href', '#')
  ileft.setAttribute('aria-label', 'previous image')
  ileft.innerHTML = '<i class="fas fa-chevron-left" aria-hidden="true"></i>'
  section.appendChild(ileft)

  // image/video + texte
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
    image.setAttribute('aria-label', alt)
    figure.appendChild(image)
  }

  const figcaption = document.createElement('figcation')
  figcaption.classList.add('lightbox__name')
  figcaption.innerHTML = alt
  figure.appendChild(figcaption)

  // lien suivant
  const iright = document.createElement('a')
  iright.classList.add('lightbox__right')
  iright.setAttribute('href', '#')
  iright.setAttribute('aria-label', 'next image')
  iright.innerHTML = '<i class="fas fa-chevron-right" aria-hidden="true"></i>'
  section.appendChild(iright)

  // Bouton fermer
  const iclose = document.createElement('button')
  iclose.classList.add('lightbox__close')
  iclose.setAttribute('aria-label', 'close dialog')
  iclose.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>'
  section.appendChild(iclose)
}

/**
 * Create < section > DOM Element modal form
 * @param {string} nom Photographer name
 */
function createForm (nom) {
  const modal = document.getElementById('modal-form')

  const form = document.createElement('form')
  form.classList.add('form')
  form.setAttribute('action', '')
  modal.appendChild(form)

  const h1 = document.createElement('h1')
  h1.setAttribute('id', 'titre')
  h1.classList.add('form__titre')
  h1.innerHTML = 'Contactez-moi <br>' + nom
  form.appendChild(h1)

  // Firstname
  const divFirstname = document.createElement('div')
  divFirstname.classList.add('form__firstname')

  const labelFirstname = document.createElement('label')
  labelFirstname.setAttribute('id', 'LabelFirstname')
  labelFirstname.setAttribute('for', 'firstname')
  labelFirstname.innerHTML = 'Prénom'
  divFirstname.appendChild(labelFirstname)

  const inputFirstname = document.createElement('input')
  inputFirstname.setAttribute('id', 'firstname')
  inputFirstname.setAttribute('type', 'text')
  inputFirstname.setAttribute('aria-labelledby', 'labelFirstname')
  inputFirstname.setAttribute('aria-required', 'true')
  inputFirstname.setAttribute('aria-invalid', 'true')
  divFirstname.appendChild(inputFirstname)
  form.appendChild(divFirstname)

  // Lastname
  const divLastname = document.createElement('div')
  divLastname.classList.add('form__lastname')

  const labelLastname = document.createElement('label')
  labelLastname.setAttribute('id', 'labelLastname')
  labelLastname.setAttribute('for', 'lastname')
  labelLastname.innerHTML = 'Nom'
  divLastname.appendChild(labelLastname)

  const inputLastname = document.createElement('input')
  inputLastname.setAttribute('id', 'lastname')
  inputLastname.setAttribute('type', 'text')
  inputLastname.setAttribute('aria-labelledby', 'labelLastname')
  inputLastname.setAttribute('aria-required', 'true')
  inputLastname.setAttribute('aria-invalid', 'true')

  divLastname.appendChild(inputLastname)
  form.appendChild(divLastname)

  // Email
  const divEmail = document.createElement('div')
  divEmail.classList.add('form__email')

  const labelEmail = document.createElement('label')
  labelEmail.setAttribute('id', 'LabelEmail')
  labelEmail.setAttribute('for', 'email')
  labelEmail.innerHTML = 'Email'
  divEmail.appendChild(labelEmail)

  const inputEmail = document.createElement('input')
  inputEmail.setAttribute('id', 'email')
  inputEmail.setAttribute('type', 'text')
  inputEmail.setAttribute('aria-labelledby', 'labelEmail')
  inputEmail.setAttribute('aria-required', 'true')
  inputEmail.setAttribute('aria-invalid', 'true')

  divEmail.appendChild(inputEmail)
  form.appendChild(divEmail)

  // Message
  const divMessage = document.createElement('div')
  divMessage.classList.add('form__message')

  const labelMessage = document.createElement('label')
  labelMessage.setAttribute('for', 'message')
  labelMessage.innerHTML = 'Votre message'
  divMessage.appendChild(labelMessage)

  const textarea = document.createElement('textarea')
  textarea.setAttribute('id', 'message')
  textarea.setAttribute('aria-required', 'true')
  textarea.setAttribute('aria-invalid', 'true')

  divMessage.appendChild(textarea)
  form.appendChild(divMessage)

  // Bouton envoyer
  const button = document.createElement('button')
  button.classList.add('form__button')
  button.classList.add('button')
  button.setAttribute('value', 'send')
  button.innerHTML = 'Envoyer'
  form.appendChild(button)

  // Bouton fermer
  const buttonClose = document.createElement('button')
  buttonClose.classList.add('form__close')
  buttonClose.setAttribute('aria-label', 'Close Contact form')
  buttonClose.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>'
  form.appendChild(buttonClose)
}

/**
 * Create < a > DOM Element who is anchor to the main content
 * @param {HTMLElement} dom HTML DOM parentElement
 */
function createAncreIndex (dom) {
  const a = document.createElement('a')
  a.classList.add('ancreIndex')
  a.setAttribute('href', '#mainIndex')
  a.innerHTML = 'Passer au contenu'

  dom.appendChild(a)
}

/**
 * Create < button > DOM Element who is the filter menu for the lightbox
 */
function createFiltreMenu () {
  const section = document.getElementsByClassName('photographerLightbox')

  const div = document.createElement('div')
  div.classList.add('filtreMenu')
  section[0].appendChild(div)

  const btn = document.createElement('button')
  btn.classList.add('filtreMenu__bouton')
  btn.innerHTML = 'Popularité' + '<span class="fas fa-chevron-up"></span>'
  btn.setAttribute('aria-haspopup', 'true')
  btn.setAttribute('aria-expanded', 'false')
  btn.setAttribute('aria-labelledby', 'filterGallery')
  div.appendChild(btn)

  const ul = document.createElement('ul')
  ul.setAttribute('id', 'listbox')
  ul.classList.add('filtreMenu__list')
  ul.setAttribute('role', 'listbox')
  ul.setAttribute('aria-labelledby', 'filterGallery')
  div.appendChild(ul)

  const li1 = document.createElement('li')
  li1.classList.add('filtreMenu__list_populaire')
  li1.setAttribute('role', 'option')
  li1.setAttribute('tabindex', '0')
  li1.setAttribute('aria-label', 'Trier par popularité')
  li1.innerHTML = 'Popularité' + '<span class="fas fa-chevron-down"></span>'
  ul.appendChild(li1)

  const li2 = document.createElement('li')
  li2.classList.add('filtreMenu__list_date')
  li2.setAttribute('role', 'option')
  li2.setAttribute('tabindex', '0')
  li2.setAttribute('aria-label', 'Trier par data')
  li2.innerHTML = 'Date'
  ul.appendChild(li2)

  const li3 = document.createElement('li')
  li3.classList.add('filtreMenu__list_titre')
  li3.setAttribute('role', 'option')
  li3.setAttribute('tabindex', '0')
  li3.setAttribute('aria-label', 'Trier par ordre alphabétique')
  li3.innerHTML = 'Titre'
  ul.appendChild(li3)
}

export {
  createHeaderWithNav,
  createMainWithTitle,
  createSectionPhotographers,
  createSectionPhotographersProfils,
  createAsidePhotographersInfo,
  createFiltreAndSectionPhotographerLightbox,
  createFigurePhotographerLightbox,
  createLightbox,
  createForm
}
