/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UIFunctions.js":
/*!****************************!*\
  !*** ./src/UIFunctions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createElementWithClass: () => (/* binding */ createElementWithClass),
/* harmony export */   createImage: () => (/* binding */ createImage),
/* harmony export */   createTextElement: () => (/* binding */ createTextElement)
/* harmony export */ });
const createElement = (type, parent) => {
  const element = document.createElement(type);
  parent.appendChild(element);
  return element;
};

const createTextElement = (type, parent, text) => {
  const element = document.createElement(type);
  parent.appendChild(element);
  element.innerText = text;
  return element;
};

const createElementWithClass = (type, parent, className) => {
  const element = document.createElement(type);
  element.classList.add(className);
  parent.appendChild(element);
  return element;
};

const createImage = (source, parent, className) => {
  const element = document.createElement("img");
  element.classList.add(className);
  element.src = source;
  parent.appendChild(element);
  return element;
};




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWebsite: () => (/* binding */ createWebsite)
/* harmony export */ });
/* harmony import */ var _UIFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIFunctions */ "./src/UIFunctions.js");


const content = document.getElementById("content");

const createWebsite = () => {
  createNav();
  createInfoRow();
  createGuatemalaRow();
  createEggMyYardRow();
  createFooter();
};

const createNav = () => {
  const headerContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    content,
    "header-container"
  );
  headerContainer.style.backgroundImage =
    "url(../dist/images/santa-lucia-landscape.jpg)";
  const overlay = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("div", headerContainer, "overlay");

  const navContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("div", overlay, "nav-container");

  const headingContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    navContainer,
    "heading-container"
  );

  const infoContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    navContainer,
    "info-container"
  );

  const callToActionContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    navContainer,
    "action-container"
  );

  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("h2", headingContainer, "PUENTES");
  const aboutUs = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", infoContainer, "About Us");
  aboutUs.onclick = () => scroll(0, 650);
  const guatemalaTrip = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", infoContainer, "Guatemala Trip");
  guatemalaTrip.onclick = () => scroll(0, 1050);
  const eggMyYard = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", infoContainer, "Egg My Yard");
  eggMyYard.onclick = () => scroll(0, 1600);
  const orderEggs = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("a", infoContainer, "Order Eggs");
  orderEggs.href =
    "https://docs.google.com/forms/d/1mjzHbJaVVKpJjErBr-_7MtKxp1hYCZ1vLXDxTB96RiA/edit";
  orderEggs.classList.add("get-involved-link");

  const getInvolved = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("a", infoContainer, "Join Us!");
  getInvolved.classList.add("get-involved-link");
  getInvolved.href =
    "https://www.remind.com/classes/-puentes/messages/stream/7966b1ef-ef1b-4bed-8f6f-5e4bab9d472d";

  const instagramHref = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "a",
    callToActionContainer,
    "instagram-link-container"
  );
  instagramHref.href = "https://www.instagram.com/zchs_puentes/";
  const instagramLogo = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createImage)(
    "../dist/images/instagram.svg",
    instagramHref,
    "instagram-link"
  );

  const callToActionButtonHref = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", callToActionContainer);
  callToActionButtonHref.href =
    "https://docs.google.com/document/d/1MoSapSPeUArUORrXeHIWBNWUv8ySw93V21bUsWmrZLw/edit?usp=sharing";
  const callToActionButton = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "button",
    callToActionButtonHref,
    "call-to-action-button"
  );
  callToActionButton.innerText = "View Schedule";

  const heading = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("h1", overlay, "page-heading");
  heading.innerText =
    "Connecting students to support education across the globe!";

  const informationAboutTheImage = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "p",
    overlay,
    "information-about-header-img"
  );
  informationAboutTheImage.innerText = "Santa Lucía, Guatemala";
};

const createInfoRow = () => {
  const infoSectionContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    content,
    "info-section-container"
  );
  const infoHeading = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "h1",
    infoSectionContainer,
    "info-section-header"
  );
  infoHeading.innerText = "About Our Club";
  const infoSubheaderContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    infoSectionContainer,
    "info-subheading-container"
  );

  const pLeft = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "p",
    infoSubheaderContainer,
    "info-section-p-left"
  );
  const pRight = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "p",
    infoSubheaderContainer,
    "info-section-p-right"
  );

  pLeft.innerText =
    'PUENTES, which stands for Promoting Unity and Empowerment Nobly Through Education and Service, aims to "Build bridges" between our community here in Zionsville and those in Latin America through a hands-on approach.';
  pRight.innerText =
    "PUENTES, formerly Operation: Honduras, began in February 2023 in an attempt to provide extra support for communities in Honduras. However, as the 2022-2023 school year came to a close, a new leaf was turned for the club and it expanded to include all of Latin America.";
};

