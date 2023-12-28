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
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", infoContainer, "About Us");
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", infoContainer, "What we do");
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", infoContainer, "Donate");
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", infoContainer, "Fundraisers");
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", infoContainer, "Get Involved");
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createImage)(
    "../dist/images/instagram.svg",
    callToActionContainer,
    "instagram-link"
  );
  const callToActionButton = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "button",
    callToActionContainer,
    "call-to-action-button"
  );
  callToActionButton.innerText = "Call to Action";

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
  const infoContainer = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "div",
    content,
    "info-section-container"
  );
  const pLeft = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "p",
    infoContainer,
    "info-section-p-left"
  );
  const pRight = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "p",
    infoContainer,
    "info-section-p-right"
  );

  pLeft.innerText =
    'PUENTES, which stands for Promoting Unity and Empowerment Nobly Through Education and Service, aims to "Build bridges" between our community here in Zionsville and those in Latin America through a hands-on approach.';
  pRight.innerText =
    "PUENTES, formerly Operation: Honduras, began in February 2023 in an attempt to provide extra support for communities in Honduras. However, as the 2022-2023 school year came to a close, a new leaf was turned for the club and it expanded to include all of Latin America.";
};

const createGuatemalaRow = () => {
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
  const guatemalaCallToAction = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "button",
    guatemalaContainerLeft,
    "guatemala-button"
  );

  const guatemalaSubheader = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "h4",
    guatemalaContainerLeft,
    "guatemala-subheader"
  );
  guatemalaSubheader.innerText =
    "This summer (June 11-19 2024) we will journey to Tecpán, Guatemala where club members will perform hands on activities to help educate and improve conditions at a school. Whether or not you or your child has an interest in going, feel free to take a look at extra information as this trip is our main focus and where most future proceeds will be heading.";
  guatemalaCallToAction.innerText = "Call to Action";
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

  const eggMyYardCallToAction = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "button",
    overlay,
    "egg-my-yard-button"
  );
  eggMyYardCallToAction.innerText = "Call to Action";
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

  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createImage)(
    "../dist/images/footer-instagram.svg",
    clubCallToActionContainer,
    "footer-instagram-link"
  );
  const callToActionButton = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "button",
    clubCallToActionContainer,
    "footer-call-to-action-button"
  );
  callToActionButton.innerText = "Call to Action";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPRTs7Ozs7Ozs7Ozs7Ozs7OztBQzVCcUI7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG9FQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0VBQXNCOztBQUV4Qyx1QkFBdUIsb0VBQXNCOztBQUU3QywyQkFBMkIsb0VBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvRUFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLG9FQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLCtEQUFpQjtBQUNuQixFQUFFLCtEQUFpQjtBQUNuQixFQUFFLCtEQUFpQjtBQUNuQixFQUFFLCtEQUFpQjtBQUNuQixFQUFFLCtEQUFpQjtBQUNuQixFQUFFLCtEQUFpQjtBQUNuQixFQUFFLHlEQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0VBQXNCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG9FQUFzQjtBQUN4QztBQUNBOztBQUVBLG1DQUFtQyxvRUFBc0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLG9FQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvRUFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0VBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsb0VBQXNCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9FQUFzQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvRUFBc0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0VBQXNCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0VBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixvRUFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseURBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixvRUFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvRUFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLG9FQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvRUFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLG9FQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsb0VBQXNCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixvRUFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLG9FQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0Msb0VBQXNCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBaUI7QUFDbkIsRUFBRSwrREFBaUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtEQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWlCO0FBQ25CLEVBQUUsK0RBQWlCO0FBQ25CLEVBQUUsK0RBQWlCO0FBQ25CLEVBQUUsK0RBQWlCOztBQUVuQixFQUFFLHlEQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0VBQXNCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUI7Ozs7Ozs7VUN2T3pCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDLG9EQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVlbnRlcy8uL3NyYy9VSUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9wdWVudGVzLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcHVlbnRlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wdWVudGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wdWVudGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHVlbnRlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3B1ZW50ZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBwYXJlbnQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVUZXh0RWxlbWVudCA9ICh0eXBlLCBwYXJlbnQsIHRleHQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MgPSAodHlwZSwgcGFyZW50LCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlSW1hZ2UgPSAoc291cmNlLCBwYXJlbnQsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGVsZW1lbnQuc3JjID0gc291cmNlO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlRWxlbWVudCxcbiAgY3JlYXRlVGV4dEVsZW1lbnQsXG4gIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MsXG4gIGNyZWF0ZUltYWdlLFxufTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNyZWF0ZVRleHRFbGVtZW50LFxuICBjcmVhdGVFbGVtZW50V2l0aENsYXNzLFxuICBjcmVhdGVJbWFnZSxcbn0gZnJvbSBcIi4vVUlGdW5jdGlvbnNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29uc3QgY3JlYXRlV2Vic2l0ZSA9ICgpID0+IHtcbiAgY3JlYXRlTmF2KCk7XG4gIGNyZWF0ZUluZm9Sb3coKTtcbiAgY3JlYXRlR3VhdGVtYWxhUm93KCk7XG4gIGNyZWF0ZUVnZ015WWFyZFJvdygpO1xuICBjcmVhdGVGb290ZXIoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJoZWFkZXItY29udGFpbmVyXCJcbiAgKTtcbiAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgXCJ1cmwoLi4vZGlzdC9pbWFnZXMvc2FudGEtbHVjaWEtbGFuZHNjYXBlLmpwZylcIjtcbiAgY29uc3Qgb3ZlcmxheSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgaGVhZGVyQ29udGFpbmVyLCBcIm92ZXJsYXlcIik7XG5cbiAgY29uc3QgbmF2Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiLCBvdmVybGF5LCBcIm5hdi1jb250YWluZXJcIik7XG5cbiAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBuYXZDb250YWluZXIsXG4gICAgXCJoZWFkaW5nLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBuYXZDb250YWluZXIsXG4gICAgXCJpbmZvLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgY2FsbFRvQWN0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIG5hdkNvbnRhaW5lcixcbiAgICBcImFjdGlvbi1jb250YWluZXJcIlxuICApO1xuXG4gIGNyZWF0ZVRleHRFbGVtZW50KFwiaDJcIiwgaGVhZGluZ0NvbnRhaW5lciwgXCJQVUVOVEVTXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJBYm91dCBVc1wiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGluZm9Db250YWluZXIsIFwiV2hhdCB3ZSBkb1wiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGluZm9Db250YWluZXIsIFwiRG9uYXRlXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJGdW5kcmFpc2Vyc1wiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGluZm9Db250YWluZXIsIFwiR2V0IEludm9sdmVkXCIpO1xuICBjcmVhdGVJbWFnZShcbiAgICBcIi4uL2Rpc3QvaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIixcbiAgICBjYWxsVG9BY3Rpb25Db250YWluZXIsXG4gICAgXCJpbnN0YWdyYW0tbGlua1wiXG4gICk7XG4gIGNvbnN0IGNhbGxUb0FjdGlvbkJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJidXR0b25cIixcbiAgICBjYWxsVG9BY3Rpb25Db250YWluZXIsXG4gICAgXCJjYWxsLXRvLWFjdGlvbi1idXR0b25cIlxuICApO1xuICBjYWxsVG9BY3Rpb25CdXR0b24uaW5uZXJUZXh0ID0gXCJDYWxsIHRvIEFjdGlvblwiO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaDFcIiwgb3ZlcmxheSwgXCJwYWdlLWhlYWRpbmdcIik7XG4gIGhlYWRpbmcuaW5uZXJUZXh0ID1cbiAgICBcIkNvbm5lY3Rpbmcgc3R1ZGVudHMgdG8gc3VwcG9ydCBlZHVjYXRpb24gYWNyb3NzIHRoZSBnbG9iZSFcIjtcblxuICBjb25zdCBpbmZvcm1hdGlvbkFib3V0VGhlSW1hZ2UgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwicFwiLFxuICAgIG92ZXJsYXksXG4gICAgXCJpbmZvcm1hdGlvbi1hYm91dC1oZWFkZXItaW1nXCJcbiAgKTtcbiAgaW5mb3JtYXRpb25BYm91dFRoZUltYWdlLmlubmVyVGV4dCA9IFwiU2FudGEgTHVjw61hLCBHdWF0ZW1hbGFcIjtcbn07XG5cbmNvbnN0IGNyZWF0ZUluZm9Sb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGluZm9Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImluZm8tc2VjdGlvbi1jb250YWluZXJcIlxuICApO1xuICBjb25zdCBwTGVmdCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJwXCIsXG4gICAgaW5mb0NvbnRhaW5lcixcbiAgICBcImluZm8tc2VjdGlvbi1wLWxlZnRcIlxuICApO1xuICBjb25zdCBwUmlnaHQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwicFwiLFxuICAgIGluZm9Db250YWluZXIsXG4gICAgXCJpbmZvLXNlY3Rpb24tcC1yaWdodFwiXG4gICk7XG5cbiAgcExlZnQuaW5uZXJUZXh0ID1cbiAgICAnUFVFTlRFUywgd2hpY2ggc3RhbmRzIGZvciBQcm9tb3RpbmcgVW5pdHkgYW5kIEVtcG93ZXJtZW50IE5vYmx5IFRocm91Z2ggRWR1Y2F0aW9uIGFuZCBTZXJ2aWNlLCBhaW1zIHRvIFwiQnVpbGQgYnJpZGdlc1wiIGJldHdlZW4gb3VyIGNvbW11bml0eSBoZXJlIGluIFppb25zdmlsbGUgYW5kIHRob3NlIGluIExhdGluIEFtZXJpY2EgdGhyb3VnaCBhIGhhbmRzLW9uIGFwcHJvYWNoLic7XG4gIHBSaWdodC5pbm5lclRleHQgPVxuICAgIFwiUFVFTlRFUywgZm9ybWVybHkgT3BlcmF0aW9uOiBIb25kdXJhcywgYmVnYW4gaW4gRmVicnVhcnkgMjAyMyBpbiBhbiBhdHRlbXB0IHRvIHByb3ZpZGUgZXh0cmEgc3VwcG9ydCBmb3IgY29tbXVuaXRpZXMgaW4gSG9uZHVyYXMuIEhvd2V2ZXIsIGFzIHRoZSAyMDIyLTIwMjMgc2Nob29sIHllYXIgY2FtZSB0byBhIGNsb3NlLCBhIG5ldyBsZWFmIHdhcyB0dXJuZWQgZm9yIHRoZSBjbHViIGFuZCBpdCBleHBhbmRlZCB0byBpbmNsdWRlIGFsbCBvZiBMYXRpbiBBbWVyaWNhLlwiO1xufTtcblxuY29uc3QgY3JlYXRlR3VhdGVtYWxhUm93ID0gKCkgPT4ge1xuICBjb25zdCBndWF0ZW1hbGFDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImd1YXRlbWFsYS1jb250YWluZXJcIlxuICApO1xuICBjb25zdCBndWF0ZW1hbGFDb250YWluZXJMZWZ0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lcixcbiAgICBcImd1YXRlbWFsYS1jb250YWluZXItbGVmdFwiXG4gICk7XG4gIGNvbnN0IGd1YXRlbWFsYUNvbnRhaW5lclJpZ2h0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lcixcbiAgICBcImd1YXRlbWFsYS1jb250YWluZXItcmlnaHRcIlxuICApO1xuICBjb25zdCBndWF0ZW1hbGFIZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDFcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXJMZWZ0LFxuICAgIFwiZ3VhdGVtYWxhLWhlYWRlclwiXG4gICk7XG4gIGd1YXRlbWFsYUhlYWRlci5pbm5lclRleHQgPSBcIkNvbWUgd2l0aCB1cyB0byBHdWF0ZW1hbGEhXCI7XG4gIGNvbnN0IGd1YXRlbWFsYUNhbGxUb0FjdGlvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJidXR0b25cIixcbiAgICBndWF0ZW1hbGFDb250YWluZXJMZWZ0LFxuICAgIFwiZ3VhdGVtYWxhLWJ1dHRvblwiXG4gICk7XG5cbiAgY29uc3QgZ3VhdGVtYWxhU3ViaGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImg0XCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyTGVmdCxcbiAgICBcImd1YXRlbWFsYS1zdWJoZWFkZXJcIlxuICApO1xuICBndWF0ZW1hbGFTdWJoZWFkZXIuaW5uZXJUZXh0ID1cbiAgICBcIlRoaXMgc3VtbWVyIChKdW5lIDExLTE5IDIwMjQpIHdlIHdpbGwgam91cm5leSB0byBUZWNww6FuLCBHdWF0ZW1hbGEgd2hlcmUgY2x1YiBtZW1iZXJzIHdpbGwgcGVyZm9ybSBoYW5kcyBvbiBhY3Rpdml0aWVzIHRvIGhlbHAgZWR1Y2F0ZSBhbmQgaW1wcm92ZSBjb25kaXRpb25zIGF0IGEgc2Nob29sLiBXaGV0aGVyIG9yIG5vdCB5b3Ugb3IgeW91ciBjaGlsZCBoYXMgYW4gaW50ZXJlc3QgaW4gZ29pbmcsIGZlZWwgZnJlZSB0byB0YWtlIGEgbG9vayBhdCBleHRyYSBpbmZvcm1hdGlvbiBhcyB0aGlzIHRyaXAgaXMgb3VyIG1haW4gZm9jdXMgYW5kIHdoZXJlIG1vc3QgZnV0dXJlIHByb2NlZWRzIHdpbGwgYmUgaGVhZGluZy5cIjtcbiAgZ3VhdGVtYWxhQ2FsbFRvQWN0aW9uLmlubmVyVGV4dCA9IFwiQ2FsbCB0byBBY3Rpb25cIjtcbiAgY29uc3QgZ3VhdGVtYWxhSW1hZ2UgPSBjcmVhdGVJbWFnZShcbiAgICBcIi4uL2Rpc3QvaW1hZ2VzL2d1YXRlbWFsYS1sYW5kc2NhcGUuanBnXCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyUmlnaHQsXG4gICAgXCJndWF0ZW1hbGEtaW1nXCJcbiAgKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUVnZ015WWFyZFJvdyA9ICgpID0+IHtcbiAgY29uc3QgZWdnTXlZYXJkQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJlZ2ctbXkteWFyZC1jb250YWluZXJcIlxuICApO1xuICBlZ2dNeVlhcmRDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoLi4vZGlzdC9pbWFnZXMvZWFzdGVyLmpwZylcIjtcbiAgY29uc3Qgb3ZlcmxheSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBlZ2dNeVlhcmRDb250YWluZXIsXG4gICAgXCJlZ2ctbXkteWFyZC1vdmVybGF5XCJcbiAgKTtcblxuICBjb25zdCBlZ2dNeVlhcmRIZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDFcIixcbiAgICBvdmVybGF5LFxuICAgIFwiZWdnLW15LXlhcmQtaGVhZGVyXCJcbiAgKTtcbiAgY29uc3QgZWdnTXlZYXJkU3ViaGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImgzXCIsXG4gICAgb3ZlcmxheSxcbiAgICBcImVnZy1teS15YXJkLXN1YmhlYWRlclwiXG4gICk7XG4gIGVnZ015WWFyZFN1YmhlYWRlci5pbm5lclRleHQgPVxuICAgIFwiSGVscCBzdXBwb3J0IG91ciBtaXNzaW9uIGJ5IHBhcnRpY2lwYXRpbmcgaW4gb3VyIGFubnVhbCBlZ2cgbXkgeWFyZCBFYXN0ZXIgZXZlbnQuIEZvciB0aGlzIGV2ZW50LCB3ZSB3aWxsIGhpZGUgZWdncyBmb3IgeW91IGluIHlvdXIgZnJvbnQgb3IgYmFja3lhcmQgZm9yIEVhc3Rlci4gSWYgeW91IGFyZSBpbnRlcmVzdGVkIG9yIHNpbXBseSB3YW50IHRvIGhlbHAsIHlvdSBtYXkgZWl0aGVyIGRlY2lkZSB0byBwdXJjaGFzZSBlZ2dzIGZvciB1cyB0byBoaWRlIGZvciB5b3Ugb3IgaGVscCB1cyBieSBkb25hdGluZyBhbnkgc3BhcmUgZWdncyBvciBjYW5keSB5b3UgbWF5IGhhdmUsIHRoYW5rIHlvdSFcIjtcbiAgZWdnTXlZYXJkSGVhZGVyLmlubmVyVGV4dCA9IFwiRWdnIE15IFlhcmQhXCI7XG5cbiAgY29uc3QgZWdnTXlZYXJkQ2FsbFRvQWN0aW9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImJ1dHRvblwiLFxuICAgIG92ZXJsYXksXG4gICAgXCJlZ2ctbXkteWFyZC1idXR0b25cIlxuICApO1xuICBlZ2dNeVlhcmRDYWxsVG9BY3Rpb24uaW5uZXJUZXh0ID0gXCJDYWxsIHRvIEFjdGlvblwiO1xufTtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImZvb3Rlci1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGNsdWJOYW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGZvb3RlckNvbnRhaW5lcixcbiAgICBcImZvb3Rlci1jbHViLW5hbWUtY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBjbHViSW5mb0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBmb290ZXJDb250YWluZXIsXG4gICAgXCJmb290ZXItY2x1Yi1pbmZvLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgY2x1YkNhbGxUb0FjdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBmb290ZXJDb250YWluZXIsXG4gICAgXCJmb290ZXItY2x1Yi1jYWxsLXRvLWFjdGlvbi1jb250YWluZXJcIlxuICApO1xuICBjcmVhdGVUZXh0RWxlbWVudChcImgyXCIsIGNsdWJOYW1lQ29udGFpbmVyLCBcIlBVRU5URVNcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIGNsdWJOYW1lQ29udGFpbmVyLFxuICAgIFwiWmlvbnN2aWxsZSBDb21tdW5pdHkgSGlnaCBTY2hvb2wgQ2x1YlwiXG4gICk7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIGNsdWJOYW1lQ29udGFpbmVyLFxuICAgIFwiRW1haWw6IG9wZXJhdGlvbmhvbmR1cmFzMDBAZ21haWwuY29tXCJcbiAgKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGNsdWJOYW1lQ29udGFpbmVyLCBcIkluc3RhZ3JhbTogQG9wZXJhdGlvbl9ob25kdXJhc1wiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJoMlwiLCBjbHViSW5mb0NvbnRhaW5lciwgXCJHZXQgSW52b2x2ZWQhXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgY2x1YkluZm9Db250YWluZXIsIFwiRWdnIE15IFlhcmRcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBjbHViSW5mb0NvbnRhaW5lciwgXCJHdWF0ZW1hbGFcIik7XG5cbiAgY3JlYXRlSW1hZ2UoXG4gICAgXCIuLi9kaXN0L2ltYWdlcy9mb290ZXItaW5zdGFncmFtLnN2Z1wiLFxuICAgIGNsdWJDYWxsVG9BY3Rpb25Db250YWluZXIsXG4gICAgXCJmb290ZXItaW5zdGFncmFtLWxpbmtcIlxuICApO1xuICBjb25zdCBjYWxsVG9BY3Rpb25CdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgY2x1YkNhbGxUb0FjdGlvbkNvbnRhaW5lcixcbiAgICBcImZvb3Rlci1jYWxsLXRvLWFjdGlvbi1idXR0b25cIlxuICApO1xuICBjYWxsVG9BY3Rpb25CdXR0b24uaW5uZXJUZXh0ID0gXCJDYWxsIHRvIEFjdGlvblwiO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlV2Vic2l0ZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVXZWJzaXRlIH0gZnJvbSBcIi4vaG9tZVwiO1xuXG5jcmVhdGVXZWJzaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=