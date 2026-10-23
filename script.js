const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach((card) => {
  const button = card.querySelector(".faq-question");
  const icon = card.querySelector(".toggle-icon");

  button.addEventListener("click", () => {
    const isOpen = card.classList.toggle("active");

    button.setAttribute("aria-expanded", isOpen);
    icon.textContent = isOpen ? "−" : "+";
  });
});