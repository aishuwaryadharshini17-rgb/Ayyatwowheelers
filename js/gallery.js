(function () {
    const compareBlocks = Array.from(document.querySelectorAll(".before-after-compare"));
    const revealCards = Array.from(document.querySelectorAll(".reveal-on-scroll"));

    compareBlocks.forEach((block) => {
        const slider = block.querySelector("input[type='range']");

        if (!slider) {
            return;
        }

        function updateReveal() {
            block.style.setProperty("--reveal", `${slider.value}%`);
        }

        slider.addEventListener("input", updateReveal);
        updateReveal();
    });

    if ("IntersectionObserver" in window && revealCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.24 });

        revealCards.forEach((card) => observer.observe(card));
    } else {
        revealCards.forEach((card) => card.classList.add("is-visible"));
    }

    const bikeFilterButtons = Array.from(document.querySelectorAll("[data-bike-filter]"));
    const bikeCards = Array.from(document.querySelectorAll("[data-bike-brand]"));

    function filterBikeShowcase(filter) {
        bikeCards.forEach((card) => {
            const isMatch = filter === "all" || card.dataset.bikeBrand === filter;

            card.classList.add("is-filtering");

            window.setTimeout(() => {
                card.classList.toggle("is-hidden", !isMatch);
                window.requestAnimationFrame(() => {
                    card.classList.remove("is-filtering");
                });
            }, 180);
        });
    }

    bikeFilterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.bikeFilter;

            bikeFilterButtons.forEach((filterButton) => {
                filterButton.classList.toggle("active", filterButton === button);
            });

            filterBikeShowcase(filter);
        });
    });

    const showcase = document.querySelector(".gallery-showcase");
    const photos = Array.from(document.querySelectorAll(".gallery-photo"));
    const controls = Array.from(document.querySelectorAll(".gallery-controls button"));
    const filterButtons = Array.from(document.querySelectorAll("[data-gallery-filter]"));

    if (!showcase || photos.length === 0) {
        return;
    }

    const positions = [
        ["side", "far-left"],
        ["side", "left"],
        ["featured"],
        ["side", "right"],
        ["side", "far-right"]
    ];

    let activeIndex = Math.max(0, photos.findIndex((photo) => photo.classList.contains("featured")));
    let autoplayId = null;
    let touchStartX = 0;

    function wrapIndex(index) {
        return (index + photos.length) % photos.length;
    }

    function updateGallery(direction) {
        photos.forEach((photo, index) => {
            const offset = wrapIndex(index - activeIndex + 2);
            photo.className = `gallery-photo ${positions[offset].join(" ")}`;
            photo.dataset.motion = direction || "";
            photo.setAttribute("aria-hidden", offset === 2 ? "false" : "true");
            photo.tabIndex = offset === 2 ? 0 : -1;
        });
    }

    function setActive(index, direction) {
        activeIndex = wrapIndex(index);
        updateGallery(direction);
    }

    function moveGallery(step) {
        setActive(activeIndex + step, step > 0 ? "next" : "prev");
        setActiveFilter("all");
    }

    function setActiveFilter(filter) {
        filterButtons.forEach((button) => {
            button.classList.toggle("active", button.dataset.galleryFilter === filter);
        });
    }

    function startAutoplay() {
        stopAutoplay();
        autoplayId = window.setInterval(() => {
            setActive(activeIndex + 1, "next");
            setActiveFilter("all");
        }, 4200);
    }

    function stopAutoplay() {
        if (autoplayId) {
            window.clearInterval(autoplayId);
            autoplayId = null;
        }
    }

    controls[0]?.addEventListener("click", () => {
        moveGallery(-1);
        startAutoplay();
    });

    controls[1]?.addEventListener("click", () => {
        moveGallery(1);
        startAutoplay();
    });

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.galleryFilter;
            const nextIndex = filter === "all"
                ? 0
                : photos.findIndex((photo) => photo.dataset.category === filter);

            if (nextIndex >= 0) {
                setActive(nextIndex, nextIndex > activeIndex ? "next" : "prev");
                setActiveFilter(filter);
                startAutoplay();
            }
        });
    });

    showcase.addEventListener("mouseenter", stopAutoplay);
    showcase.addEventListener("mouseleave", startAutoplay);
    showcase.addEventListener("touchstart", (event) => {
        touchStartX = event.changedTouches[0].clientX;
        stopAutoplay();
    }, { passive: true });

    showcase.addEventListener("touchend", (event) => {
        const swipeDistance = event.changedTouches[0].clientX - touchStartX;

        if (Math.abs(swipeDistance) > 45) {
            moveGallery(swipeDistance < 0 ? 1 : -1);
        }

        startAutoplay();
    }, { passive: true });

    document.addEventListener("keydown", (event) => {
        if (!showcase.matches(":hover") && !showcase.contains(document.activeElement)) {
            return;
        }

        if (event.key === "ArrowLeft") {
            moveGallery(-1);
            startAutoplay();
        }

        if (event.key === "ArrowRight") {
            moveGallery(1);
            startAutoplay();
        }
    });

    updateGallery("next");
    startAutoplay();
})();
