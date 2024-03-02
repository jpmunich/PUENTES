(() => {
  "use strict";
  const e = (e, t) => {
      const a = document.createElement(e);
      return t.appendChild(a), a;
    },
    t = (e, t, a) => {
      const n = document.createElement(e);
      return t.appendChild(n), (n.innerText = a), n;
    },
    a = (e, t, a) => {
      const n = document.createElement(e);
      return n.classList.add(a), t.appendChild(n), n;
    },
    n = (e, t, a) => {
      const n = document.createElement("img");
      return n.classList.add(a), (n.src = e), t.appendChild(n), n;
    },
    o = document.getElementById("content");
  (() => {
    const i = a("div", o, "header-container");
    i.style.backgroundImage = "url(./images/santa-lucia-landscape.jpg)";
    const r = a("div", i, "overlay"),
      s = a("div", r, "nav-container"),
      c = a("div", s, "heading-container"),
      d = a("div", s, "info-container"),
      l = a("div", s, "action-container");
    t("h2", c, "PUENTES"),
      (t("p", d, "About Us").onclick = () => scroll(0, 650)),
      (t("p", d, "Guatemala Trip").onclick = () => scroll(0, 1050)),
      (t("p", d, "Egg My Yard").onclick = () => scroll(0, 1600));
    const u = t("a", d, "Order Eggs");
    (u.href =
      "https://docs.google.com/forms/d/1mjzHbJaVVKpJjErBr-_7MtKxp1hYCZ1vLXDxTB96RiA/edit"),
      u.classList.add("get-involved-link"),
      u.classList.add("order-eggs-button");
    const m = t("a", d, "Join Us!");
    m.classList.add("get-involved-link"),
      m.classList.add("get-involved-link-button"),
      (m.href =
        "https://www.remind.com/classes/-puentes/messages/stream/7966b1ef-ef1b-4bed-8f6f-5e4bab9d472d");
    const g = a("a", l, "instagram-link-container");
    (g.href = "https://www.instagram.com/zchs_puentes/"),
      n("./images/instagram.svg", g, "instagram-link");
    const h = e("a", l);
    (h.href =
      "https://docs.google.com/document/d/1MoSapSPeUArUORrXeHIWBNWUv8ySw93V21bUsWmrZLw/edit?usp=sharing"),
      (a("button", h, "call-to-action-button").innerText = "View Schedule"),
      (a("h1", r, "page-heading").innerText =
        "Connecting students to support education across the globe!"),
      (a("p", r, "information-about-header-img").innerText =
        "Santa Lucía, Guatemala");
  })(),
    (() => {
      const e = a("div", o, "info-section-container");
      a("h1", e, "info-section-header").innerText = "About Our Club";
      const t = a("div", e, "info-subheading-container"),
        n = a("p", t, "info-section-p-left"),
        i = a("p", t, "info-section-p-right");
      (n.innerText =
        'PUENTES, which stands for Promoting Unity and Empowerment Nobly Through Education and Service, aims to "Build bridges" between our community here in Zionsville and those in Latin America through a hands-on approach.'),
        (i.innerText =
          "PUENTES, formerly Operation: Honduras, began in February 2023 in an attempt to provide extra support for communities in Honduras. However, as the 2022-2023 school year came to a close, a new leaf was turned for the club and it expanded to include all of Latin America.");
    })(),
    (() => {
      const e = a("div", o, "thin-guatemala-container"),
        t = a("div", e, "thin-guatemala-overlay");
      (a("h1", t, "thin-guatemala-header").innerText =
        "Come with us to Guatemala!"),
        (a("h4", t, "thin-guatemala-subheader").innerText =
          "This summer (June 11-19 2024) we will journey to Tecpán, Guatemala where club members will perform hands on activities to help educate and improve conditions at a school. Whether or not you or your child has an interest in going, feel free to take a look at extra information as this trip is our main focus and where most future proceeds will be heading.");
      const i = a("a", t, "guatemala-button-container");
      (i.href =
        "https://globalbrigades-6044591.hs-sites.com/squadsabroad-zionsvillehs-june2024"),
        (a("button", i, "thin-guatemala-button").innerText =
          "More Information + Registration");
      const r = a("div", o, "guatemala-container"),
        s = a("div", r, "guatemala-container-left"),
        c = a("div", r, "guatemala-container-right");
      a("h1", s, "guatemala-header").innerText = "Come with us to Guatemala!";
      const d = a("a", s, "guatemala-button-container");
      (d.href =
        "https://globalbrigades-6044591.hs-sites.com/squadsabroad-zionsvillehs-june2024"),
        (a("button", d, "guatemala-button").innerText =
          "More Information + Registration"),
        (a("h4", s, "guatemala-subheader").innerText =
          "This summer (June 11-19 2024) we will journey to Tecpán, Guatemala where club members will perform hands on activities to help educate and improve conditions at a school. Whether or not you or your child has an interest in going, feel free to take a look at extra information as this trip is our main focus and where most future proceeds will be heading."),
        n("./images/guatemala-landscape.jpg", c, "guatemala-img");
    })(),
    (() => {
      const e = a("div", o, "egg-my-yard-container");
      e.style.backgroundImage = "url(./images/easter.jpg)";
      const t = a("div", e, "egg-my-yard-overlay"),
        n = a("h1", t, "egg-my-yard-header");
      (a("h3", t, "egg-my-yard-subheader").innerText =
        "Help support our mission by participating in our annual egg my yard Easter event. For this event, we will hide eggs for you in your front or backyard for Easter. If you are interested or simply want to help, you may either decide to purchase eggs for us to hide for you or help us by donating any spare eggs or candy you may have, thank you!"),
        (n.innerText = "Egg My Yard!");
      const i = a("a", t, "egg-my-yard-button-container");
      (i.href =
        "https://drive.google.com/file/d/1qQkQT53g71iu8nARUvCtUMpn0sevyfgC/view?usp=sharing"),
        (a("button", i, "egg-my-yard-button").innerText = "Learn More!");
    })(),
    (() => {
      const i = a("div", o, "footer-container"),
        r = a("div", i, "footer-club-name-container"),
        s = a("div", i, "footer-club-info-container"),
        c = a("div", i, "footer-club-call-to-action-container");
      t("h2", r, "PUENTES"),
        t("p", r, "Zionsville Community High School Club"),
        t("p", r, "Email: zchspuentes@gmail.com"),
        t("p", r, "Instagram: @zchs_puentes"),
        t("h2", s, "Get Involved!"),
        t("p", s, "Egg My Yard"),
        t("p", s, "Guatemala");
      const d = a("a", c, "footer-instagram-link-container");
      (d.href = "https://www.instagram.com/zchs_puentes/"),
        n("./images/footer-instagram.svg", d, "footer-instagram-link");
      const l = e("a", c);
      (l.href =
        "https://docs.google.com/document/d/1MoSapSPeUArUORrXeHIWBNWUv8ySw93V21bUsWmrZLw/edit?usp=sharing"),
        (a("button", l, "footer-call-to-action-button").innerText =
          "View Schedule");
    })();
})();
