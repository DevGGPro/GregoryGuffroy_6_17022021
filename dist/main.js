/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPhotographerById": () => (/* binding */ getPhotographerById),
/* harmony export */   "getPhotographerByTagsList": () => (/* binding */ getPhotographerByTagsList),
/* harmony export */   "getNumberOfLikeByPhotographerId": () => (/* binding */ getNumberOfLikeByPhotographerId),
/* harmony export */   "getListMediaFromPhotographerId": () => (/* binding */ getListMediaFromPhotographerId)
/* harmony export */ });
/* harmony import */ var _assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/data/FishEyeDataFR.json */ "./src/assets/data/FishEyeDataFR.json");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
// on importe la base de donnée



function getPhotographerById(id) {
  for (var p in _assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.photographers) {
    if (_assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.photographers[p].id === parseInt(id)) {
      return _assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.photographers[p];
    }
  }

  return false;
}

function getPhotographerByTagsList(liste) {
  var listPhotographerTmp = [];
  var listPhotographer = [];

  for (var d in _assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.photographers) {
    for (var t in _assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.photographers[d].tags) {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isInList)(_assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.photographers[d].tags[t], liste)) {
        listPhotographerTmp.push(_assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.photographers[d]);
      }
    }
  }

  listPhotographer = Array.from(new Set(listPhotographerTmp));
  return listPhotographer;
}

function getNumberOfLikeByPhotographerId(id) {
  var n = 0;

  for (var m in _assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.media) {
    if (_assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.media[m].photographerId === parseInt(id)) {
      n += _assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.media[m].likes;
    }
  }

  return n;
}

function getListMediaFromPhotographerId(id) {
  var listMedia = [];

  for (var m in _assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.media) {
    if (_assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.media[m].photographerId === parseInt(id)) {
      listMedia.push(_assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.media[m]);
    }
  }

  return listMedia;
}



/***/ }),

/***/ "./src/js/factoryElements.js":
/*!***********************************!*\
  !*** ./src/js/factoryElements.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeaderWithNav": () => (/* binding */ createHeaderWithNav),
/* harmony export */   "createMainWithTitle": () => (/* binding */ createMainWithTitle),
/* harmony export */   "createSectionPhotographers": () => (/* binding */ createSectionPhotographers),
/* harmony export */   "createSectionPhotographersProfils": () => (/* binding */ createSectionPhotographersProfils),
/* harmony export */   "createAsidePhotographersInfo": () => (/* binding */ createAsidePhotographersInfo),
/* harmony export */   "createFiltreAndSectionPhotographerLightbox": () => (/* binding */ createFiltreAndSectionPhotographerLightbox),
/* harmony export */   "createFigurePhotographerLightbox": () => (/* binding */ createFigurePhotographerLightbox),
/* harmony export */   "createLightbox": () => (/* binding */ createLightbox),
/* harmony export */   "createForm": () => (/* binding */ createForm)
/* harmony export */ });
function createHeaderWithNav(boolean) {
  var wrapper = document.getElementsByClassName('wrapper');
  var header = document.createElement('header');
  header.classList.add('header');
  var a = document.createElement('a');
  a.classList.add('header__image');
  a.setAttribute('href', 'index.html');
  header.appendChild(a);
  var image = document.createElement('img');
  image.setAttribute('src', './assets/images/logo/logo.png');
  image.setAttribute('alt', 'FishEye Home Page');
  a.appendChild(image);
  wrapper[0].appendChild(header);

  if (boolean) {
    createNav();
  }
}

function createNav() {
  var header = document.getElementsByClassName('header');
  var nav = document.createElement('nav');
  nav.classList.add('header__nav');
  createAncreIndex(nav);
  var ul = document.createElement('ul');
  nav.appendChild(ul);
  var tags = ['Portrait', 'Art', 'Fashion', 'Architecture', 'Travel', 'Sport', 'Animals', 'Events'];

  for (var t in tags) {
    var li = createTags(tags[t]);
    ul.appendChild(li);
  }

  header[0].appendChild(nav);
}

function createTags(tagsName) {
  var li = document.createElement('li');
  li.classList.add('tags');
  li.setAttribute('data-value', tagsName.toLowerCase());
  var a = document.createElement('a');
  a.setAttribute('href', '');
  a.innerHTML = '#' + tagsName;
  li.appendChild(a);
  return li;
}

function createMainWithTitle(id, boolean) {
  var wrapper = document.getElementsByClassName('wrapper');
  var main = document.createElement('main');
  main.setAttribute('id', id);

  if (boolean) {
    var h1 = document.createElement('h1');
    h1.innerHTML = 'Nos photographes';
    main.appendChild(h1);
  }

  wrapper[0].appendChild(main);
}

function createSectionPhotographers(photographer) {
  var main = document.getElementById('mainIndex');
  var sectionPhotographer = document.createElement('section');
  sectionPhotographer.classList.add('photographer');
  var link = document.createElement('a');
  link.classList.add('photographer__link');
  link.setAttribute('href', './photographer_page.html?id=' + photographer.id);
  sectionPhotographer.appendChild(link);
  var portrait = document.createElement('img');
  portrait.classList.add('photographer__link_portrait');
  portrait.setAttribute('src', './assets/images/photographers/' + photographer.portrait);
  portrait.setAttribute('alt', 'Portrait de ' + photographer.name);
  portrait.setAttribute('aria-hidden', 'true');
  link.appendChild(portrait);
  var name = document.createElement('h2');
  name.classList.add('photographer__link_name');
  name.innerHTML = photographer.name;
  link.appendChild(name);
  var city = document.createElement('p');
  city.classList.add('photographer__city');
  city.innerHTML = photographer.city;
  sectionPhotographer.appendChild(city);
  var tagline = document.createElement('p');
  tagline.classList.add('photographer__tagline');
  tagline.innerHTML = photographer.tagline;
  sectionPhotographer.appendChild(tagline);
  var price = document.createElement('p');
  price.classList.add('photographer__price');
  price.innerHTML = photographer.price + '€/jour';
  sectionPhotographer.appendChild(price);
  var tags = document.createElement('ul');
  tags.classList.add('photographer__tags');

  for (var tag in photographer.tags) {
    var li = createTags(photographer.tags[tag]);
    tags.appendChild(li);
  }

  sectionPhotographer.appendChild(tags);
  main.appendChild(sectionPhotographer);
}

