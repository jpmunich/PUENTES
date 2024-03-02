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
  orderEggs.classList.add("order-eggs-button");

  const getInvolved = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("a", infoContainer, "Join Us!");
  getInvolved.classList.add("get-involved-link");
  getInvolved.classList.add("get-involved-link-button");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2QyxvREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1ZW50ZXMvLi9zcmMvVUlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcHVlbnRlcy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHVlbnRlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHVlbnRlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wdWVudGVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlVGV4dEVsZW1lbnQgPSAodHlwZSwgcGFyZW50LCB0ZXh0KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVFbGVtZW50V2l0aENsYXNzID0gKHR5cGUsIHBhcmVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUltYWdlID0gKHNvdXJjZSwgcGFyZW50LCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBlbGVtZW50LnNyYyA9IHNvdXJjZTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNyZWF0ZVRleHRFbGVtZW50LFxuICBjcmVhdGVFbGVtZW50V2l0aENsYXNzLFxuICBjcmVhdGVJbWFnZSxcbn07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVUZXh0RWxlbWVudCxcbiAgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyxcbiAgY3JlYXRlSW1hZ2UsXG59IGZyb20gXCIuL1VJRnVuY3Rpb25zXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGNyZWF0ZVdlYnNpdGUgPSAoKSA9PiB7XG4gIGNyZWF0ZU5hdigpO1xuICBjcmVhdGVJbmZvUm93KCk7XG4gIGNyZWF0ZUd1YXRlbWFsYVJvdygpO1xuICBjcmVhdGVFZ2dNeVlhcmRSb3coKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG59O1xuXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiaGVhZGVyLWNvbnRhaW5lclwiXG4gICk7XG4gIGhlYWRlckNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgIFwidXJsKC4uL2Rpc3QvaW1hZ2VzL3NhbnRhLWx1Y2lhLWxhbmRzY2FwZS5qcGcpXCI7XG4gIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIGhlYWRlckNvbnRhaW5lciwgXCJvdmVybGF5XCIpO1xuXG4gIGNvbnN0IG5hdkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgb3ZlcmxheSwgXCJuYXYtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgbmF2Q29udGFpbmVyLFxuICAgIFwiaGVhZGluZy1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGluZm9Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgbmF2Q29udGFpbmVyLFxuICAgIFwiaW5mby1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGNhbGxUb0FjdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBuYXZDb250YWluZXIsXG4gICAgXCJhY3Rpb24tY29udGFpbmVyXCJcbiAgKTtcblxuICBjcmVhdGVUZXh0RWxlbWVudChcImgyXCIsIGhlYWRpbmdDb250YWluZXIsIFwiUFVFTlRFU1wiKTtcbiAgY29uc3QgYWJvdXRVcyA9IGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBpbmZvQ29udGFpbmVyLCBcIkFib3V0IFVzXCIpO1xuICBhYm91dFVzLm9uY2xpY2sgPSAoKSA9PiBzY3JvbGwoMCwgNjUwKTtcbiAgY29uc3QgZ3VhdGVtYWxhVHJpcCA9IGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBpbmZvQ29udGFpbmVyLCBcIkd1YXRlbWFsYSBUcmlwXCIpO1xuICBndWF0ZW1hbGFUcmlwLm9uY2xpY2sgPSAoKSA9PiBzY3JvbGwoMCwgMTA1MCk7XG4gIGNvbnN0IGVnZ015WWFyZCA9IGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBpbmZvQ29udGFpbmVyLCBcIkVnZyBNeSBZYXJkXCIpO1xuICBlZ2dNeVlhcmQub25jbGljayA9ICgpID0+IHNjcm9sbCgwLCAxNjAwKTtcbiAgY29uc3Qgb3JkZXJFZ2dzID0gY3JlYXRlVGV4dEVsZW1lbnQoXCJhXCIsIGluZm9Db250YWluZXIsIFwiT3JkZXIgRWdnc1wiKTtcbiAgb3JkZXJFZ2dzLmhyZWYgPVxuICAgIFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC8xbWp6SGJKYVZWS3BKakVyQnItXzdNdEt4cDFoWUNaMXZMWER4VEI5NlJpQS9lZGl0XCI7XG4gIG9yZGVyRWdncy5jbGFzc0xpc3QuYWRkKFwiZ2V0LWludm9sdmVkLWxpbmtcIik7XG4gIG9yZGVyRWdncy5jbGFzc0xpc3QuYWRkKFwib3JkZXItZWdncy1idXR0b25cIik7XG5cbiAgY29uc3QgZ2V0SW52b2x2ZWQgPSBjcmVhdGVUZXh0RWxlbWVudChcImFcIiwgaW5mb0NvbnRhaW5lciwgXCJKb2luIFVzIVwiKTtcbiAgZ2V0SW52b2x2ZWQuY2xhc3NMaXN0LmFkZChcImdldC1pbnZvbHZlZC1saW5rXCIpO1xuICBnZXRJbnZvbHZlZC5jbGFzc0xpc3QuYWRkKFwiZ2V0LWludm9sdmVkLWxpbmstYnV0dG9uXCIpO1xuICBnZXRJbnZvbHZlZC5ocmVmID1cbiAgICBcImh0dHBzOi8vd3d3LnJlbWluZC5jb20vY2xhc3Nlcy8tcHVlbnRlcy9tZXNzYWdlcy9zdHJlYW0vNzk2NmIxZWYtZWYxYi00YmVkLThmNmYtNWU0YmFiOWQ0NzJkXCI7XG5cbiAgY29uc3QgaW5zdGFncmFtSHJlZiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJhXCIsXG4gICAgY2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwiaW5zdGFncmFtLWxpbmstY29udGFpbmVyXCJcbiAgKTtcbiAgaW5zdGFncmFtSHJlZi5ocmVmID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3pjaHNfcHVlbnRlcy9cIjtcbiAgY29uc3QgaW5zdGFncmFtTG9nbyA9IGNyZWF0ZUltYWdlKFxuICAgIFwiLi4vZGlzdC9pbWFnZXMvaW5zdGFncmFtLnN2Z1wiLFxuICAgIGluc3RhZ3JhbUhyZWYsXG4gICAgXCJpbnN0YWdyYW0tbGlua1wiXG4gICk7XG5cbiAgY29uc3QgY2FsbFRvQWN0aW9uQnV0dG9uSHJlZiA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIGNhbGxUb0FjdGlvbkNvbnRhaW5lcik7XG4gIGNhbGxUb0FjdGlvbkJ1dHRvbkhyZWYuaHJlZiA9XG4gICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFNb1NhcFNQZVVBclVPUnJYZUhJV0JOV1V2OHlTdzkzVjIxYlVzV21yWkx3L2VkaXQ/dXNwPXNoYXJpbmdcIjtcbiAgY29uc3QgY2FsbFRvQWN0aW9uQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImJ1dHRvblwiLFxuICAgIGNhbGxUb0FjdGlvbkJ1dHRvbkhyZWYsXG4gICAgXCJjYWxsLXRvLWFjdGlvbi1idXR0b25cIlxuICApO1xuICBjYWxsVG9BY3Rpb25CdXR0b24uaW5uZXJUZXh0ID0gXCJWaWV3IFNjaGVkdWxlXCI7XG5cbiAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJoMVwiLCBvdmVybGF5LCBcInBhZ2UtaGVhZGluZ1wiKTtcbiAgaGVhZGluZy5pbm5lclRleHQgPVxuICAgIFwiQ29ubmVjdGluZyBzdHVkZW50cyB0byBzdXBwb3J0IGVkdWNhdGlvbiBhY3Jvc3MgdGhlIGdsb2JlIVwiO1xuXG4gIGNvbnN0IGluZm9ybWF0aW9uQWJvdXRUaGVJbWFnZSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJwXCIsXG4gICAgb3ZlcmxheSxcbiAgICBcImluZm9ybWF0aW9uLWFib3V0LWhlYWRlci1pbWdcIlxuICApO1xuICBpbmZvcm1hdGlvbkFib3V0VGhlSW1hZ2UuaW5uZXJUZXh0ID0gXCJTYW50YSBMdWPDrWEsIEd1YXRlbWFsYVwiO1xufTtcblxuY29uc3QgY3JlYXRlSW5mb1JvdyA9ICgpID0+IHtcbiAgY29uc3QgaW5mb1NlY3Rpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImluZm8tc2VjdGlvbi1jb250YWluZXJcIlxuICApO1xuICBjb25zdCBpbmZvSGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoMVwiLFxuICAgIGluZm9TZWN0aW9uQ29udGFpbmVyLFxuICAgIFwiaW5mby1zZWN0aW9uLWhlYWRlclwiXG4gICk7XG4gIGluZm9IZWFkaW5nLmlubmVyVGV4dCA9IFwiQWJvdXQgT3VyIENsdWJcIjtcbiAgY29uc3QgaW5mb1N1YmhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBpbmZvU2VjdGlvbkNvbnRhaW5lcixcbiAgICBcImluZm8tc3ViaGVhZGluZy1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IHBMZWZ0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcInBcIixcbiAgICBpbmZvU3ViaGVhZGVyQ29udGFpbmVyLFxuICAgIFwiaW5mby1zZWN0aW9uLXAtbGVmdFwiXG4gICk7XG4gIGNvbnN0IHBSaWdodCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJwXCIsXG4gICAgaW5mb1N1YmhlYWRlckNvbnRhaW5lcixcbiAgICBcImluZm8tc2VjdGlvbi1wLXJpZ2h0XCJcbiAgKTtcblxuICBwTGVmdC5pbm5lclRleHQgPVxuICAgICdQVUVOVEVTLCB3aGljaCBzdGFuZHMgZm9yIFByb21vdGluZyBVbml0eSBhbmQgRW1wb3dlcm1lbnQgTm9ibHkgVGhyb3VnaCBFZHVjYXRpb24gYW5kIFNlcnZpY2UsIGFpbXMgdG8gXCJCdWlsZCBicmlkZ2VzXCIgYmV0d2VlbiBvdXIgY29tbXVuaXR5IGhlcmUgaW4gWmlvbnN2aWxsZSBhbmQgdGhvc2UgaW4gTGF0aW4gQW1lcmljYSB0aHJvdWdoIGEgaGFuZHMtb24gYXBwcm9hY2guJztcbiAgcFJpZ2h0LmlubmVyVGV4dCA9XG4gICAgXCJQVUVOVEVTLCBmb3JtZXJseSBPcGVyYXRpb246IEhvbmR1cmFzLCBiZWdhbiBpbiBGZWJydWFyeSAyMDIzIGluIGFuIGF0dGVtcHQgdG8gcHJvdmlkZSBleHRyYSBzdXBwb3J0IGZvciBjb21tdW5pdGllcyBpbiBIb25kdXJhcy4gSG93ZXZlciwgYXMgdGhlIDIwMjItMjAyMyBzY2hvb2wgeWVhciBjYW1lIHRvIGEgY2xvc2UsIGEgbmV3IGxlYWYgd2FzIHR1cm5lZCBmb3IgdGhlIGNsdWIgYW5kIGl0IGV4cGFuZGVkIHRvIGluY2x1ZGUgYWxsIG9mIExhdGluIEFtZXJpY2EuXCI7XG59O1xuXG5jb25zdCBjcmVhdGVHdWF0ZW1hbGFSb3cgPSAoKSA9PiB7XG4gIC8qIFRoaXMgcGFydCBpcyBvbmx5IGZvciB3aGVuIHRoZSBzY3JlZW4gd2lkdGggZ2V0cyB0aGluXG4gIE5vdCBmb3IgdGhlIHBhcnQgd2hlbiBpdCBpcyB3aWRlICovXG5cbiAgY29uc3QgdGhpblNjcmVlbkd1YXRlbWFsYUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwidGhpbi1ndWF0ZW1hbGEtY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgdGhpblNjcmVlbkd1YXRlbWFsYU92ZXJsYXkgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgdGhpblNjcmVlbkd1YXRlbWFsYUNvbnRhaW5lcixcbiAgICBcInRoaW4tZ3VhdGVtYWxhLW92ZXJsYXlcIlxuICApO1xuXG4gIGNvbnN0IHRoaW5TY3JlZW5HdWF0ZW1hbGFIZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDFcIixcbiAgICB0aGluU2NyZWVuR3VhdGVtYWxhT3ZlcmxheSxcbiAgICBcInRoaW4tZ3VhdGVtYWxhLWhlYWRlclwiXG4gICk7XG5cbiAgdGhpblNjcmVlbkd1YXRlbWFsYUhlYWRlci5pbm5lclRleHQgPSBcIkNvbWUgd2l0aCB1cyB0byBHdWF0ZW1hbGEhXCI7XG5cbiAgY29uc3QgdGhpblNjcmVlbkd1YXRlbWFsYVN1YmhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoNFwiLFxuICAgIHRoaW5TY3JlZW5HdWF0ZW1hbGFPdmVybGF5LFxuICAgIFwidGhpbi1ndWF0ZW1hbGEtc3ViaGVhZGVyXCJcbiAgKTtcbiAgdGhpblNjcmVlbkd1YXRlbWFsYVN1YmhlYWRlci5pbm5lclRleHQgPVxuICAgIFwiVGhpcyBzdW1tZXIgKEp1bmUgMTEtMTkgMjAyNCkgd2Ugd2lsbCBqb3VybmV5IHRvIFRlY3DDoW4sIEd1YXRlbWFsYSB3aGVyZSBjbHViIG1lbWJlcnMgd2lsbCBwZXJmb3JtIGhhbmRzIG9uIGFjdGl2aXRpZXMgdG8gaGVscCBlZHVjYXRlIGFuZCBpbXByb3ZlIGNvbmRpdGlvbnMgYXQgYSBzY2hvb2wuIFdoZXRoZXIgb3Igbm90IHlvdSBvciB5b3VyIGNoaWxkIGhhcyBhbiBpbnRlcmVzdCBpbiBnb2luZywgZmVlbCBmcmVlIHRvIHRha2UgYSBsb29rIGF0IGV4dHJhIGluZm9ybWF0aW9uIGFzIHRoaXMgdHJpcCBpcyBvdXIgbWFpbiBmb2N1cyBhbmQgd2hlcmUgbW9zdCBmdXR1cmUgcHJvY2VlZHMgd2lsbCBiZSBoZWFkaW5nLlwiO1xuXG4gIGNvbnN0IHRoaW5TY3JlZW5HdWF0ZW1hbGFDYWxsVG9BY3Rpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYVwiLFxuICAgIHRoaW5TY3JlZW5HdWF0ZW1hbGFPdmVybGF5LFxuICAgIFwiZ3VhdGVtYWxhLWJ1dHRvbi1jb250YWluZXJcIlxuICApO1xuICB0aGluU2NyZWVuR3VhdGVtYWxhQ2FsbFRvQWN0aW9uQ29udGFpbmVyLmhyZWYgPVxuICAgIFwiaHR0cHM6Ly9nbG9iYWxicmlnYWRlcy02MDQ0NTkxLmhzLXNpdGVzLmNvbS9zcXVhZHNhYnJvYWQtemlvbnN2aWxsZWhzLWp1bmUyMDI0XCI7XG4gIGNvbnN0IHRoaW5TY3JlZW5HdWF0ZW1hbGFDYWxsVG9BY3Rpb24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgdGhpblNjcmVlbkd1YXRlbWFsYUNhbGxUb0FjdGlvbkNvbnRhaW5lcixcbiAgICBcInRoaW4tZ3VhdGVtYWxhLWJ1dHRvblwiXG4gICk7XG4gIHRoaW5TY3JlZW5HdWF0ZW1hbGFDYWxsVG9BY3Rpb24uaW5uZXJUZXh0ID0gXCJNb3JlIEluZm9ybWF0aW9uICsgUmVnaXN0cmF0aW9uXCI7XG5cbiAgLyogV2lkZSBTY3JlZW4gUGFydCFcbiAgTm90IGZvciB0aGluIHNjcmVlbiAqL1xuXG4gIGNvbnN0IGd1YXRlbWFsYUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiZ3VhdGVtYWxhLWNvbnRhaW5lclwiXG4gICk7XG4gIGNvbnN0IGd1YXRlbWFsYUNvbnRhaW5lckxlZnQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyLFxuICAgIFwiZ3VhdGVtYWxhLWNvbnRhaW5lci1sZWZ0XCJcbiAgKTtcbiAgY29uc3QgZ3VhdGVtYWxhQ29udGFpbmVyUmlnaHQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyLFxuICAgIFwiZ3VhdGVtYWxhLWNvbnRhaW5lci1yaWdodFwiXG4gICk7XG4gIGNvbnN0IGd1YXRlbWFsYUhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoMVwiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lckxlZnQsXG4gICAgXCJndWF0ZW1hbGEtaGVhZGVyXCJcbiAgKTtcbiAgZ3VhdGVtYWxhSGVhZGVyLmlubmVyVGV4dCA9IFwiQ29tZSB3aXRoIHVzIHRvIEd1YXRlbWFsYSFcIjtcbiAgY29uc3QgZ3VhdGVtYWxhQ2FsbFRvQWN0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImFcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXJMZWZ0LFxuICAgIFwiZ3VhdGVtYWxhLWJ1dHRvbi1jb250YWluZXJcIlxuICApO1xuICBndWF0ZW1hbGFDYWxsVG9BY3Rpb25Db250YWluZXIuaHJlZiA9XG4gICAgXCJodHRwczovL2dsb2JhbGJyaWdhZGVzLTYwNDQ1OTEuaHMtc2l0ZXMuY29tL3NxdWFkc2Ficm9hZC16aW9uc3ZpbGxlaHMtanVuZTIwMjRcIjtcbiAgY29uc3QgZ3VhdGVtYWxhQ2FsbFRvQWN0aW9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImJ1dHRvblwiLFxuICAgIGd1YXRlbWFsYUNhbGxUb0FjdGlvbkNvbnRhaW5lcixcbiAgICBcImd1YXRlbWFsYS1idXR0b25cIlxuICApO1xuICBndWF0ZW1hbGFDYWxsVG9BY3Rpb24uaW5uZXJUZXh0ID0gXCJNb3JlIEluZm9ybWF0aW9uICsgUmVnaXN0cmF0aW9uXCI7XG5cbiAgY29uc3QgZ3VhdGVtYWxhU3ViaGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImg0XCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyTGVmdCxcbiAgICBcImd1YXRlbWFsYS1zdWJoZWFkZXJcIlxuICApO1xuICBndWF0ZW1hbGFTdWJoZWFkZXIuaW5uZXJUZXh0ID1cbiAgICBcIlRoaXMgc3VtbWVyIChKdW5lIDExLTE5IDIwMjQpIHdlIHdpbGwgam91cm5leSB0byBUZWNww6FuLCBHdWF0ZW1hbGEgd2hlcmUgY2x1YiBtZW1iZXJzIHdpbGwgcGVyZm9ybSBoYW5kcyBvbiBhY3Rpdml0aWVzIHRvIGhlbHAgZWR1Y2F0ZSBhbmQgaW1wcm92ZSBjb25kaXRpb25zIGF0IGEgc2Nob29sLiBXaGV0aGVyIG9yIG5vdCB5b3Ugb3IgeW91ciBjaGlsZCBoYXMgYW4gaW50ZXJlc3QgaW4gZ29pbmcsIGZlZWwgZnJlZSB0byB0YWtlIGEgbG9vayBhdCBleHRyYSBpbmZvcm1hdGlvbiBhcyB0aGlzIHRyaXAgaXMgb3VyIG1haW4gZm9jdXMgYW5kIHdoZXJlIG1vc3QgZnV0dXJlIHByb2NlZWRzIHdpbGwgYmUgaGVhZGluZy5cIjtcblxuICBjb25zdCBndWF0ZW1hbGFJbWFnZSA9IGNyZWF0ZUltYWdlKFxuICAgIFwiLi4vZGlzdC9pbWFnZXMvZ3VhdGVtYWxhLWxhbmRzY2FwZS5qcGdcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXJSaWdodCxcbiAgICBcImd1YXRlbWFsYS1pbWdcIlxuICApO1xufTtcblxuY29uc3QgY3JlYXRlRWdnTXlZYXJkUm93ID0gKCkgPT4ge1xuICBjb25zdCBlZ2dNeVlhcmRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImVnZy1teS15YXJkLWNvbnRhaW5lclwiXG4gICk7XG4gIGVnZ015WWFyZENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCguLi9kaXN0L2ltYWdlcy9lYXN0ZXIuanBnKVwiO1xuICBjb25zdCBvdmVybGF5ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGVnZ015WWFyZENvbnRhaW5lcixcbiAgICBcImVnZy1teS15YXJkLW92ZXJsYXlcIlxuICApO1xuXG4gIGNvbnN0IGVnZ015WWFyZEhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoMVwiLFxuICAgIG92ZXJsYXksXG4gICAgXCJlZ2ctbXkteWFyZC1oZWFkZXJcIlxuICApO1xuICBjb25zdCBlZ2dNeVlhcmRTdWJoZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDNcIixcbiAgICBvdmVybGF5LFxuICAgIFwiZWdnLW15LXlhcmQtc3ViaGVhZGVyXCJcbiAgKTtcbiAgZWdnTXlZYXJkU3ViaGVhZGVyLmlubmVyVGV4dCA9XG4gICAgXCJIZWxwIHN1cHBvcnQgb3VyIG1pc3Npb24gYnkgcGFydGljaXBhdGluZyBpbiBvdXIgYW5udWFsIGVnZyBteSB5YXJkIEVhc3RlciBldmVudC4gRm9yIHRoaXMgZXZlbnQsIHdlIHdpbGwgaGlkZSBlZ2dzIGZvciB5b3UgaW4geW91ciBmcm9udCBvciBiYWNreWFyZCBmb3IgRWFzdGVyLiBJZiB5b3UgYXJlIGludGVyZXN0ZWQgb3Igc2ltcGx5IHdhbnQgdG8gaGVscCwgeW91IG1heSBlaXRoZXIgZGVjaWRlIHRvIHB1cmNoYXNlIGVnZ3MgZm9yIHVzIHRvIGhpZGUgZm9yIHlvdSBvciBoZWxwIHVzIGJ5IGRvbmF0aW5nIGFueSBzcGFyZSBlZ2dzIG9yIGNhbmR5IHlvdSBtYXkgaGF2ZSwgdGhhbmsgeW91IVwiO1xuICBlZ2dNeVlhcmRIZWFkZXIuaW5uZXJUZXh0ID0gXCJFZ2cgTXkgWWFyZCFcIjtcblxuICBjb25zdCBlZ2dNeVlhcmRDYWxsVG9BY3Rpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYVwiLFxuICAgIG92ZXJsYXksXG4gICAgXCJlZ2ctbXkteWFyZC1idXR0b24tY29udGFpbmVyXCJcbiAgKTtcbiAgZWdnTXlZYXJkQ2FsbFRvQWN0aW9uQ29udGFpbmVyLmhyZWYgPVxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcVFrUVQ1M2c3MWl1OG5BUlV2Q3RVTXBuMHNldnlmZ0Mvdmlldz91c3A9c2hhcmluZ1wiO1xuXG4gIGNvbnN0IGVnZ015WWFyZENhbGxUb0FjdGlvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJidXR0b25cIixcbiAgICBlZ2dNeVlhcmRDYWxsVG9BY3Rpb25Db250YWluZXIsXG4gICAgXCJlZ2ctbXkteWFyZC1idXR0b25cIlxuICApO1xuICBlZ2dNeVlhcmRDYWxsVG9BY3Rpb24uaW5uZXJUZXh0ID0gXCJMZWFybiBNb3JlIVwiO1xufTtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImZvb3Rlci1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGNsdWJOYW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGZvb3RlckNvbnRhaW5lcixcbiAgICBcImZvb3Rlci1jbHViLW5hbWUtY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBjbHViSW5mb0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBmb290ZXJDb250YWluZXIsXG4gICAgXCJmb290ZXItY2x1Yi1pbmZvLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgY2x1YkNhbGxUb0FjdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBmb290ZXJDb250YWluZXIsXG4gICAgXCJmb290ZXItY2x1Yi1jYWxsLXRvLWFjdGlvbi1jb250YWluZXJcIlxuICApO1xuICBjcmVhdGVUZXh0RWxlbWVudChcImgyXCIsIGNsdWJOYW1lQ29udGFpbmVyLCBcIlBVRU5URVNcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFxuICAgIFwicFwiLFxuICAgIGNsdWJOYW1lQ29udGFpbmVyLFxuICAgIFwiWmlvbnN2aWxsZSBDb21tdW5pdHkgSGlnaCBTY2hvb2wgQ2x1YlwiXG4gICk7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBjbHViTmFtZUNvbnRhaW5lciwgXCJFbWFpbDogemNoc3B1ZW50ZXNAZ21haWwuY29tXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgY2x1Yk5hbWVDb250YWluZXIsIFwiSW5zdGFncmFtOiBAemNoc19wdWVudGVzXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcImgyXCIsIGNsdWJJbmZvQ29udGFpbmVyLCBcIkdldCBJbnZvbHZlZCFcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBjbHViSW5mb0NvbnRhaW5lciwgXCJFZ2cgTXkgWWFyZFwiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGNsdWJJbmZvQ29udGFpbmVyLCBcIkd1YXRlbWFsYVwiKTtcblxuICBjb25zdCBmb290ZXJJbnN0YWdyYW1IcmVmID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImFcIixcbiAgICBjbHViQ2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwiZm9vdGVyLWluc3RhZ3JhbS1saW5rLWNvbnRhaW5lclwiXG4gICk7XG4gIGZvb3Rlckluc3RhZ3JhbUhyZWYuaHJlZiA9IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS96Y2hzX3B1ZW50ZXMvXCI7XG4gIGNvbnN0IGZvb3Rlckluc3RhZ3JhbUxvZ28gPSBjcmVhdGVJbWFnZShcbiAgICBcIi4uL2Rpc3QvaW1hZ2VzL2Zvb3Rlci1pbnN0YWdyYW0uc3ZnXCIsXG4gICAgZm9vdGVySW5zdGFncmFtSHJlZixcbiAgICBcImZvb3Rlci1pbnN0YWdyYW0tbGlua1wiXG4gICk7XG5cbiAgY29uc3QgY2FsbFRvQWN0aW9uQnV0dG9uSHJlZiA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIGNsdWJDYWxsVG9BY3Rpb25Db250YWluZXIpO1xuICBjYWxsVG9BY3Rpb25CdXR0b25IcmVmLmhyZWYgPVxuICAgIFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xTW9TYXBTUGVVQXJVT1JyWGVISVdCTldVdjh5U3c5M1YyMWJVc1dtclpMdy9lZGl0P3VzcD1zaGFyaW5nXCI7XG4gIGNvbnN0IGNhbGxUb0FjdGlvbkJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJidXR0b25cIixcbiAgICBjYWxsVG9BY3Rpb25CdXR0b25IcmVmLFxuICAgIFwiZm9vdGVyLWNhbGwtdG8tYWN0aW9uLWJ1dHRvblwiXG4gICk7XG4gIGNhbGxUb0FjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIlZpZXcgU2NoZWR1bGVcIjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVdlYnNpdGUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlV2Vic2l0ZSB9IGZyb20gXCIuL2hvbWVcIjtcblxuY3JlYXRlV2Vic2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9