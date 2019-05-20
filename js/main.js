function mobileMenu() {
    var navBar = document.getElementById("nav-links");
    if (navBar.className === "nav-links") {
      navBar.className += " responsive-menu";
    } else {
      navBar.className = "nav-links";
    }
  }