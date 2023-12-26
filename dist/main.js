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
/* harmony export */   createNav: () => (/* binding */ createNav)
/* harmony export */ });
/* harmony import */ var _UIFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIFunctions */ "./src/UIFunctions.js");


const content = document.getElementById("content");

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
  (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createTextElement)("p", infoContainer, "Fundraisers");
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

  const heading = (0,_UIFunctions__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", overlay);
  heading.innerText =
    "Striving to uplift and support communities in Latin America";
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


(0,_home__WEBPACK_IMPORTED_MODULE_0__.createNav)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPRTs7Ozs7Ozs7Ozs7Ozs7OztBQzVCcUI7O0FBRXZCOztBQUVBO0FBQ0EsMEJBQTBCLG9FQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG9FQUFzQjs7QUFFeEMsdUJBQXVCLG9FQUFzQjs7QUFFN0MsMkJBQTJCLG9FQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isb0VBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxvRUFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwrREFBaUI7QUFDbkIsRUFBRSwrREFBaUI7QUFDbkIsRUFBRSwrREFBaUI7QUFDbkIsRUFBRSwrREFBaUI7QUFDbkIsRUFBRSx5REFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9FQUFzQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiwyREFBYTtBQUMvQjtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7O1VDN0RyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQyxnREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1ZW50ZXMvLi9zcmMvVUlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcHVlbnRlcy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHVlbnRlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHVlbnRlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3B1ZW50ZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wdWVudGVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlVGV4dEVsZW1lbnQgPSAodHlwZSwgcGFyZW50LCB0ZXh0KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVFbGVtZW50V2l0aENsYXNzID0gKHR5cGUsIHBhcmVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUltYWdlID0gKHNvdXJjZSwgcGFyZW50LCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBlbGVtZW50LnNyYyA9IHNvdXJjZTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNyZWF0ZVRleHRFbGVtZW50LFxuICBjcmVhdGVFbGVtZW50V2l0aENsYXNzLFxuICBjcmVhdGVJbWFnZSxcbn07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVUZXh0RWxlbWVudCxcbiAgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyxcbiAgY3JlYXRlSW1hZ2UsXG59IGZyb20gXCIuL1VJRnVuY3Rpb25zXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIGNvbnRlbnQsXG4gICAgXCJoZWFkZXItY29udGFpbmVyXCJcbiAgKTtcbiAgaGVhZGVyQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgXCJ1cmwoLi4vZGlzdC9pbWFnZXMvc2FudGEtbHVjaWEtbGFuZHNjYXBlLmpwZylcIjtcblxuICBjb25zdCBvdmVybGF5ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcImRpdlwiLCBoZWFkZXJDb250YWluZXIsIFwib3ZlcmxheVwiKTtcblxuICBjb25zdCBuYXZDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwiZGl2XCIsIG92ZXJsYXksIFwibmF2LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIG5hdkNvbnRhaW5lcixcbiAgICBcImhlYWRpbmctY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBpbmZvQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhcbiAgICBcImRpdlwiLFxuICAgIG5hdkNvbnRhaW5lcixcbiAgICBcImluZm8tY29udGFpbmVyXCJcbiAgKTtcblxuICBjb25zdCBjYWxsVG9BY3Rpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiZGl2XCIsXG4gICAgbmF2Q29udGFpbmVyLFxuICAgIFwiYWN0aW9uLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY3JlYXRlVGV4dEVsZW1lbnQoXCJoMlwiLCBoZWFkaW5nQ29udGFpbmVyLCBcIlBVRU5URVNcIik7XG4gIGNyZWF0ZVRleHRFbGVtZW50KFwicFwiLCBpbmZvQ29udGFpbmVyLCBcIkFib3V0IFVzXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJXaGF0IHdlIGRvXCIpO1xuICBjcmVhdGVUZXh0RWxlbWVudChcInBcIiwgaW5mb0NvbnRhaW5lciwgXCJGdW5kcmFpc2Vyc1wiKTtcbiAgY3JlYXRlSW1hZ2UoXG4gICAgXCIuLi9kaXN0L2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIsXG4gICAgY2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwiaW5zdGFncmFtLWxpbmtcIlxuICApO1xuICBjb25zdCBjYWxsVG9BY3Rpb25CdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgY2FsbFRvQWN0aW9uQ29udGFpbmVyLFxuICAgIFwiY2FsbC10by1hY3Rpb24tYnV0dG9uXCJcbiAgKTtcbiAgY2FsbFRvQWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiQ2FsbCB0byBBY3Rpb25cIjtcblxuICBjb25zdCBoZWFkaW5nID0gY3JlYXRlRWxlbWVudChcImgxXCIsIG92ZXJsYXkpO1xuICBoZWFkaW5nLmlubmVyVGV4dCA9XG4gICAgXCJTdHJpdmluZyB0byB1cGxpZnQgYW5kIHN1cHBvcnQgY29tbXVuaXRpZXMgaW4gTGF0aW4gQW1lcmljYVwiO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTmF2IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5hdiB9IGZyb20gXCIuL2hvbWVcIjtcblxuY3JlYXRlTmF2KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=