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
  createEggMyYardRow();
  createFooter();
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
  const aboutUs = createTextElement("p", infoContainer, "About Us");
  aboutUs.onclick = () => scroll(0, 650);
  const guatemalaTrip = createTextElement("p", infoContainer, "Guatemala Trip");
  guatemalaTrip.onclick = () => scroll(0, 1050);
  const eggMyYard = createTextElement("p", infoContainer, "Egg My Yard");
  eggMyYard.onclick = () => scroll(0, 1600);
  const fundraisers = createTextElement("p", infoContainer, "Fundraisers");
  fundraisers.addEventListener("mouseover", () => {
    const container = createElementWithClass(
      "div",
      fundraisers,
      "drop-down-container"
    );
    const fundraiser = createElementWithClass(
      "p",
      container,
      "drop-down-fundraiser"
    );
    fundraiser.innerText = "Egg My Yard";
  });
  fundraisers.addEventListener("mouseout", () => {
    document.getElementsByClassName("drop-down-container")[0].remove();
  });

  const getInvolved = createTextElement("a", infoContainer, "Get Involved");
  getInvolved.classList.add("get-involved-link");
  getInvolved.href =
    "https://www.remind.com/classes/-puentes/messages/stream/7966b1ef-ef1b-4bed-8f6f-5e4bab9d472d";

  const instagramHref = createElementWithClass(
    "a",
    callToActionContainer,
    "instagram-link-container"
  );
  instagramHref.href = "https://www.instagram.com/operation_honduras/";
  const instagramLogo = createImage(
    "../dist/images/instagram.svg",
    instagramHref,
    "instagram-link"
  );

  const callToActionButtonHref = createElement("a", callToActionContainer);
  const callToActionButton = createElementWithClass(
    "button",
    callToActionButtonHref,
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
  const infoSectionContainer = createElementWithClass(
    "div",
    content,
    "info-section-container"
  );
  const infoHeading = createElementWithClass(
    "h1",
    infoSectionContainer,
    "info-section-header"
  );
  infoHeading.innerText = "About Our Club";
  const infoSubheaderContainer = createElementWithClass(
    "div",
    infoSectionContainer,
    "info-subheading-container"
  );

  const pLeft = createElementWithClass(
    "p",
    infoSubheaderContainer,
    "info-section-p-left"
  );
  const pRight = createElementWithClass(
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

  const guatemalaSubheader = createElementWithClass(
    "h4",
    guatemalaContainerLeft,
    "guatemala-subheader"
  );
  guatemalaSubheader.innerText =
    "This summer (June 11-19 2024) we will journey to Tecpán, Guatemala where club members will perform hands on activities to help educate and improve conditions at a school. Whether or not you or your child has an interest in going, feel free to take a look at extra information as this trip is our main focus and where most future proceeds will be heading.";
  guatemalaCallToAction.innerText = "More Information + Registration";
  const guatemalaImage = createImage(
    "../dist/images/guatemala-landscape.jpg",
    guatemalaContainerRight,
    "guatemala-img"
  );
};

const createEggMyYardRow = () => {
  const eggMyYardContainer = createElementWithClass(
    "div",
    content,
    "egg-my-yard-container"
  );
  eggMyYardContainer.style.backgroundImage = "url(../dist/images/easter.jpg)";
  const overlay = createElementWithClass(
    "div",
    eggMyYardContainer,
    "egg-my-yard-overlay"
  );

  const eggMyYardHeader = createElementWithClass(
    "h1",
    overlay,
    "egg-my-yard-header"
  );
  const eggMyYardSubheader = createElementWithClass(
    "h3",
    overlay,
    "egg-my-yard-subheader"
  );
  eggMyYardSubheader.innerText =
    "Help support our mission by participating in our annual egg my yard Easter event. For this event, we will hide eggs for you in your front or backyard for Easter. If you are interested or simply want to help, you may either decide to purchase eggs for us to hide for you or help us by donating any spare eggs or candy you may have, thank you!";
  eggMyYardHeader.innerText = "Egg My Yard!";

  const eggMyYardCallToAction = createElementWithClass(
    "button",
    overlay,
    "egg-my-yard-button"
  );
  eggMyYardCallToAction.innerText = "Learn More!";
};

const createFooter = () => {
  const footerContainer = createElementWithClass(
    "div",
    content,
    "footer-container"
  );

  const clubNameContainer = createElementWithClass(
    "div",
    footerContainer,
    "footer-club-name-container"
  );

  const clubInfoContainer = createElementWithClass(
    "div",
    footerContainer,
    "footer-club-info-container"
  );

  const clubCallToActionContainer = createElementWithClass(
    "div",
    footerContainer,
    "footer-club-call-to-action-container"
  );
  createTextElement("h2", clubNameContainer, "PUENTES");
  createTextElement(
    "p",
    clubNameContainer,
    "Zionsville Community High School Club"
  );
  createTextElement(
    "p",
    clubNameContainer,
    "Email: operationhonduras00@gmail.com"
  );
  createTextElement("p", clubNameContainer, "Instagram: @operation_honduras");
  createTextElement("h2", clubInfoContainer, "Get Involved!");
  createTextElement("p", clubInfoContainer, "Egg My Yard");
  createTextElement("p", clubInfoContainer, "Guatemala");

  createImage(
    "../dist/images/footer-instagram.svg",
    clubCallToActionContainer,
    "footer-instagram-link"
  );
  const callToActionButton = createElementWithClass(
    "button",
    clubCallToActionContainer,
    "footer-call-to-action-button"
  );
  callToActionButton.innerText = "Call to Action";
};

export { createWebsite };
