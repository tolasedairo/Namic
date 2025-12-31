const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

// only wire the custom dropdown if elements are present (prevents errors on pages without them)
if (toggleBtn && toggleBtnIcon && dropDownMenu) {
  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  };
}

// hero background rotator: cycles background images and adjusts text color for readability
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const slides = [
    { url: "assets/images/muslim-gether.png", textColor: "#ffffff" },
    { url: "assets/images/muslim-meet.png", textColor: "#ffffff" },
    { url: "assets/images/namic_bkgd_2.jpg", textColor: "#0b6711" }
  ];

  let index = 0;

  const textNodes = hero.querySelectorAll("h1, h2");

  const applySlide = () => {
    const slide = slides[index];
    hero.style.backgroundImage = `url('${slide.url}')`;
    hero.style.color = slide.textColor;
    textNodes.forEach((node) => {
      node.style.color = slide.textColor;
    });
  };

  applySlide();

  // rotate every ~45 seconds (within requested 40-50s window)
  setInterval(() => {
    index = (index + 1) % slides.length;
    applySlide();
  }, 45000);
});
