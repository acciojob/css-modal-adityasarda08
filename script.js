const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "block"; // ✅ MUST be block
});

// Close modal via button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside content
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
