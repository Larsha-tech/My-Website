// Contact form script
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "✅ Thank you! We'll get back to you soon.";
  this.reset();
});
