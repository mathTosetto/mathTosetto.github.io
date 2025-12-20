document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector(".icon");

        const isOpen = content.style.display === "block";

        document.querySelectorAll(".accordion-content").forEach(c => {
            c.style.display = "none";
        });

        document.querySelectorAll(".icon").forEach(i => {
            i.textContent = "▾";
        });

        if (!isOpen) {
            content.style.display = "block";
            icon.textContent = "▴";
        }
    });
});
