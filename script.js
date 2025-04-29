document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    if (progressBars.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const bar = entry.target;
                    const targetWidth = bar.dataset.targetWidth;

                    if (entry.isIntersecting) {
                        // Reset and reapply width for smooth animation
                        setTimeout(() => {
                            bar.style.width = targetWidth;
                        }, 100); // Small delay ensures it re-triggers
                    } else {
                        // Remove width when out of view
                        bar.style.width = "0";
                    }
                });
            },
            {
                threshold: 0.5, // Trigger animation when 50% of the element is visible
            }
        );

        progressBars.forEach((bar) => observer.observe(bar));
    }
});
