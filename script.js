const kepek = [
  "img/2.jpg",
  "img/3.jpg"
];

let aktIndex = 0

function kepValtas(irany) {
  aktIndex += irany
  if (aktIndex < 0) aktIndex = kepek.length - 1
  if (aktIndex >= kepek.length) aktIndex = 0

  document.getElementById("galeriaKep").src = kepek[aktIndex]
}



document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle")
  const navLinks = document.getElementById("nav-links")

  const heroSection = document.querySelector(".hero")
  const menuMainSection = document.querySelector(".menu-main")
  const contactMainSection = document.querySelector(".contact-main")
  const aboutSection = document.querySelector(".about-section")

  const offset = "200px"

  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("show")

    let marginValue
      if (navLinks.classList.contains("show")) {
      marginValue = offset
    } else {
      marginValue = "0"
    }

    if (heroSection) heroSection.style.marginTop = marginValue
    if (menuMainSection) menuMainSection.style.marginTop = marginValue
    if (contactMainSection) contactMainSection.style.marginTop = marginValue
    if (aboutSection) aboutSection.style.marginTop = marginValue
  })
})