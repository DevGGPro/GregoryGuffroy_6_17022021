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
/* harmony export */   "createSectionPhotographerLightbox": () => (/* binding */ createSectionPhotographerLightbox),
/* harmony export */   "createLightbox": () => (/* binding */ createLightbox),
/* harmony export */   "createForm": () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");


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
  li.innerHTML = '#' + tagsName;
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

function createSectionPhotographerLightbox(listmedia) {
  var main = document.getElementById('mainPhotographer');
  var section = document.createElement('section');
  section.classList.add('photographerLightbox');
  main.appendChild(section);
  var h2 = document.createElement('h2');
  h2.classList.add('photographerLightbox__titre');
  h2.innerHTML = 'Trier par';
  section.appendChild(h2);
  var div = document.createElement('div');
  div.classList.add('photographerLightbox__select'); // section.appendChild(div)

  var select = document.createElement('section');
  var liste = ['Popularité', 'Date', 'Titre'];

  for (var l in liste) {
    var option = document.createElement('option');
    option.setAttribute('value', liste[l].toLowerCase());
    option.innerHTML = liste[l];
    select.appendChild(option);
  }

  div.appendChild(select);
  var name;

  for (var m in listmedia) {
    var figure = document.createElement('figure');

    if (Object.keys(listmedia[m])[Object.values(listmedia[m]).indexOf(listmedia[m].image)] === 'image') {
      name = listmedia[m].image;
      figure.classList.add('photographerLightbox__figure');
      section.appendChild(figure);
      var img = document.createElement('img');
      img.classList.add('photographerLightbox__figure_media');
      img.setAttribute('src', './assets/images/photos/' + listmedia[m].image);
      img.setAttribute('alt', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNameFromMediaLink)(name));
      figure.appendChild(img);
    }

    if (Object.keys(listmedia[m])[Object.values(listmedia[m]).indexOf(listmedia[m].video)] === 'video') {
      name = listmedia[m].video;
      figure.classList.add('photographerLightbox__figure');
      section.appendChild(figure);
      var video = document.createElement('video');
      video.classList.add('photographerLightbox__figure_media');
      video.setAttribute('src', './assets/videos/' + listmedia[m].video);
      video.setAttribute('type', 'video/mp4');
      figure.appendChild(video);
    }

    var figcaption = document.createElement('figcaption');
    figcaption.classList.add('photographerLightbox__info');
    figure.appendChild(figcaption);
    var divFig = document.createElement('div');
    figcaption.appendChild(divFig);
    var pNom = document.createElement('p');
    pNom.classList.add('photographerLightbox__info_nom');
    pNom.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNameFromMediaLink)(name);
    divFig.appendChild(pNom);
    var price = document.createElement('p');
    price.classList.add('photographerLightbox__info_price');
    price.innerHTML = listmedia[m].price + '€';
    divFig.appendChild(price);
    var span = document.createElement('span');
    span.classList.add('photographerLightbox__info_like');
    span.innerHTML = listmedia[m].likes;
    figcaption.appendChild(span);
    var i = document.createElement('i');
    i.classList.add('far');
    i.classList.add('fa-heart');
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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _factoryElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factoryElements */ "./src/js/factoryElements.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");





