import {
  createElement,
  createTextElement,
  createElementWithClass,
  createImage,
} from "./UIFunctions";

const content = document.getElementById("content");

const createWebsite = () => {
  createNav();
  createInfoRow();
  createGuatemalaRow();
};

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
  createTextElement("p", infoContainer, "Donate");
  createTextElement("p", infoContainer, "Fundraisers");
  createTextElement("p", infoContainer, "Get Involved");
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

  const heading = createElementWithClass("h1", overlay, "page-heading");
  heading.innerText =
    "Connecting students to support education across the globe!";

  const informationAboutTheImage = createElementWithClass(
    "p",
    overlay,
    "information-about-header-img"
  );
  informationAboutTheImage.innerText = "Santa Lucía, Guatemala";
};

const createInfoRow = () => {
  const infoContainer = createElementWithClass(
    "div",
    content,
    "info-section-container"
  );
  const pLeft = createElementWithClass(
    "p",
    infoContainer,
    "info-section-p-left"
  );
  const pRight = createElementWithClass(
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
  const guatemalaContainer = createElementWithClass(
    "div",
    content,
    "guatemala-container"
  );
  const guatemalaContainerLeft = createElementWithClass(
    "div",
    guatemalaContainer,
    "guatemala-container-left"
  );
  const guatemalaContainerRight = createElementWithClass(
    "div",
    guatemalaContainer,
    "guatemala-container-right"
  );
  const guatemalaHeader = createElementWithClass(
    "h1",
    guatemalaContainerLeft,
    "guatemala-header"
  );
  guatemalaHeader.innerText = "Come with us to Guatemala!";
  const guatemalaCallToAction = createElementWithClass(
    "button",
    guatemalaContainerLeft,
    "guatemala-button"
  );
  guatemalaCallToAction.innerText = "Call to Action";
  const guatemalaImage = createImage(
    "../dist/images/guatemala-landscape.jpg",
    guatemalaContainerRight,
    "guatemala-img"
  );
};

export { createWebsite };
