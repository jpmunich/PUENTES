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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPRTs7Ozs7Ozs7Ozs7Ozs7OztBQzVCcUI7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG9FQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0VBQXNCOztBQUV4Qyx1QkFBdUIsb0VBQXNCOztBQUU3QywyQkFBMkIsb0VBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvRUFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLG9FQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLCtEQUFpQjtBQUNuQixrQkFBa0IsK0RBQWlCO0FBQ25DO0FBQ0Esd0JBQXdCLCtEQUFpQjtBQUN6QztBQUNBLG9CQUFvQiwrREFBaUI7QUFDckM7QUFDQSxvQkFBb0IsK0RBQWlCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsK0RBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isb0VBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLDJEQUFhO0FBQzlDO0FBQ0E7QUFDQSw2QkFBNkIsb0VBQXNCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG9FQUFzQjtBQUN4QztBQUNBOztBQUVBLG1DQUFtQyxvRUFBc0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLG9FQUFzQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvRUFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvRUFBc0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG9FQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvRUFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLG9FQUFzQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxvRUFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLG9FQUFzQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1Q0FBdUMsb0VBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsb0VBQXNCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxvRUFBc0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE2QixvRUFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsb0VBQXNCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9FQUFzQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvRUFBc0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxvRUFBc0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9FQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixvRUFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qix5REFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLG9FQUFzQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9FQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsb0VBQXNCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9FQUFzQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsb0VBQXNCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0Msb0VBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixvRUFBc0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLG9FQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsb0VBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxvRUFBc0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtEQUFpQjtBQUNuQixFQUFFLCtEQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWlCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBaUI7QUFDbkIsRUFBRSwrREFBaUI7QUFDbkIsRUFBRSwrREFBaUI7QUFDbkIsRUFBRSwrREFBaUI7O0FBRW5CLDhCQUE4QixvRUFBc0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix5REFBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsMkRBQWE7QUFDOUM7QUFDQTtBQUNBLDZCQUE2QixvRUFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV5Qjs7Ozs7OztVQ2pWekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051Qzs7QUFFdkMsb0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWVudGVzLy4vc3JjL1VJRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3B1ZW50ZXMvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wdWVudGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wdWVudGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHVlbnRlcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIHBhcmVudCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRleHRFbGVtZW50ID0gKHR5cGUsIHBhcmVudCwgdGV4dCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyA9ICh0eXBlLCBwYXJlbnQsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVJbWFnZSA9IChzb3VyY2UsIHBhcmVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgZWxlbWVudC5zcmMgPSBzb3VyY2U7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVUZXh0RWxlbWVudCxcbiAgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyxcbiAgY3JlYXRlSW1hZ2UsXG59O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlRWxlbWVudCxcbiAgY3JlYXRlVGV4dEVsZW1lbnQsXG4gIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MsXG4gIGNyZWF0ZUltYWdlLFxufSBmcm9tIFwiLi9VSUZ1bmN0aW9uc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBjcmVhdGVXZWJzaXRlID0gKCkgPT4ge1xuICBjcmVhdGVOYXYoKTtcbiAgY3JlYXRlSW5mb1JvdygpO1xuICBjcmVhdGVHdWF0ZW1hbGFSb3coKTtcbiAgY3JlYXRlRWdnTXlZYXJkUm93KCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xufTtcblxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImhlYWRlci1jb250YWluZXJcIlxuICApO1xuICBoZWFkZXJDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICBcInVybCguLi9kaXN0L2ltYWdlcy9zYW50YS1sdWNpYS1sYW5kc2NhcGUuanBnKVwiO1xuICBjb25zdCBvdmVybGF5ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiLCBoZWFkZXJDb250YWluZXIsIFwib3ZlcmxheVwiKTtcblxuICBjb25zdCBuYXZDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIG92ZXJsYXksIFwibmF2LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIG5hdkNvbnRhaW5lcixcbiAgICBcImhlYWRpbmctY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBpbmZvQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIG5hdkNvbnRhaW5lcixcbiAgICBcImluZm8tY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBjYWxsVG9BY3Rpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgbmF2Q29udGFpbmVyLFxuICAgIFwiYWN0aW9uLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJoMlwiLCBoZWFkaW5nQ29udGFpbmVyLCBcIlBVRU5URVNcIik7XG4gIGNvbnN0IGFib3V0VXMgPSBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJBYm91dCBVc1wiKTtcbiAgYWJvdXRVcy5vbmNsaWNrID0gKCkgPT4gc2Nyb2xsKDAsIDY1MCk7XG4gIGNvbnN0IGd1YXRlbWFsYVRyaXAgPSBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJHdWF0ZW1hbGEgVHJpcFwiKTtcbiAgZ3VhdGVtYWxhVHJpcC5vbmNsaWNrID0gKCkgPT4gc2Nyb2xsKDAsIDEwNTApO1xuICBjb25zdCBlZ2dNeVlhcmQgPSBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJFZ2cgTXkgWWFyZFwiKTtcbiAgZWdnTXlZYXJkLm9uY2xpY2sgPSAoKSA9PiBzY3JvbGwoMCwgMTYwMCk7XG4gIGNvbnN0IG9yZGVyRWdncyA9IGNyZWF0ZVRleHRFbGVtZW50KFwiYVwiLCBpbmZvQ29udGFpbmVyLCBcIk9yZGVyIEVnZ3NcIik7XG4gIG9yZGVyRWdncy5ocmVmID1cbiAgICBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvMW1qekhiSmFWVktwSmpFckJyLV83TXRLeHAxaFlDWjF2TFhEeFRCOTZSaUEvZWRpdFwiO1xuICBvcmRlckVnZ3MuY2xhc3NMaXN0LmFkZChcImdldC1pbnZvbHZlZC1saW5rXCIpO1xuXG4gIGNvbnN0IGdldEludm9sdmVkID0gY3JlYXRlVGV4dEVsZW1lbnQoXCJhXCIsIGluZm9Db250YWluZXIsIFwiSm9pbiBVcyFcIik7XG4gIGdldEludm9sdmVkLmNsYXNzTGlzdC5hZGQoXCJnZXQtaW52b2x2ZWQtbGlua1wiKTtcbiAgZ2V0SW52b2x2ZWQuaHJlZiA9XG4gICAgXCJodHRwczovL3d3dy5yZW1pbmQuY29tL2NsYXNzZXMvLXB1ZW50ZXMvbWVzc2FnZXMvc3RyZWFtLzc5NjZiMWVmLWVmMWItNGJlZC04ZjZmLTVlNGJhYjlkNDcyZFwiO1xuXG4gIGNvbnN0IGluc3RhZ3JhbUhyZWYgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYVwiLFxuICAgIGNhbGxUb0FjdGlvbkNvbnRhaW5lcixcbiAgICBcImluc3RhZ3JhbS1saW5rLWNvbnRhaW5lclwiXG4gICk7XG4gIGluc3RhZ3JhbUhyZWYuaHJlZiA9IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS96Y2hzX3B1ZW50ZXMvXCI7XG4gIGNvbnN0IGluc3RhZ3JhbUxvZ28gPSBjcmVhdGVJbWFnZShcbiAgICBcIi4uL2Rpc3QvaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIixcbiAgICBpbnN0YWdyYW1IcmVmLFxuICAgIFwiaW5zdGFncmFtLWxpbmtcIlxuICApO1xuXG4gIGNvbnN0IGNhbGxUb0FjdGlvbkJ1dHRvbkhyZWYgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBjYWxsVG9BY3Rpb25Db250YWluZXIpO1xuICBjYWxsVG9BY3Rpb25CdXR0b25IcmVmLmhyZWYgPVxuICAgIFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xTW9TYXBTUGVVQXJVT1JyWGVISVdCTldVdjh5U3c5M1YyMWJVc1dtclpMdy9lZGl0P3VzcD1zaGFyaW5nXCI7XG4gIGNvbnN0IGNhbGxUb0FjdGlvbkJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJidXR0b25cIixcbiAgICBjYWxsVG9BY3Rpb25CdXR0b25IcmVmLFxuICAgIFwiY2FsbC10by1hY3Rpb24tYnV0dG9uXCJcbiAgKTtcbiAgY2FsbFRvQWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiVmlldyBTY2hlZHVsZVwiO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiaDFcIiwgb3ZlcmxheSwgXCJwYWdlLWhlYWRpbmdcIik7XG4gIGhlYWRpbmcuaW5uZXJUZXh0ID1cbiAgICBcIkNvbm5lY3Rpbmcgc3R1ZGVudHMgdG8gc3VwcG9ydCBlZHVjYXRpb24gYWNyb3NzIHRoZSBnbG9iZSFcIjtcblxuICBjb25zdCBpbmZvcm1hdGlvbkFib3V0VGhlSW1hZ2UgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwicFwiLFxuICAgIG92ZXJsYXksXG4gICAgXCJpbmZvcm1hdGlvbi1hYm91dC1oZWFkZXItaW1nXCJcbiAgKTtcbiAgaW5mb3JtYXRpb25BYm91dFRoZUltYWdlLmlubmVyVGV4dCA9IFwiU2FudGEgTHVjw61hLCBHdWF0ZW1hbGFcIjtcbn07XG5cbmNvbnN0IGNyZWF0ZUluZm9Sb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGluZm9TZWN0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJpbmZvLXNlY3Rpb24tY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgaW5mb0hlYWRpbmcgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDFcIixcbiAgICBpbmZvU2VjdGlvbkNvbnRhaW5lcixcbiAgICBcImluZm8tc2VjdGlvbi1oZWFkZXJcIlxuICApO1xuICBpbmZvSGVhZGluZy5pbm5lclRleHQgPSBcIkFib3V0IE91ciBDbHViXCI7XG4gIGNvbnN0IGluZm9TdWJoZWFkZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgaW5mb1NlY3Rpb25Db250YWluZXIsXG4gICAgXCJpbmZvLXN1YmhlYWRpbmctY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBwTGVmdCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJwXCIsXG4gICAgaW5mb1N1YmhlYWRlckNvbnRhaW5lcixcbiAgICBcImluZm8tc2VjdGlvbi1wLWxlZnRcIlxuICApO1xuICBjb25zdCBwUmlnaHQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwicFwiLFxuICAgIGluZm9TdWJoZWFkZXJDb250YWluZXIsXG4gICAgXCJpbmZvLXNlY3Rpb24tcC1yaWdodFwiXG4gICk7XG5cbiAgcExlZnQuaW5uZXJUZXh0ID1cbiAgICAnUFVFTlRFUywgd2hpY2ggc3RhbmRzIGZvciBQcm9tb3RpbmcgVW5pdHkgYW5kIEVtcG93ZXJtZW50IE5vYmx5IFRocm91Z2ggRWR1Y2F0aW9uIGFuZCBTZXJ2aWNlLCBhaW1zIHRvIFwiQnVpbGQgYnJpZGdlc1wiIGJldHdlZW4gb3VyIGNvbW11bml0eSBoZXJlIGluIFppb25zdmlsbGUgYW5kIHRob3NlIGluIExhdGluIEFtZXJpY2EgdGhyb3VnaCBhIGhhbmRzLW9uIGFwcHJvYWNoLic7XG4gIHBSaWdodC5pbm5lclRleHQgPVxuICAgIFwiUFVFTlRFUywgZm9ybWVybHkgT3BlcmF0aW9uOiBIb25kdXJhcywgYmVnYW4gaW4gRmVicnVhcnkgMjAyMyBpbiBhbiBhdHRlbXB0IHRvIHByb3ZpZGUgZXh0cmEgc3VwcG9ydCBmb3IgY29tbXVuaXRpZXMgaW4gSG9uZHVyYXMuIEhvd2V2ZXIsIGFzIHRoZSAyMDIyLTIwMjMgc2Nob29sIHllYXIgY2FtZSB0byBhIGNsb3NlLCBhIG5ldyBsZWFmIHdhcyB0dXJuZWQgZm9yIHRoZSBjbHViIGFuZCBpdCBleHBhbmRlZCB0byBpbmNsdWRlIGFsbCBvZiBMYXRpbiBBbWVyaWNhLlwiO1xufTtcblxuY29uc3QgY3JlYXRlR3VhdGVtYWxhUm93ID0gKCkgPT4ge1xuICAvKiBUaGlzIHBhcnQgaXMgb25seSBmb3Igd2hlbiB0aGUgc2NyZWVuIHdpZHRoIGdldHMgdGhpblxuICBOb3QgZm9yIHRoZSBwYXJ0IHdoZW4gaXQgaXMgd2lkZSAqL1xuXG4gIGNvbnN0IHRoaW5TY3JlZW5HdWF0ZW1hbGFDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcInRoaW4tZ3VhdGVtYWxhLWNvbnRhaW5lclwiXG4gICk7XG4gIGNvbnN0IHRoaW5TY3JlZW5HdWF0ZW1hbGFPdmVybGF5ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIHRoaW5TY3JlZW5HdWF0ZW1hbGFDb250YWluZXIsXG4gICAgXCJ0aGluLWd1YXRlbWFsYS1vdmVybGF5XCJcbiAgKTtcblxuICBjb25zdCB0aGluU2NyZWVuR3VhdGVtYWxhSGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImgxXCIsXG4gICAgdGhpblNjcmVlbkd1YXRlbWFsYU92ZXJsYXksXG4gICAgXCJ0aGluLWd1YXRlbWFsYS1oZWFkZXJcIlxuICApO1xuXG4gIHRoaW5TY3JlZW5HdWF0ZW1hbGFIZWFkZXIuaW5uZXJUZXh0ID0gXCJDb21lIHdpdGggdXMgdG8gR3VhdGVtYWxhIVwiO1xuXG4gIGNvbnN0IHRoaW5TY3JlZW5HdWF0ZW1hbGFTdWJoZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDRcIixcbiAgICB0aGluU2NyZWVuR3VhdGVtYWxhT3ZlcmxheSxcbiAgICBcInRoaW4tZ3VhdGVtYWxhLXN1YmhlYWRlclwiXG4gICk7XG4gIHRoaW5TY3JlZW5HdWF0ZW1hbGFTdWJoZWFkZXIuaW5uZXJUZXh0ID1cbiAgICBcIlRoaXMgc3VtbWVyIChKdW5lIDExLTE5IDIwMjQpIHdlIHdpbGwgam91cm5leSB0byBUZWNww6FuLCBHdWF0ZW1hbGEgd2hlcmUgY2x1YiBtZW1iZXJzIHdpbGwgcGVyZm9ybSBoYW5kcyBvbiBhY3Rpdml0aWVzIHRvIGhlbHAgZWR1Y2F0ZSBhbmQgaW1wcm92ZSBjb25kaXRpb25zIGF0IGEgc2Nob29sLiBXaGV0aGVyIG9yIG5vdCB5b3Ugb3IgeW91ciBjaGlsZCBoYXMgYW4gaW50ZXJlc3QgaW4gZ29pbmcsIGZlZWwgZnJlZSB0byB0YWtlIGEgbG9vayBhdCBleHRyYSBpbmZvcm1hdGlvbiBhcyB0aGlzIHRyaXAgaXMgb3VyIG1haW4gZm9jdXMgYW5kIHdoZXJlIG1vc3QgZnV0dXJlIHByb2NlZWRzIHdpbGwgYmUgaGVhZGluZy5cIjtcblxuICBjb25zdCB0aGluU2NyZWVuR3VhdGVtYWxhQ2FsbFRvQWN0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImFcIixcbiAgICB0aGluU2NyZWVuR3VhdGVtYWxhT3ZlcmxheSxcbiAgICBcImd1YXRlbWFsYS1idXR0b24tY29udGFpbmVyXCJcbiAgKTtcbiAgdGhpblNjcmVlbkd1YXRlbWFsYUNhbGxUb0FjdGlvbkNvbnRhaW5lci5ocmVmID1cbiAgICBcImh0dHBzOi8vZ2xvYmFsYnJpZ2FkZXMtNjA0NDU5MS5ocy1zaXRlcy5jb20vc3F1YWRzYWJyb2FkLXppb25zdmlsbGVocy1qdW5lMjAyNFwiO1xuICBjb25zdCB0aGluU2NyZWVuR3VhdGVtYWxhQ2FsbFRvQWN0aW9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImJ1dHRvblwiLFxuICAgIHRoaW5TY3JlZW5HdWF0ZW1hbGFDYWxsVG9BY3Rpb25Db250YWluZXIsXG4gICAgXCJ0aGluLWd1YXRlbWFsYS1idXR0b25cIlxuICApO1xuICB0aGluU2NyZWVuR3VhdGVtYWxhQ2FsbFRvQWN0aW9uLmlubmVyVGV4dCA9IFwiTW9yZSBJbmZvcm1hdGlvbiArIFJlZ2lzdHJhdGlvblwiO1xuXG4gIC8qIFdpZGUgU2NyZWVuIFBhcnQhXG4gIE5vdCBmb3IgdGhpbiBzY3JlZW4gKi9cblxuICBjb25zdCBndWF0ZW1hbGFDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgY29udGVudCxcbiAgICBcImd1YXRlbWFsYS1jb250YWluZXJcIlxuICApO1xuICBjb25zdCBndWF0ZW1hbGFDb250YWluZXJMZWZ0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lcixcbiAgICBcImd1YXRlbWFsYS1jb250YWluZXItbGVmdFwiXG4gICk7XG4gIGNvbnN0IGd1YXRlbWFsYUNvbnRhaW5lclJpZ2h0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lcixcbiAgICBcImd1YXRlbWFsYS1jb250YWluZXItcmlnaHRcIlxuICApO1xuICBjb25zdCBndWF0ZW1hbGFIZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDFcIixcbiAgICBndWF0ZW1hbGFDb250YWluZXJMZWZ0LFxuICAgIFwiZ3VhdGVtYWxhLWhlYWRlclwiXG4gICk7XG4gIGd1YXRlbWFsYUhlYWRlci5pbm5lclRleHQgPSBcIkNvbWUgd2l0aCB1cyB0byBHdWF0ZW1hbGEhXCI7XG4gIGNvbnN0IGd1YXRlbWFsYUNhbGxUb0FjdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJhXCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyTGVmdCxcbiAgICBcImd1YXRlbWFsYS1idXR0b24tY29udGFpbmVyXCJcbiAgKTtcbiAgZ3VhdGVtYWxhQ2FsbFRvQWN0aW9uQ29udGFpbmVyLmhyZWYgPVxuICAgIFwiaHR0cHM6Ly9nbG9iYWxicmlnYWRlcy02MDQ0NTkxLmhzLXNpdGVzLmNvbS9zcXVhZHNhYnJvYWQtemlvbnN2aWxsZWhzLWp1bmUyMDI0XCI7XG4gIGNvbnN0IGd1YXRlbWFsYUNhbGxUb0FjdGlvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJidXR0b25cIixcbiAgICBndWF0ZW1hbGFDYWxsVG9BY3Rpb25Db250YWluZXIsXG4gICAgXCJndWF0ZW1hbGEtYnV0dG9uXCJcbiAgKTtcbiAgZ3VhdGVtYWxhQ2FsbFRvQWN0aW9uLmlubmVyVGV4dCA9IFwiTW9yZSBJbmZvcm1hdGlvbiArIFJlZ2lzdHJhdGlvblwiO1xuXG4gIGNvbnN0IGd1YXRlbWFsYVN1YmhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJoNFwiLFxuICAgIGd1YXRlbWFsYUNvbnRhaW5lckxlZnQsXG4gICAgXCJndWF0ZW1hbGEtc3ViaGVhZGVyXCJcbiAgKTtcbiAgZ3VhdGVtYWxhU3ViaGVhZGVyLmlubmVyVGV4dCA9XG4gICAgXCJUaGlzIHN1bW1lciAoSnVuZSAxMS0xOSAyMDI0KSB3ZSB3aWxsIGpvdXJuZXkgdG8gVGVjcMOhbiwgR3VhdGVtYWxhIHdoZXJlIGNsdWIgbWVtYmVycyB3aWxsIHBlcmZvcm0gaGFuZHMgb24gYWN0aXZpdGllcyB0byBoZWxwIGVkdWNhdGUgYW5kIGltcHJvdmUgY29uZGl0aW9ucyBhdCBhIHNjaG9vbC4gV2hldGhlciBvciBub3QgeW91IG9yIHlvdXIgY2hpbGQgaGFzIGFuIGludGVyZXN0IGluIGdvaW5nLCBmZWVsIGZyZWUgdG8gdGFrZSBhIGxvb2sgYXQgZXh0cmEgaW5mb3JtYXRpb24gYXMgdGhpcyB0cmlwIGlzIG91ciBtYWluIGZvY3VzIGFuZCB3aGVyZSBtb3N0IGZ1dHVyZSBwcm9jZWVkcyB3aWxsIGJlIGhlYWRpbmcuXCI7XG5cbiAgY29uc3QgZ3VhdGVtYWxhSW1hZ2UgPSBjcmVhdGVJbWFnZShcbiAgICBcIi4uL2Rpc3QvaW1hZ2VzL2d1YXRlbWFsYS1sYW5kc2NhcGUuanBnXCIsXG4gICAgZ3VhdGVtYWxhQ29udGFpbmVyUmlnaHQsXG4gICAgXCJndWF0ZW1hbGEtaW1nXCJcbiAgKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUVnZ015WWFyZFJvdyA9ICgpID0+IHtcbiAgY29uc3QgZWdnTXlZYXJkQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJlZ2ctbXkteWFyZC1jb250YWluZXJcIlxuICApO1xuICBlZ2dNeVlhcmRDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoLi4vZGlzdC9pbWFnZXMvZWFzdGVyLmpwZylcIjtcbiAgY29uc3Qgb3ZlcmxheSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBlZ2dNeVlhcmRDb250YWluZXIsXG4gICAgXCJlZ2ctbXkteWFyZC1vdmVybGF5XCJcbiAgKTtcblxuICBjb25zdCBlZ2dNeVlhcmRIZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiaDFcIixcbiAgICBvdmVybGF5LFxuICAgIFwiZWdnLW15LXlhcmQtaGVhZGVyXCJcbiAgKTtcbiAgY29uc3QgZWdnTXlZYXJkU3ViaGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImgzXCIsXG4gICAgb3ZlcmxheSxcbiAgICBcImVnZy1teS15YXJkLXN1YmhlYWRlclwiXG4gICk7XG4gIGVnZ015WWFyZFN1YmhlYWRlci5pbm5lclRleHQgPVxuICAgIFwiSGVscCBzdXBwb3J0IG91ciBtaXNzaW9uIGJ5IHBhcnRpY2lwYXRpbmcgaW4gb3VyIGFubnVhbCBlZ2cgbXkgeWFyZCBFYXN0ZXIgZXZlbnQuIEZvciB0aGlzIGV2ZW50LCB3ZSB3aWxsIGhpZGUgZWdncyBmb3IgeW91IGluIHlvdXIgZnJvbnQgb3IgYmFja3lhcmQgZm9yIEVhc3Rlci4gSWYgeW91IGFyZSBpbnRlcmVzdGVkIG9yIHNpbXBseSB3YW50IHRvIGhlbHAsIHlvdSBtYXkgZWl0aGVyIGRlY2lkZSB0byBwdXJjaGFzZSBlZ2dzIGZvciB1cyB0byBoaWRlIGZvciB5b3Ugb3IgaGVscCB1cyBieSBkb25hdGluZyBhbnkgc3BhcmUgZWdncyBvciBjYW5keSB5b3UgbWF5IGhhdmUsIHRoYW5rIHlvdSFcIjtcbiAgZWdnTXlZYXJkSGVhZGVyLmlubmVyVGV4dCA9IFwiRWdnIE15IFlhcmQhXCI7XG5cbiAgY29uc3QgZWdnTXlZYXJkQ2FsbFRvQWN0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImFcIixcbiAgICBvdmVybGF5LFxuICAgIFwiZWdnLW15LXlhcmQtYnV0dG9uLWNvbnRhaW5lclwiXG4gICk7XG4gIGVnZ015WWFyZENhbGxUb0FjdGlvbkNvbnRhaW5lci5ocmVmID1cbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXFRa1FUNTNnNzFpdThuQVJVdkN0VU1wbjBzZXZ5ZmdDL3ZpZXc/dXNwPXNoYXJpbmdcIjtcblxuICBjb25zdCBlZ2dNeVlhcmRDYWxsVG9BY3Rpb24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgZWdnTXlZYXJkQ2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwiZWdnLW15LXlhcmQtYnV0dG9uXCJcbiAgKTtcbiAgZWdnTXlZYXJkQ2FsbFRvQWN0aW9uLmlubmVyVGV4dCA9IFwiTGVhcm4gTW9yZSFcIjtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJmb290ZXItY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBjbHViTmFtZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgXCJkaXZcIixcbiAgICBmb290ZXJDb250YWluZXIsXG4gICAgXCJmb290ZXItY2x1Yi1uYW1lLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgY2x1YkluZm9Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZm9vdGVyQ29udGFpbmVyLFxuICAgIFwiZm9vdGVyLWNsdWItaW5mby1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IGNsdWJDYWxsVG9BY3Rpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgZm9vdGVyQ29udGFpbmVyLFxuICAgIFwiZm9vdGVyLWNsdWItY2FsbC10by1hY3Rpb24tY29udGFpbmVyXCJcbiAgKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJoMlwiLCBjbHViTmFtZUNvbnRhaW5lciwgXCJQVUVOVEVTXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcbiAgICBcInBcIixcbiAgICBjbHViTmFtZUNvbnRhaW5lcixcbiAgICBcIlppb25zdmlsbGUgQ29tbXVuaXR5IEhpZ2ggU2Nob29sIENsdWJcIlxuICApO1xuICBjcmVhdGVUZXh0RWxlbWVudChcbiAgICBcInBcIixcbiAgICBjbHViTmFtZUNvbnRhaW5lcixcbiAgICBcIkVtYWlsOiBvcGVyYXRpb25ob25kdXJhczAwQGdtYWlsLmNvbVwiXG4gICk7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBjbHViTmFtZUNvbnRhaW5lciwgXCJJbnN0YWdyYW06IEBvcGVyYXRpb25faG9uZHVyYXNcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwiaDJcIiwgY2x1YkluZm9Db250YWluZXIsIFwiR2V0IEludm9sdmVkIVwiKTtcbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJwXCIsIGNsdWJJbmZvQ29udGFpbmVyLCBcIkVnZyBNeSBZYXJkXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgY2x1YkluZm9Db250YWluZXIsIFwiR3VhdGVtYWxhXCIpO1xuXG4gIGNvbnN0IGZvb3Rlckluc3RhZ3JhbUhyZWYgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYVwiLFxuICAgIGNsdWJDYWxsVG9BY3Rpb25Db250YWluZXIsXG4gICAgXCJmb290ZXItaW5zdGFncmFtLWxpbmstY29udGFpbmVyXCJcbiAgKTtcbiAgZm9vdGVySW5zdGFncmFtSHJlZi5ocmVmID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3pjaHNfcHVlbnRlcy9cIjtcbiAgY29uc3QgZm9vdGVySW5zdGFncmFtTG9nbyA9IGNyZWF0ZUltYWdlKFxuICAgIFwiLi4vZGlzdC9pbWFnZXMvZm9vdGVyLWluc3RhZ3JhbS5zdmdcIixcbiAgICBmb290ZXJJbnN0YWdyYW1IcmVmLFxuICAgIFwiZm9vdGVyLWluc3RhZ3JhbS1saW5rXCJcbiAgKTtcblxuICBjb25zdCBjYWxsVG9BY3Rpb25CdXR0b25IcmVmID0gY3JlYXRlRWxlbWVudChcImFcIiwgY2x1YkNhbGxUb0FjdGlvbkNvbnRhaW5lcik7XG4gIGNhbGxUb0FjdGlvbkJ1dHRvbkhyZWYuaHJlZiA9XG4gICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFNb1NhcFNQZVVBclVPUnJYZUhJV0JOV1V2OHlTdzkzVjIxYlVzV21yWkx3L2VkaXQ/dXNwPXNoYXJpbmdcIjtcbiAgY29uc3QgY2FsbFRvQWN0aW9uQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImJ1dHRvblwiLFxuICAgIGNhbGxUb0FjdGlvbkJ1dHRvbkhyZWYsXG4gICAgXCJmb290ZXItY2FsbC10by1hY3Rpb24tYnV0dG9uXCJcbiAgKTtcbiAgY2FsbFRvQWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiVmlldyBTY2hlZHVsZVwiO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlV2Vic2l0ZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVXZWJzaXRlIH0gZnJvbSBcIi4vaG9tZVwiO1xuXG5jcmVhdGVXZWJzaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=