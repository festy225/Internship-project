document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const track = document.querySelector('.slider-track');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const visibleCount = 3;
  const maxIndex = Math.max(0, slides.length - visibleCount);
  let currentIndex = 0;

  function update() {
    const shiftPercent = currentIndex * (100 / visibleCount);
    track.style.transform = `translateX(-${shiftPercent}%)`;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= maxIndex;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    update();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = Math.min(maxIndex, currentIndex + 1);
    update();
  });

  const contactForm = document.querySelector('#contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      const nameInput = document.querySelector('#name');
      const emailInput = document.querySelector('#email');
      const messageInput = document.querySelector('#message');

      const name = nameInput?.value.trim() || '';
      const email = emailInput?.value.trim() || '';
      const message = messageInput?.value.trim() || '';
      const wordCount = message.split(/\s+/).filter(Boolean).length;

      if (!name) {
        event.preventDefault();
        alert('Please enter your name.');
        nameInput?.focus();
        return;
      }

      if (!email) {
        event.preventDefault();
        alert('Please enter your email address.');
        emailInput?.focus();
        return;
      }

      if (wordCount < 1000) {
        event.preventDefault();
        alert('Your message must contain at least 1000 words.');
        messageInput?.focus();
      }
    });
  }

  update();
  window.addEventListener('resize', update);
});