function createSectionPhotographersProfils(photographer) {
  var main = document.getElementById('mainPhotographer');
  var section = document.createElement('section');
  section.classList.add('photographerProfils');
  var div = document.createElement('div');
  var h1 = document.createElement('h1');
  h1.classList.add('photographerProfils__name');
  h1.innerHTML = photographer.name;
  div.appendChild(h1);
  var button = document.createElement('button');
  button.classList.add('photographerProfils__contact');
  button.classList.add('button');
  button.innerHTML = 'Contactez-moi';
  div.appendChild(button);
  section.appendChild(div);
  var pCity = document.createElement('p');
  pCity.classList.add('photographerProfils__city');
  pCity.innerHTML = photographer.city;
  section.appendChild(pCity);
  var pTagline = document.createElement('p');
  pTagline.classList.add('photographerProfils__tagline');
  pTagline.innerHTML = photographer.tagline;
  section.appendChild(pTagline);
  var ul = document.createElement('ul');
  ul.classList.add('photographerProfils__tags');
  section.appendChild(ul);

  for (var t in photographer.tags) {
    var li = document.createElement('li');
    li.classList.add('tags');
    li.setAttribute('data-value', photographer.tags[t].toLowerCase());
    ul.appendChild(li);
    var a = document.createElement('a');
    a.setAttribute('href', 'index.html?tags=' + photographer.tags[t].toLowerCase());
    a.innerHTML = '#' + photographer.tags[t].toLowerCase();
    li.appendChild(a);
  }

  var image = document.createElement('img');
  image.classList.add('photographerProfils__portrait');
  image.setAttribute('src', './assets/images/photographers/' + photographer.portrait);
  image.setAttribute('alt', photographer.name);
  section.appendChild(image);
  main.appendChild(section);
}

function createAsidePhotographersInfo(nombreDeLike, photographer) {
  var main = document.getElementById('mainPhotographer');
  var aside = document.createElement('aside');
  aside.classList.add('photographerInfo');
  var plike = document.createElement('p');
  plike.classList.add('photographerInfo__like');
  plike.innerHTML = nombreDeLike;
  aside.appendChild(plike);
  var i = document.createElement('i');
  i.classList.add('fas');
  i.classList.add('fa-heart');
  aside.appendChild(i);
  var price = document.createElement('p');
  price.classList.add('photographerInfo__price');
  price.innerHTML = photographer.price + '€/jour';
  aside.appendChild(price);
  main.appendChild(aside);
}

function createFiltreAndSectionPhotographerLightbox() {
  var main = document.getElementById('mainPhotographer');
  var section = document.createElement('section');
  section.classList.add('photographerLightbox');
  main.appendChild(section);
  var h2 = document.createElement('h2');
  h2.classList.add('photographerLightbox__titre');
  h2.innerHTML = 'Trier par';
  section.appendChild(h2);
  createFiltreMenu();
}

function createFigurePhotographerLightbox(listmedia) {
  var section = document.getElementsByClassName('photographerLightbox');

  for (var m in listmedia) {
    var figure = document.createElement('figure');

    if (Object.keys(listmedia[m])[Object.values(listmedia[m]).indexOf(listmedia[m].image)] === 'image') {
      figure.classList.add('photographerLightbox__figure');
      section[0].appendChild(figure);
      var img = document.createElement('img');
      img.classList.add('photographerLightbox__figure_media');
      img.setAttribute('src', './assets/images/photos/' + listmedia[m].image);
      img.setAttribute('alt', listmedia[m].alt);
      figure.appendChild(img);
    }

    if (Object.keys(listmedia[m])[Object.values(listmedia[m]).indexOf(listmedia[m].video)] === 'video') {
      figure.classList.add('photographerLightbox__figure');
      section[0].appendChild(figure);
      var video = document.createElement('video');
      video.classList.add('photographerLightbox__figure_media');
      video.setAttribute('src', './assets/videos/' + listmedia[m].video);
      video.setAttribute('type', 'video/mp4');
      video.setAttribute('title', listmedia[m].alt);
      figure.appendChild(video);
    }

    var figcaption = document.createElement('figcaption');
    figcaption.classList.add('photographerLightbox__info');
    figure.appendChild(figcaption);
    var divFig = document.createElement('div');
    figcaption.appendChild(divFig);
    var pNom = document.createElement('p');
    pNom.classList.add('photographerLightbox__info_nom');
    pNom.innerHTML = listmedia[m].alt;
    divFig.appendChild(pNom);
    var price = document.createElement('p');
    price.classList.add('photographerLightbox__info_price');
    price.innerHTML = listmedia[m].price + '€';
    divFig.appendChild(price);
    var span = document.createElement('span');
    span.classList.add('photographerLightbox__info_like');
    span.innerHTML = listmedia[m].likes;
    figcaption.appendChild(span);
    var i = document.createElement('span');
    i.classList.add('far');
    i.classList.add('fa-heart');
    i.classList.add('photographerLightbox__info_heart');
    figcaption.appendChild(i);
  }
}

function createLightbox(link, alt) {
  var modal = document.getElementById('modal-lightbox');
  var section = document.createElement('section');
  section.classList.add('lightbox');
  modal.appendChild(section);
  var ileft = document.createElement('i');
  ileft.classList.add('fas');
  ileft.classList.add('fa-chevron-left');
  ileft.classList.add('lightbox__left');
  section.appendChild(ileft);
  var figure = document.createElement('figure');
  figure.classList.add('lightbox__figure');
  section.appendChild(figure);

  if (link.includes('mp4')) {
    var video = document.createElement('video');
    video.classList.add('lightbox__figure_media');
    video.setAttribute('src', link);
    video.setAttribute('type', 'video/mp4');
    video.setAttribute('controls', null);
    figure.appendChild(video);
  } else {
    var image = document.createElement('img');
    image.classList.add('lightbox__figure_media');
    image.setAttribute('src', link);
    image.setAttribute('alt', alt);
    figure.appendChild(image);
  }

  var figcaption = document.createElement('figcation');
  figcaption.classList.add('lightbox__name');
  figcaption.innerHTML = alt;
  figure.appendChild(figcaption);
  var iright = document.createElement('i');
  iright.classList.add('fas');
  iright.classList.add('fa-chevron-right');
  iright.classList.add('lightbox__right');
  section.appendChild(iright);
  var iclose = document.createElement('i');
  iclose.classList.add('fas');
  iclose.classList.add('fa-times');
  iclose.classList.add('lightbox__close');
  section.appendChild(iclose);
}

