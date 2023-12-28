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

  const getInvolved = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("a", infoContainer, "Get Involved");
  getInvolved.classList.add("get-involved-link");
  getInvolved.href =
    "https://www.remind.com/classes/-puentes/messages/stream/7966b1ef-ef1b-4bed-8f6f-5e4bab9d472d";

  const instagramHref = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "a",
    callToActionContainer,
    "instagram-link-container"
  );
  instagramHref.href = "https://www.instagram.com/operation_honduras/";
  const instagramLogo = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createImage)(
    "../dist/images/instagram.svg",
    instagramHref,
    "instagram-link"
  );

  const callToActionButtonHref = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", callToActionContainer);
  const callToActionButton = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)(
    "button",
    callToActionButtonHref,
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
  guatemalaCallToAction.innerText = "More Information + Registration";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQSw0QkFBNEIsb0VBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixvRUFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLG9FQUFzQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWlCO0FBQ25CLEVBQUUsK0RBQWlCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBaUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtEQUFpQjtBQUNuQixFQUFFLCtEQUFpQjtBQUNuQixFQUFFLCtEQUFpQjtBQUNuQixFQUFFLCtEQUFpQjs7QUFFbkIsRUFBRSx5REFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9FQUFzQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlCOzs7Ozs7O1VDblJ6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2QyxvREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1ZW50ZXMvLi9zcmMvVUlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcHVlbnRlcy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHVlbnRlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHVlbnRlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wdWVudGVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlVGV4dEVsZW1lbnQgPSAodHlwZSwgcGFyZW50LCB0ZXh0KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVFbGVtZW50V2l0aENsYXNzID0gKHR5cGUsIHBhcmVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUltYWdlID0gKHNvdXJjZSwgcGFyZW50LCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBlbGVtZW50LnNyYyA9IHNvdXJjZTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNyZWF0ZVRleHRFbGVtZW50LFxuICBjcmVhdGVFbGVtZW50V2l0aENsYXNzLFxuICBjcmVhdGVJbWFnZSxcbn07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVUZXh0RWxlbWVudCxcbiAgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyxcbiAgY3JlYXRlSW1hZ2UsXG59IGZyb20gXCIuL1VJRnVuY3Rpb25zXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGNyZWF0ZVdlYnNpdGUgPSAoKSA9PiB7XG4gIGNyZWF0ZU5hdigpO1xuICBjcmVhdGVJbmZvUm93KCk7XG4gIGNyZWF0ZUd1YXRlbWFsYVJvdygpO1xuICBjcmVhdGVFZ2dNeVlhcmRSb3coKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG59O1xuXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiaGVhZGVyLWNvbnRhaW5lclwiXG4gICk7XG4gIGhlYWRlckNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgIFwidXJsKC4uL2Rpc3QvaW1hZ2VzL3NhbnRhLWx1Y2lhLWxhbmRzY2FwZS5qcGcpXCI7XG4gIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIGhlYWRlckNvbnRhaW5lciwgXCJvdmVybGF5XCIpO1xuXG4gIGNvbnN0IG5hdkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgb3ZlcmxheSwgXCJuYXYtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgbmF2Q29udGFpbmVyLFxuICAgIFwiaGVhZGluZy1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGluZm9Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgbmF2Q29udGFpbmVyLFxuICAgIFwiaW5mby1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGNhbGxUb0FjdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBuYXZDb250YWluZXIsXG4gICAgXCJhY3Rpb24tY29udGFpbmVyXCJcbiAgKTtcblxuICBjcmVhdGVUZXh0RWxlbWVudChcImgyXCIsIGhlYWRpbmdDb250YWluZXIsIFwiUFVFTlRFU1wiKTtcbiAgY29uc3QgYWJvdXRVcyA9IGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBpbmZvQ29udGFpbmVyLCBcIkFib3V0IFVzXCIpO1xuICBhYm91dFVzLm9uY2xpY2sgPSAoKSA9PiBzY3JvbGwoMCwgNjUwKTtcbiAgY29uc3QgZ3VhdGVtYWxhVHJpcCA9IGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBpbmZvQ29udGFpbmVyLCBcIkd1YXRlbWFsYSBUcmlwXCIpO1xuICBndWF0ZW1hbGFUcmlwLm9uY2xpY2sgPSAoKSA9PiBzY3JvbGwoMCwgMTA1MCk7XG4gIGNvbnN0IGVnZ015WWFyZCA9IGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBpbmZvQ29udGFpbmVyLCBcIkVnZyBNeSBZYXJkXCIpO1xuICBlZ2dNeVlhcmQub25jbGljayA9ICgpID0+IHNjcm9sbCgwLCAxNjAwKTtcbiAgY29uc3QgZnVuZHJhaXNlcnMgPSBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJGdW5kcmFpc2Vyc1wiKTtcbiAgZnVuZHJhaXNlcnMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICBmdW5kcmFpc2VycyxcbiAgICAgIFwiZHJvcC1kb3duLWNvbnRhaW5lclwiXG4gICAgKTtcbiAgICBjb25zdCBmdW5kcmFpc2VyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgIFwicFwiLFxuICAgICAgY29udGFpbmVyLFxuICAgICAgXCJkcm9wLWRvd24tZnVuZHJhaXNlclwiXG4gICAgKTtcbiAgICBmdW5kcmFpc2VyLmlubmVyVGV4dCA9IFwiRWdnIE15IFlhcmRcIjtcbiAgfSk7XG4gIGZ1bmRyYWlzZXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3AtZG93bi1jb250YWluZXJcIilbMF0ucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGdldEludm9sdmVkID0gY3JlYXRlVGV4dEVsZW1lbnQoXCJhXCIsIGluZm9Db250YWluZXIsIFwiR2V0IEludm9sdmVkXCIpO1xuICBnZXRJbnZvbHZlZC5jbGFzc0xpc3QuYWRkKFwiZ2V0LWludm9sdmVkLWxpbmtcIik7XG4gIGdldEludm9sdmVkLmhyZWYgPVxuICAgIFwiaHR0cHM6Ly93d3cucmVtaW5kLmNvbS9jbGFzc2VzLy1wdWVudGVzL21lc3NhZ2VzL3N0cmVhbS83OTY2YjFlZi1lZjFiLTRiZWQtOGY2Zi01ZTRiYWI5ZDQ3MmRcIjtcblxuICBjb25zdCBpbnN0YWdyYW1IcmVmID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImFcIixcbiAgICBjYWxsVG9BY3Rpb25Db250YWluZXIsXG4gICAgXCJpbnN0YWdyYW0tbGluay1jb250YWluZXJcIlxuICApO1xuICBpbnN0YWdyYW1IcmVmLmhyZWYgPSBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vb3BlcmF0aW9uX2hvbmR1cmFzL1wiO1xuICBjb25zdCBpbnN0YWdyYW1Mb2dvID0gY3JlYXRlSW1hZ2UoXG4gICAgXCIuLi9kaXN0L2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIsXG4gICAgaW5zdGFncmFtSHJlZixcbiAgICBcImluc3RhZ3JhbS1saW5rXCJcbiAgKTtcblxuICBjb25zdCBjYWxsVG9BY3Rpb25CdXR0b25IcmVmID0gY3JlYXRlRWxlbWVudChcImFcIiwgY2FsbFRvQWN0aW9uQ29udGFpbmVyKTtcbiAgY29uc3QgY2FsbFRvQWN0aW9uQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImJ1dHRvblwiLFxuICAgIGNhbGxUb0FjdGlvbkJ1dHRvbkhyZWYsXG4gICAgXCJjYWxsLXRvLWFjdGlvbi1idXR0b25cIlxuICApO1xuICBjYWxsVG9BY3Rpb25CdXR0b24uaW5uZXJUZXh0ID0gXCJDYWxsIHRvIEFjdGlvblwiO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaDFcIiwgb3ZlcmxheSwgXCJwYWdlLWhlYWRpbmdcIik7XG4gIGhlYWRpbmcuaW5uZXJUZXh0ID1cbiAgICBcIkNvbm5lY3Rpbmcgc3R1ZGVudHMgdG8gc3VwcG9ydCBlZHVjYXRpb24gYWNyb3NzIHRoZSBnbG9iZSFcIjtcblxuICBjb25zdCBpbmZvcm1hdGlvbkFib3V0VGhlSW1hZ2UgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwicFwiLFxuICAgIG92ZXJsYXksXG4gICAgXCJpbmZvcm1hdGlvbi1hYm91dC1oZWFkZXItaW1nXCJcbiAgKTtcbiAgaW5mb3JtYXRpb25BYm91dFRoZUltYWdlLmlubmVyVGV4dCA9IFwiU2FudGEgTHVjw61hLCBHdWF0ZW1hbGFcIjtcbn07XG5cbmNvbnN0IGNyZWF0ZUluZm9Sb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGluZm9TZWN0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJpbmZvLXNlY3Rpb24tY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgaW5mb0hlYWRpbmcgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDFcIixcbiAgICBpbmZvU2VjdGlvbkNvbnRhaW5lcixcbiAgICBcImluZm8tc2VjdGlvbi1oZWFkZXJcIlxuICApO1xuICBpbmZvSGVhZGluZy5pbm5lclRleHQgPSBcIkFib3V0IE91ciBDbHViXCI7XG4gIGNvbnN0IGluZm9TdWJoZWFkZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgaW5mb1NlY3Rpb25Db250YWluZXIsXG4gICAgXCJpbmZvLXN1YmhlYWRpbmctY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBwTGVmdCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJwXCIsXG4gICAgaW5mb1N1YmhlYWRlckNvbnRhaW5lcixcbiAgICBcImluZm8tc2VjdGlvbi1wLWxlZnRcIlxuICApO1xuICBjb25zdCBwUmlnaHQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwicFwiLFxuICAgIGluZm9TdWJoZWFkZXJDb250YWluZXIsXG4gICAgXCJpbmZvLXNlY3Rpb24tcC1yaWdodFwiXG4gICk7XG5cbiAgcExlZnQuaW5uZXJUZXh0ID1cbiAgICAnUFVFTlRFUywgd2hpY2ggc3RhbmRzIGZvciBQcm9tb3RpbmcgVW5pdHkgYW5kIEVtcG93ZXJtZW50IE5vYmx5IFRocm91Z2ggRWR1Y2F0aW9uIGFuZCBTZXJ2aWNlLCBhaW1zIHRvIFwiQnVpbGQgYnJpZGdlc1wiIGJldHdlZW4gb3VyIGNvbW11bml0eSBoZXJlIGluIFppb25zdmlsbGUgYW5kIHRob3NlIGluIExhdGluIEFtZXJpY2EgdGhyb3VnaCBhIGhhbmRzLW9uIGFwcHJvYWNoLic7XG4gIHBSaWdodC5pbm5lclRleHQgPVxuICAgIFwiUFVFTlRFUywgZm9ybWVybHkgT3BlcmF0aW9uOiBIb25kdXJhcywgYmVnYW4gaW4gRmVicnVhcnkgMjAyMyBpbiBhbiBhdHRlbXB0IHRvIHByb3ZpZGUgZXh0cmEgc3VwcG9ydCBmb3IgY29tbXVuaXRpZXMgaW4gSG9uZHVyYXMuIEhvd2V2ZXIsIGFzIHRoZSAyMDIyLTIwMjMgc2Nob29sIHllYXIgY2FtZSB0byBhIGNsb3NlLCBhIG5ldyBsZWFmIHdhcyB0dXJuZWQgZm9yIHRoZSBjbHViIGFuZCBpdCBleHBhbmRlZCB0byBpbmNsdWRlIGFsbCBvZiBMYXRpbiBBbWVyaWNhLlwiO1xufTtcblxuY29uc3QgY3JlYXRlR3VhdGVtYWxhUm93ID0gKCkgPT4ge1xuICBjb25zdCBndWF0ZW1hbGFDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImd1YXRlbWFsYS1jb250YWluZXJcIlxuICApO1xuICBjb25zdCBndWF0ZW1hbGFDb250YWluZXJMZWZ0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lcixcbiAgICBcImd1YXRlbWFsYS1jb250YWluZXItbGVmdFwiXG4gICk7XG4gIGNvbnN0IGd1YXRlbWFsYUNvbnRhaW5lclJpZ2h0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lcixcbiAgICBcImd1YXRlbWFsYS1jb250YWluZXItcmlnaHRcIlxuICApO1xuICBjb25zdCBndWF0ZW1hbGFIZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDFcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXJMZWZ0LFxuICAgIFwiZ3VhdGVtYWxhLWhlYWRlclwiXG4gICk7XG4gIGd1YXRlbWFsYUhlYWRlci5pbm5lclRleHQgPSBcIkNvbWUgd2l0aCB1cyB0byBHdWF0ZW1hbGEhXCI7XG4gIGNvbnN0IGd1YXRlbWFsYUNhbGxUb0FjdGlvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJidXR0b25cIixcbiAgICBndWF0ZW1hbGFDb250YWluZXJMZWZ0LFxuICAgIFwiZ3VhdGVtYWxhLWJ1dHRvblwiXG4gICk7XG5cbiAgY29uc3QgZ3VhdGVtYWxhU3ViaGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImg0XCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyTGVmdCxcbiAgICBcImd1YXRlbWFsYS1zdWJoZWFkZXJcIlxuICApO1xuICBndWF0ZW1hbGFTdWJoZWFkZXIuaW5uZXJUZXh0ID1cbiAgICBcIlRoaXMgc3VtbWVyIChKdW5lIDExLTE5IDIwMjQpIHdlIHdpbGwgam91cm5leSB0byBUZWNww6FuLCBHdWF0ZW1hbGEgd2hlcmUgY2x1YiBtZW1iZXJzIHdpbGwgcGVyZm9ybSBoYW5kcyBvbiBhY3Rpdml0aWVzIHRvIGhlbHAgZWR1Y2F0ZSBhbmQgaW1wcm92ZSBjb25kaXRpb25zIGF0IGEgc2Nob29sLiBXaGV0aGVyIG9yIG5vdCB5b3Ugb3IgeW91ciBjaGlsZCBoYXMgYW4gaW50ZXJlc3QgaW4gZ29pbmcsIGZlZWwgZnJlZSB0byB0YWtlIGEgbG9vayBhdCBleHRyYSBpbmZvcm1hdGlvbiBhcyB0aGlzIHRyaXAgaXMgb3VyIG1haW4gZm9jdXMgYW5kIHdoZXJlIG1vc3QgZnV0dXJlIHByb2NlZWRzIHdpbGwgYmUgaGVhZGluZy5cIjtcbiAgZ3VhdGVtYWxhQ2FsbFRvQWN0aW9uLmlubmVyVGV4dCA9IFwiTW9yZSBJbmZvcm1hdGlvbiArIFJlZ2lzdHJhdGlvblwiO1xuICBjb25zdCBndWF0ZW1hbGFJbWFnZSA9IGNyZWF0ZUltYWdlKFxuICAgIFwiLi4vZGlzdC9pbWFnZXMvZ3VhdGVtYWxhLWxhbmRzY2FwZS5qcGdcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXJSaWdodCxcbiAgICBcImd1YXRlbWFsYS1pbWdcIlxuICApO1xufTtcblxuY29uc3QgY3JlYXRlRWdnTXlZYXJkUm93ID0gKCkgPT4ge1xuICBjb25zdCBlZ2dNeVlhcmRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImVnZy1teS15YXJkLWNvbnRhaW5lclwiXG4gICk7XG4gIGVnZ015WWFyZENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCguLi9kaXN0L2ltYWdlcy9lYXN0ZXIuanBnKVwiO1xuICBjb25zdCBvdmVybGF5ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGVnZ015WWFyZENvbnRhaW5lcixcbiAgICBcImVnZy1teS15YXJkLW92ZXJsYXlcIlxuICApO1xuXG4gIGNvbnN0IGVnZ015WWFyZEhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoMVwiLFxuICAgIG92ZXJsYXksXG4gICAgXCJlZ2ctbXkteWFyZC1oZWFkZXJcIlxuICApO1xuICBjb25zdCBlZ2dNeVlhcmRTdWJoZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDNcIixcbiAgICBvdmVybGF5LFxuICAgIFwiZWdnLW15LXlhcmQtc3ViaGVhZGVyXCJcbiAgKTtcbiAgZWdnTXlZYXJkU3ViaGVhZGVyLmlubmVyVGV4dCA9XG4gICAgXCJIZWxwIHN1cHBvcnQgb3VyIG1pc3Npb24gYnkgcGFydGljaXBhdGluZyBpbiBvdXIgYW5udWFsIGVnZyBteSB5YXJkIEVhc3RlciBldmVudC4gRm9yIHRoaXMgZXZlbnQsIHdlIHdpbGwgaGlkZSBlZ2dzIGZvciB5b3UgaW4geW91ciBmcm9udCBvciBiYWNreWFyZCBmb3IgRWFzdGVyLiBJZiB5b3UgYXJlIGludGVyZXN0ZWQgb3Igc2ltcGx5IHdhbnQgdG8gaGVscCwgeW91IG1heSBlaXRoZXIgZGVjaWRlIHRvIHB1cmNoYXNlIGVnZ3MgZm9yIHVzIHRvIGhpZGUgZm9yIHlvdSBvciBoZWxwIHVzIGJ5IGRvbmF0aW5nIGFueSBzcGFyZSBlZ2dzIG9yIGNhbmR5IHlvdSBtYXkgaGF2ZSwgdGhhbmsgeW91IVwiO1xuICBlZ2dNeVlhcmRIZWFkZXIuaW5uZXJUZXh0ID0gXCJFZ2cgTXkgWWFyZCFcIjtcblxuICBjb25zdCBlZ2dNeVlhcmRDYWxsVG9BY3Rpb24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgb3ZlcmxheSxcbiAgICBcImVnZy1teS15YXJkLWJ1dHRvblwiXG4gICk7XG4gIGVnZ015WWFyZENhbGxUb0FjdGlvbi5pbm5lclRleHQgPSBcIkxlYXJuIE1vcmUhXCI7XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBjb250ZW50LFxuICAgIFwiZm9vdGVyLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgY2x1Yk5hbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZm9vdGVyQ29udGFpbmVyLFxuICAgIFwiZm9vdGVyLWNsdWItbmFtZS1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGNsdWJJbmZvQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGZvb3RlckNvbnRhaW5lcixcbiAgICBcImZvb3Rlci1jbHViLWluZm8tY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBjbHViQ2FsbFRvQWN0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGZvb3RlckNvbnRhaW5lcixcbiAgICBcImZvb3Rlci1jbHViLWNhbGwtdG8tYWN0aW9uLWNvbnRhaW5lclwiXG4gICk7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwiaDJcIiwgY2x1Yk5hbWVDb250YWluZXIsIFwiUFVFTlRFU1wiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgY2x1Yk5hbWVDb250YWluZXIsXG4gICAgXCJaaW9uc3ZpbGxlIENvbW11bml0eSBIaWdoIFNjaG9vbCBDbHViXCJcbiAgKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXG4gICAgXCJwXCIsXG4gICAgY2x1Yk5hbWVDb250YWluZXIsXG4gICAgXCJFbWFpbDogb3BlcmF0aW9uaG9uZHVyYXMwMEBnbWFpbC5jb21cIlxuICApO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgY2x1Yk5hbWVDb250YWluZXIsIFwiSW5zdGFncmFtOiBAb3BlcmF0aW9uX2hvbmR1cmFzXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcImgyXCIsIGNsdWJJbmZvQ29udGFpbmVyLCBcIkdldCBJbnZvbHZlZCFcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBjbHViSW5mb0NvbnRhaW5lciwgXCJFZ2cgTXkgWWFyZFwiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGNsdWJJbmZvQ29udGFpbmVyLCBcIkd1YXRlbWFsYVwiKTtcblxuICBjcmVhdGVJbWFnZShcbiAgICBcIi4uL2Rpc3QvaW1hZ2VzL2Zvb3Rlci1pbnN0YWdyYW0uc3ZnXCIsXG4gICAgY2x1YkNhbGxUb0FjdGlvbkNvbnRhaW5lcixcbiAgICBcImZvb3Rlci1pbnN0YWdyYW0tbGlua1wiXG4gICk7XG4gIGNvbnN0IGNhbGxUb0FjdGlvbkJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJidXR0b25cIixcbiAgICBjbHViQ2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwiZm9vdGVyLWNhbGwtdG8tYWN0aW9uLWJ1dHRvblwiXG4gICk7XG4gIGNhbGxUb0FjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIkNhbGwgdG8gQWN0aW9uXCI7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVXZWJzaXRlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZVdlYnNpdGUgfSBmcm9tIFwiLi9ob21lXCI7XG5cbmNyZWF0ZVdlYnNpdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==