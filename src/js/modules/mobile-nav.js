function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector(".mobile-nav-btn");
  const nav = document.querySelector(".mobile-nav");
  const menuIcon = document.querySelector(".nav-icon");

  navBtn.onclick = function () {
    nav.classList.toggle("mobile-nav--open");
    menuIcon.classList.toggle("nav-icon--active");
    document.body.classList.toggle("no-scroll");
  };

  const navLinks = document.querySelectorAll(".mobile-nav__list a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Закрийте меню
        nav.classList.remove("mobile-nav--open");
        menuIcon.classList.remove("nav-icon--active");
        document.body.classList.remove("no-scroll");

        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

export default mobileNav;
