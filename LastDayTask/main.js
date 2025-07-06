//Htmlde en altta çağırdım
const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

//favorilere ekleme
const favoriteButtons = document.querySelectorAll(".favori");

favoriteButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.toggle("favorited");

    if (button.classList.contains("favorited")) {
      button.textContent = "Favorilerimden Çıkar";
    } else {
      button.textContent = "Favorilere Ekle";
    }
  });
});