function createForm(nom) {
  var modal = document.getElementById('modal-form');
  var form = document.createElement('form');
  form.classList.add('form');
  form.setAttribute('action', '');
  modal.appendChild(form);
  var h1 = document.createElement('h1');
  h1.classList.add('form__titre');
  h1.innerHTML = 'Contactez-moi <br>' + nom;
  form.appendChild(h1);
  var divFirstname = document.createElement('div');
  divFirstname.classList.add('form__firstname');
  var labelFirstname = document.createElement('label');
  labelFirstname.setAttribute('for', 'firstname');
  labelFirstname.innerHTML = 'Prénom';
  divFirstname.appendChild(labelFirstname);
  var inputFirstname = document.createElement('input');
  inputFirstname.setAttribute('id', 'firstname');
  inputFirstname.setAttribute('type', 'text');
  divFirstname.appendChild(inputFirstname);
  form.appendChild(divFirstname);
  var divLastname = document.createElement('div');
  divLastname.classList.add('form__lastname');
  var labelLastname = document.createElement('label');
  labelLastname.setAttribute('for', 'lastname');
  labelLastname.innerHTML = 'Nom';
  divLastname.appendChild(labelLastname);
  var inputLastname = document.createElement('input');
  inputLastname.setAttribute('id', 'lastname');
  inputLastname.setAttribute('type', 'text');
  divLastname.appendChild(inputLastname);
  form.appendChild(divLastname);
  var divEmail = document.createElement('div');
  divEmail.classList.add('form__email');
  var labelEmail = document.createElement('label');
  labelEmail.setAttribute('for', 'email');
  labelEmail.innerHTML = 'Email';
  divEmail.appendChild(labelEmail);
  var inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'email');
  inputEmail.setAttribute('type', 'text');
  divEmail.appendChild(inputEmail);
  form.appendChild(divEmail);
  var divMessage = document.createElement('div');
  divMessage.classList.add('form__message');
  var labelMessage = document.createElement('label');
  labelMessage.setAttribute('for', 'message');
  labelMessage.innerHTML = 'Votre message';
  divMessage.appendChild(labelMessage);
  var textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'message');
  divMessage.appendChild(textarea);
  form.appendChild(divMessage);
  var button = document.createElement('button');
  button.classList.add('form__button');
  button.classList.add('button');
  button.innerHTML = 'Envoyer';
  form.appendChild(button);
  var i = document.createElement('i');
  i.classList.add('fas');
  i.classList.add('fa-times');
  i.classList.add('form__close');
  form.appendChild(i);
}

function createAncreIndex(dom) {
  var a = document.createElement('a');
  a.classList.add('ancreIndex');
  a.setAttribute('href', '#mainIndex');
  a.innerHTML = 'Passer au contenu';
  dom.appendChild(a);
}

function createFiltreMenu() {
  var section = document.getElementsByClassName('photographerLightbox');
  var div = document.createElement('div');
  div.classList.add('filtreMenu');
  section[0].appendChild(div);
  var btn = document.createElement('button');
  btn.classList.add('filtreMenu__bouton');
  btn.innerHTML = 'Popularité' + '<span class="fas fa-chevron-up"></span>';
  div.appendChild(btn);
  var ul = document.createElement('ul');
  ul.classList.add('filtreMenu__list');
  div.appendChild(ul);
  var li1 = document.createElement('li');
  li1.classList.add('filtreMenu__list_populaire');
  li1.innerHTML = 'Popularité' + '<span class="fas fa-chevron-down"></span>';
  ul.appendChild(li1);
  var li2 = document.createElement('li');
  li2.classList.add('filtreMenu__list_date');
  li2.innerHTML = 'Date';
  ul.appendChild(li2);
  var li3 = document.createElement('li');
  li3.classList.add('filtreMenu__list_titre');
  li3.innerHTML = 'Titre';
  ul.appendChild(li3);
}



/***/ }),

/***/ "./src/js/factoryPages.js":
/*!********************************!*\
  !*** ./src/js/factoryPages.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateIndexHtml": () => (/* binding */ generateIndexHtml),
/* harmony export */   "generatePhotographerPageHtml": () => (/* binding */ generatePhotographerPageHtml)
/* harmony export */ });
/* harmony import */ var _assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/data/FishEyeDataFR.json */ "./src/assets/data/FishEyeDataFR.json");
/* harmony import */ var _modalLightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalLightbox */ "./src/js/modalLightbox.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _factoryElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factoryElements */ "./src/js/factoryElements.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");






