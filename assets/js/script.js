document.addEventListener("DOMContentLoaded", function () {
  // Load the saved theme preference on page load
  const savedTheme = localStorage.getItem("themeFile");
  if (savedTheme) {
    document.getElementById("themeStylesheet").setAttribute("href", savedTheme);

    // Set the active theme button
    const themeButtons = document.querySelectorAll("[data-theme]");
    themeButtons.forEach((btn) => {
      if (btn.getAttribute("data-theme") === savedTheme) {
        btn.classList.add("active-theme");
      } else {
        btn.classList.remove("active-theme");
      }
    });
  }
});

document.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-theme")) {
    const themeFile = event.target.getAttribute("data-theme");

    // Save the selected theme in local storage
    localStorage.setItem("themeFile", themeFile);

    // Update theme buttons
    const themeButtons = document.querySelectorAll("[data-theme]");
    themeButtons.forEach((btn) => btn.classList.remove("active-theme"));
    event.target.classList.add("active-theme");

    // Apply the selected theme
    document.getElementById("themeStylesheet").setAttribute("href", themeFile);
  }
});
