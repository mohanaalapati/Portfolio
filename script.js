document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");
    const themeToggle = document.getElementById("theme-toggle");

    // Progress Bar Animation
    if (progressBars.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const bar = entry.target;
                const targetWidth = bar.dataset.targetWidth;

                if (entry.isIntersecting) {
                    setTimeout(() => {
                        bar.style.width = targetWidth;
                    }, 100);
                } else {
                    bar.style.width = "0";
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach((bar) => observer.observe(bar));
    }

    // Theme Toggle
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeToggle.textContent = savedTheme === "light-theme" ? "🌙 Dark Mode" : "☀️ Light Mode";
    }

    themeToggle.addEventListener("click", () => {
        if (document.body.classList.contains("light-theme")) {
            document.body.classList.remove("light-theme");
            localStorage.setItem("theme", "dark-theme");
            themeToggle.textContent = "🌙 Dark Mode";
        } else {
            document.body.classList.add("light-theme");
            localStorage.setItem("theme", "light-theme");
            themeToggle.textContent = "☀️ Light Mode";
        }
    });

    // Smooth Scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Modal Functionality for Experience Section
    const detailButtons = document.querySelectorAll(".details-button");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    detailButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "flex";
            }
        });
    });

    closeButtons.forEach(close => {
        close.addEventListener("click", () => {
            close.closest(".modal").style.display = "none";
        });
    });

    window.addEventListener("click", (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