function generateIndexHtml() {
  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_3__.createHeaderWithNav)(true);
  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_3__.createMainWithTitle)('mainIndex', true);
  (0,_utils__WEBPACK_IMPORTED_MODULE_4__.ancreController)();
  var navTags;
  var listPhotographer;
  var listeTags;
  var url = new URL(window.location.href); // Au chargement de la page

  listeTags = url.searchParams.getAll('tags');

  if (listeTags.length === 0) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createPhotographerfromList)(_assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.photographers);
    navTags = document.querySelectorAll('li.tags');
  } else {
    listPhotographer = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getPhotographerByTagsList)(listeTags);
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createPhotographerfromList)(listPhotographer);
    navTags = document.querySelectorAll('li.tags');

    var _loop = function _loop(t) {
      navTags.forEach(function (li) {
        if (li.getAttribute('data-value') === listeTags[t]) {
          (0,_utils__WEBPACK_IMPORTED_MODULE_4__.changeTagsStyle)(li, '#901C1C', '#FFF');
        }
      });
    };

    for (var t in listeTags) {
      _loop(t);
    }
  } // Quand on click sur un tag


  navTags.forEach(function (li) {
    li.addEventListener('click', reloadPageSection);
  });

  function reloadPageSection() {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.clearMainIndex)();
    var tag = this.getAttribute('data-value');

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isInList)(tag, listeTags)) {
      listeTags = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.deleteFromList)(tag, listeTags);
      url.searchParams.delete('tags');

      for (var _t in listeTags) {
        url.searchParams.append('tags', listeTags[_t]);
      }

      window.history.replaceState(null, null, url);
      listPhotographer = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getPhotographerByTagsList)(listeTags);

      if (listeTags.length === 0) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createPhotographerfromList)(_assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.photographers);
        navTags = document.querySelectorAll('li.tags');
      }

      (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createPhotographerfromList)(listPhotographer);
      navTags = document.querySelectorAll('li.tags');
      navTags.forEach(function (li) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.changeTagsStyle)(li, '#FFF', '#901C1C');
      });

      var _loop2 = function _loop2(_t2) {
        navTags.forEach(function (li) {
          if (li.getAttribute('data-value') === listeTags[_t2]) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_4__.changeTagsStyle)(li, '#901C1C', '#FFF');
          }
        });
      };

      for (var _t2 in listeTags) {
        _loop2(_t2);
      }

      navTags.forEach(function (li) {
        li.addEventListener('click', reloadPageSection);
      });
    } else {
      (0,_utils__WEBPACK_IMPORTED_MODULE_4__.addToList)(tag, listeTags);
      url.searchParams.delete('tags');

      for (var _t3 in listeTags) {
        url.searchParams.append('tags', listeTags[_t3]);
      }

      window.history.replaceState(null, null, url);
      listPhotographer = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getPhotographerByTagsList)(listeTags);
      (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createPhotographerfromList)(listPhotographer);
      navTags = document.querySelectorAll('li.tags');

      var _loop3 = function _loop3(_t4) {
        navTags.forEach(function (li) {
          if (li.getAttribute('data-value') === listeTags[_t4]) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_4__.changeTagsStyle)(li, '#901C1C', '#FFF');
          }
        });
      };

      for (var _t4 in listeTags) {
        _loop3(_t4);
      }

      navTags.forEach(function (li) {
        li.addEventListener('click', reloadPageSection);
      });
    }
  }
}

function generatePhotographerPageHtml() {
  var url = new URL(window.location.href);
  var id = url.searchParams.get('id'); // On créer un header avec ou sans nav

  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_3__.createHeaderWithNav)(false); // on créer un main avec un id spécifique et avec ou sans titre principal

  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_3__.createMainWithTitle)('mainPhotographer', false); // On créer une section contenant les informations du photographe spécifié dans l'url

  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_3__.createSectionPhotographersProfils)((0,_data__WEBPACK_IMPORTED_MODULE_2__.getPhotographerById)(id)); // on créer la section contenant les médias puis on créer et ajoute le filtre de tri

  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_3__.createFiltreAndSectionPhotographerLightbox)(); // on créer des figures contenant les differents médias et on les ajoutent à la section

  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_3__.createFigurePhotographerLightbox)((0,_utils__WEBPACK_IMPORTED_MODULE_4__.orderByLikes)((0,_data__WEBPACK_IMPORTED_MODULE_2__.getListMediaFromPhotographerId)(id))); // on recupère le nombre de like total par photographer et on créer l'aside récapitulatif

  var likeTotalFromData = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getNumberOfLikeByPhotographerId)(id);
  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_3__.createAsidePhotographersInfo)(likeTotalFromData, (0,_data__WEBPACK_IMPORTED_MODULE_2__.getPhotographerById)(id)); // On contrôle et update les likes de la section et update celui de l'aside

  (0,_utils__WEBPACK_IMPORTED_MODULE_4__.likeController)(likeTotalFromData); // le FiltreMenu

  var btnMenu = document.getElementsByClassName('filtreMenu__bouton');
  var ulListMenu = document.getElementsByClassName('filtreMenu__list');
  var liListMenu = document.querySelectorAll('ul.filtreMenu__list > li');
  btnMenu[0].addEventListener('click', function (e) {
    ulListMenu[0].style.display = 'block';
  });
  liListMenu.forEach(function (li) {
    li.addEventListener('click', function (e) {
      btnMenu[0].innerHTML = e.target.innerText + '<span class="fas fa-chevron-up" aria-hidden="true"></span>';
      ulListMenu[0].style.display = 'none';

      if (e.target.innerText === 'Popularité') {
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.clearFigure)();
        (0,_factoryElements__WEBPACK_IMPORTED_MODULE_3__.createFigurePhotographerLightbox)((0,_utils__WEBPACK_IMPORTED_MODULE_4__.orderByLikes)((0,_data__WEBPACK_IMPORTED_MODULE_2__.getListMediaFromPhotographerId)(id)));
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.likeController)(likeTotalFromData);
        (0,_modalLightbox__WEBPACK_IMPORTED_MODULE_1__.cleanLightbox)();
        (0,_modalLightbox__WEBPACK_IMPORTED_MODULE_1__.lightbox)();
      }

      if (e.target.innerText === 'Date') {
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.clearFigure)();
        (0,_factoryElements__WEBPACK_IMPORTED_MODULE_3__.createFigurePhotographerLightbox)((0,_utils__WEBPACK_IMPORTED_MODULE_4__.orderByDate)((0,_data__WEBPACK_IMPORTED_MODULE_2__.getListMediaFromPhotographerId)(id)));
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.likeController)(likeTotalFromData);
        (0,_modalLightbox__WEBPACK_IMPORTED_MODULE_1__.cleanLightbox)();
        (0,_modalLightbox__WEBPACK_IMPORTED_MODULE_1__.lightbox)();
      }

      if (e.target.innerText === 'Titre') {
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.clearFigure)();
        (0,_factoryElements__WEBPACK_IMPORTED_MODULE_3__.createFigurePhotographerLightbox)((0,_utils__WEBPACK_IMPORTED_MODULE_4__.orderByName)((0,_data__WEBPACK_IMPORTED_MODULE_2__.getListMediaFromPhotographerId)(id)));
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.likeController)(likeTotalFromData);
        (0,_modalLightbox__WEBPACK_IMPORTED_MODULE_1__.cleanLightbox)();
        (0,_modalLightbox__WEBPACK_IMPORTED_MODULE_1__.lightbox)();
      }
    });
  });
}



/***/ }),

/***/ "./src/js/modalForm.js":
/*!*****************************!*\
  !*** ./src/js/modalForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formulaire": () => (/* binding */ formulaire)
