const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentAvtive = 1;

next.addEventListener("click", () => {
  currentAvtive++;
  if (currentAvtive > circles.length) {
    currentAvtive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentAvtive--;
  if (currentAvtive < 1) {
    currentAvtive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentAvtive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentAvtive === 1) {
    prev.disabled = true;
  } else if (currentAvtive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
