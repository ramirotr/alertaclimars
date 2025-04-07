window.addEventListener("load", () => {
    const slides = document.querySelectorAll(".slides img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
  
    let current = 0;
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
  
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });
  
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });
  
    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextSlide, 5000);
    }
  
    showSlide(current);
  });
  