/* harmony export */ });
/* harmony import */ var _factoryElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryElements */ "./src/js/factoryElements.js");

var emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var modal = document.getElementById('modal-form');
var form = document.getElementsByClassName('form');
var openForm = document.getElementsByClassName('photographerProfils__contact');
var closeForm = document.getElementsByClassName('form__close');
var firstnameIsValide = false;
var lastnameIsValide = false;
var emailIsValide = false;
var messageIsValide = false;

function formulaire() {
  openForm[0].addEventListener('click', function (e) {
    launchModal();
    (0,_factoryElements__WEBPACK_IMPORTED_MODULE_0__.createForm)(e.target.previousElementSibling.innerText);
    var inputFirstname = document.getElementById('firstname');
    var inputLastname = document.getElementById('lastname');
    var inputEmail = document.getElementById('email');
    var inputMessage = document.getElementById('message');
    form[0].addEventListener('submit', function (e) {
      if (!firstnameIsValide || !lastnameIsValide || !emailIsValide || !messageIsValide) {
        e.preventDefault();
        formInputErreur(inputFirstname);
        formInputErreur(inputLastname);
        formInputErreur(inputEmail);
        formInputErreur(inputMessage);
      } else {
        console.log('Prenom => ' + inputFirstname.value);
        console.log('Nom => ' + inputLastname.value);
        console.log('Email => ' + inputEmail.value);
        console.log('Message => ' + inputMessage.value);
        closeModal();
      }
    });
    inputFirstname.addEventListener('input', function (e) {
      formInputErreur(inputFirstname);
    });
    inputLastname.addEventListener('input', function (e) {
      formInputErreur(inputLastname);
    });
    inputEmail.addEventListener('input', function (e) {
      formInputErreur(inputEmail);
    });
    inputMessage.addEventListener('input', function (e) {
      formInputErreur(inputMessage);
    });
    closeForm[0].addEventListener('click', closeModal);
  });
}

function launchModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
  cleanform();
}

function cleanform() {
  var modal = document.getElementById('modal-form');
  modal.innerHTML = '';
}

function formInputErreur(dom) {
  if (dom.parentElement.lastChild.className === 'form__erreur') {
    dom.parentElement.removeChild(dom.parentElement.lastChild);
  }

  if (dom.id === 'firstname') {
    if (dom.value.trim().length < 2) {
      isErreur(dom, 'Le prénom doit contenir au moins 2 caractères', true);
      firstnameIsValide = false;
    } else {
      isErreur(dom, 'Le prénom doit contenir au moins 2 caractères', false);
      firstnameIsValide = true;
    }
  }

  if (dom.id === 'lastname') {
    if (dom.value.trim().length < 2) {
      isErreur(dom, 'Le nom doit contenir au moins 2 caractères', true);
      lastnameIsValide = false;
    } else {
      isErreur(dom, 'Le nom doit contenir au moins 2 caractères', false);
      lastnameIsValide = true;
    }
  }

  if (dom.id === 'email') {
    if (!emailRegEx.test(dom.value.trim())) {
      isErreur(dom, 'L\'email doit être valide / ou ne pas être vide', true);
      emailIsValide = false;
    } else {
      isErreur(dom, 'L\'email doit être valide / ou ne pas être vide', false);
      emailIsValide = true;
    }
  }

  if (dom.id === 'message') {
    if (dom.value.trim().length === 0) {
      isErreur(dom, 'Le message ne doit pas être vide', true);
      messageIsValide = false;
    } else {
      isErreur(dom, 'Le message ne doit pas être vide', false);
      messageIsValide = true;
    }
  }
}

function isErreur(dom, message, boolean) {
  if (boolean) {
    dom.style.border = 'solid 2px red';
    dom.style.color = 'red';
    var spanErreur = document.createElement('span');
    spanErreur.classList.add('form__erreur');
    spanErreur.innerHTML = message;
    dom.parentElement.appendChild(spanErreur);
  } else {
    dom.style.border = 'none';
    dom.style.color = 'black';
  }
}



/***/ }),

/***/ "./src/js/modalLightbox.js":
/*!*********************************!*\
  !*** ./src/js/modalLightbox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lightbox": () => (/* binding */ lightbox),
/* harmony export */   "cleanLightbox": () => (/* binding */ cleanLightbox)
/* harmony export */ });
/* harmony import */ var _factoryElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryElements */ "./src/js/factoryElements.js");

var body = document.getElementsByTagName('body');
var modal = document.getElementById('modal-lightbox');
var close = document.getElementsByClassName('lightbox__close');
var previous = document.getElementsByClassName('lightbox__left');
var next = document.getElementsByClassName('lightbox__right');

function lightbox() {
  var media = document.getElementsByClassName('photographerLightbox__figure_media');
  var index;

  var _loop = function _loop(i) {
    media[i].addEventListener('click', function (e) {
      index = i;
      launchModal();
      cleanLightbox();

      if (e.target.localName === 'video') {
        (0,_factoryElements__WEBPACK_IMPORTED_MODULE_0__.createLightbox)(e.target.attributes.src.nodeValue, e.target.title);
      } else {
        (0,_factoryElements__WEBPACK_IMPORTED_MODULE_0__.createLightbox)(e.target.attributes.src.nodeValue, e.target.alt);
      }

      close[0].addEventListener('click', closeModal);
      previous[0].addEventListener('click', previousMedia);
      next[0].addEventListener('click', nextMedia);
      window.addEventListener('keydown', function (k) {
        if (k.key === 'ArrowLeft') {
          previousMedia();
        }

        if (k.key === 'ArrowRight') {
          nextMedia();
        }

        if (k.key === 'Escape') {
          closeModal();
        }
      });
    });
  };

  for (var i = 0; i < media.length; i++) {
    _loop(i);
  }

  function previousMedia() {
    index -= 1;

    if (index === -1) {
      index = media.length - 1;
    }

    cleanLightbox();

    if (media[index].tagName === 'VIDEO') {
      (0,_factoryElements__WEBPACK_IMPORTED_MODULE_0__.createLightbox)(media[index].attributes.src.nodeValue, media[index].title);
    } else {
      (0,_factoryElements__WEBPACK_IMPORTED_MODULE_0__.createLightbox)(media[index].attributes.src.nodeValue, media[index].alt);
    }

    close[0].addEventListener('click', closeModal);
    previous[0].addEventListener('click', previousMedia);
    next[0].addEventListener('click', nextMedia);
  }

  function nextMedia() {
    index += 1;

    if (index === media.length) {
      index = 0;
    }

    cleanLightbox();

    if (media[index].tagName === 'VIDEO') {
      (0,_factoryElements__WEBPACK_IMPORTED_MODULE_0__.createLightbox)(media[index].attributes.src.nodeValue, media[index].title);
    } else {
      (0,_factoryElements__WEBPACK_IMPORTED_MODULE_0__.createLightbox)(media[index].attributes.src.nodeValue, media[index].alt);
    }

    close[0].addEventListener('click', closeModal);
    previous[0].addEventListener('click', previousMedia);
    next[0].addEventListener('click', nextMedia);
  }
}

