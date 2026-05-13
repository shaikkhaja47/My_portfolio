console.log("Portfolio Loaded Successfully 🚀");
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.dataset.theme =
  document.body.dataset.theme === "light"
  ? "dark"
  : "light";

  themeToggle.textContent =
  document.body.dataset.theme === "light"
  ? "☀️"
  : "🌙";
});