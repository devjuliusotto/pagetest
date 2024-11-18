document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeBtn = document.createElement("button");
  toggleThemeBtn.textContent = "Toggle Theme";
  toggleThemeBtn.style.position = "fixed";
  toggleThemeBtn.style.bottom = "20px";
  toggleThemeBtn.style.right = "20px";
  toggleThemeBtn.style.padding = "10px 20px";
  toggleThemeBtn.style.backgroundColor = "#4a90e2";
  toggleThemeBtn.style.color = "white";
  toggleThemeBtn.style.border = "none";
  toggleThemeBtn.style.borderRadius = "5px";
  toggleThemeBtn.style.cursor = "pointer";
  document.body.appendChild(toggleThemeBtn);

  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
});