function launchModal() {
  body[0].style.overflow = 'hidden';
  modal.style.display = 'block';
}

function closeModal() {
  body[0].style.overflow = 'auto';
  modal.style.display = 'none';
}

function cleanLightbox() {
  var modal = document.getElementById('modal-lightbox');
  modal.innerHTML = '';
}



/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearMainIndex": () => (/* binding */ clearMainIndex),
/* harmony export */   "clearFigure": () => (/* binding */ clearFigure),
/* harmony export */   "isInList": () => (/* binding */ isInList),
/* harmony export */   "addToList": () => (/* binding */ addToList),
/* harmony export */   "deleteFromList": () => (/* binding */ deleteFromList),
/* harmony export */   "changeTagsStyle": () => (/* binding */ changeTagsStyle),
/* harmony export */   "ancreController": () => (/* binding */ ancreController),
/* harmony export */   "likeController": () => (/* binding */ likeController),
/* harmony export */   "createPhotographerfromList": () => (/* binding */ createPhotographerfromList),
/* harmony export */   "orderByLikes": () => (/* binding */ orderByLikes),
/* harmony export */   "orderByDate": () => (/* binding */ orderByDate),
/* harmony export */   "orderByName": () => (/* binding */ orderByName)
/* harmony export */ });
/* harmony import */ var _factoryElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryElements */ "./src/js/factoryElements.js");


function clearMainIndex() {
  var main = document.getElementsByTagName('main');
  main.id = 'mainIndex';
  main[0].innerHTML = '';
  var titre = document.createElement('h1');
  titre.innerHTML = 'Nos photographes';
  main[0].appendChild(titre);
}

function clearFigure() {
  var figure = document.querySelectorAll('figure.photographerLightbox__figure');
  figure.forEach(function (e) {
    e.remove();
  });
}

function isInList(valeur, liste) {
  if (liste.lenght === 0) {
    return false;
  }

  for (var l in liste) {
    if (liste[l] === valeur) {
      return true;
    }
  }

  return false;
}

function addToList(valeur, liste) {
  if (!isInList(valeur, liste)) {
    liste.push(valeur);
  }
}

function deleteFromList(valeur, liste) {
  liste = liste.filter(function (item) {
    return item !== valeur;
  });
  return liste;
}

function changeTagsStyle(dom, bgColor, color) {
  dom.style.backgroundColor = bgColor;
  dom.firstChild.style.color = color;
}

function ancreController() {
  var ancre = document.getElementsByClassName('ancreIndex');
  window.addEventListener('scroll', function (e) {
    if (window.scrollY <= 100) {
      ancre[0].style.display = 'block';
    } else {
      ancre[0].style.display = 'none';
    }
  });
}

function likeController(likeTotalFromData) {
  var asideLike = document.getElementsByClassName('photographerInfo__like');
  var figureHeart = document.querySelectorAll('span.photographerLightbox__info_heart');
  figureHeart.forEach(function (span) {
    var isLike = false;
    var likeFromFigure = parseInt(span.previousSibling.innerHTML);
    span.addEventListener('click', function (e) {
      if (isLike) {
        isLike = false;
        likeFromFigure -= 1;
        likeTotalFromData -= 1;
        asideLike[0].innerHTML = likeTotalFromData;
        span.previousSibling.innerHTML = likeFromFigure;
        span.classList.replace('fas', 'far');
      } else {
        isLike = true;
        likeFromFigure += 1;
        likeTotalFromData += 1;
        asideLike[0].innerHTML = likeTotalFromData;
        span.previousSibling.innerHTML = likeFromFigure;
        span.classList.replace('far', 'fas');
      }
    });
  });
}

function createPhotographerfromList(liste) {
  for (var l in liste) {
    (0,_factoryElements__WEBPACK_IMPORTED_MODULE_0__.createSectionPhotographers)(liste[l]);
  }
}

function orderByLikes(list) {
  return list.sort(function compare(a, b) {
    if (a.likes < b.likes) {
      return -1;
    }

    if (a.likes > b.likes) {
      return 1;
    }

    return 0;
  });
}

function orderByDate(list) {
  return list.sort(function (a, b) {
    a = new Date(a.date);
    b = new Date(b.date);

    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  });
}

function orderByName(list) {
  return list.sort(function (a, b) {
    if (a.alt < b.alt) {
      return -1;
    }

    if (a.alt > b.alt) {
      return 1;
    }

    return 0;
  });
}



