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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSwrREFBaUI7QUFDbkIsRUFBRSwrREFBaUI7QUFDbkIsRUFBRSwrREFBaUI7QUFDbkIsRUFBRSwrREFBaUI7O0FBRW5CLEVBQUUseURBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvRUFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV5Qjs7Ozs7OztVQ25QekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051Qzs7QUFFdkMsb0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWVudGVzLy4vc3JjL1VJRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3B1ZW50ZXMvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wdWVudGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wdWVudGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHVlbnRlcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIHBhcmVudCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRleHRFbGVtZW50ID0gKHR5cGUsIHBhcmVudCwgdGV4dCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyA9ICh0eXBlLCBwYXJlbnQsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVJbWFnZSA9IChzb3VyY2UsIHBhcmVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgZWxlbWVudC5zcmMgPSBzb3VyY2U7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVUZXh0RWxlbWVudCxcbiAgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyxcbiAgY3JlYXRlSW1hZ2UsXG59O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlRWxlbWVudCxcbiAgY3JlYXRlVGV4dEVsZW1lbnQsXG4gIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MsXG4gIGNyZWF0ZUltYWdlLFxufSBmcm9tIFwiLi9VSUZ1bmN0aW9uc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBjcmVhdGVXZWJzaXRlID0gKCkgPT4ge1xuICBjcmVhdGVOYXYoKTtcbiAgY3JlYXRlSW5mb1JvdygpO1xuICBjcmVhdGVHdWF0ZW1hbGFSb3coKTtcbiAgY3JlYXRlRWdnTXlZYXJkUm93KCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xufTtcblxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImhlYWRlci1jb250YWluZXJcIlxuICApO1xuICBoZWFkZXJDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICBcInVybCguLi9kaXN0L2ltYWdlcy9zYW50YS1sdWNpYS1sYW5kc2NhcGUuanBnKVwiO1xuICBjb25zdCBvdmVybGF5ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiLCBoZWFkZXJDb250YWluZXIsIFwib3ZlcmxheVwiKTtcblxuICBjb25zdCBuYXZDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIG92ZXJsYXksIFwibmF2LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIG5hdkNvbnRhaW5lcixcbiAgICBcImhlYWRpbmctY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBpbmZvQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIG5hdkNvbnRhaW5lcixcbiAgICBcImluZm8tY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBjYWxsVG9BY3Rpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgbmF2Q29udGFpbmVyLFxuICAgIFwiYWN0aW9uLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJoMlwiLCBoZWFkaW5nQ29udGFpbmVyLCBcIlBVRU5URVNcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBpbmZvQ29udGFpbmVyLCBcIkFib3V0IFVzXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJXaGF0IHdlIGRvXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJEb25hdGVcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBpbmZvQ29udGFpbmVyLCBcIkZ1bmRyYWlzZXJzXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJHZXQgSW52b2x2ZWRcIik7XG4gIGNyZWF0ZUltYWdlKFxuICAgIFwiLi4vZGlzdC9pbWFnZXMvaW5zdGFncmFtLnN2Z1wiLFxuICAgIGNhbGxUb0FjdGlvbkNvbnRhaW5lcixcbiAgICBcImluc3RhZ3JhbS1saW5rXCJcbiAgKTtcbiAgY29uc3QgY2FsbFRvQWN0aW9uQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImJ1dHRvblwiLFxuICAgIGNhbGxUb0FjdGlvbkNvbnRhaW5lcixcbiAgICBcImNhbGwtdG8tYWN0aW9uLWJ1dHRvblwiXG4gICk7XG4gIGNhbGxUb0FjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIkNhbGwgdG8gQWN0aW9uXCI7XG5cbiAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJoMVwiLCBvdmVybGF5LCBcInBhZ2UtaGVhZGluZ1wiKTtcbiAgaGVhZGluZy5pbm5lclRleHQgPVxuICAgIFwiQ29ubmVjdGluZyBzdHVkZW50cyB0byBzdXBwb3J0IGVkdWNhdGlvbiBhY3Jvc3MgdGhlIGdsb2JlIVwiO1xuXG4gIGNvbnN0IGluZm9ybWF0aW9uQWJvdXRUaGVJbWFnZSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJwXCIsXG4gICAgb3ZlcmxheSxcbiAgICBcImluZm9ybWF0aW9uLWFib3V0LWhlYWRlci1pbWdcIlxuICApO1xuICBpbmZvcm1hdGlvbkFib3V0VGhlSW1hZ2UuaW5uZXJUZXh0ID0gXCJTYW50YSBMdWPDrWEsIEd1YXRlbWFsYVwiO1xufTtcblxuY29uc3QgY3JlYXRlSW5mb1JvdyA9ICgpID0+IHtcbiAgY29uc3QgaW5mb1NlY3Rpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImluZm8tc2VjdGlvbi1jb250YWluZXJcIlxuICApO1xuICBjb25zdCBpbmZvSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoMVwiLFxuICAgIGluZm9TZWN0aW9uQ29udGFpbmVyLFxuICAgIFwiaW5mby1zZWN0aW9uLWhlYWRlclwiXG4gICk7XG4gIGluZm9IZWFkaW5nLmlubmVyVGV4dCA9IFwiQWJvdXQgT3VyIENsdWJcIjtcbiAgY29uc3QgaW5mb1N1YmhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBpbmZvU2VjdGlvbkNvbnRhaW5lcixcbiAgICBcImluZm8tc3ViaGVhZGluZy1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IHBMZWZ0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcInBcIixcbiAgICBpbmZvU3ViaGVhZGVyQ29udGFpbmVyLFxuICAgIFwiaW5mby1zZWN0aW9uLXAtbGVmdFwiXG4gICk7XG4gIGNvbnN0IHBSaWdodCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJwXCIsXG4gICAgaW5mb1N1YmhlYWRlckNvbnRhaW5lcixcbiAgICBcImluZm8tc2VjdGlvbi1wLXJpZ2h0XCJcbiAgKTtcblxuICBwTGVmdC5pbm5lclRleHQgPVxuICAgICdQVUVOVEVTLCB3aGljaCBzdGFuZHMgZm9yIFByb21vdGluZyBVbml0eSBhbmQgRW1wb3dlcm1lbnQgTm9ibHkgVGhyb3VnaCBFZHVjYXRpb24gYW5kIFNlcnZpY2UsIGFpbXMgdG8gXCJCdWlsZCBicmlkZ2VzXCIgYmV0d2VlbiBvdXIgY29tbXVuaXR5IGhlcmUgaW4gWmlvbnN2aWxsZSBhbmQgdGhvc2UgaW4gTGF0aW4gQW1lcmljYSB0aHJvdWdoIGEgaGFuZHMtb24gYXBwcm9hY2guJztcbiAgcFJpZ2h0LmlubmVyVGV4dCA9XG4gICAgXCJQVUVOVEVTLCBmb3JtZXJseSBPcGVyYXRpb246IEhvbmR1cmFzLCBiZWdhbiBpbiBGZWJydWFyeSAyMDIzIGluIGFuIGF0dGVtcHQgdG8gcHJvdmlkZSBleHRyYSBzdXBwb3J0IGZvciBjb21tdW5pdGllcyBpbiBIb25kdXJhcy4gSG93ZXZlciwgYXMgdGhlIDIwMjItMjAyMyBzY2hvb2wgeWVhciBjYW1lIHRvIGEgY2xvc2UsIGEgbmV3IGxlYWYgd2FzIHR1cm5lZCBmb3IgdGhlIGNsdWIgYW5kIGl0IGV4cGFuZGVkIHRvIGluY2x1ZGUgYWxsIG9mIExhdGluIEFtZXJpY2EuXCI7XG59O1xuXG5jb25zdCBjcmVhdGVHdWF0ZW1hbGFSb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGd1YXRlbWFsYUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiZ3VhdGVtYWxhLWNvbnRhaW5lclwiXG4gICk7XG4gIGNvbnN0IGd1YXRlbWFsYUNvbnRhaW5lckxlZnQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyLFxuICAgIFwiZ3VhdGVtYWxhLWNvbnRhaW5lci1sZWZ0XCJcbiAgKTtcbiAgY29uc3QgZ3VhdGVtYWxhQ29udGFpbmVyUmlnaHQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyLFxuICAgIFwiZ3VhdGVtYWxhLWNvbnRhaW5lci1yaWdodFwiXG4gICk7XG4gIGNvbnN0IGd1YXRlbWFsYUhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoMVwiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lckxlZnQsXG4gICAgXCJndWF0ZW1hbGEtaGVhZGVyXCJcbiAgKTtcbiAgZ3VhdGVtYWxhSGVhZGVyLmlubmVyVGV4dCA9IFwiQ29tZSB3aXRoIHVzIHRvIEd1YXRlbWFsYSFcIjtcbiAgY29uc3QgZ3VhdGVtYWxhQ2FsbFRvQWN0aW9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImJ1dHRvblwiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lckxlZnQsXG4gICAgXCJndWF0ZW1hbGEtYnV0dG9uXCJcbiAgKTtcblxuICBjb25zdCBndWF0ZW1hbGFTdWJoZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDRcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXJMZWZ0LFxuICAgIFwiZ3VhdGVtYWxhLXN1YmhlYWRlclwiXG4gICk7XG4gIGd1YXRlbWFsYVN1YmhlYWRlci5pbm5lclRleHQgPVxuICAgIFwiVGhpcyBzdW1tZXIgKEp1bmUgMTEtMTkgMjAyNCkgd2Ugd2lsbCBqb3VybmV5IHRvIFRlY3DDoW4sIEd1YXRlbWFsYSB3aGVyZSBjbHViIG1lbWJlcnMgd2lsbCBwZXJmb3JtIGhhbmRzIG9uIGFjdGl2aXRpZXMgdG8gaGVscCBlZHVjYXRlIGFuZCBpbXByb3ZlIGNvbmRpdGlvbnMgYXQgYSBzY2hvb2wuIFdoZXRoZXIgb3Igbm90IHlvdSBvciB5b3VyIGNoaWxkIGhhcyBhbiBpbnRlcmVzdCBpbiBnb2luZywgZmVlbCBmcmVlIHRvIHRha2UgYSBsb29rIGF0IGV4dHJhIGluZm9ybWF0aW9uIGFzIHRoaXMgdHJpcCBpcyBvdXIgbWFpbiBmb2N1cyBhbmQgd2hlcmUgbW9zdCBmdXR1cmUgcHJvY2VlZHMgd2lsbCBiZSBoZWFkaW5nLlwiO1xuICBndWF0ZW1hbGFDYWxsVG9BY3Rpb24uaW5uZXJUZXh0ID0gXCJDYWxsIHRvIEFjdGlvblwiO1xuICBjb25zdCBndWF0ZW1hbGFJbWFnZSA9IGNyZWF0ZUltYWdlKFxuICAgIFwiLi4vZGlzdC9pbWFnZXMvZ3VhdGVtYWxhLWxhbmRzY2FwZS5qcGdcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXJSaWdodCxcbiAgICBcImd1YXRlbWFsYS1pbWdcIlxuICApO1xufTtcblxuY29uc3QgY3JlYXRlRWdnTXlZYXJkUm93ID0gKCkgPT4ge1xuICBjb25zdCBlZ2dNeVlhcmRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImVnZy1teS15YXJkLWNvbnRhaW5lclwiXG4gICk7XG4gIGVnZ015WWFyZENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCguLi9kaXN0L2ltYWdlcy9lYXN0ZXIuanBnKVwiO1xuICBjb25zdCBvdmVybGF5ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGVnZ015WWFyZENvbnRhaW5lcixcbiAgICBcImVnZy1teS15YXJkLW92ZXJsYXlcIlxuICApO1xuXG4gIGNvbnN0IGVnZ015WWFyZEhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoMVwiLFxuICAgIG92ZXJsYXksXG4gICAgXCJlZ2ctbXkteWFyZC1oZWFkZXJcIlxuICApO1xuICBjb25zdCBlZ2dNeVlhcmRTdWJoZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDNcIixcbiAgICBvdmVybGF5LFxuICAgIFwiZWdnLW15LXlhcmQtc3ViaGVhZGVyXCJcbiAgKTtcbiAgZWdnTXlZYXJkU3ViaGVhZGVyLmlubmVyVGV4dCA9XG4gICAgXCJIZWxwIHN1cHBvcnQgb3VyIG1pc3Npb24gYnkgcGFydGljaXBhdGluZyBpbiBvdXIgYW5udWFsIGVnZyBteSB5YXJkIEVhc3RlciBldmVudC4gRm9yIHRoaXMgZXZlbnQsIHdlIHdpbGwgaGlkZSBlZ2dzIGZvciB5b3UgaW4geW91ciBmcm9udCBvciBiYWNreWFyZCBmb3IgRWFzdGVyLiBJZiB5b3UgYXJlIGludGVyZXN0ZWQgb3Igc2ltcGx5IHdhbnQgdG8gaGVscCwgeW91IG1heSBlaXRoZXIgZGVjaWRlIHRvIHB1cmNoYXNlIGVnZ3MgZm9yIHVzIHRvIGhpZGUgZm9yIHlvdSBvciBoZWxwIHVzIGJ5IGRvbmF0aW5nIGFueSBzcGFyZSBlZ2dzIG9yIGNhbmR5IHlvdSBtYXkgaGF2ZSwgdGhhbmsgeW91IVwiO1xuICBlZ2dNeVlhcmRIZWFkZXIuaW5uZXJUZXh0ID0gXCJFZ2cgTXkgWWFyZCFcIjtcblxuICBjb25zdCBlZ2dNeVlhcmRDYWxsVG9BY3Rpb24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgb3ZlcmxheSxcbiAgICBcImVnZy1teS15YXJkLWJ1dHRvblwiXG4gICk7XG4gIGVnZ015WWFyZENhbGxUb0FjdGlvbi5pbm5lclRleHQgPSBcIkNhbGwgdG8gQWN0aW9uXCI7XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiZm9vdGVyLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgY2x1Yk5hbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZm9vdGVyQ29udGFpbmVyLFxuICAgIFwiZm9vdGVyLWNsdWItbmFtZS1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGNsdWJJbmZvQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGZvb3RlckNvbnRhaW5lcixcbiAgICBcImZvb3Rlci1jbHViLWluZm8tY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBjbHViQ2FsbFRvQWN0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGZvb3RlckNvbnRhaW5lcixcbiAgICBcImZvb3Rlci1jbHViLWNhbGwtdG8tYWN0aW9uLWNvbnRhaW5lclwiXG4gICk7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwiaDJcIiwgY2x1Yk5hbWVDb250YWluZXIsIFwiUFVFTlRFU1wiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgY2x1Yk5hbWVDb250YWluZXIsXG4gICAgXCJaaW9uc3ZpbGxlIENvbW11bml0eSBIaWdoIFNjaG9vbCBDbHViXCJcbiAgKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgY2x1Yk5hbWVDb250YWluZXIsXG4gICAgXCJFbWFpbDogb3BlcmF0aW9uaG9uZHVyYXMwMEBnbWFpbC5jb21cIlxuICApO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgY2x1Yk5hbWVDb250YWluZXIsIFwiSW5zdGFncmFtOiBAb3BlcmF0aW9uX2hvbmR1cmFzXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcImgyXCIsIGNsdWJJbmZvQ29udGFpbmVyLCBcIkdldCBJbnZvbHZlZCFcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBjbHViSW5mb0NvbnRhaW5lciwgXCJFZ2cgTXkgWWFyZFwiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGNsdWJJbmZvQ29udGFpbmVyLCBcIkd1YXRlbWFsYVwiKTtcblxuICBjcmVhdGVJbWFnZShcbiAgICBcIi4uL2Rpc3QvaW1hZ2VzL2Zvb3Rlci1pbnN0YWdyYW0uc3ZnXCIsXG4gICAgY2x1YkNhbGxUb0FjdGlvbkNvbnRhaW5lcixcbiAgICBcImZvb3Rlci1pbnN0YWdyYW0tbGlua1wiXG4gICk7XG4gIGNvbnN0IGNhbGxUb0FjdGlvbkJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJidXR0b25cIixcbiAgICBjbHViQ2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwiZm9vdGVyLWNhbGwtdG8tYWN0aW9uLWJ1dHRvblwiXG4gICk7XG4gIGNhbGxUb0FjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIkNhbGwgdG8gQWN0aW9uXCI7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVXZWJzaXRlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZVdlYnNpdGUgfSBmcm9tIFwiLi9ob21lXCI7XG5cbmNyZWF0ZVdlYnNpdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==