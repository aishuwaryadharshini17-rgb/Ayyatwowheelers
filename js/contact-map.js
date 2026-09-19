(() => {
    const directionsLink = document.querySelector("[data-directions-link]");
    const locationStatus = document.querySelector("[data-location-status]");

    if (!directionsLink) {
        return;
    }

    const destination = "Jeyam complex, Podhumbu main road, Prc colony 2 street, Madurai-18";
    const fallbackUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;

    directionsLink.href = fallbackUrl;

    const setStatus = (message) => {
        if (locationStatus) {
            locationStatus.textContent = message;
        }
    };

    directionsLink.addEventListener("click", (event) => {
        if (!navigator.geolocation) {
            setStatus("Location permission is not available in this browser. Opening Google Maps.");
            return;
        }

        event.preventDefault();
        setStatus("Finding your current location...");

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
                setStatus("Opening directions from your current location.");
                window.open(url, "_blank", "noopener");
            },
            () => {
                setStatus("Location permission was not allowed. Opening Google Maps directions.");
                window.open(fallbackUrl, "_blank", "noopener");
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
            }
        );
    });
})();