/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/data/FishEyeDataFR.json":
/*!********************************************!*\
  !*** ./src/assets/data/FishEyeDataFR.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"photographers":[{"name":"Mimi Keel","id":243,"city":"London","country":"UK","tags":["portrait","events","travel","animals"],"tagline":"Voir le beau dans le quotidien","price":400,"portrait":"MimiKeel.jpg"},{"name":"Ellie-Rose Wilkens","id":930,"city":"Paris","country":"France","tags":["sport","architecture"],"tagline":"Capturer des compositions complexes","price":250,"portrait":"EllieRoseWilkens.jpg"},{"name":"Tracy Galindo","id":82,"city":"Montreal","country":"Canada","tags":["art","fashion","events"],"tagline":"Photographe freelance","price":500,"portrait":"TracyGalindo.jpg"},{"name":"Nabeel Bradford","id":527,"city":"Mexico City","country":"Mexico","tags":["travel","portrait"],"tagline":"Toujours aller de l\'avant","price":350,"portrait":"NabeelBradford.jpg"},{"name":"Rhode Dubois","id":925,"city":"Barcelona","country":"Spain","tags":["sport","fashion","events","animals"],"tagline":"Je crée des souvenirs","price":275,"portrait":"RhodeDubois.jpg"},{"name":"Marcel Nikolic","id":195,"city":"Berlin","country":"Germany","tags":["travel","architecture"],"tagline":"Toujours à la recherche de LA photo","price":300,"portrait":"MarcelNikolic.jpg"}],"media":[{"id":342550,"photographerId":82,"image":"Fashion_Yellow_Beach.jpg","alt":"Yellow Beach","tags":["fashion"],"likes":62,"date":"2011-12-08","price":55},{"id":8520927,"photographerId":82,"image":"Fashion_Urban_Jungle.jpg","alt":"Urban Jungle","tags":["fashion"],"likes":11,"date":"2011-11-06","price":55},{"id":9025895,"photographerId":82,"image":"Fashion_Pattern_on_Pattern.jpg","alt":"Pattern on Pattern","tags":["fashion"],"likes":72,"date":"2013-08-12","price":55},{"id":9275938,"photographerId":82,"image":"Event_WeddingGazebo.jpg","alt":"Gazebo Wedding","tags":["events"],"likes":69,"date":"2018-02-22","price":55},{"id":2053494,"photographerId":82,"image":"Event_Sparklers.jpg","alt":"Sparklers","tags":["events"],"likes":2,"date":"2020-05-25","price":55},{"id":7324238,"photographerId":82,"image":"Event_18thAnniversary.jpg","alt":"18th Anniversary","tags":["events"],"likes":33,"date":"2019-06-12","price":55},{"id":8328953,"photographerId":82,"video":"Art_Wooden_Horse_Sculpture.mp4","alt":"Wooden Horse Sculpture","tags":["art"],"likes":24,"date":"2011-12-08","price":100},{"id":7502053,"photographerId":82,"image":"Art_Triangle_Man.jpg","alt":"Triangle Man","tags":["art"],"likes":88,"date":"2007-05-07","price":55},{"id":8523492,"photographerId":82,"image":"Art_Purple_light.jpg","alt":"Purple Light","tags":["art"],"likes":24,"date":"2018-05-05","price":55},{"id":75902334,"photographerId":82,"image":"Art_Mine.jpg","alt":"Mine","tags":["art"],"likes":75,"date":"2019-11-25","price":55},{"id":73852953,"photographerId":925,"image":"Sport_2000_with_8.jpg","alt":"2000 with 8","tags":["sport"],"likes":52,"date":"2013-02-30","price":70},{"id":92758372,"photographerId":925,"image":"Fashion_Wings.jpg","alt":"Wings","tags":["fashion"],"likes":58,"date":"2018-07-17","price":70},{"id":32958383,"photographerId":925,"image":"Fashion_Melody_Red_on_Stripes.jpg","alt":"Melody Red on Stripes","tags":["fashion"],"likes":11,"date":"2019-08-12","price":70},{"id":928587383,"photographerId":925,"image":"Event_VentureConference.jpg","alt":"Venture Conference","tags":["events"],"likes":2,"date":"2019-01-02","price":70},{"id":725639493,"photographerId":925,"image":"Event_ProductPitch.jpg","alt":"Product Pitch","tags":["events"],"likes":3,"date":"2019-05-20","price":70},{"id":23394384,"photographerId":925,"image":"Event_KeyboardCheck.jpg","alt":"Keyboard Check","tags":["events"],"likes":52,"date":"2019-07-18","price":70},{"id":87367293,"photographerId":925,"image":"Event_Emcee.jpg","alt":"Emcee","tags":["events"],"likes":23,"date":"2018-02-22","price":70},{"id":593834784,"photographerId":925,"image":"Animals_Majesty.jpg","alt":"Majesty","tags":["animals"],"likes":52,"date":"2017-03-13","price":70},{"id":83958935,"photographerId":925,"video":"Animals_Puppiness.mp4","alt":"Puppiness","tags":["animals"],"likes":52,"date":"2016-06-12","price":70},{"id":394583434,"photographerId":527,"video":"Travel_Rock_Mountains.mp4","alt":"Rock Mountains","tags":["travel"],"likes":23,"date":"2017-03-18","price":45},{"id":343423425,"photographerId":527,"image":"Travel_Outdoor_Baths.jpg","alt":"Outdoor Baths","tags":["travel"],"likes":101,"date":"2017-04-03","price":45},{"id":73434243,"photographerId":527,"image":"Travel_Road_into_Hill.jpg","alt":"Road into Hill","tags":["travel"],"likes":99,"date":"2018-04-30","price":45},{"id":23425523,"photographerId":527,"image":"Travel_Bridge_into_Forest.jpg","alt":"Bridge into Forest","tags":["travel"],"likes":34,"date":"2016-04-05","price":45},{"id":23134513,"photographerId":527,"image":"Travel_Boat_Wanderer.jpg","alt":"Boat Wanderer","tags":["travel"],"likes":23,"date":"2017-03-18","price":45},{"id":92352352,"photographerId":527,"image":"Portrait_Sunkissed.jpg","alt":"Sun Kissed","tags":["portrait"],"likes":66,"date":"2018-05-24","price":45},{"id":34513453,"photographerId":527,"image":"Portrait_Shaw.jpg","alt":"Shaw","tags":["portait"],"likes":52,"date":"2017-04-21","price":45},{"id":23523533,"photographerId":527,"image":"Portrait_Alexandra.jpg","alt":"Alexandra","tags":["portait"],"likes":95,"date":"2018-11-02","price":45},{"id":525834234,"photographerId":527,"image":"Portrait_AfternoonBreak.jpg","alt":"Afternoon Break","tags":["portait"],"likes":25,"date":"2019-01-02","price":45},{"id":623534343,"photographerId":243,"image":"Travel_Lonesome.jpg","alt":"Lonesome","tags":["travel"],"likes":88,"date":"2019-02-03","price":45},{"id":625025343,"photographerId":243,"image":"Travel_HillsideColor.jpg","alt":"Hillside Color","tags":["travel"],"likes":85,"date":"2019-04-03","price":45},{"id":2525345343,"photographerId":243,"image":"Portrait_Wednesday.jpg","alt":"Wednesday","tags":["portait"],"likes":34,"date":"2019-04-07","price":45},{"id":2523434634,"photographerId":243,"image":"Portrait_Nora.jpg","alt":"Nora","tags":["portait"],"likes":63,"date":"2019-04-07","price":45},{"id":398847109,"photographerId":243,"image":"Portrait_Background.jpg","alt":"Background","tags":["portait"],"likes":55,"date":"2019-06-20","price":45},{"id":2534342,"photographerId":243,"image":"Event_SeasideWedding.jpg","alt":"Seaside Wedding","tags":["events"],"likes":25,"date":"2019-06-21","price":45},{"id":65235234,"photographerId":243,"image":"Event_PintoWedding.jpg","alt":"Pinto Wedding","tags":["events"],"likes":52,"date":"2019-06-25","price":45},{"id":23523434,"photographerId":243,"image":"Event_BenevidesWedding.jpg","alt":"Benevides Wedding","tags":["events"],"likes":77,"date":"2019-06-28","price":45},{"id":5234343,"photographerId":243,"video":"Animals_Wild_Horses_in_the_mountains.mp4","alt":"Wild Horses in the Mountains","tags":["animals"],"likes":142,"date":"2019-08-23","price":60},{"id":95234343,"photographerId":243,"image":"Animals_Rainbow.jpg","alt":"Rainbow","tags":["animals"],"likes":59,"date":"2019-07-02","price":60},{"id":52343416,"photographerId":195,"image":"Travel_Tower.jpg","alt":"Tower","tags":["travel"],"likes":25,"date":"2019-04-03","price":60},{"id":2523434,"photographerId":195,"image":"Travel_SunsetonCanals.jpg","alt":"Sunset on Canals","tags":["travel"],"likes":53,"date":"2019-05-06","price":60},{"id":95293534,"photographerId":195,"image":"Travel_OpenMountain.jpg","alt":"Open Mountain","tags":["travel"],"likes":33,"date":"2019-05-12","price":60},{"id":356234343,"photographerId":195,"image":"Travel_Bike_and_Stair.jpg","alt":"Bike and Stair","tags":["travel"],"likes":53,"date":"2019-06-20","price":60},{"id":235234343,"photographerId":195,"image":"Travel_Adventure_Door.jpg","alt":"Adventure Door","tags":["travel"],"likes":63,"date":"2019-06-26","price":60},{"id":6234234343,"photographerId":195,"image":"Architecture_Contrast.jpg","alt":"Contrast","tags":["architecture"],"likes":52,"date":"2019-06-30","price":60},{"id":6525666253,"photographerId":195,"image":"Architecture_On_a_hill.jpg","alt":"On a Hill","tags":["architecture"],"likes":63,"date":"2019-07-20","price":60},{"id":98252523433,"photographerId":195,"image":"Architecture_Dome.jpg","alt":"Dome","tags":["architecture"],"likes":88,"date":"2020-01-05","price":60},{"id":9259398453,"photographerId":195,"video":"Architecture_coverr_circle_empty_highway_in_buenos_aires.mp4","alt":"Highway in Buenos Aires","tags":["architecture"],"likes":57,"date":"2020-01-20","price":65},{"id":3523523534,"photographerId":195,"image":"Architecture_Corner_Room.jpg","alt":"Corner Room","tags":["architecture"],"likes":54,"date":"2020-05-05","price":60},{"id":952343423,"photographerId":930,"video":"Sport_Tricks_in_the_air.mp4","alt":"Tricks in the Air","tags":["sport"],"likes":150,"date":"2018-02-30","price":70},{"id":235234343,"photographerId":930,"image":"Sport_Next_Hold.jpg","alt":"Next Hold","tags":["sport"],"likes":101,"date":"2018-03-05","price":65},{"id":235343222,"photographerId":930,"image":"Sport_water_tunnel.jpg","alt":"Water Tunnel","tags":["sport"],"likes":103,"date":"2018-03-10","price":70},{"id":7775342343,"photographerId":930,"image":"Sport_Sky_Cross.jpg","alt":"Sky Cross","tags":["sport"],"likes":77,"date":"2018-04-16","price":50},{"id":9253445784,"photographerId":930,"image":"Sport_Race_End.jpg","alt":"Race End","tags":["sport"],"likes":88,"date":"2018-04-22","price":65},{"id":22299394,"photographerId":930,"image":"Sport_Jump.jpg","alt":"Jump","tags":["sport"],"likes":95,"date":"2018-04-27","price":70},{"id":3452342633,"photographerId":930,"image":"Architecture_White_Light.jpg","alt":"White Light","tags":["architecture"],"likes":52,"date":"2018-05-03","price":75},{"id":939234243,"photographerId":930,"image":"Architecture_Water_on_Modern.jpg","alt":"Water on Modern","tags":["architecture"],"likes":55,"date":"2018-05-10","price":72},{"id":222959233,"photographerId":930,"image":"Architecture_Horseshoe.jpg","alt":"Horseshoe","tags":["architecture"],"likes":85,"date":"2018-05-15","price":71},{"id":965933434,"photographerId":930,"image":"Architecture_Cross_Bar.jpg","alt":"Cross Bar","tags":["architecture"],"likes":66,"date":"2018-05-20","price":58},{"id":777723343,"photographerId":930,"image":"Architecture_Connected_Curves.jpg","alt":"Connected Curves","tags":["architecture"],"likes":79,"date":"2018-05-21","price":80}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _factoryPages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factoryPages */ "./src/js/factoryPages.js");
/* harmony import */ var _modalLightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalLightbox */ "./src/js/modalLightbox.js");
/* harmony import */ var _modalForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalForm */ "./src/js/modalForm.js");
// on importe le fichier css/scss principal




var pageActuelle = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

if (pageActuelle === 'index.html') {
  (0,_factoryPages__WEBPACK_IMPORTED_MODULE_1__.generateIndexHtml)();
}

if (pageActuelle === 'photographer_page.html') {
  (0,_factoryPages__WEBPACK_IMPORTED_MODULE_1__.generatePhotographerPageHtml)();
  (0,_modalLightbox__WEBPACK_IMPORTED_MODULE_2__.lightbox)();
  (0,_modalForm__WEBPACK_IMPORTED_MODULE_3__.formulaire)();
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map