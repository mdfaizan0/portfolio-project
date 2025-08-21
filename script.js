const toggle = document.getElementById("darkmode-toggle");
const body = document.body;
const homeFirstPara = document.querySelector(".home-info-elements>p:first-child")


toggle.addEventListener("change", () => {
  body.classList.toggle("dark", toggle.checked);
});