const createGuatemalaRow = () => {
  /* This part is only for when the screen width gets thin
  Not for the part when it is wide */

  const thinScreenGuatemalaContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    content,
    "thin-guatemala-container"
  );
  const thinScreenGuatemalaOverlay = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    thinScreenGuatemalaContainer,
    "thin-guatemala-overlay"
  );

  const thinScreenGuatemalaHeader = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "h1",
    thinScreenGuatemalaOverlay,
    "thin-guatemala-header"
  );

  thinScreenGuatemalaHeader.innerText = "Come with us to Guatemala!";

  const thinScreenGuatemalaSubheader = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "h4",
    thinScreenGuatemalaOverlay,
    "thin-guatemala-subheader"
  );
  thinScreenGuatemalaSubheader.innerText =
    "This summer (June 11-19 2024) we will journey to Tecpán, Guatemala where club members will perform hands on activities to help educate and improve conditions at a school. Whether or not you or your child has an interest in going, feel free to take a look at extra information as this trip is our main focus and where most future proceeds will be heading.";

  const thinScreenGuatemalaCallToActionContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "a",
    thinScreenGuatemalaOverlay,
    "guatemala-button-container"
  );
  thinScreenGuatemalaCallToActionContainer.href =
    "https://globalbrigades-6044591.hs-sites.com/squadsabroad-zionsvillehs-june2024";
  const thinScreenGuatemalaCallToAction = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "button",
    thinScreenGuatemalaCallToActionContainer,
    "thin-guatemala-button"
  );
  thinScreenGuatemalaCallToAction.innerText = "More Information + Registration";

  /* Wide Screen Part!
  Not for thin screen */

  const guatemalaContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    content,
    "guatemala-container"
  );
  const guatemalaContainerLeft = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    guatemalaContainer,
    "guatemala-container-left"
  );
  const guatemalaContainerRight = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    guatemalaContainer,
    "guatemala-container-right"
  );
  const guatemalaHeader = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "h1",
    guatemalaContainerLeft,
    "guatemala-header"
  );
  guatemalaHeader.innerText = "Come with us to Guatemala!";
  const guatemalaCallToActionContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "a",
    guatemalaContainerLeft,
    "guatemala-button-container"
  );
  guatemalaCallToActionContainer.href =
    "https://globalbrigades-6044591.hs-sites.com/squadsabroad-zionsvillehs-june2024";
  const guatemalaCallToAction = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "button",
    guatemalaCallToActionContainer,
    "guatemala-button"
  );
  guatemalaCallToAction.innerText = "More Information + Registration";

  const guatemalaSubheader = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "h4",
    guatemalaContainerLeft,
    "guatemala-subheader"
  );
  guatemalaSubheader.innerText =
    "This summer (June 11-19 2024) we will journey to Tecpán, Guatemala where club members will perform hands on activities to help educate and improve conditions at a school. Whether or not you or your child has an interest in going, feel free to take a look at extra information as this trip is our main focus and where most future proceeds will be heading.";

  const guatemalaImage = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createImage)(
    "../dist/images/guatemala-landscape.jpg",
    guatemalaContainerRight,
    "guatemala-img"
  );
};

const createEggMyYardRow = () => {
  const eggMyYardContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    content,
    "egg-my-yard-container"
  );
  eggMyYardContainer.style.backgroundImage = "url(../dist/images/easter.jpg)";
  const overlay = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    eggMyYardContainer,
    "egg-my-yard-overlay"
  );

  const eggMyYardHeader = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "h1",
    overlay,
    "egg-my-yard-header"
  );
  const eggMyYardSubheader = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "h3",
    overlay,
    "egg-my-yard-subheader"
  );
  eggMyYardSubheader.innerText =
    "Help support our mission by participating in our annual egg my yard Easter event. For this event, we will hide eggs for you in your front or backyard for Easter. If you are interested or simply want to help, you may either decide to purchase eggs for us to hide for you or help us by donating any spare eggs or candy you may have, thank you!";
  eggMyYardHeader.innerText = "Egg My Yard!";

  const eggMyYardCallToActionContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "a",
    overlay,
    "egg-my-yard-button-container"
  );
  eggMyYardCallToActionContainer.href =
    "https://drive.google.com/file/d/1qQkQT53g71iu8nARUvCtUMpn0sevyfgC/view?usp=sharing";

  const eggMyYardCallToAction = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "button",
    eggMyYardCallToActionContainer,
    "egg-my-yard-button"
  );
  eggMyYardCallToAction.innerText = "Learn More!";
};

