import {
  createElement,
  createTextElement,
  createElementWithClass,
  createImage,
} from "./UIFunctions";

const content = document.getElementById("content");

const createNav = () => {
  const headerContainer = createElementWithClass(
    "div",
    content,
    "header-container"
  );
  headerContainer.style.backgroundImage =
    "url(../dist/images/santa-lucia-landscape.jpg)";

  const overlay = createElementWithClass("div", headerContainer, "overlay");

  const navContainer = createElementWithClass("div", overlay, "nav-container");

  const headingContainer = createElementWithClass(
    "div",
    navContainer,
    "heading-container"
  );

  const infoContainer = createElementWithClass(
    "div",
    navContainer,
    "info-container"
  );

  const callToActionContainer = createElementWithClass(
    "div",
    navContainer,
    "action-container"
  );

  createTextElement("h2", headingContainer, "PUENTES");
  createTextElement("p", infoContainer, "About Us");
  createTextElement("p", infoContainer, "What we do");
  createTextElement("p", infoContainer, "Fundraisers");
  createImage(
    "../dist/images/instagram.svg",
    callToActionContainer,
    "instagram-link"
  );
  const callToActionButton = createElementWithClass(
    "button",
    callToActionContainer,
    "call-to-action-button"
  );
  callToActionButton.innerText = "Call to Action";

  const heading = createElement("h1", overlay);
  heading.innerText =
    "Striving to uplift and support communities in Latin America";
};

export { createNav };
