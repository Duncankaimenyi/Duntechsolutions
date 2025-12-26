// Function to animate numbers
function animateNumbers(element, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = range / (duration / 0.5);
    
    let timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current) + "+";
        if (current >= end) {
            element.textContent = end + "+";
            clearInterval(timer);
        }
    }, 10);
}

// Detect when section is visible
function startCounting() {
    let stats = document.querySelectorAll(".stat-item h3");
    let section = document.querySelector(".stats");
    
    let options = { root: null, threshold: 1 };
    
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers(stats[0], 0, 10, 1500);
                animateNumbers(stats[1], 0, 500, 2000);
                animateNumbers(stats[2], 0, 300, 1800);
                observer.disconnect();
            }
        });
    }, options);
    
    observer.observe(section);
}

// Run animation when page loads
document.addEventListener("DOMContentLoaded", startCounting);

// Slide-in effect when section appears
const slideInElements = document.querySelectorAll('.slide-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 1 });

slideInElements.forEach(element => observer.observe(element));
// Example auto-popup after scroll or event
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".home-content").classList.add("show-text");
    }, 500); // Delay  animation for better effect
});
 /* Live Clock */
 function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText =
      now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  setInterval(updateClock, 1000);
  updateClock();

  /* Arrange Days */
  const days = document.querySelectorAll(".day");
  const container = document.getElementById("circle");

  const size = container.offsetWidth;
  const radius = size / 2 - 50;
  const center = size / 2;

  let today = new Date().getDay();
  today = today === 0 ? 7 : today;

  days.forEach((day, index) => {
    const angle = (index / 7) * (2 * Math.PI) - Math.PI / 2;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);

    day.style.left = `${x - 29}px`;
    day.style.top = `${y - 29}px`;
    day.style.transform += ` translateZ(${Math.sin(angle) * 36}px)`;

    if (+day.dataset.day === today) {
      day.classList.add("active");
    }
  });