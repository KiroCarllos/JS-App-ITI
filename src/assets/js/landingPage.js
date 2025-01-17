let scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}
function addAnimation() {
  scrollers.forEach((scroller) => {
    console.log(scroller);
    scroller.setAttribute("data-animated", true);
  });
}

const scrollerInner = document.querySelector(".scroller-inner");
const scrollerContent = Array.from(scrollerInner.children);
console.log(scrollerInner);
console.log(scrollerContent);
scrollerContent.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  duplicatedItem.setAttribute("aria-hidden", true);
  scrollerInner.appendChild(duplicatedItem);
});

const fixedNav = document.querySelector("nav.fixed");
let lastScrollPosition = 0;

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 80) {
    if (scrollPosition > lastScrollPosition) {
      // Scrolling down
      fixedNav.classList.add("active");
    } else {
      // Scrolling up
      fixedNav.classList.remove("active");
    }
  } else {
    fixedNav.classList.remove("active");
  }

  lastScrollPosition = scrollPosition;
});
