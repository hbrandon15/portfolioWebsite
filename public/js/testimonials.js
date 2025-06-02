document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      text: "Brandon captured our wedding beautifully! Highly recommend.",
      author: "- Jane D.",
    },
    {
      text: "Professional, creative, and easy to work with.",
      author: "- Mike S.",
    },
    {
      text: "Amazing photos and quick turnaround. Will book again!",
      author: "- Sarah L.",
    },
  ];

  let current = 0;
  const testimonialSlide = document.getElementById("testimonial-slide");
  const prevBtn = document.getElementById("prev-testimonial");
  const nextBtn = document.getElementById("next-testimonial");

  function showTestimonial(idx) {
    testimonialSlide.querySelector(
      "p"
    ).textContent = `"${testimonials[idx].text}"`;
    testimonialSlide.querySelector("span").textContent =
      testimonials[idx].author;
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }, 5000);

  // Initialize first testimonial
  showTestimonial(current);
});