const createFooter = () => {
  const footerContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    content,
    "footer-container"
  );

  const clubNameContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    footerContainer,
    "footer-club-name-container"
  );

  const clubInfoContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    footerContainer,
    "footer-club-info-container"
  );

  const clubCallToActionContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    footerContainer,
    "footer-club-call-to-action-container"
  );
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("h2", clubNameContainer, "PUENTES");
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(
    "p",
    clubNameContainer,
    "Zionsville Community High School Club"
  );
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", clubNameContainer, "Email: zchspuentes@gmail.com");
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", clubNameContainer, "Instagram: @zchs_puentes");
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("h2", clubInfoContainer, "Get Involved!");
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", clubInfoContainer, "Egg My Yard");
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", clubInfoContainer, "Guatemala");

  const footerInstagramHref = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "a",
    clubCallToActionContainer,
    "footer-instagram-link-container"
  );
  footerInstagramHref.href = "https://www.instagram.com/zchs_puentes/";
  const footerInstagramLogo = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createImage)(
    "../dist/images/footer-instagram.svg",
    footerInstagramHref,
    "footer-instagram-link"
  );

  const callToActionButtonHref = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", clubCallToActionContainer);
  callToActionButtonHref.href =
    "https://docs.google.com/document/d/1MoSapSPeUArUORrXeHIWBNWUv8ySw93V21bUsWmrZLw/edit?usp=sharing";
  const callToActionButton = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "button",
    callToActionButtonHref,
    "footer-call-to-action-button"
  );
  callToActionButton.innerText = "View Schedule";
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


