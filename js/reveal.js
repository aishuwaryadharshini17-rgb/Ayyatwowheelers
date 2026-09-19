(function () {
    const revealSelectors = [
        ".hero-content",
        ".section-title",
        ".page-hero > *",
        ".compact-hero > *",
        ".services-preview",
        ".service-card",
        ".why-heading",
        ".why-card",
        ".final-cta-copy",
        ".final-cta-actions",
        ".about-hero-content",
        ".mission-copy",
        ".mission-card",
        ".about-stat-card",
        ".contact-section > div",
        ".contact-form",
        ".map-copy",
        ".map-frame",
        ".before-after-heading",
        ".before-after-card",
        ".bike-showcase-heading",
        ".bike-filter-bar",
        ".bike-showcase-card",
        ".job-card",
        ".job-card-grid > div",
        ".job-card-block",
        ".job-card-images > div",
        ".job-card-note",
        ".job-card-actions",
        ".footer-brand",
        ".footer-column"
    ];

    const staggerContainers = [
        ".service-grid",
        ".why-grid",
        ".mission-grid",
        ".about-stats-section",
        ".before-after-grid",
        ".bike-showcase-grid",
        ".job-card-grid",
        ".job-card-images",
        ".footer-content"
    ];

    const revealItems = Array.from(document.querySelectorAll(revealSelectors.join(",")));

    if (revealItems.length === 0) {
        return;
    }

    document.documentElement.classList.add("reveal-ready");

    staggerContainers.forEach((selector) => {
        document.querySelectorAll(selector).forEach((container) => {
            Array.from(container.children).forEach((child, index) => {
                child.style.setProperty("--reveal-delay", `${Math.min(index * 0.08, 0.4)}s`);
            });
        });
    });

    revealItems.forEach((item) => {
        item.classList.add("js-reveal");
    });

    function animateCounter(counter) {
        if (!counter || counter.dataset.counted === "true") {
            return;
        }

        const target = Number(counter.dataset.target || 0);
        const suffix = counter.dataset.suffix || "";
        const duration = Number(counter.dataset.duration || 1500);
        const startTime = performance.now();

        counter.dataset.counted = "true";

        function updateCounter(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(target * eased);

            counter.textContent = `${value}${suffix}`;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = `${target}${suffix}`;
            }
        }

        requestAnimationFrame(updateCounter);
    }

    function runCountersIn(element) {
        element.querySelectorAll("[data-counter]").forEach(animateCounter);
    }

    if (!("IntersectionObserver" in window)) {
        revealItems.forEach((item) => {
            item.classList.add("is-visible");
            runCountersIn(item);
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                runCountersIn(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16
    });

    revealItems.forEach((item) => observer.observe(item));
})();
