// script.js

// DOM elements
const searchForm = document.querySelector('form');
const searchInput = document.getElementById('search-item');
const navLinks = document.querySelectorAll('.nav-link');
const customButton = document.querySelector('.custom-button');

// Smooth scroll for navigation links
let isScrolling = false;

window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      highlightActiveLink();
      isScrolling = false;
    });
    isScrolling = true;
  }
});

function highlightActiveLink() {
  let current = '';
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
}


// Handle search form submission
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
  } else {
    searchInput.classList.add('error'); // Add error class
    setTimeout(() => searchInput.classList.remove('error'), 2000);
    alert('Please enter an item to search for.');
  }
});


// Contact Us button interaction
customButton.addEventListener('click', () => {
  alert('Contact us feature is under development. Stay tuned!');
});

// Highlight active navigation link
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Optional: Add hover effects for interactive sections
document.querySelectorAll('.step').forEach(step => {
  step.addEventListener('mouseenter', () => step.classList.add('hover'));
  step.addEventListener('mouseleave', () => step.classList.remove('hover'));
});

