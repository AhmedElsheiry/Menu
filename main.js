let alllinks = document.querySelectorAll("nav .container ul li a");
let allSections = document.querySelectorAll("section");

window.onscroll = function () {
  allSections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 200;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      alllinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`nav .container ul li a[href*='${id}']`)
          .classList.add("active");
      });
    }
  });
};