(0,_home__WEBPACK_IMPORTED_MODULE_0__.createWebsite)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDLG9EQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVlbnRlcy8uL3NyYy9VSUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9wdWVudGVzLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcHVlbnRlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wdWVudGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wdWVudGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHVlbnRlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3B1ZW50ZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVUZXh0RWxlbWVudCA9ICh0eXBlLCBwYXJlbnQsIHRleHQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MgPSAodHlwZSwgcGFyZW50LCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlSW1hZ2UgPSAoc291cmNlLCBwYXJlbnQsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGVsZW1lbnQuc3JjID0gc291cmNlO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlRWxlbWVudCxcbiAgY3JlYXRlVGV4dEVsZW1lbnQsXG4gIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MsXG4gIGNyZWF0ZUltYWdlLFxufTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNyZWF0ZVRleHRFbGVtZW50LFxuICBjcmVhdGVFbGVtZW50V2l0aENsYXNzLFxuICBjcmVhdGVJbWFnZSxcbn0gZnJvbSBcIi4vVUlGdW5jdGlvbnNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29uc3QgY3JlYXRlV2Vic2l0ZSA9ICgpID0+IHtcbiAgY3JlYXRlTmF2KCk7XG4gIGNyZWF0ZUluZm9Sb3coKTtcbiAgY3JlYXRlR3VhdGVtYWxhUm93KCk7XG4gIGNyZWF0ZUVnZ015WWFyZFJvdygpO1xuICBjcmVhdGVGb290ZXIoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJoZWFkZXItY29udGFpbmVyXCJcbiAgKTtcbiAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgXCJ1cmwoLi4vZGlzdC9pbWFnZXMvc2FudGEtbHVjaWEtbGFuZHNjYXBlLmpwZylcIjtcbiAgY29uc3Qgb3ZlcmxheSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgaGVhZGVyQ29udGFpbmVyLCBcIm92ZXJsYXlcIik7XG5cbiAgY29uc3QgbmF2Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiLCBvdmVybGF5LCBcIm5hdi1jb250YWluZXJcIik7XG5cbiAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBuYXZDb250YWluZXIsXG4gICAgXCJoZWFkaW5nLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBuYXZDb250YWluZXIsXG4gICAgXCJpbmZvLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgY2FsbFRvQWN0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIG5hdkNvbnRhaW5lcixcbiAgICBcImFjdGlvbi1jb250YWluZXJcIlxuICApO1xuXG4gIGNyZWF0ZVRleHRFbGVtZW50KFwiaDJcIiwgaGVhZGluZ0NvbnRhaW5lciwgXCJQVUVOVEVTXCIpO1xuICBjb25zdCBhYm91dFVzID0gY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGluZm9Db250YWluZXIsIFwiQWJvdXQgVXNcIik7XG4gIGFib3V0VXMub25jbGljayA9ICgpID0+IHNjcm9sbCgwLCA2NTApO1xuICBjb25zdCBndWF0ZW1hbGFUcmlwID0gY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGluZm9Db250YWluZXIsIFwiR3VhdGVtYWxhIFRyaXBcIik7XG4gIGd1YXRlbWFsYVRyaXAub25jbGljayA9ICgpID0+IHNjcm9sbCgwLCAxMDUwKTtcbiAgY29uc3QgZWdnTXlZYXJkID0gY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGluZm9Db250YWluZXIsIFwiRWdnIE15IFlhcmRcIik7XG4gIGVnZ015WWFyZC5vbmNsaWNrID0gKCkgPT4gc2Nyb2xsKDAsIDE2MDApO1xuICBjb25zdCBvcmRlckVnZ3MgPSBjcmVhdGVUZXh0RWxlbWVudChcImFcIiwgaW5mb0NvbnRhaW5lciwgXCJPcmRlciBFZ2dzXCIpO1xuICBvcmRlckVnZ3MuaHJlZiA9XG4gICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kLzFtanpIYkphVlZLcEpqRXJCci1fN010S3hwMWhZQ1oxdkxYRHhUQjk2UmlBL2VkaXRcIjtcbiAgb3JkZXJFZ2dzLmNsYXNzTGlzdC5hZGQoXCJnZXQtaW52b2x2ZWQtbGlua1wiKTtcblxuICBjb25zdCBnZXRJbnZvbHZlZCA9IGNyZWF0ZVRleHRFbGVtZW50KFwiYVwiLCBpbmZvQ29udGFpbmVyLCBcIkpvaW4gVXMhXCIpO1xuICBnZXRJbnZvbHZlZC5jbGFzc0xpc3QuYWRkKFwiZ2V0LWludm9sdmVkLWxpbmtcIik7XG4gIGdldEludm9sdmVkLmhyZWYgPVxuICAgIFwiaHR0cHM6Ly93d3cucmVtaW5kLmNvbS9jbGFzc2VzLy1wdWVudGVzL21lc3NhZ2VzL3N0cmVhbS83OTY2YjFlZi1lZjFiLTRiZWQtOGY2Zi01ZTRiYWI5ZDQ3MmRcIjtcblxuICBjb25zdCBpbnN0YWdyYW1IcmVmID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImFcIixcbiAgICBjYWxsVG9BY3Rpb25Db250YWluZXIsXG4gICAgXCJpbnN0YWdyYW0tbGluay1jb250YWluZXJcIlxuICApO1xuICBpbnN0YWdyYW1IcmVmLmhyZWYgPSBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vemNoc19wdWVudGVzL1wiO1xuICBjb25zdCBpbnN0YWdyYW1Mb2dvID0gY3JlYXRlSW1hZ2UoXG4gICAgXCIuLi9kaXN0L2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIsXG4gICAgaW5zdGFncmFtSHJlZixcbiAgICBcImluc3RhZ3JhbS1saW5rXCJcbiAgKTtcblxuICBjb25zdCBjYWxsVG9BY3Rpb25CdXR0b25IcmVmID0gY3JlYXRlRWxlbWVudChcImFcIiwgY2FsbFRvQWN0aW9uQ29udGFpbmVyKTtcbiAgY2FsbFRvQWN0aW9uQnV0dG9uSHJlZi5ocmVmID1cbiAgICBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMU1vU2FwU1BlVUFyVU9SclhlSElXQk5XVXY4eVN3OTNWMjFiVXNXbXJaTHcvZWRpdD91c3A9c2hhcmluZ1wiO1xuICBjb25zdCBjYWxsVG9BY3Rpb25CdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgY2FsbFRvQWN0aW9uQnV0dG9uSHJlZixcbiAgICBcImNhbGwtdG8tYWN0aW9uLWJ1dHRvblwiXG4gICk7XG4gIGNhbGxUb0FjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIlZpZXcgU2NoZWR1bGVcIjtcblxuICBjb25zdCBoZWFkaW5nID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImgxXCIsIG92ZXJsYXksIFwicGFnZS1oZWFkaW5nXCIpO1xuICBoZWFkaW5nLmlubmVyVGV4dCA9XG4gICAgXCJDb25uZWN0aW5nIHN0dWRlbnRzIHRvIHN1cHBvcnQgZWR1Y2F0aW9uIGFjcm9zcyB0aGUgZ2xvYmUhXCI7XG5cbiAgY29uc3QgaW5mb3JtYXRpb25BYm91dFRoZUltYWdlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcInBcIixcbiAgICBvdmVybGF5LFxuICAgIFwiaW5mb3JtYXRpb24tYWJvdXQtaGVhZGVyLWltZ1wiXG4gICk7XG4gIGluZm9ybWF0aW9uQWJvdXRUaGVJbWFnZS5pbm5lclRleHQgPSBcIlNhbnRhIEx1Y8OtYSwgR3VhdGVtYWxhXCI7XG59O1xuXG5jb25zdCBjcmVhdGVJbmZvUm93ID0gKCkgPT4ge1xuICBjb25zdCBpbmZvU2VjdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiaW5mby1zZWN0aW9uLWNvbnRhaW5lclwiXG4gICk7XG4gIGNvbnN0IGluZm9IZWFkaW5nID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImgxXCIsXG4gICAgaW5mb1NlY3Rpb25Db250YWluZXIsXG4gICAgXCJpbmZvLXNlY3Rpb24taGVhZGVyXCJcbiAgKTtcbiAgaW5mb0hlYWRpbmcuaW5uZXJUZXh0ID0gXCJBYm91dCBPdXIgQ2x1YlwiO1xuICBjb25zdCBpbmZvU3ViaGVhZGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGluZm9TZWN0aW9uQ29udGFpbmVyLFxuICAgIFwiaW5mby1zdWJoZWFkaW5nLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgcExlZnQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwicFwiLFxuICAgIGluZm9TdWJoZWFkZXJDb250YWluZXIsXG4gICAgXCJpbmZvLXNlY3Rpb24tcC1sZWZ0XCJcbiAgKTtcbiAgY29uc3QgcFJpZ2h0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcInBcIixcbiAgICBpbmZvU3ViaGVhZGVyQ29udGFpbmVyLFxuICAgIFwiaW5mby1zZWN0aW9uLXAtcmlnaHRcIlxuICApO1xuXG4gIHBMZWZ0LmlubmVyVGV4dCA9XG4gICAgJ1BVRU5URVMsIHdoaWNoIHN0YW5kcyBmb3IgUHJvbW90aW5nIFVuaXR5IGFuZCBFbXBvd2VybWVudCBOb2JseSBUaHJvdWdoIEVkdWNhdGlvbiBhbmQgU2VydmljZSwgYWltcyB0byBcIkJ1aWxkIGJyaWRnZXNcIiBiZXR3ZWVuIG91ciBjb21tdW5pdHkgaGVyZSBpbiBaaW9uc3ZpbGxlIGFuZCB0aG9zZSBpbiBMYXRpbiBBbWVyaWNhIHRocm91Z2ggYSBoYW5kcy1vbiBhcHByb2FjaC4nO1xuICBwUmlnaHQuaW5uZXJUZXh0ID1cbiAgICBcIlBVRU5URVMsIGZvcm1lcmx5IE9wZXJhdGlvbjogSG9uZHVyYXMsIGJlZ2FuIGluIEZlYnJ1YXJ5IDIwMjMgaW4gYW4gYXR0ZW1wdCB0byBwcm92aWRlIGV4dHJhIHN1cHBvcnQgZm9yIGNvbW11bml0aWVzIGluIEhvbmR1cmFzLiBIb3dldmVyLCBhcyB0aGUgMjAyMi0yMDIzIHNjaG9vbCB5ZWFyIGNhbWUgdG8gYSBjbG9zZSwgYSBuZXcgbGVhZiB3YXMgdHVybmVkIGZvciB0aGUgY2x1YiBhbmQgaXQgZXhwYW5kZWQgdG8gaW5jbHVkZSBhbGwgb2YgTGF0aW4gQW1lcmljYS5cIjtcbn07XG5cbmNvbnN0IGNyZWF0ZUd1YXRlbWFsYVJvdyA9ICgpID0+IHtcbiAgLyogVGhpcyBwYXJ0IGlzIG9ubHkgZm9yIHdoZW4gdGhlIHNjcmVlbiB3aWR0aCBnZXRzIHRoaW5cbiAgTm90IGZvciB0aGUgcGFydCB3aGVuIGl0IGlzIHdpZGUgKi9cblxuICBjb25zdCB0aGluU2NyZWVuR3VhdGVtYWxhQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJ0aGluLWd1YXRlbWFsYS1jb250YWluZXJcIlxuICApO1xuICBjb25zdCB0aGluU2NyZWVuR3VhdGVtYWxhT3ZlcmxheSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICB0aGluU2NyZWVuR3VhdGVtYWxhQ29udGFpbmVyLFxuICAgIFwidGhpbi1ndWF0ZW1hbGEtb3ZlcmxheVwiXG4gICk7XG5cbiAgY29uc3QgdGhpblNjcmVlbkd1YXRlbWFsYUhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoMVwiLFxuICAgIHRoaW5TY3JlZW5HdWF0ZW1hbGFPdmVybGF5LFxuICAgIFwidGhpbi1ndWF0ZW1hbGEtaGVhZGVyXCJcbiAgKTtcblxuICB0aGluU2NyZWVuR3VhdGVtYWxhSGVhZGVyLmlubmVyVGV4dCA9IFwiQ29tZSB3aXRoIHVzIHRvIEd1YXRlbWFsYSFcIjtcblxuICBjb25zdCB0aGluU2NyZWVuR3VhdGVtYWxhU3ViaGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImg0XCIsXG4gICAgdGhpblNjcmVlbkd1YXRlbWFsYU92ZXJsYXksXG4gICAgXCJ0aGluLWd1YXRlbWFsYS1zdWJoZWFkZXJcIlxuICApO1xuICB0aGluU2NyZWVuR3VhdGVtYWxhU3ViaGVhZGVyLmlubmVyVGV4dCA9XG4gICAgXCJUaGlzIHN1bW1lciAoSnVuZSAxMS0xOSAyMDI0KSB3ZSB3aWxsIGpvdXJuZXkgdG8gVGVjcMOhbiwgR3VhdGVtYWxhIHdoZXJlIGNsdWIgbWVtYmVycyB3aWxsIHBlcmZvcm0gaGFuZHMgb24gYWN0aXZpdGllcyB0byBoZWxwIGVkdWNhdGUgYW5kIGltcHJvdmUgY29uZGl0aW9ucyBhdCBhIHNjaG9vbC4gV2hldGhlciBvciBub3QgeW91IG9yIHlvdXIgY2hpbGQgaGFzIGFuIGludGVyZXN0IGluIGdvaW5nLCBmZWVsIGZyZWUgdG8gdGFrZSBhIGxvb2sgYXQgZXh0cmEgaW5mb3JtYXRpb24gYXMgdGhpcyB0cmlwIGlzIG91ciBtYWluIGZvY3VzIGFuZCB3aGVyZSBtb3N0IGZ1dHVyZSBwcm9jZWVkcyB3aWxsIGJlIGhlYWRpbmcuXCI7XG5cbiAgY29uc3QgdGhpblNjcmVlbkd1YXRlbWFsYUNhbGxUb0FjdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJhXCIsXG4gICAgdGhpblNjcmVlbkd1YXRlbWFsYU92ZXJsYXksXG4gICAgXCJndWF0ZW1hbGEtYnV0dG9uLWNvbnRhaW5lclwiXG4gICk7XG4gIHRoaW5TY3JlZW5HdWF0ZW1hbGFDYWxsVG9BY3Rpb25Db250YWluZXIuaHJlZiA9XG4gICAgXCJodHRwczovL2dsb2JhbGJyaWdhZGVzLTYwNDQ1OTEuaHMtc2l0ZXMuY29tL3NxdWFkc2Ficm9hZC16aW9uc3ZpbGxlaHMtanVuZTIwMjRcIjtcbiAgY29uc3QgdGhpblNjcmVlbkd1YXRlbWFsYUNhbGxUb0FjdGlvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJidXR0b25cIixcbiAgICB0aGluU2NyZWVuR3VhdGVtYWxhQ2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwidGhpbi1ndWF0ZW1hbGEtYnV0dG9uXCJcbiAgKTtcbiAgdGhpblNjcmVlbkd1YXRlbWFsYUNhbGxUb0FjdGlvbi5pbm5lclRleHQgPSBcIk1vcmUgSW5mb3JtYXRpb24gKyBSZWdpc3RyYXRpb25cIjtcblxuICAvKiBXaWRlIFNjcmVlbiBQYXJ0IVxuICBOb3QgZm9yIHRoaW4gc2NyZWVuICovXG5cbiAgY29uc3QgZ3VhdGVtYWxhQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJndWF0ZW1hbGEtY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgZ3VhdGVtYWxhQ29udGFpbmVyTGVmdCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXIsXG4gICAgXCJndWF0ZW1hbGEtY29udGFpbmVyLWxlZnRcIlxuICApO1xuICBjb25zdCBndWF0ZW1hbGFDb250YWluZXJSaWdodCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXIsXG4gICAgXCJndWF0ZW1hbGEtY29udGFpbmVyLXJpZ2h0XCJcbiAgKTtcbiAgY29uc3QgZ3VhdGVtYWxhSGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImgxXCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyTGVmdCxcbiAgICBcImd1YXRlbWFsYS1oZWFkZXJcIlxuICApO1xuICBndWF0ZW1hbGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJDb21lIHdpdGggdXMgdG8gR3VhdGVtYWxhIVwiO1xuICBjb25zdCBndWF0ZW1hbGFDYWxsVG9BY3Rpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYVwiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lckxlZnQsXG4gICAgXCJndWF0ZW1hbGEtYnV0dG9uLWNvbnRhaW5lclwiXG4gICk7XG4gIGd1YXRlbWFsYUNhbGxUb0FjdGlvbkNvbnRhaW5lci5ocmVmID1cbiAgICBcImh0dHBzOi8vZ2xvYmFsYnJpZ2FkZXMtNjA0NDU5MS5ocy1zaXRlcy5jb20vc3F1YWRzYWJyb2FkLXppb25zdmlsbGVocy1qdW5lMjAyNFwiO1xuICBjb25zdCBndWF0ZW1hbGFDYWxsVG9BY3Rpb24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgZ3VhdGVtYWxhQ2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwiZ3VhdGVtYWxhLWJ1dHRvblwiXG4gICk7XG4gIGd1YXRlbWFsYUNhbGxUb0FjdGlvbi5pbm5lclRleHQgPSBcIk1vcmUgSW5mb3JtYXRpb24gKyBSZWdpc3RyYXRpb25cIjtcblxuICBjb25zdCBndWF0ZW1hbGFTdWJoZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDRcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXJMZWZ0LFxuICAgIFwiZ3VhdGVtYWxhLXN1YmhlYWRlclwiXG4gICk7XG4gIGd1YXRlbWFsYVN1YmhlYWRlci5pbm5lclRleHQgPVxuICAgIFwiVGhpcyBzdW1tZXIgKEp1bmUgMTEtMTkgMjAyNCkgd2Ugd2lsbCBqb3VybmV5IHRvIFRlY3DDoW4sIEd1YXRlbWFsYSB3aGVyZSBjbHViIG1lbWJlcnMgd2lsbCBwZXJmb3JtIGhhbmRzIG9uIGFjdGl2aXRpZXMgdG8gaGVscCBlZHVjYXRlIGFuZCBpbXByb3ZlIGNvbmRpdGlvbnMgYXQgYSBzY2hvb2wuIFdoZXRoZXIgb3Igbm90IHlvdSBvciB5b3VyIGNoaWxkIGhhcyBhbiBpbnRlcmVzdCBpbiBnb2luZywgZmVlbCBmcmVlIHRvIHRha2UgYSBsb29rIGF0IGV4dHJhIGluZm9ybWF0aW9uIGFzIHRoaXMgdHJpcCBpcyBvdXIgbWFpbiBmb2N1cyBhbmQgd2hlcmUgbW9zdCBmdXR1cmUgcHJvY2VlZHMgd2lsbCBiZSBoZWFkaW5nLlwiO1xuXG4gIGNvbnN0IGd1YXRlbWFsYUltYWdlID0gY3JlYXRlSW1hZ2UoXG4gICAgXCIuLi9kaXN0L2ltYWdlcy9ndWF0ZW1hbGEtbGFuZHNjYXBlLmpwZ1wiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lclJpZ2h0LFxuICAgIFwiZ3VhdGVtYWxhLWltZ1wiXG4gICk7XG59O1xuXG5jb25zdCBjcmVhdGVFZ2dNeVlhcmRSb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGVnZ015WWFyZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiZWdnLW15LXlhcmQtY29udGFpbmVyXCJcbiAgKTtcbiAgZWdnTXlZYXJkQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKC4uL2Rpc3QvaW1hZ2VzL2Vhc3Rlci5qcGcpXCI7XG4gIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZWdnTXlZYXJkQ29udGFpbmVyLFxuICAgIFwiZWdnLW15LXlhcmQtb3ZlcmxheVwiXG4gICk7XG5cbiAgY29uc3QgZWdnTXlZYXJkSGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImgxXCIsXG4gICAgb3ZlcmxheSxcbiAgICBcImVnZy1teS15YXJkLWhlYWRlclwiXG4gICk7XG4gIGNvbnN0IGVnZ015WWFyZFN1YmhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoM1wiLFxuICAgIG92ZXJsYXksXG4gICAgXCJlZ2ctbXkteWFyZC1zdWJoZWFkZXJcIlxuICApO1xuICBlZ2dNeVlhcmRTdWJoZWFkZXIuaW5uZXJUZXh0ID1cbiAgICBcIkhlbHAgc3VwcG9ydCBvdXIgbWlzc2lvbiBieSBwYXJ0aWNpcGF0aW5nIGluIG91ciBhbm51YWwgZWdnIG15IHlhcmQgRWFzdGVyIGV2ZW50LiBGb3IgdGhpcyBldmVudCwgd2Ugd2lsbCBoaWRlIGVnZ3MgZm9yIHlvdSBpbiB5b3VyIGZyb250IG9yIGJhY2t5YXJkIGZvciBFYXN0ZXIuIElmIHlvdSBhcmUgaW50ZXJlc3RlZCBvciBzaW1wbHkgd2FudCB0byBoZWxwLCB5b3UgbWF5IGVpdGhlciBkZWNpZGUgdG8gcHVyY2hhc2UgZWdncyBmb3IgdXMgdG8gaGlkZSBmb3IgeW91IG9yIGhlbHAgdXMgYnkgZG9uYXRpbmcgYW55IHNwYXJlIGVnZ3Mgb3IgY2FuZHkgeW91IG1heSBoYXZlLCB0aGFuayB5b3UhXCI7XG4gIGVnZ015WWFyZEhlYWRlci5pbm5lclRleHQgPSBcIkVnZyBNeSBZYXJkIVwiO1xuXG4gIGNvbnN0IGVnZ015WWFyZENhbGxUb0FjdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJhXCIsXG4gICAgb3ZlcmxheSxcbiAgICBcImVnZy1teS15YXJkLWJ1dHRvbi1jb250YWluZXJcIlxuICApO1xuICBlZ2dNeVlhcmRDYWxsVG9BY3Rpb25Db250YWluZXIuaHJlZiA9XG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxUWtRVDUzZzcxaXU4bkFSVXZDdFVNcG4wc2V2eWZnQy92aWV3P3VzcD1zaGFyaW5nXCI7XG5cbiAgY29uc3QgZWdnTXlZYXJkQ2FsbFRvQWN0aW9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImJ1dHRvblwiLFxuICAgIGVnZ015WWFyZENhbGxUb0FjdGlvbkNvbnRhaW5lcixcbiAgICBcImVnZy1teS15YXJkLWJ1dHRvblwiXG4gICk7XG4gIGVnZ015WWFyZENhbGxUb0FjdGlvbi5pbm5lclRleHQgPSBcIkxlYXJuIE1vcmUhXCI7XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiZm9vdGVyLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgY2x1Yk5hbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZm9vdGVyQ29udGFpbmVyLFxuICAgIFwiZm9vdGVyLWNsdWItbmFtZS1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGNsdWJJbmZvQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGZvb3RlckNvbnRhaW5lcixcbiAgICBcImZvb3Rlci1jbHViLWluZm8tY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBjbHViQ2FsbFRvQWN0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGZvb3RlckNvbnRhaW5lcixcbiAgICBcImZvb3Rlci1jbHViLWNhbGwtdG8tYWN0aW9uLWNvbnRhaW5lclwiXG4gICk7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwiaDJcIiwgY2x1Yk5hbWVDb250YWluZXIsIFwiUFVFTlRFU1wiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgY2x1Yk5hbWVDb250YWluZXIsXG4gICAgXCJaaW9uc3ZpbGxlIENvbW11bml0eSBIaWdoIFNjaG9vbCBDbHViXCJcbiAgKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGNsdWJOYW1lQ29udGFpbmVyLCBcIkVtYWlsOiB6Y2hzcHVlbnRlc0BnbWFpbC5jb21cIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBjbHViTmFtZUNvbnRhaW5lciwgXCJJbnN0YWdyYW06IEB6Y2hzX3B1ZW50ZXNcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwiaDJcIiwgY2x1YkluZm9Db250YWluZXIsIFwiR2V0IEludm9sdmVkIVwiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGNsdWJJbmZvQ29udGFpbmVyLCBcIkVnZyBNeSBZYXJkXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgY2x1YkluZm9Db250YWluZXIsIFwiR3VhdGVtYWxhXCIpO1xuXG4gIGNvbnN0IGZvb3Rlckluc3RhZ3JhbUhyZWYgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYVwiLFxuICAgIGNsdWJDYWxsVG9BY3Rpb25Db250YWluZXIsXG4gICAgXCJmb290ZXItaW5zdGFncmFtLWxpbmstY29udGFpbmVyXCJcbiAgKTtcbiAgZm9vdGVySW5zdGFncmFtSHJlZi5ocmVmID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3pjaHNfcHVlbnRlcy9cIjtcbiAgY29uc3QgZm9vdGVySW5zdGFncmFtTG9nbyA9IGNyZWF0ZUltYWdlKFxuICAgIFwiLi4vZGlzdC9pbWFnZXMvZm9vdGVyLWluc3RhZ3JhbS5zdmdcIixcbiAgICBmb290ZXJJbnN0YWdyYW1IcmVmLFxuICAgIFwiZm9vdGVyLWluc3RhZ3JhbS1saW5rXCJcbiAgKTtcblxuICBjb25zdCBjYWxsVG9BY3Rpb25CdXR0b25IcmVmID0gY3JlYXRlRWxlbWVudChcImFcIiwgY2x1YkNhbGxUb0FjdGlvbkNvbnRhaW5lcik7XG4gIGNhbGxUb0FjdGlvbkJ1dHRvbkhyZWYuaHJlZiA9XG4gICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFNb1NhcFNQZVVBclVPUnJYZUhJV0JOV1V2OHlTdzkzVjIxYlVzV21yWkx3L2VkaXQ/dXNwPXNoYXJpbmdcIjtcbiAgY29uc3QgY2FsbFRvQWN0aW9uQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImJ1dHRvblwiLFxuICAgIGNhbGxUb0FjdGlvbkJ1dHRvbkhyZWYsXG4gICAgXCJmb290ZXItY2FsbC10by1hY3Rpb24tYnV0dG9uXCJcbiAgKTtcbiAgY2FsbFRvQWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiVmlldyBTY2hlZHVsZVwiO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlV2Vic2l0ZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVXZWJzaXRlIH0gZnJvbSBcIi4vaG9tZVwiO1xuXG5jcmVhdGVXZWJzaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=