function generateIndexHtml() {
  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_2__.createHeaderWithNav)(true);
  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_2__.createMainWithTitle)('mainIndex', true);
  var navTags;
  var listPhotographer;
  var listeTags;
  var url = new URL(window.location.href); // Au chargement de la page

  listeTags = url.searchParams.getAll('tags');

  if (listeTags.length === 0) {
    createPhotographerfromList(_assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.photographers);
    navTags = document.querySelectorAll('li.tags');
  } else {
    listPhotographer = (0,_data__WEBPACK_IMPORTED_MODULE_1__.getPhotographerByTagsList)(listeTags);
    createPhotographerfromList(listPhotographer);
    navTags = document.querySelectorAll('li.tags');

    var _loop = function _loop(t) {
      navTags.forEach(function (li) {
        if (li.getAttribute('data-value') === listeTags[t]) {
          (0,_utils__WEBPACK_IMPORTED_MODULE_3__.changeTagsStyle)(li, '#901C1C', '#FFF');
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
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.clearMainIndex)();
    var tag = this.getAttribute('data-value');

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isInList)(tag, listeTags)) {
      listeTags = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.deleteFromList)(tag, listeTags);
      url.searchParams.delete('tags');

      for (var _t in listeTags) {
        url.searchParams.append('tags', listeTags[_t]);
      }

      window.history.replaceState(null, null, url);
      listPhotographer = (0,_data__WEBPACK_IMPORTED_MODULE_1__.getPhotographerByTagsList)(listeTags);

      if (listeTags.length === 0) {
        createPhotographerfromList(_assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_0__.photographers);
        navTags = document.querySelectorAll('li.tags');
      }

      createPhotographerfromList(listPhotographer);
      navTags = document.querySelectorAll('li.tags');
      navTags.forEach(function (li) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.changeTagsStyle)(li, '#FFF', '#901C1C');
      });

      var _loop2 = function _loop2(_t2) {
        navTags.forEach(function (li) {
          if (li.getAttribute('data-value') === listeTags[_t2]) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.changeTagsStyle)(li, '#901C1C', '#FFF');
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
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.addToList)(tag, listeTags);
      url.searchParams.delete('tags');

      for (var _t3 in listeTags) {
        url.searchParams.append('tags', listeTags[_t3]);
      }

      window.history.replaceState(null, null, url);
      listPhotographer = (0,_data__WEBPACK_IMPORTED_MODULE_1__.getPhotographerByTagsList)(listeTags);
      createPhotographerfromList(listPhotographer);
      navTags = document.querySelectorAll('li.tags');

      var _loop3 = function _loop3(_t4) {
        navTags.forEach(function (li) {
          if (li.getAttribute('data-value') === listeTags[_t4]) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.changeTagsStyle)(li, '#901C1C', '#FFF');
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

function createPhotographerfromList(liste) {
  for (var l in liste) {
    (0,_factoryElements__WEBPACK_IMPORTED_MODULE_2__.createSectionPhotographers)(liste[l]);
  }
}

function generatePhotographerPageHtml() {
  var url = new URL(window.location.href);
  var id = url.searchParams.get('id');
  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_2__.createHeaderWithNav)(false);
  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_2__.createMainWithTitle)('mainPhotographer', false);
  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_2__.createSectionPhotographersProfils)((0,_data__WEBPACK_IMPORTED_MODULE_1__.getPhotographerById)(id));
  var numberOfLikeTotal = (0,_data__WEBPACK_IMPORTED_MODULE_1__.getNumberOfLikeByPhotographerId)(id);
  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_2__.createAsidePhotographersInfo)(numberOfLikeTotal, (0,_data__WEBPACK_IMPORTED_MODULE_1__.getPhotographerById)(id));
  var likeTotal = document.getElementsByClassName('photographerInfo__like');
  (0,_factoryElements__WEBPACK_IMPORTED_MODULE_2__.createSectionPhotographerLightbox)((0,_data__WEBPACK_IMPORTED_MODULE_1__.getListMediaFromPhotographerId)(id));
  var plike = document.querySelectorAll('span.photographerLightbox__info_like');
  plike.forEach(function (span) {
    var isLike = false;
    var numberOfLike = parseInt(span.innerHTML);
    span.addEventListener('click', like);

    function like() {
      if (isLike) {
        isLike = false;
        numberOfLike -= 1;
        numberOfLikeTotal -= 1;
        likeTotal[0].innerHTML = numberOfLikeTotal;
        span.innerHTML = numberOfLike;
        span.nextSibling.classList.replace('fas', 'far');
      } else {
        isLike = true;
        numberOfLike += 1;
        numberOfLikeTotal += 1;
        likeTotal[0].innerHTML = numberOfLikeTotal;
        span.innerHTML = numberOfLike;
        span.nextSibling.classList.replace('far', 'fas');
      }
    }
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
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _factoryElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryElements */ "./src/js/factoryElements.js");

var modal = document.getElementById('modal-form');
var preventForm = document.getElementsByClassName('form');
var openForm = document.getElementsByClassName('photographerProfils__contact');
var closeForm = document.getElementsByClassName('form__close');

function form() {
  openForm[0].addEventListener('click', function (e) {
    launchModal();
    (0,_factoryElements__WEBPACK_IMPORTED_MODULE_0__.createForm)(e.target.previousElementSibling.innerText);
    preventForm[0].addEventListener('submit', function (e) {
      e.preventDefault();
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



/***/ }),

/***/ "./src/js/modalLightbox.js":
/*!*********************************!*\
  !*** ./src/js/modalLightbox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lightbox": () => (/* binding */ lightbox)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _factoryElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factoryElements */ "./src/js/factoryElements.js");


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
      (0,_factoryElements__WEBPACK_IMPORTED_MODULE_1__.createLightbox)(e.target.attributes.src.nodeValue, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNameFromMediaLink)(e.target.attributes.src.nodeValue));
      close[0].addEventListener('click', closeModal);
      previous[0].addEventListener('click', previousMedia);
      next[0].addEventListener('click', nextMedia);
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
    (0,_factoryElements__WEBPACK_IMPORTED_MODULE_1__.createLightbox)(media[index].attributes.src.nodeValue, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNameFromMediaLink)(media[index].attributes.src.nodeValue));
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
    (0,_factoryElements__WEBPACK_IMPORTED_MODULE_1__.createLightbox)(media[index].attributes.src.nodeValue, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNameFromMediaLink)(media[index].attributes.src.nodeValue));
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
/* harmony export */   "isInList": () => (/* binding */ isInList),
/* harmony export */   "addToList": () => (/* binding */ addToList),
/* harmony export */   "deleteFromList": () => (/* binding */ deleteFromList),
/* harmony export */   "changeTagsStyle": () => (/* binding */ changeTagsStyle),
/* harmony export */   "getNameFromMediaLink": () => (/* binding */ getNameFromMediaLink)
/* harmony export */ });
function clearMainIndex() {
  var main = document.getElementsByTagName('main');
  main.id = 'mainIndex';
  main[0].innerHTML = '';
  var titre = document.createElement('h1');
  titre.innerHTML = 'Nos photographes';
  main[0].appendChild(titre);
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
  dom.style.color = color;
}

