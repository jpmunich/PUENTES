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
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", clubNameContainer, "Email: ophonduras00@gmail.com");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsNkJBQTZCLG9FQUFzQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlCOzs7Ozs7O1VDbk96QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2QyxvREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1ZW50ZXMvLi9zcmMvVUlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcHVlbnRlcy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHVlbnRlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHVlbnRlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wdWVudGVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlVGV4dEVsZW1lbnQgPSAodHlwZSwgcGFyZW50LCB0ZXh0KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVFbGVtZW50V2l0aENsYXNzID0gKHR5cGUsIHBhcmVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUltYWdlID0gKHNvdXJjZSwgcGFyZW50LCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBlbGVtZW50LnNyYyA9IHNvdXJjZTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNyZWF0ZVRleHRFbGVtZW50LFxuICBjcmVhdGVFbGVtZW50V2l0aENsYXNzLFxuICBjcmVhdGVJbWFnZSxcbn07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVUZXh0RWxlbWVudCxcbiAgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyxcbiAgY3JlYXRlSW1hZ2UsXG59IGZyb20gXCIuL1VJRnVuY3Rpb25zXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGNyZWF0ZVdlYnNpdGUgPSAoKSA9PiB7XG4gIGNyZWF0ZU5hdigpO1xuICBjcmVhdGVJbmZvUm93KCk7XG4gIGNyZWF0ZUd1YXRlbWFsYVJvdygpO1xuICBjcmVhdGVFZ2dNeVlhcmRSb3coKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG59O1xuXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiaGVhZGVyLWNvbnRhaW5lclwiXG4gICk7XG4gIGhlYWRlckNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgIFwidXJsKC4uL2Rpc3QvaW1hZ2VzL3NhbnRhLWx1Y2lhLWxhbmRzY2FwZS5qcGcpXCI7XG4gIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIGhlYWRlckNvbnRhaW5lciwgXCJvdmVybGF5XCIpO1xuXG4gIGNvbnN0IG5hdkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgb3ZlcmxheSwgXCJuYXYtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgbmF2Q29udGFpbmVyLFxuICAgIFwiaGVhZGluZy1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGluZm9Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgbmF2Q29udGFpbmVyLFxuICAgIFwiaW5mby1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGNhbGxUb0FjdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBuYXZDb250YWluZXIsXG4gICAgXCJhY3Rpb24tY29udGFpbmVyXCJcbiAgKTtcblxuICBjcmVhdGVUZXh0RWxlbWVudChcImgyXCIsIGhlYWRpbmdDb250YWluZXIsIFwiUFVFTlRFU1wiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGluZm9Db250YWluZXIsIFwiQWJvdXQgVXNcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBpbmZvQ29udGFpbmVyLCBcIldoYXQgd2UgZG9cIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBpbmZvQ29udGFpbmVyLCBcIkRvbmF0ZVwiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGluZm9Db250YWluZXIsIFwiRnVuZHJhaXNlcnNcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBpbmZvQ29udGFpbmVyLCBcIkdldCBJbnZvbHZlZFwiKTtcbiAgY3JlYXRlSW1hZ2UoXG4gICAgXCIuLi9kaXN0L2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIsXG4gICAgY2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwiaW5zdGFncmFtLWxpbmtcIlxuICApO1xuICBjb25zdCBjYWxsVG9BY3Rpb25CdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgY2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwiY2FsbC10by1hY3Rpb24tYnV0dG9uXCJcbiAgKTtcbiAgY2FsbFRvQWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiQ2FsbCB0byBBY3Rpb25cIjtcblxuICBjb25zdCBoZWFkaW5nID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImgxXCIsIG92ZXJsYXksIFwicGFnZS1oZWFkaW5nXCIpO1xuICBoZWFkaW5nLmlubmVyVGV4dCA9XG4gICAgXCJDb25uZWN0aW5nIHN0dWRlbnRzIHRvIHN1cHBvcnQgZWR1Y2F0aW9uIGFjcm9zcyB0aGUgZ2xvYmUhXCI7XG5cbiAgY29uc3QgaW5mb3JtYXRpb25BYm91dFRoZUltYWdlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcInBcIixcbiAgICBvdmVybGF5LFxuICAgIFwiaW5mb3JtYXRpb24tYWJvdXQtaGVhZGVyLWltZ1wiXG4gICk7XG4gIGluZm9ybWF0aW9uQWJvdXRUaGVJbWFnZS5pbm5lclRleHQgPSBcIlNhbnRhIEx1Y8OtYSwgR3VhdGVtYWxhXCI7XG59O1xuXG5jb25zdCBjcmVhdGVJbmZvUm93ID0gKCkgPT4ge1xuICBjb25zdCBpbmZvQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJpbmZvLXNlY3Rpb24tY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgcExlZnQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwicFwiLFxuICAgIGluZm9Db250YWluZXIsXG4gICAgXCJpbmZvLXNlY3Rpb24tcC1sZWZ0XCJcbiAgKTtcbiAgY29uc3QgcFJpZ2h0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcInBcIixcbiAgICBpbmZvQ29udGFpbmVyLFxuICAgIFwiaW5mby1zZWN0aW9uLXAtcmlnaHRcIlxuICApO1xuXG4gIHBMZWZ0LmlubmVyVGV4dCA9XG4gICAgJ1BVRU5URVMsIHdoaWNoIHN0YW5kcyBmb3IgUHJvbW90aW5nIFVuaXR5IGFuZCBFbXBvd2VybWVudCBOb2JseSBUaHJvdWdoIEVkdWNhdGlvbiBhbmQgU2VydmljZSwgYWltcyB0byBcIkJ1aWxkIGJyaWRnZXNcIiBiZXR3ZWVuIG91ciBjb21tdW5pdHkgaGVyZSBpbiBaaW9uc3ZpbGxlIGFuZCB0aG9zZSBpbiBMYXRpbiBBbWVyaWNhIHRocm91Z2ggYSBoYW5kcy1vbiBhcHByb2FjaC4nO1xuICBwUmlnaHQuaW5uZXJUZXh0ID1cbiAgICBcIlBVRU5URVMsIGZvcm1lcmx5IE9wZXJhdGlvbjogSG9uZHVyYXMsIGJlZ2FuIGluIEZlYnJ1YXJ5IDIwMjMgaW4gYW4gYXR0ZW1wdCB0byBwcm92aWRlIGV4dHJhIHN1cHBvcnQgZm9yIGNvbW11bml0aWVzIGluIEhvbmR1cmFzLiBIb3dldmVyLCBhcyB0aGUgMjAyMi0yMDIzIHNjaG9vbCB5ZWFyIGNhbWUgdG8gYSBjbG9zZSwgYSBuZXcgbGVhZiB3YXMgdHVybmVkIGZvciB0aGUgY2x1YiBhbmQgaXQgZXhwYW5kZWQgdG8gaW5jbHVkZSBhbGwgb2YgTGF0aW4gQW1lcmljYS5cIjtcbn07XG5cbmNvbnN0IGNyZWF0ZUd1YXRlbWFsYVJvdyA9ICgpID0+IHtcbiAgY29uc3QgZ3VhdGVtYWxhQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJndWF0ZW1hbGEtY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgZ3VhdGVtYWxhQ29udGFpbmVyTGVmdCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXIsXG4gICAgXCJndWF0ZW1hbGEtY29udGFpbmVyLWxlZnRcIlxuICApO1xuICBjb25zdCBndWF0ZW1hbGFDb250YWluZXJSaWdodCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXIsXG4gICAgXCJndWF0ZW1hbGEtY29udGFpbmVyLXJpZ2h0XCJcbiAgKTtcbiAgY29uc3QgZ3VhdGVtYWxhSGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImgxXCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyTGVmdCxcbiAgICBcImd1YXRlbWFsYS1oZWFkZXJcIlxuICApO1xuICBndWF0ZW1hbGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJDb21lIHdpdGggdXMgdG8gR3VhdGVtYWxhIVwiO1xuICBjb25zdCBndWF0ZW1hbGFDYWxsVG9BY3Rpb24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyTGVmdCxcbiAgICBcImd1YXRlbWFsYS1idXR0b25cIlxuICApO1xuXG4gIGNvbnN0IGd1YXRlbWFsYVN1YmhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoNFwiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lckxlZnQsXG4gICAgXCJndWF0ZW1hbGEtc3ViaGVhZGVyXCJcbiAgKTtcbiAgZ3VhdGVtYWxhU3ViaGVhZGVyLmlubmVyVGV4dCA9XG4gICAgXCJUaGlzIHN1bW1lciAoSnVuZSAxMS0xOSAyMDI0KSB3ZSB3aWxsIGpvdXJuZXkgdG8gVGVjcMOhbiwgR3VhdGVtYWxhIHdoZXJlIGNsdWIgbWVtYmVycyB3aWxsIHBlcmZvcm0gaGFuZHMgb24gYWN0aXZpdGllcyB0byBoZWxwIGVkdWNhdGUgYW5kIGltcHJvdmUgY29uZGl0aW9ucyBhdCBhIHNjaG9vbC4gV2hldGhlciBvciBub3QgeW91IG9yIHlvdXIgY2hpbGQgaGFzIGFuIGludGVyZXN0IGluIGdvaW5nLCBmZWVsIGZyZWUgdG8gdGFrZSBhIGxvb2sgYXQgZXh0cmEgaW5mb3JtYXRpb24gYXMgdGhpcyB0cmlwIGlzIG91ciBtYWluIGZvY3VzIGFuZCB3aGVyZSBtb3N0IGZ1dHVyZSBwcm9jZWVkcyB3aWxsIGJlIGhlYWRpbmcuXCI7XG4gIGd1YXRlbWFsYUNhbGxUb0FjdGlvbi5pbm5lclRleHQgPSBcIkNhbGwgdG8gQWN0aW9uXCI7XG4gIGNvbnN0IGd1YXRlbWFsYUltYWdlID0gY3JlYXRlSW1hZ2UoXG4gICAgXCIuLi9kaXN0L2ltYWdlcy9ndWF0ZW1hbGEtbGFuZHNjYXBlLmpwZ1wiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lclJpZ2h0LFxuICAgIFwiZ3VhdGVtYWxhLWltZ1wiXG4gICk7XG59O1xuXG5jb25zdCBjcmVhdGVFZ2dNeVlhcmRSb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGVnZ015WWFyZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiZWdnLW15LXlhcmQtY29udGFpbmVyXCJcbiAgKTtcbiAgZWdnTXlZYXJkQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKC4uL2Rpc3QvaW1hZ2VzL2Vhc3Rlci5qcGcpXCI7XG4gIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZWdnTXlZYXJkQ29udGFpbmVyLFxuICAgIFwiZWdnLW15LXlhcmQtb3ZlcmxheVwiXG4gICk7XG5cbiAgY29uc3QgZWdnTXlZYXJkSGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImgxXCIsXG4gICAgb3ZlcmxheSxcbiAgICBcImVnZy1teS15YXJkLWhlYWRlclwiXG4gICk7XG4gIGNvbnN0IGVnZ015WWFyZFN1YmhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoM1wiLFxuICAgIG92ZXJsYXksXG4gICAgXCJlZ2ctbXkteWFyZC1zdWJoZWFkZXJcIlxuICApO1xuICBlZ2dNeVlhcmRTdWJoZWFkZXIuaW5uZXJUZXh0ID1cbiAgICBcIkhlbHAgc3VwcG9ydCBvdXIgbWlzc2lvbiBieSBwYXJ0aWNpcGF0aW5nIGluIG91ciBhbm51YWwgZWdnIG15IHlhcmQgRWFzdGVyIGV2ZW50LiBGb3IgdGhpcyBldmVudCwgd2Ugd2lsbCBoaWRlIGVnZ3MgZm9yIHlvdSBpbiB5b3VyIGZyb250IG9yIGJhY2t5YXJkIGZvciBFYXN0ZXIuIElmIHlvdSBhcmUgaW50ZXJlc3RlZCBvciBzaW1wbHkgd2FudCB0byBoZWxwLCB5b3UgbWF5IGVpdGhlciBkZWNpZGUgdG8gcHVyY2hhc2UgZWdncyBmb3IgdXMgdG8gaGlkZSBmb3IgeW91IG9yIGhlbHAgdXMgYnkgZG9uYXRpbmcgYW55IHNwYXJlIGVnZ3Mgb3IgY2FuZHkgeW91IG1heSBoYXZlLCB0aGFuayB5b3UhXCI7XG4gIGVnZ015WWFyZEhlYWRlci5pbm5lclRleHQgPSBcIkVnZyBNeSBZYXJkIVwiO1xuXG4gIGNvbnN0IGVnZ015WWFyZENhbGxUb0FjdGlvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJidXR0b25cIixcbiAgICBvdmVybGF5LFxuICAgIFwiZWdnLW15LXlhcmQtYnV0dG9uXCJcbiAgKTtcbiAgZWdnTXlZYXJkQ2FsbFRvQWN0aW9uLmlubmVyVGV4dCA9IFwiQ2FsbCB0byBBY3Rpb25cIjtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJmb290ZXItY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBjbHViTmFtZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBmb290ZXJDb250YWluZXIsXG4gICAgXCJmb290ZXItY2x1Yi1uYW1lLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgY2x1YkluZm9Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZm9vdGVyQ29udGFpbmVyLFxuICAgIFwiZm9vdGVyLWNsdWItaW5mby1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGNsdWJDYWxsVG9BY3Rpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZm9vdGVyQ29udGFpbmVyLFxuICAgIFwiZm9vdGVyLWNsdWItY2FsbC10by1hY3Rpb24tY29udGFpbmVyXCJcbiAgKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJoMlwiLCBjbHViTmFtZUNvbnRhaW5lciwgXCJQVUVOVEVTXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcbiAgICBcInBcIixcbiAgICBjbHViTmFtZUNvbnRhaW5lcixcbiAgICBcIlppb25zdmlsbGUgQ29tbXVuaXR5IEhpZ2ggU2Nob29sIENsdWJcIlxuICApO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgY2x1Yk5hbWVDb250YWluZXIsIFwiRW1haWw6IG9waG9uZHVyYXMwMEBnbWFpbC5jb21cIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBjbHViTmFtZUNvbnRhaW5lciwgXCJJbnN0YWdyYW06IEBvcGVyYXRpb25faG9uZHVyYXNcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwiaDJcIiwgY2x1YkluZm9Db250YWluZXIsIFwiR2V0IEludm9sdmVkIVwiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGNsdWJJbmZvQ29udGFpbmVyLCBcIkVnZyBNeSBZYXJkXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgY2x1YkluZm9Db250YWluZXIsIFwiR3VhdGVtYWxhXCIpO1xuXG4gIGNyZWF0ZUltYWdlKFxuICAgIFwiLi4vZGlzdC9pbWFnZXMvZm9vdGVyLWluc3RhZ3JhbS5zdmdcIixcbiAgICBjbHViQ2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwiZm9vdGVyLWluc3RhZ3JhbS1saW5rXCJcbiAgKTtcbiAgY29uc3QgY2FsbFRvQWN0aW9uQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImJ1dHRvblwiLFxuICAgIGNsdWJDYWxsVG9BY3Rpb25Db250YWluZXIsXG4gICAgXCJmb290ZXItY2FsbC10by1hY3Rpb24tYnV0dG9uXCJcbiAgKTtcbiAgY2FsbFRvQWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiQ2FsbCB0byBBY3Rpb25cIjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVdlYnNpdGUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlV2Vic2l0ZSB9IGZyb20gXCIuL2hvbWVcIjtcblxuY3JlYXRlV2Vic2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9