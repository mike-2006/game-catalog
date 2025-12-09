document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector(".search-input");
  const cards = document.querySelectorAll(".game-card");

  search.addEventListener("input", () => {
    const value = search.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();

      card.style.display = title.includes(value) ? "block" : "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("theme-btn");

  function applyTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light");
      themeBtn.textContent = "🌙"; 
    } else {
      document.body.classList.remove("light");
      themeBtn.textContent = "☀️"; 
    }
  }

  const savedTheme = localStorage.getItem("theme");
  applyTheme(savedTheme ? savedTheme : "dark");

  themeBtn.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light") ? "dark" : "light";
    applyTheme(newTheme);

    if (newTheme === "light") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
  });
});