function getNameFromMediaLink(string) {
  var regex = /(_|Fashion_|Event_|Art_|Sport_|Animals_|Architecture_|Portrait_|Travel_|\.\/assets\/videos\/|\.\/assets\/images\/photos\/)|\.(jpg|mp4)/g;
  return String(string).replace(regex, ' ');
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

module.exports = JSON.parse('{"photographers":[{"name":"Mimi Keel","id":243,"city":"London","country":"UK","tags":["portrait","events","travel","animals"],"tagline":"Voir le beau dans le quotidien","price":400,"portrait":"MimiKeel.jpg"},{"name":"Ellie-Rose Wilkens","id":930,"city":"Paris","country":"France","tags":["sport","architecture"],"tagline":"Capturer des compositions complexes","price":250,"portrait":"EllieRoseWilkens.jpg"},{"name":"Tracy Galindo","id":82,"city":"Montreal","country":"Canada","tags":["art","fashion","events"],"tagline":"Photographe freelance","price":500,"portrait":"TracyGalindo.jpg"},{"name":"Nabeel Bradford","id":527,"city":"Mexico City","country":"Mexico","tags":["travel","portrait"],"tagline":"Toujours aller de l\'avant","price":350,"portrait":"NabeelBradford.jpg"},{"name":"Rhode Dubois","id":925,"city":"Barcelona","country":"Spain","tags":["sport","fashion","events","animals"],"tagline":"Je crée des souvenirs","price":275,"portrait":"RhodeDubois.jpg"},{"name":"Marcel Nikolic","id":195,"city":"Berlin","country":"Germany","tags":["travel","architecture"],"tagline":"Toujours à la recherche de LA photo","price":300,"portrait":"MarcelNikolic.jpg"}],"media":[{"id":342550,"photographerId":82,"image":"Fashion_Yellow_Beach.jpg","tags":["fashion"],"likes":62,"date":"2011-12-08","price":55},{"id":8520927,"photographerId":82,"image":"Fashion_Urban_Jungle.jpg","tags":["fashion"],"likes":11,"date":"2011-11-06","price":55},{"id":9025895,"photographerId":82,"image":"Fashion_Pattern_on_Pattern.jpg","tags":["fashion"],"likes":72,"date":"2013-08-12","price":55},{"id":9275938,"photographerId":82,"image":"Event_WeddingGazebo.jpg","tags":["events"],"likes":69,"date":"2018-02-22","price":55},{"id":2053494,"photographerId":82,"image":"Event_Sparklers.jpg","tags":["events"],"likes":2,"date":"2020-05-25","price":55},{"id":7324238,"photographerId":82,"image":"Event_18thAnniversary.jpg","tags":["events"],"likes":33,"date":"2019-06-12","price":55},{"id":8328953,"photographerId":82,"video":"Art_Wooden_Horse_Sculpture.mp4","tags":["art"],"likes":24,"date":"2011-12-08","price":100},{"id":7502053,"photographerId":82,"image":"Art_Triangle_Man.jpg","tags":["art"],"likes":88,"date":"2007-05-07","price":55},{"id":8523492,"photographerId":82,"image":"Art_Purple_light.jpg","tags":["art"],"likes":24,"date":"2018-05-05","price":55},{"id":75902334,"photographerId":82,"image":"Art_Mine.jpg","tags":["art"],"likes":75,"date":"2019-11-25","price":55},{"id":73852953,"photographerId":925,"image":"Sport_2000_with_8.jpg","tags":["sport"],"likes":52,"date":"2013-02-30","price":70},{"id":92758372,"photographerId":925,"image":"Fashion_Wings.jpg","tags":["fashion"],"likes":58,"date":"2018-07-17","price":70},{"id":32958383,"photographerId":925,"image":"Fashion_Melody_Red_on_Stripes.jpg","tags":["fashion"],"likes":11,"date":"2019-08-12","price":70},{"id":928587383,"photographerId":925,"image":"Event_VentureConference.jpg","tags":["events"],"likes":2,"date":"2019-01-02","price":70},{"id":725639493,"photographerId":925,"image":"Event_ProductPitch.jpg","tags":["events"],"likes":3,"date":"2019-05-20","price":70},{"id":23394384,"photographerId":925,"image":"Event_KeyboardCheck.jpg","tags":["events"],"likes":52,"date":"2019-07-18","price":70},{"id":87367293,"photographerId":925,"image":"Event_Emcee.jpg","tags":["events"],"likes":23,"date":"2018-02-22","price":70},{"id":593834784,"photographerId":925,"image":"Animals_Majesty.jpg","tags":["animals"],"likes":52,"date":"2017-03-13","price":70},{"id":83958935,"photographerId":925,"video":"Animals_Puppiness.mp4","tags":["animals"],"likes":52,"date":"2016-06-12","price":70},{"id":394583434,"photographerId":527,"video":"Travel_Rock_Mountains.mp4","tags":["travel"],"likes":23,"date":"2017-03-18","price":45},{"id":343423425,"photographerId":527,"image":"Travel_Outdoor_Baths.jpg","tags":["travel"],"likes":101,"date":"2017-04-03","price":45},{"id":73434243,"photographerId":527,"image":"Travel_Road_into_Hill.jpg","tags":["travel"],"likes":99,"date":"2018-04-30","price":45},{"id":23425523,"photographerId":527,"image":"Travel_Bridge_into_Forest.jpg","tags":["travel"],"likes":34,"date":"2016-04-05","price":45},{"id":23134513,"photographerId":527,"image":"Travel_Boat_Wanderer.jpg","tags":["travel"],"likes":23,"date":"2017-03-18","price":45},{"id":92352352,"photographerId":527,"image":"Portrait_Sunkissed.jpg","tags":["portrait"],"likes":66,"date":"2018-05-24","price":45},{"id":34513453,"photographerId":527,"image":"Portrait_Shaw.jpg","tags":["portait"],"likes":52,"date":"2017-04-21","price":45},{"id":23523533,"photographerId":527,"image":"Portrait_Alexandra.jpg","tags":["portait"],"likes":95,"date":"2018-11-02","price":45},{"id":525834234,"photographerId":527,"image":"Portrait_AfternoonBreak.jpg","tags":["portait"],"likes":25,"date":"2019-01-02","price":45},{"id":623534343,"photographerId":243,"image":"Travel_Lonesome.jpg","tags":["travel"],"likes":88,"date":"2019-02-03","price":45},{"id":625025343,"photographerId":243,"image":"Travel_HillsideColor.jpg","tags":["travel"],"likes":85,"date":"2019-04-03","price":45},{"id":2525345343,"photographerId":243,"image":"Portrait_Wednesday.jpg","tags":["portait"],"likes":34,"date":"2019-04-07","price":45},{"id":2523434634,"photographerId":243,"image":"Portrait_Nora.jpg","tags":["portait"],"likes":63,"date":"2019-04-07","price":45},{"id":398847109,"photographerId":243,"image":"Portrait_Background.jpg","tags":["portait"],"likes":55,"date":"2019-06-20","price":45},{"id":2534342,"photographerId":243,"image":"Event_SeasideWedding.jpg","tags":["events"],"likes":25,"date":"2019-06-21","price":45},{"id":65235234,"photographerId":243,"image":"Event_PintoWedding.jpg","tags":["events"],"likes":52,"date":"2019-06-25","price":45},{"id":23523434,"photographerId":243,"image":"Event_BenevidesWedding.jpg","tags":["events"],"likes":77,"date":"2019-06-28","price":45},{"id":5234343,"photographerId":243,"video":"Animals_Wild_Horses_in_the_mountains.mp4","tags":["animals"],"likes":142,"date":"2019-08-23","price":60},{"id":95234343,"photographerId":243,"image":"Animals_Rainbow.jpg","tags":["animals"],"likes":59,"date":"2019-07-02","price":60},{"id":52343416,"photographerId":195,"image":"Travel_Tower.jpg","tags":["travel"],"likes":25,"date":"2019-04-03","price":60},{"id":2523434,"photographerId":195,"image":"Travel_SunsetonCanals.jpg","tags":["travel"],"likes":53,"date":"2019-05-06","price":60},{"id":95293534,"photographerId":195,"image":"Travel_OpenMountain.jpg","tags":["travel"],"likes":33,"date":"2019-05-12","price":60},{"id":356234343,"photographerId":195,"image":"Travel_Bike_and_Stair.jpg","tags":["travel"],"likes":53,"date":"2019-06-20","price":60},{"id":235234343,"photographerId":195,"image":"Travel_Adventure_Door.jpg","tags":["travel"],"likes":63,"date":"2019-06-26","price":60},{"id":6234234343,"photographerId":195,"image":"Architecture_Contrast.jpg","tags":["architecture"],"likes":52,"date":"2019-06-30","price":60},{"id":6525666253,"photographerId":195,"image":"Architecture_On_a_hill.jpg","tags":["architecture"],"likes":63,"date":"2019-07-20","price":60},{"id":98252523433,"photographerId":195,"image":"Architecture_Dome.jpg","tags":["architecture"],"likes":88,"date":"2020-01-05","price":60},{"id":9259398453,"photographerId":195,"video":"Architecture_coverr_circle_empty_highway_in_buenos_aires.mp4","tags":["architecture"],"likes":57,"date":"2020-01-20","price":65},{"id":3523523534,"photographerId":195,"image":"Architecture_Corner_Room.jpg","tags":["architecture"],"likes":54,"date":"2020-05-05","price":60},{"id":952343423,"photographerId":930,"video":"Sport_Tricks_in_the_air.mp4","tags":["sport"],"likes":150,"date":"2018-02-30","price":70},{"id":235234343,"photographerId":930,"image":"Sport_Next_Hold.jpg","tags":["sport"],"likes":101,"date":"2018-03-05","price":65},{"id":235343222,"photographerId":930,"image":"sport_water_tunnel.jpg","tags":["sport"],"likes":103,"date":"2018-03-10","price":70},{"id":7775342343,"photographerId":930,"image":"Sport_Sky_Cross.jpg","tags":["sport"],"likes":77,"date":"2018-04-16","price":50},{"id":9253445784,"photographerId":930,"image":"Sport_Race_End.jpg","tags":["sport"],"likes":88,"date":"2018-04-22","price":65},{"id":22299394,"photographerId":930,"image":"Sport_Jump.jpg","tags":["sport"],"likes":95,"date":"2018-04-27","price":70},{"id":3452342633,"photographerId":930,"image":"Architecture_White_Light.jpg","tags":["architecture"],"likes":52,"date":"2018-05-03","price":75},{"id":939234243,"photographerId":930,"image":"Architecture_Water_on_Modern.jpg","tags":["architecture"],"likes":55,"date":"2018-05-10","price":72},{"id":222959233,"photographerId":930,"image":"Architecture_Horseshoe.jpg","tags":["architecture"],"likes":85,"date":"2018-05-15","price":71},{"id":965933434,"photographerId":930,"image":"Architecture_Cross_Bar.jpg","tags":["architecture"],"likes":66,"date":"2018-05-20","price":58},{"id":777723343,"photographerId":930,"image":"Architecture_Connected_Curves.jpg","tags":["architecture"],"likes":79,"date":"2018-05-21","price":80}]}');

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
  (0,_modalForm__WEBPACK_IMPORTED_MODULE_3__.form)();
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map