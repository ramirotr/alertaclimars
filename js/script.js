window.addEventListener("load", () => {
  const slides = document.querySelectorAll(".slides img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let current = 0;
  if (slides.length > 0) {
    let interval = setInterval(nextSlide, 5000);

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
      });
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    function prevSlide() {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    }

    nextBtn?.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });

    prevBtn?.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextSlide, 5000);
    }

    showSlide(current);
  }

  // === MENU DE CONFIGURAÇÕES ===
  const configBtn = document.getElementById("config-btn");
  const configPanel = document.getElementById("config-panel");
  const toggleDark = document.getElementById("toggle-dark-mode");
  const toggleFont = document.getElementById("toggle-font");
  const toggleContrast = document.getElementById("toggle-contrast");

  // Aplicar configurações salvas
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    if (toggleDark) toggleDark.checked = true;
  }

  if (localStorage.getItem("largeFont") === "true") {
    document.documentElement.classList.add("large-font");
    if (toggleFont) toggleFont.checked = true;
  }

  if (localStorage.getItem("highContrast") === "true") {
    document.body.classList.add("high-contrast");
    if (toggleContrast) toggleContrast.checked = true;
  }

  if (configBtn && configPanel) {
    configBtn.addEventListener("click", () => {
      configPanel.style.display =
        configPanel.style.display === "block" ? "none" : "block";
    });
  }

  toggleDark?.addEventListener("change", (e) => {
    document.body.classList.toggle("dark-mode", e.target.checked);
    localStorage.setItem("darkMode", e.target.checked);
  });

  toggleFont?.addEventListener("change", (e) => {
    document.documentElement.classList.toggle("large-font", e.target.checked);
    localStorage.setItem("largeFont", e.target.checked);
  });

  toggleContrast?.addEventListener("change", (e) => {
    document.body.classList.toggle("high-contrast", e.target.checked);
    localStorage.setItem("highContrast", e.target.checked);
  });
});
