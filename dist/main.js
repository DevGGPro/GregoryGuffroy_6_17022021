/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/elementFactory.js":
/*!**********************************!*\
  !*** ./src/js/elementFactory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSectionPhotographers": () => (/* binding */ createSectionPhotographers)
/* harmony export */ });
function createSectionPhotographers(photographer) {
  var main = document.getElementsByTagName('main');
  var sectionPhotographer = document.createElement('section');
  sectionPhotographer.classList.add('photographer');
  var link = document.createElement('a');
  link.classList.add('photographer__link');
  link.setAttribute('href', '#');
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
  var tags = document.createElement('div');
  tags.classList.add('photographer__tags');

  for (var tag in photographer.tags) {
    var span = document.createElement('span');
    span.classList.add('tags');
    span.innerHTML = '#' + photographer.tags[tag];
    tags.appendChild(span);
  }

  sectionPhotographer.appendChild(tags);
  main[0].appendChild(sectionPhotographer);
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

module.exports = JSON.parse('{"photographers":[{"name":"Mimi Keel","id":243,"city":"London","country":"UK","tags":["portrait","events","travel","animals"],"tagline":"Voir le beau dans le quotidien","price":400,"portrait":"MimiKeel.jpg"},{"name":"Ellie-Rose Wilkens","id":930,"city":"Paris","country":"France","tags":["sports","architecture"],"tagline":"Capturer des compositions complexes","price":250,"portrait":"EllieRoseWilkens.jpg"},{"name":"Tracy Galindo","id":82,"city":"Montreal","country":"Canada","tags":["art","fashion","events"],"tagline":"Photographe freelance","price":500,"portrait":"TracyGalindo.jpg"},{"name":"Nabeel Bradford","id":527,"city":"Mexico City","country":"Mexico","tags":["travel","portrait"],"tagline":"Toujours aller de l\'avant","price":350,"portrait":"NabeelBradford.jpg"},{"name":"Rhode Dubois","id":925,"city":"Barcelona","country":"Spain","tags":["sport","fashion","events","animals"],"tagline":"Je crée des souvenirs","price":275,"portrait":"RhodeDubois.jpg"},{"name":"Marcel Nikolic","id":195,"city":"Berlin","country":"Germany","tags":["travel","architecture"],"tagline":"Toujours à la recherche de LA photo","price":300,"portrait":"MarcelNikolic.jpg"}],"media":[{"id":342550,"photographerId":82,"image":"Fashion_Yellow_Beach.jpg","tags":["fashion"],"likes":62,"date":"2011-12-08","price":55},{"id":8520927,"photographerId":82,"image":"Fashion_Urban_Jungle.jpg","tags":["fashion"],"likes":11,"date":"2011-11-06","price":55},{"id":9025895,"photographerId":82,"image":"Fashion_Pattern_on_Pattern.jpg","tags":["fashion"],"likes":72,"date":"2013-08-12","price":55},{"id":9275938,"photographerId":82,"image":"Event-_eddingGazebo.jpg","tags":["events"],"likes":69,"date":"2018-02-22","price":55},{"id":2053494,"photographerId":82,"image":"Event_Sparklers.jpg","tags":["events"],"likes":2,"date":"2020-05-25","price":55},{"id":7324238,"photographerId":82,"image":"Event_18thAnniversary.jpg","tags":["events"],"likes":33,"date":"2019-06-12","price":55},{"id":8328953,"photographerId":82,"video":"Art_Wooden_Horse_Sculpture.mp4","tags":["art"],"likes":24,"date":"2011-12-08","price":100},{"id":7502053,"photographerId":82,"image":"Art_Triangle_Man.jpg","tags":["art"],"likes":88,"date":"2007-05-07","price":55},{"id":8523492,"photographerId":82,"image":"Art_Purple_light.jpg","tags":["art"],"likes":24,"date":"2018-05-05","price":55},{"id":75902334,"photographerId":82,"image":"Art_Mine.jpg","tags":["art"],"likes":75,"date":"2019-11-25","price":55},{"id":73852953,"photographerId":925,"image":"Sport_2000_with_8.jpg","tags":["sport"],"likes":52,"date":"2013-02-30","price":70},{"id":92758372,"photographerId":925,"image":"Fashion_Wings.jpg","tags":["fashion"],"likes":58,"date":"2018-07-17","price":70},{"id":32958383,"photographerId":925,"image":"Fashion_Melody_Red_on_Stripes.jpg","tags":["fashion"],"likes":11,"date":"2019-08-12","price":70},{"id":928587383,"photographerId":925,"image":"Event_VentureConference.jpg","tags":["events"],"likes":2,"date":"2019-01-02","price":70},{"id":725639493,"photographerId":925,"image":"Event_ProductPitchjpg","tags":["events"],"likes":3,"date":"2019-05-20","price":70},{"id":23394384,"photographerId":925,"image":"Event_KeyboardCheck.jpg","tags":["events"],"likes":52,"date":"2019-07-18","price":70},{"id":87367293,"photographerId":925,"image":"Event_Emcee.jpg","tags":["events"],"likes":23,"date":"2018-02-22","price":70},{"id":593834784,"photographerId":925,"image":"Animals_Majesty.jpg","tags":["animals"],"likes":52,"date":"2017-03-13","price":70},{"id":83958935,"photographerId":925,"video":"Animals_Puppiness.mp4","tags":["animals"],"likes":52,"date":"2016-06-12","price":70},{"id":394583434,"photographerId":527,"video":"Travel_Rock_Mountains.mp4","tags":["travel"],"likes":23,"date":"2017-03-18","price":45},{"id":343423425,"photographerId":527,"image":"Travel_Outdoor_Baths.jpg","tags":["travel"],"likes":101,"date":"2017-04-03","price":45},{"id":73434243,"photographerId":527,"image":"Travel_Road_into_Hill.jpg","tags":["travel"],"likes":99,"date":"2018-04-30","price":45},{"id":23425523,"photographerId":527,"image":"Travel_Bridge_into_Forest.jpg","tags":["travel"],"likes":34,"date":"2016-04-05","price":45},{"id":23134513,"photographerId":527,"image":"Travel_Boat_Wanderer.jpg","tags":["travel"],"likes":23,"date":"2017-03-18","price":45},{"id":92352352,"photographerId":527,"image":"Portrait_Sunkissed.jpg","tags":["portrait"],"likes":66,"date":"2018-05-24","price":45},{"id":34513453,"photographerId":527,"image":"Portrait_Shaw.jpg","tags":["portait"],"likes":52,"date":"2017-04-21","price":45},{"id":23523533,"photographerId":527,"image":"Portrait_Alexandra.jpg","tags":["portait"],"likes":95,"date":"2018-11-02","price":45},{"id":525834234,"photographerId":527,"image":"Portrait_AfternoonBreak.jpg","tags":["portait"],"likes":25,"date":"2019-01-02","price":45},{"id":623534343,"photographerId":243,"image":"Travel_Lonesome.jpg","tags":["travel"],"likes":88,"date":"2019-02-03","price":45},{"id":625025343,"photographerId":243,"image":"Travel_HillsideColor.jpg","tags":["travel"],"likes":85,"date":"2019-04-03","price":45},{"id":2525345343,"photographerId":243,"image":"Portrait_Wednesday.jpg","tags":["portait"],"likes":34,"date":"2019-04-07","price":45},{"id":2523434634,"photographerId":243,"image":"Portrait_Nora.jpg","tags":["portait"],"likes":63,"date":"2019-04-07","price":45},{"id":398847109,"photographerId":243,"image":"Portrait_Background.jpg","tags":["portait"],"likes":55,"date":"2019-06-20","price":45},{"id":2534342,"photographerId":243,"image":"Event_SeasideWedding.jpg","tags":["events"],"likes":25,"date":"2019-06-21","price":45},{"id":65235234,"photographerId":243,"image":"Event_PintoWedding.jpg","tags":["events"],"likes":52,"date":"2019-06-25","price":45},{"id":23523434,"photographerId":243,"image":"Event_BenevidesWedding.jpg","tags":["events"],"likes":77,"date":"2019-06-28","price":45},{"id":5234343,"photographerId":243,"video":"Animals_Wild_Horses_in_the_mountains.mp4","tags":["animals"],"likes":142,"date":"2019-08-23","price":60},{"id":95234343,"photographerId":243,"image":"Animals_Rainbow.jpg.jpg","tags":["animals"],"likes":59,"date":"2019-07-02","price":60},{"id":52343416,"photographerId":195,"image":"Travel_Tower.jpg","tags":["travel"],"likes":25,"date":"2019-04-03","price":60},{"id":2523434,"photographerId":195,"image":"Travel_SunsetonCanals.jpg","tags":["travel"],"likes":53,"date":"2019-05-06","price":60},{"id":95293534,"photographerId":195,"image":"Travel_OpenMountain.jpg","tags":["travel"],"likes":33,"date":"2019-05-12","price":60},{"id":356234343,"photographerId":195,"image":"Travel_Bike_and_Stair.jpg","tags":["travel"],"likes":53,"date":"2019-06-20","price":60},{"id":235234343,"photographerId":195,"image":"Travel_Adventure_Door.jpg","tags":["travel"],"likes":63,"date":"2019-06-26","price":60},{"id":6234234343,"photographerId":195,"image":"Architecture_Contrast.jpg","tags":["architecture"],"likes":52,"date":"2019-06-30","price":60},{"id":6525666253,"photographerId":195,"image":"Architecture_On_a_hill.jpg","tags":["architecture"],"likes":63,"date":"2019-07-20","price":60},{"id":98252523433,"photographerId":195,"image":"Architecture_Dome.jpg","tags":["architecture"],"likes":88,"date":"2020-01-05","price":60},{"id":9259398453,"photographerId":195,"video":"Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4","tags":["architecture"],"likes":57,"date":"2020-01-20","price":65},{"id":3523523534,"photographerId":195,"image":"Architecture_Corner_Room.jpg","tags":["architecture"],"likes":54,"date":"2020-05-05","price":60},{"id":952343423,"photographerId":930,"video":"Sport_Tricks_in_the_air.mp4","tags":["sport"],"likes":150,"date":"2018-02-30","price":70},{"id":235234343,"photographerId":930,"image":"Sport_Next_Hold.jpg","tags":["sport"],"likes":101,"date":"2018-03-05","price":65},{"id":235343222,"photographerId":930,"image":"sport_water_tunnel.jpg","tags":["sport"],"likes":103,"date":"2018-03-10","price":70},{"id":7775342343,"photographerId":930,"image":"Sport_Sky_Cross.jpg","tags":["sport"],"likes":77,"date":"2018-04-16","price":50},{"id":9253445784,"photographerId":930,"image":"Sport_Race_End.jpg","tags":["sport"],"likes":88,"date":"2018-04-22","price":65},{"id":22299394,"photographerId":930,"image":"Sport_Jump.jpg","tags":["sport"],"likes":95,"date":"2018-04-27","price":70},{"id":3452342633,"photographerId":930,"image":"Architecture_White_Light.jpg","tags":["architecture"],"likes":52,"date":"2018-05-03","price":75},{"id":939234243,"photographerId":930,"image":"Architecture_Water_on_Modern.jpg","tags":["architecture"],"likes":55,"date":"2018-05-10","price":72},{"id":222959233,"photographerId":930,"image":"Architecture_Horseshoe.jpg","tags":["architecture"],"likes":85,"date":"2018-05-15","price":71},{"id":965933434,"photographerId":930,"image":"Architecture_Cross_Bar.jpg","tags":["architecture"],"likes":66,"date":"2018-05-20","price":58},{"id":777723343,"photographerId":930,"image":"Architecture_Connected_Curves.jpg","tags":["architecture"],"likes":79,"date":"2018-05-21","price":80}]}');

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
/* harmony import */ var _assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/data/FishEyeDataFR.json */ "./src/assets/data/FishEyeDataFR.json");
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementFactory */ "./src/js/elementFactory.js");
// on importe le fichier css/scss principal
 // on importe la base de donnée

 // on inporte les functions de factory



for (var photographer in _assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_1__.photographers) {
  (0,_elementFactory__WEBPACK_IMPORTED_MODULE_2__.createSectionPhotographers)(_assets_data_FishEyeDataFR_json__WEBPACK_IMPORTED_MODULE_1__.photographers[photographer]);
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map