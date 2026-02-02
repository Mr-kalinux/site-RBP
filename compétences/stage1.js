document.addEventListener("DOMContentLoaded", () => {

  /* ---------- OUVERTURE DES MODALES ---------- */
  document.querySelectorAll(".competence-box").forEach(box => {
    box.addEventListener("click", () => {
      const modalId = box.dataset.modal;
      const modal = document.getElementById(modalId);
      if (!modal) { console.warn("Modal introuvable:", modalId); return; }
      modal.classList.add("show");
      modal.setAttribute("aria-hidden","false");
    });
  });

  /* ---------- FERMETURE DES MODALES ---------- */
  function closeModal(modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden","true");
  }

  document.querySelectorAll(".modal").forEach(modal => {
    const btn = modal.querySelector(".close");
    if (btn) btn.addEventListener("click", () => closeModal(modal));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.show").forEach(m => closeModal(m));
    }
  });

  /* ---------- CARROUSEL ---------- */
  document.querySelectorAll(".carousel").forEach(carousel => {
    const track = carousel.querySelector(".carousel-images");
    const slides = Array.from(track.children);
    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");
    let index = 0;

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    if (prev) {
      prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        update();
      });
    }

    if (next) {
      next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        update();
      });
    }

    update();
  });

});
