function catLogoWink() {
  let catLogo = document.querySelector(".header-logo-img");
  winkingLogoSrc = "images/logo-winking.png";

  if (catLogo.getAttribute("src") == winkingLogoSrc) {
    catLogo.src = "images/logo.png";
    catLogo.style.transform = "rotate(0deg)";
  } else {
    catLogo.src = "images/logo-winking.png";
    catLogo.style.transform = "rotate(-10deg)";
  }
}
