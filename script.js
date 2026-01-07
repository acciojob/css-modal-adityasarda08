//your JS code here. If required.
const openBtn = document.getElementById("openModal");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close-modal");

    // Open modal
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    // Close modal when clicking close button
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal when clicking outside modal-content
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });