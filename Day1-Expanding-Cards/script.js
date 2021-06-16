const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    removeActiveclass();
    panel.classList.add("active");
  });
});

function removeActiveclass() {
  panels.forEach(function (panel) {
    panel.classList.remove("active");
  });
}
aaa