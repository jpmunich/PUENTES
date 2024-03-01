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
  const fundraisers = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", infoContainer, "Fundraisers");
  fundraisers.addEventListener("mouseover", () => {
    const container = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
      "div",
      fundraisers,
      "drop-down-container"
    );
    const fundraiser = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
      "p",
      container,
      "drop-down-fundraiser"
    );
    fundraiser.innerText = "Egg My Yard";
  });
  fundraisers.addEventListener("mouseout", () => {
    document.getElementsByClassName("drop-down-container")[0].remove();
  });

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
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(
    "p",
    clubNameContainer,
    "Email: operationhonduras00@gmail.com"
  );
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", clubNameContainer, "Instagram: @operation_honduras");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051Qzs7QUFFdkMsb0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWVudGVzLy4vc3JjL1VJRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3B1ZW50ZXMvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wdWVudGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wdWVudGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHVlbnRlcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIHBhcmVudCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRleHRFbGVtZW50ID0gKHR5cGUsIHBhcmVudCwgdGV4dCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyA9ICh0eXBlLCBwYXJlbnQsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVJbWFnZSA9IChzb3VyY2UsIHBhcmVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgZWxlbWVudC5zcmMgPSBzb3VyY2U7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVUZXh0RWxlbWVudCxcbiAgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyxcbiAgY3JlYXRlSW1hZ2UsXG59O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlRWxlbWVudCxcbiAgY3JlYXRlVGV4dEVsZW1lbnQsXG4gIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MsXG4gIGNyZWF0ZUltYWdlLFxufSBmcm9tIFwiLi9VSUZ1bmN0aW9uc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBjcmVhdGVXZWJzaXRlID0gKCkgPT4ge1xuICBjcmVhdGVOYXYoKTtcbiAgY3JlYXRlSW5mb1JvdygpO1xuICBjcmVhdGVHdWF0ZW1hbGFSb3coKTtcbiAgY3JlYXRlRWdnTXlZYXJkUm93KCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xufTtcblxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImhlYWRlci1jb250YWluZXJcIlxuICApO1xuICBoZWFkZXJDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICBcInVybCguLi9kaXN0L2ltYWdlcy9zYW50YS1sdWNpYS1sYW5kc2NhcGUuanBnKVwiO1xuICBjb25zdCBvdmVybGF5ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiLCBoZWFkZXJDb250YWluZXIsIFwib3ZlcmxheVwiKTtcblxuICBjb25zdCBuYXZDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIG92ZXJsYXksIFwibmF2LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIG5hdkNvbnRhaW5lcixcbiAgICBcImhlYWRpbmctY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBpbmZvQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIG5hdkNvbnRhaW5lcixcbiAgICBcImluZm8tY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBjYWxsVG9BY3Rpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgbmF2Q29udGFpbmVyLFxuICAgIFwiYWN0aW9uLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJoMlwiLCBoZWFkaW5nQ29udGFpbmVyLCBcIlBVRU5URVNcIik7XG4gIGNvbnN0IGFib3V0VXMgPSBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJBYm91dCBVc1wiKTtcbiAgYWJvdXRVcy5vbmNsaWNrID0gKCkgPT4gc2Nyb2xsKDAsIDY1MCk7XG4gIGNvbnN0IGd1YXRlbWFsYVRyaXAgPSBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJHdWF0ZW1hbGEgVHJpcFwiKTtcbiAgZ3VhdGVtYWxhVHJpcC5vbmNsaWNrID0gKCkgPT4gc2Nyb2xsKDAsIDEwNTApO1xuICBjb25zdCBlZ2dNeVlhcmQgPSBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJFZ2cgTXkgWWFyZFwiKTtcbiAgZWdnTXlZYXJkLm9uY2xpY2sgPSAoKSA9PiBzY3JvbGwoMCwgMTYwMCk7XG4gIGNvbnN0IGZ1bmRyYWlzZXJzID0gY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGluZm9Db250YWluZXIsIFwiRnVuZHJhaXNlcnNcIik7XG4gIGZ1bmRyYWlzZXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICBcImRpdlwiLFxuICAgICAgZnVuZHJhaXNlcnMsXG4gICAgICBcImRyb3AtZG93bi1jb250YWluZXJcIlxuICAgICk7XG4gICAgY29uc3QgZnVuZHJhaXNlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICBcInBcIixcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIFwiZHJvcC1kb3duLWZ1bmRyYWlzZXJcIlxuICAgICk7XG4gICAgZnVuZHJhaXNlci5pbm5lclRleHQgPSBcIkVnZyBNeSBZYXJkXCI7XG4gIH0pO1xuICBmdW5kcmFpc2Vycy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wLWRvd24tY29udGFpbmVyXCIpWzBdLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBnZXRJbnZvbHZlZCA9IGNyZWF0ZVRleHRFbGVtZW50KFwiYVwiLCBpbmZvQ29udGFpbmVyLCBcIkpvaW4gVXMhXCIpO1xuICBnZXRJbnZvbHZlZC5jbGFzc0xpc3QuYWRkKFwiZ2V0LWludm9sdmVkLWxpbmtcIik7XG4gIGdldEludm9sdmVkLmhyZWYgPVxuICAgIFwiaHR0cHM6Ly93d3cucmVtaW5kLmNvbS9jbGFzc2VzLy1wdWVudGVzL21lc3NhZ2VzL3N0cmVhbS83OTY2YjFlZi1lZjFiLTRiZWQtOGY2Zi01ZTRiYWI5ZDQ3MmRcIjtcblxuICBjb25zdCBpbnN0YWdyYW1IcmVmID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImFcIixcbiAgICBjYWxsVG9BY3Rpb25Db250YWluZXIsXG4gICAgXCJpbnN0YWdyYW0tbGluay1jb250YWluZXJcIlxuICApO1xuICBpbnN0YWdyYW1IcmVmLmhyZWYgPSBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vemNoc19wdWVudGVzL1wiO1xuICBjb25zdCBpbnN0YWdyYW1Mb2dvID0gY3JlYXRlSW1hZ2UoXG4gICAgXCIuLi9kaXN0L2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIsXG4gICAgaW5zdGFncmFtSHJlZixcbiAgICBcImluc3RhZ3JhbS1saW5rXCJcbiAgKTtcblxuICBjb25zdCBjYWxsVG9BY3Rpb25CdXR0b25IcmVmID0gY3JlYXRlRWxlbWVudChcImFcIiwgY2FsbFRvQWN0aW9uQ29udGFpbmVyKTtcbiAgY2FsbFRvQWN0aW9uQnV0dG9uSHJlZi5ocmVmID1cbiAgICBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMU1vU2FwU1BlVUFyVU9SclhlSElXQk5XVXY4eVN3OTNWMjFiVXNXbXJaTHcvZWRpdD91c3A9c2hhcmluZ1wiO1xuICBjb25zdCBjYWxsVG9BY3Rpb25CdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgY2FsbFRvQWN0aW9uQnV0dG9uSHJlZixcbiAgICBcImNhbGwtdG8tYWN0aW9uLWJ1dHRvblwiXG4gICk7XG4gIGNhbGxUb0FjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIlZpZXcgU2NoZWR1bGVcIjtcblxuICBjb25zdCBoZWFkaW5nID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImgxXCIsIG92ZXJsYXksIFwicGFnZS1oZWFkaW5nXCIpO1xuICBoZWFkaW5nLmlubmVyVGV4dCA9XG4gICAgXCJDb25uZWN0aW5nIHN0dWRlbnRzIHRvIHN1cHBvcnQgZWR1Y2F0aW9uIGFjcm9zcyB0aGUgZ2xvYmUhXCI7XG5cbiAgY29uc3QgaW5mb3JtYXRpb25BYm91dFRoZUltYWdlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcInBcIixcbiAgICBvdmVybGF5LFxuICAgIFwiaW5mb3JtYXRpb24tYWJvdXQtaGVhZGVyLWltZ1wiXG4gICk7XG4gIGluZm9ybWF0aW9uQWJvdXRUaGVJbWFnZS5pbm5lclRleHQgPSBcIlNhbnRhIEx1Y8OtYSwgR3VhdGVtYWxhXCI7XG59O1xuXG5jb25zdCBjcmVhdGVJbmZvUm93ID0gKCkgPT4ge1xuICBjb25zdCBpbmZvU2VjdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiaW5mby1zZWN0aW9uLWNvbnRhaW5lclwiXG4gICk7XG4gIGNvbnN0IGluZm9IZWFkaW5nID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImgxXCIsXG4gICAgaW5mb1NlY3Rpb25Db250YWluZXIsXG4gICAgXCJpbmZvLXNlY3Rpb24taGVhZGVyXCJcbiAgKTtcbiAgaW5mb0hlYWRpbmcuaW5uZXJUZXh0ID0gXCJBYm91dCBPdXIgQ2x1YlwiO1xuICBjb25zdCBpbmZvU3ViaGVhZGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGluZm9TZWN0aW9uQ29udGFpbmVyLFxuICAgIFwiaW5mby1zdWJoZWFkaW5nLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgcExlZnQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwicFwiLFxuICAgIGluZm9TdWJoZWFkZXJDb250YWluZXIsXG4gICAgXCJpbmZvLXNlY3Rpb24tcC1sZWZ0XCJcbiAgKTtcbiAgY29uc3QgcFJpZ2h0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcInBcIixcbiAgICBpbmZvU3ViaGVhZGVyQ29udGFpbmVyLFxuICAgIFwiaW5mby1zZWN0aW9uLXAtcmlnaHRcIlxuICApO1xuXG4gIHBMZWZ0LmlubmVyVGV4dCA9XG4gICAgJ1BVRU5URVMsIHdoaWNoIHN0YW5kcyBmb3IgUHJvbW90aW5nIFVuaXR5IGFuZCBFbXBvd2VybWVudCBOb2JseSBUaHJvdWdoIEVkdWNhdGlvbiBhbmQgU2VydmljZSwgYWltcyB0byBcIkJ1aWxkIGJyaWRnZXNcIiBiZXR3ZWVuIG91ciBjb21tdW5pdHkgaGVyZSBpbiBaaW9uc3ZpbGxlIGFuZCB0aG9zZSBpbiBMYXRpbiBBbWVyaWNhIHRocm91Z2ggYSBoYW5kcy1vbiBhcHByb2FjaC4nO1xuICBwUmlnaHQuaW5uZXJUZXh0ID1cbiAgICBcIlBVRU5URVMsIGZvcm1lcmx5IE9wZXJhdGlvbjogSG9uZHVyYXMsIGJlZ2FuIGluIEZlYnJ1YXJ5IDIwMjMgaW4gYW4gYXR0ZW1wdCB0byBwcm92aWRlIGV4dHJhIHN1cHBvcnQgZm9yIGNvbW11bml0aWVzIGluIEhvbmR1cmFzLiBIb3dldmVyLCBhcyB0aGUgMjAyMi0yMDIzIHNjaG9vbCB5ZWFyIGNhbWUgdG8gYSBjbG9zZSwgYSBuZXcgbGVhZiB3YXMgdHVybmVkIGZvciB0aGUgY2x1YiBhbmQgaXQgZXhwYW5kZWQgdG8gaW5jbHVkZSBhbGwgb2YgTGF0aW4gQW1lcmljYS5cIjtcbn07XG5cbmNvbnN0IGNyZWF0ZUd1YXRlbWFsYVJvdyA9ICgpID0+IHtcbiAgLyogVGhpcyBwYXJ0IGlzIG9ubHkgZm9yIHdoZW4gdGhlIHNjcmVlbiB3aWR0aCBnZXRzIHRoaW5cbiAgTm90IGZvciB0aGUgcGFydCB3aGVuIGl0IGlzIHdpZGUgKi9cblxuICBjb25zdCB0aGluU2NyZWVuR3VhdGVtYWxhQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJ0aGluLWd1YXRlbWFsYS1jb250YWluZXJcIlxuICApO1xuICBjb25zdCB0aGluU2NyZWVuR3VhdGVtYWxhT3ZlcmxheSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICB0aGluU2NyZWVuR3VhdGVtYWxhQ29udGFpbmVyLFxuICAgIFwidGhpbi1ndWF0ZW1hbGEtb3ZlcmxheVwiXG4gICk7XG5cbiAgY29uc3QgdGhpblNjcmVlbkd1YXRlbWFsYUhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoMVwiLFxuICAgIHRoaW5TY3JlZW5HdWF0ZW1hbGFPdmVybGF5LFxuICAgIFwidGhpbi1ndWF0ZW1hbGEtaGVhZGVyXCJcbiAgKTtcblxuICB0aGluU2NyZWVuR3VhdGVtYWxhSGVhZGVyLmlubmVyVGV4dCA9IFwiQ29tZSB3aXRoIHVzIHRvIEd1YXRlbWFsYSFcIjtcblxuICBjb25zdCB0aGluU2NyZWVuR3VhdGVtYWxhU3ViaGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImg0XCIsXG4gICAgdGhpblNjcmVlbkd1YXRlbWFsYU92ZXJsYXksXG4gICAgXCJ0aGluLWd1YXRlbWFsYS1zdWJoZWFkZXJcIlxuICApO1xuICB0aGluU2NyZWVuR3VhdGVtYWxhU3ViaGVhZGVyLmlubmVyVGV4dCA9XG4gICAgXCJUaGlzIHN1bW1lciAoSnVuZSAxMS0xOSAyMDI0KSB3ZSB3aWxsIGpvdXJuZXkgdG8gVGVjcMOhbiwgR3VhdGVtYWxhIHdoZXJlIGNsdWIgbWVtYmVycyB3aWxsIHBlcmZvcm0gaGFuZHMgb24gYWN0aXZpdGllcyB0byBoZWxwIGVkdWNhdGUgYW5kIGltcHJvdmUgY29uZGl0aW9ucyBhdCBhIHNjaG9vbC4gV2hldGhlciBvciBub3QgeW91IG9yIHlvdXIgY2hpbGQgaGFzIGFuIGludGVyZXN0IGluIGdvaW5nLCBmZWVsIGZyZWUgdG8gdGFrZSBhIGxvb2sgYXQgZXh0cmEgaW5mb3JtYXRpb24gYXMgdGhpcyB0cmlwIGlzIG91ciBtYWluIGZvY3VzIGFuZCB3aGVyZSBtb3N0IGZ1dHVyZSBwcm9jZWVkcyB3aWxsIGJlIGhlYWRpbmcuXCI7XG5cbiAgY29uc3QgdGhpblNjcmVlbkd1YXRlbWFsYUNhbGxUb0FjdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJhXCIsXG4gICAgdGhpblNjcmVlbkd1YXRlbWFsYU92ZXJsYXksXG4gICAgXCJndWF0ZW1hbGEtYnV0dG9uLWNvbnRhaW5lclwiXG4gICk7XG4gIHRoaW5TY3JlZW5HdWF0ZW1hbGFDYWxsVG9BY3Rpb25Db250YWluZXIuaHJlZiA9XG4gICAgXCJodHRwczovL2dsb2JhbGJyaWdhZGVzLTYwNDQ1OTEuaHMtc2l0ZXMuY29tL3NxdWFkc2Ficm9hZC16aW9uc3ZpbGxlaHMtanVuZTIwMjRcIjtcbiAgY29uc3QgdGhpblNjcmVlbkd1YXRlbWFsYUNhbGxUb0FjdGlvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJidXR0b25cIixcbiAgICB0aGluU2NyZWVuR3VhdGVtYWxhQ2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwidGhpbi1ndWF0ZW1hbGEtYnV0dG9uXCJcbiAgKTtcbiAgdGhpblNjcmVlbkd1YXRlbWFsYUNhbGxUb0FjdGlvbi5pbm5lclRleHQgPSBcIk1vcmUgSW5mb3JtYXRpb24gKyBSZWdpc3RyYXRpb25cIjtcblxuICAvKiBXaWRlIFNjcmVlbiBQYXJ0IVxuICBOb3QgZm9yIHRoaW4gc2NyZWVuICovXG5cbiAgY29uc3QgZ3VhdGVtYWxhQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJndWF0ZW1hbGEtY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgZ3VhdGVtYWxhQ29udGFpbmVyTGVmdCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXIsXG4gICAgXCJndWF0ZW1hbGEtY29udGFpbmVyLWxlZnRcIlxuICApO1xuICBjb25zdCBndWF0ZW1hbGFDb250YWluZXJSaWdodCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXIsXG4gICAgXCJndWF0ZW1hbGEtY29udGFpbmVyLXJpZ2h0XCJcbiAgKTtcbiAgY29uc3QgZ3VhdGVtYWxhSGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImgxXCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyTGVmdCxcbiAgICBcImd1YXRlbWFsYS1oZWFkZXJcIlxuICApO1xuICBndWF0ZW1hbGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJDb21lIHdpdGggdXMgdG8gR3VhdGVtYWxhIVwiO1xuICBjb25zdCBndWF0ZW1hbGFDYWxsVG9BY3Rpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYVwiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lckxlZnQsXG4gICAgXCJndWF0ZW1hbGEtYnV0dG9uLWNvbnRhaW5lclwiXG4gICk7XG4gIGd1YXRlbWFsYUNhbGxUb0FjdGlvbkNvbnRhaW5lci5ocmVmID1cbiAgICBcImh0dHBzOi8vZ2xvYmFsYnJpZ2FkZXMtNjA0NDU5MS5ocy1zaXRlcy5jb20vc3F1YWRzYWJyb2FkLXppb25zdmlsbGVocy1qdW5lMjAyNFwiO1xuICBjb25zdCBndWF0ZW1hbGFDYWxsVG9BY3Rpb24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgZ3VhdGVtYWxhQ2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwiZ3VhdGVtYWxhLWJ1dHRvblwiXG4gICk7XG4gIGd1YXRlbWFsYUNhbGxUb0FjdGlvbi5pbm5lclRleHQgPSBcIk1vcmUgSW5mb3JtYXRpb24gKyBSZWdpc3RyYXRpb25cIjtcblxuICBjb25zdCBndWF0ZW1hbGFTdWJoZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDRcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXJMZWZ0LFxuICAgIFwiZ3VhdGVtYWxhLXN1YmhlYWRlclwiXG4gICk7XG4gIGd1YXRlbWFsYVN1YmhlYWRlci5pbm5lclRleHQgPVxuICAgIFwiVGhpcyBzdW1tZXIgKEp1bmUgMTEtMTkgMjAyNCkgd2Ugd2lsbCBqb3VybmV5IHRvIFRlY3DDoW4sIEd1YXRlbWFsYSB3aGVyZSBjbHViIG1lbWJlcnMgd2lsbCBwZXJmb3JtIGhhbmRzIG9uIGFjdGl2aXRpZXMgdG8gaGVscCBlZHVjYXRlIGFuZCBpbXByb3ZlIGNvbmRpdGlvbnMgYXQgYSBzY2hvb2wuIFdoZXRoZXIgb3Igbm90IHlvdSBvciB5b3VyIGNoaWxkIGhhcyBhbiBpbnRlcmVzdCBpbiBnb2luZywgZmVlbCBmcmVlIHRvIHRha2UgYSBsb29rIGF0IGV4dHJhIGluZm9ybWF0aW9uIGFzIHRoaXMgdHJpcCBpcyBvdXIgbWFpbiBmb2N1cyBhbmQgd2hlcmUgbW9zdCBmdXR1cmUgcHJvY2VlZHMgd2lsbCBiZSBoZWFkaW5nLlwiO1xuXG4gIGNvbnN0IGd1YXRlbWFsYUltYWdlID0gY3JlYXRlSW1hZ2UoXG4gICAgXCIuLi9kaXN0L2ltYWdlcy9ndWF0ZW1hbGEtbGFuZHNjYXBlLmpwZ1wiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lclJpZ2h0LFxuICAgIFwiZ3VhdGVtYWxhLWltZ1wiXG4gICk7XG59O1xuXG5jb25zdCBjcmVhdGVFZ2dNeVlhcmRSb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGVnZ015WWFyZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiZWdnLW15LXlhcmQtY29udGFpbmVyXCJcbiAgKTtcbiAgZWdnTXlZYXJkQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKC4uL2Rpc3QvaW1hZ2VzL2Vhc3Rlci5qcGcpXCI7XG4gIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZWdnTXlZYXJkQ29udGFpbmVyLFxuICAgIFwiZWdnLW15LXlhcmQtb3ZlcmxheVwiXG4gICk7XG5cbiAgY29uc3QgZWdnTXlZYXJkSGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImgxXCIsXG4gICAgb3ZlcmxheSxcbiAgICBcImVnZy1teS15YXJkLWhlYWRlclwiXG4gICk7XG4gIGNvbnN0IGVnZ015WWFyZFN1YmhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoM1wiLFxuICAgIG92ZXJsYXksXG4gICAgXCJlZ2ctbXkteWFyZC1zdWJoZWFkZXJcIlxuICApO1xuICBlZ2dNeVlhcmRTdWJoZWFkZXIuaW5uZXJUZXh0ID1cbiAgICBcIkhlbHAgc3VwcG9ydCBvdXIgbWlzc2lvbiBieSBwYXJ0aWNpcGF0aW5nIGluIG91ciBhbm51YWwgZWdnIG15IHlhcmQgRWFzdGVyIGV2ZW50LiBGb3IgdGhpcyBldmVudCwgd2Ugd2lsbCBoaWRlIGVnZ3MgZm9yIHlvdSBpbiB5b3VyIGZyb250IG9yIGJhY2t5YXJkIGZvciBFYXN0ZXIuIElmIHlvdSBhcmUgaW50ZXJlc3RlZCBvciBzaW1wbHkgd2FudCB0byBoZWxwLCB5b3UgbWF5IGVpdGhlciBkZWNpZGUgdG8gcHVyY2hhc2UgZWdncyBmb3IgdXMgdG8gaGlkZSBmb3IgeW91IG9yIGhlbHAgdXMgYnkgZG9uYXRpbmcgYW55IHNwYXJlIGVnZ3Mgb3IgY2FuZHkgeW91IG1heSBoYXZlLCB0aGFuayB5b3UhXCI7XG4gIGVnZ015WWFyZEhlYWRlci5pbm5lclRleHQgPSBcIkVnZyBNeSBZYXJkIVwiO1xuXG4gIGNvbnN0IGVnZ015WWFyZENhbGxUb0FjdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJhXCIsXG4gICAgb3ZlcmxheSxcbiAgICBcImVnZy1teS15YXJkLWJ1dHRvbi1jb250YWluZXJcIlxuICApO1xuICBlZ2dNeVlhcmRDYWxsVG9BY3Rpb25Db250YWluZXIuaHJlZiA9XG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxUWtRVDUzZzcxaXU4bkFSVXZDdFVNcG4wc2V2eWZnQy92aWV3P3VzcD1zaGFyaW5nXCI7XG5cbiAgY29uc3QgZWdnTXlZYXJkQ2FsbFRvQWN0aW9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImJ1dHRvblwiLFxuICAgIGVnZ015WWFyZENhbGxUb0FjdGlvbkNvbnRhaW5lcixcbiAgICBcImVnZy1teS15YXJkLWJ1dHRvblwiXG4gICk7XG4gIGVnZ015WWFyZENhbGxUb0FjdGlvbi5pbm5lclRleHQgPSBcIkxlYXJuIE1vcmUhXCI7XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiZm9vdGVyLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgY2x1Yk5hbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZm9vdGVyQ29udGFpbmVyLFxuICAgIFwiZm9vdGVyLWNsdWItbmFtZS1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGNsdWJJbmZvQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGZvb3RlckNvbnRhaW5lcixcbiAgICBcImZvb3Rlci1jbHViLWluZm8tY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBjbHViQ2FsbFRvQWN0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGZvb3RlckNvbnRhaW5lcixcbiAgICBcImZvb3Rlci1jbHViLWNhbGwtdG8tYWN0aW9uLWNvbnRhaW5lclwiXG4gICk7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwiaDJcIiwgY2x1Yk5hbWVDb250YWluZXIsIFwiUFVFTlRFU1wiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgY2x1Yk5hbWVDb250YWluZXIsXG4gICAgXCJaaW9uc3ZpbGxlIENvbW11bml0eSBIaWdoIFNjaG9vbCBDbHViXCJcbiAgKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgY2x1Yk5hbWVDb250YWluZXIsXG4gICAgXCJFbWFpbDogb3BlcmF0aW9uaG9uZHVyYXMwMEBnbWFpbC5jb21cIlxuICApO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgY2x1Yk5hbWVDb250YWluZXIsIFwiSW5zdGFncmFtOiBAb3BlcmF0aW9uX2hvbmR1cmFzXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcImgyXCIsIGNsdWJJbmZvQ29udGFpbmVyLCBcIkdldCBJbnZvbHZlZCFcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBjbHViSW5mb0NvbnRhaW5lciwgXCJFZ2cgTXkgWWFyZFwiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGNsdWJJbmZvQ29udGFpbmVyLCBcIkd1YXRlbWFsYVwiKTtcblxuICBjb25zdCBmb290ZXJJbnN0YWdyYW1IcmVmID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImFcIixcbiAgICBjbHViQ2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwiZm9vdGVyLWluc3RhZ3JhbS1saW5rLWNvbnRhaW5lclwiXG4gICk7XG4gIGZvb3Rlckluc3RhZ3JhbUhyZWYuaHJlZiA9IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS96Y2hzX3B1ZW50ZXMvXCI7XG4gIGNvbnN0IGZvb3Rlckluc3RhZ3JhbUxvZ28gPSBjcmVhdGVJbWFnZShcbiAgICBcIi4uL2Rpc3QvaW1hZ2VzL2Zvb3Rlci1pbnN0YWdyYW0uc3ZnXCIsXG4gICAgZm9vdGVySW5zdGFncmFtSHJlZixcbiAgICBcImZvb3Rlci1pbnN0YWdyYW0tbGlua1wiXG4gICk7XG5cbiAgY29uc3QgY2FsbFRvQWN0aW9uQnV0dG9uSHJlZiA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIGNsdWJDYWxsVG9BY3Rpb25Db250YWluZXIpO1xuICBjYWxsVG9BY3Rpb25CdXR0b25IcmVmLmhyZWYgPVxuICAgIFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xTW9TYXBTUGVVQXJVT1JyWGVISVdCTldVdjh5U3c5M1YyMWJVc1dtclpMdy9lZGl0P3VzcD1zaGFyaW5nXCI7XG4gIGNvbnN0IGNhbGxUb0FjdGlvbkJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJidXR0b25cIixcbiAgICBjYWxsVG9BY3Rpb25CdXR0b25IcmVmLFxuICAgIFwiZm9vdGVyLWNhbGwtdG8tYWN0aW9uLWJ1dHRvblwiXG4gICk7XG4gIGNhbGxUb0FjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIlZpZXcgU2NoZWR1bGVcIjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVdlYnNpdGUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlV2Vic2l0ZSB9IGZyb20gXCIuL2hvbWVcIjtcblxuY3JlYXRlV2Vic2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9