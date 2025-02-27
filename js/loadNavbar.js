document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
      const currentPage = window.location.pathname.split("/").pop();
      const linkId = {
        "index.html": "home-link",
        "about.html": "about-link",
        "add.html": "add-link",
        "search.html": "search-link",
      }[currentPage];
      if (linkId) {
        document.getElementById(linkId).classList.add("active");
      }
    })
    .catch((error) => console.error("Error loading navbar:", error));
});
