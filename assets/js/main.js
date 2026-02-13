// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  // Year accordion for writing archive
  const yearToggles = document.querySelectorAll('.year-toggle');

  yearToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const content = this.nextElementSibling;

      // Toggle current
      this.setAttribute('aria-expanded', !isExpanded);
      content.classList.toggle('open');
    });
  });

  // Auto-expand the most recent year on the writing page
  const firstYearToggle = document.querySelector('.year-toggle');
  if (firstYearToggle) {
    firstYearToggle.setAttribute('aria-expanded', 'true');
    firstYearToggle.nextElementSibling.classList.add('open');
  }
});
