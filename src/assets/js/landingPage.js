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
let burgerIcons = document.querySelectorAll(".burger-icon");
let mobileLinks = document.querySelector(".mobile-links");
let lastScrollPosition = 0;
let mobileLinksIsActive = false;
let mobileWindow = false;

// Check the window width on page load
checkWindowWidth();

// Check the window width on window resize
window.addEventListener("resize", checkWindowWidth);

window.addEventListener("scroll", handleScroll);

burgerIcons.forEach((item) => {
  item.addEventListener("click", toggleMobileLinks);
});

function checkWindowWidth() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 768) {
    mobileWindow = false;
    mobileLinks.classList.remove("fixed");
    mobileLinks.classList.add("hidden");
    burgerIcons.forEach((e) => {
      e.classList.remove("active");
    });
    mobileLinksIsActive = false;
    window.addEventListener("scroll", handleScroll);
  } else {
    mobileWindow = true;
  }
}

function handleScroll() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 80) {
    if (scrollPosition < lastScrollPosition) {
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
}

function checkScroll() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 80) {
    fixedNav.classList.add("active");
  } else {
    fixedNav.classList.remove("active");
  }
}

function toggleMobileLinks() {
  if (mobileWindow) {
    mobileLinksIsActive = !mobileLinksIsActive;
    console.log(mobileLinksIsActive);
    burgerIcons.forEach((e) => {
      e.classList.toggle("active");
    });
    if (mobileLinksIsActive) {
      fixedNav.classList.add("active");
      mobileLinks.classList.add("fixed");
      mobileLinks.classList.remove("hidden");
      window.removeEventListener("scroll", handleScroll);
    } else {
      fixedNav.classList.remove("active");
      mobileLinks.classList.remove("fixed");
      mobileLinks.classList.add("hidden");
      window.addEventListener("scroll", handleScroll);
    }
    checkScroll();
  } else {
    mobileLinks.classList.remove("fixed");
    mobileLinks.classList.add("hidden");
    burgerIcons.forEach((e) => {
      e.classList.remove("active");
    });
    checkScroll();
  }
}
