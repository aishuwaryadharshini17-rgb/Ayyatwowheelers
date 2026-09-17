(function () {
    const translations = {
        "Home": "முகப்பு",
        "Services": "சேவைகள்",
        "About": "எங்களை பற்றி",
        "Gallery": "புகைப்படங்கள்",
        "Contact": "தொடர்பு",
        "Call us": "அழைக்கவும்",
        "Call Now": "இப்போது அழைக்கவும்",
        "Book a Service": "சேவை பதிவு செய்யவும்",
        "Book Service": "சேவை பதிவு",
        "Track Service": "சேவையை கண்காணிக்கவும்",
        "Ready for service?": "சேவைக்கு தயாரா?",
        "Your bike deserves the right care.": "உங்கள் பைக்கிற்கு சரியான பராமரிப்பு தேவை.",
        "Book your service and keep your ride ready for the road. Workshop booking support is available within 2 km around our location.": "உங்கள் சேவையை பதிவு செய்து பயணத்திற்கு பைக்கை தயார் நிலையில் வைத்திருங்கள். எங்கள் இடத்திலிருந்து 2 கி.மீ. சுற்றளவில் பதிவு ஆதரவு கிடைக்கும்.",
        "Ayya Two Wheelers Workshop": "அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்",
        "Expert Care For Your Bike": "உங்கள் பைக்கிற்கு நிபுணர் பராமரிப்பு",
        "Fast, reliable two wheeler service in Madurai with trusted mechanics, clear pricing, and careful support for every ride.": "மதுரையில் நம்பகமான மெக்கானிக்குகள், தெளிவான விலை, மற்றும் ஒவ்வொரு பயணத்திற்கும் கவனமான ஆதரவுடன் வேகமான டூ வீலர் சேவை.",
        "Brands We Service": "நாங்கள் சேவை செய்யும் பிராண்டுகள்",
        "Workshop Services": "ஒர்க்ஷாப் சேவைகள்",
        "General Service": "பொது சேவை",
        "Oil change, chain care, brakes, filters, lights, and full safety checks.": "ஆயில் மாற்றம், செயின் பராமரிப்பு, பிரேக், ஃபில்டர், லைட் மற்றும் முழு பாதுகாப்பு சோதனை.",
        "Engine & Tune-Up": "எஞ்சின் & டியூன்-அப்",
        "Smooth pickup, stable idle, better mileage, and careful fault diagnosis.": "சீரான பிக்கப், நிலையான ஐடில், சிறந்த மைலேஜ் மற்றும் கவனமான கோளாறு கண்டறிதல்.",
        "Electrical Work": "எலக்ட்ரிக்கல் வேலை",
        "Battery, wiring, starter, lamps, horn, and charging system support.": "பேட்டரி, வயரிங், ஸ்டார்டர், லைட், ஹார்ன் மற்றும் சார்ஜிங் சிஸ்டம் சேவை.",
        "Modification": "மாடிபிகேஷன்",
        "Custom fitting, accessory setup, handlebar changes, lights & upgrades.": "கஸ்டம் ஃபிட்டிங், ஆக்சஸரி அமைப்பு, ஹேண்டில்பார் மாற்றம், லைட் மற்றும் மேம்பாடுகள்.",
        "Painting": "பெயிண்டிங்",
        "Bike touch-ups, panel painting, color refresh, and clean finishing work.": "பைக் டச்-அப், பேனல் பெயிண்டிங், நிற புதுப்பிப்பு மற்றும் சுத்தமான ஃபினிஷிங் வேலை.",
        "Water Wash": "வாட்டர் வாஷ்",
        "Exterior wash, dust removal, wheel cleaning, and neat detailing every ride.": "வெளிப்புற வாஷ், தூசி நீக்கம், வீல் கிளீனிங் மற்றும் ஒவ்வொரு பயணத்திற்கும் சுத்தமான டீட்டெய்லிங்.",
        "Why Ayya Two wheelers?": "ஏன் அய்யா டூ வீலர்ஸ்?",
        "Reliable service for every ride.": "ஒவ்வொரு பயணத்திற்கும் நம்பகமான சேவை.",
        "We keep the workshop experience simple: skilled hands, clear updates, quality parts, and service you can trust before every trip.": "திறமையான கைப்பணி, தெளிவான தகவல், தரமான பாகங்கள், மற்றும் ஒவ்வொரு பயணத்துக்கும் முன் நம்பக்கூடிய சேவை.",
        "Experienced Mechanics": "அனுபவமுள்ள மெக்கானிக்குகள்",
        "Transparent Pricing": "தெளிவான விலை",
        "Quality Spare Parts": "தரமான ஸ்பேர் பாகங்கள்",
        "Fast & Reliable Service": "வேகமான மற்றும் நம்பகமான சேவை",
        "Customer Satisfaction": "வாடிக்கையாளர் திருப்தி",
        "Need quick bike service in Madurai?": "மதுரையில் உடனடி பைக் சேவை வேண்டுமா?",
        "Call us for service timing, repair estimates, and workshop directions.": "சேவை நேரம், பழுது செலவு மதிப்பீடு மற்றும் ஒர்க்ஷாப் வழிகாட்டுதலுக்கு அழைக்கவும்.",
        "Call 7540081247": "7540081247 அழைக்கவும்",
        "Madurai's trusted two wheeler service workshop. We make bike servicing simple, transparent, and reliable.": "மதுரையின் நம்பகமான டூ வீலர் சேவை ஒர்க்ஷாப். பைக் சேவையை எளிமையாகவும் தெளிவாகவும் நம்பகமாகவும் செய்கிறோம்.",
        "Quick Links": "விரைவு இணைப்புகள்",
        "Booking": "பதிவு",
        "Support": "ஆதரவு",
        "Privacy Policy": "தனியுரிமை கொள்கை",
        "Terms of Service": "சேவை விதிமுறைகள்",
        "Return Policy": "திரும்பப் பெறும் கொள்கை",
        "Contact Us": "எங்களை தொடர்பு கொள்ள",
        "Mon-Sat: 9.30 AM - 9.30 PM": "திங்கள்-சனி: காலை 9.30 - இரவு 9.30",
        "Jeyam complex, Podhumbu main road, Prc colony 2 street, Madurai-18": "ஜெயம் காம்ப்ளக்ஸ், பொதும்பு மெயின் ரோடு, PRC காலனி 2வது தெரு, மதுரை-18",
        "© 2026 Ayya Two Wheelers Workshop. All rights reserved.": "© 2026 அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
        "About Us": "எங்களை பற்றி",
        "Local mechanics for everyday riders.": "தினசரி பயணிகளுக்கான உள்ளூர் மெக்கானிக்குகள்.",
        "Ayya Two Wheelers Workshop supports bike and scooter owners across Madurai with dependable service, practical repair advice, and honest handling from check-in to delivery.": "மதுரை முழுவதும் பைக் மற்றும் ஸ்கூட்டர் உரிமையாளர்களுக்கு நம்பகமான சேவை, பயனுள்ள பழுது ஆலோசனை, மற்றும் நேர்மையான பராமரிப்பை அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப் வழங்குகிறது.",
        "Opening Time": "திறக்கும் நேரம்",
        "Weekly Service": "வாராந்திர சேவை",
        "Multi Brand": "பல பிராண்டுகள்",
        "Bike Support": "பைக் ஆதரவு",
        "Our Services": "எங்கள் சேவைகள்",
        "Complete Two Wheeler Care": "முழுமையான டூ வீலர் பராமரிப்பு",
        "From routine maintenance to fault finding, we handle daily-use bikes and scooters with clear communication and careful workmanship.": "வழக்கமான பராமரிப்பிலிருந்து கோளாறு கண்டறிதல் வரை, தினசரி பயன்பாட்டு பைக் மற்றும் ஸ்கூட்டர்களை தெளிவான தகவலுடன் கவனமாக சரி செய்கிறோம்.",
        "Oil & Filter Change": "ஆயில் & ஃபில்டர் மாற்றம்",
        "Engine oil, air filter, oil filter, and basic running condition inspection.": "எஞ்சின் ஆயில், ஏர் ஃபில்டர், ஆயில் ஃபில்டர் மற்றும் அடிப்படை இயங்கும் நிலை சோதனை.",
        "Brakes, clutch, chain, cables, lights, tyre pressure, and safety checks.": "பிரேக், கிளட்ச், செயின், கேபிள்கள், லைட், டயர் அழுத்தம் மற்றும் பாதுகாப்பு சோதனைகள்.",
        "Battery & Electrical": "பேட்டரி & எலக்ட்ரிக்கல்",
        "Battery testing, charging issues, switches, lamps, horn, and wiring repairs.": "பேட்டரி சோதனை, சார்ஜிங் பிரச்சனை, ஸ்விட்ச், லைட், ஹார்ன் மற்றும் வயரிங் பழுது.",
        "Engine Tune-Up": "எஞ்சின் டியூன்-அப்",
        "Idle tuning, pickup improvement, mileage support, and noise diagnosis.": "ஐடில் டியூனிங், பிக்கப் மேம்பாடு, மைலேஜ் ஆதரவு மற்றும் சத்தம் கண்டறிதல்.",
        "Brake Service": "பிரேக் சேவை",
        "Brake shoe or pad replacement, lever adjustment, and road-ready checks.": "பிரேக் ஷூ அல்லது பேட் மாற்றம், லீவர் அட்ஜஸ்ட்மெண்ட் மற்றும் சாலை பாதுகாப்பு சோதனை.",
        "Repair Work": "பழுது வேலை",
        "Practical fixes for breakdowns, worn parts, leaks, vibration, and daily ride issues.": "பிரேக் டவுன், kulaintha பாகங்கள், லீக், அதிர்வு மற்றும் தினசரி பயண பிரச்சனைகளுக்கான சரி செயல்.",
        "Visit or call the workshop.": "ஒர்க்ஷாப் வரவும் அல்லது அழைக்கவும்.",
        "Your name": "உங்கள் பெயர்",
        "Phone number": "தொலைபேசி எண்",
        "Service type": "சேவை வகை",
        "General service": "பொது சேவை",
        "Repair work": "பழுது வேலை",
        "Electrical work": "எலக்ட்ரிக்கல் வேலை",
        "Engine tune-up": "எஞ்சின் டியூன்-அப்",
        "Bike model and service details": "பைக் மாடல் மற்றும் சேவை விவரம்",
        "Service details": "சேவை விவரம்",
        "Send Enquiry": "விசாரணை அனுப்பு",
        "Book a service slot.": "சேவை நேரத்தை பதிவு செய்யுங்கள்.",
        "Share your bike details and preferred timing. For urgent repair or same-day service, calling is the fastest option.": "உங்கள் பைக் விவரங்களையும் விருப்பமான நேரத்தையும் பகிரவும். அவசர பழுது அல்லது அதே நாள் சேவைக்கு அழைப்பதே வேகமான வழி.",
        "Share your bike details and preferred timing. Booking support is available within 2 km around our workshop location.": "உங்கள் பைக் விவரங்களையும் விருப்பமான நேரத்தையும் பகிரவும். எங்கள் ஒர்க்ஷாப் இடத்திலிருந்து 2 கி.மீ. சுற்றளவில் பதிவு ஆதரவு கிடைக்கும்.",
        "Available for customers within 2 km of Jeyam complex, Podhumbu main road, Prc colony 2 street, Madurai-18.": "ஜெயம் காம்ப்ளக்ஸ், பொதும்பு மெயின் ரோடு, PRC காலனி 2வது தெரு, மதுரை-18 இடத்திலிருந்து 2 கி.மீ. சுற்றளவில் உள்ள வாடிக்கையாளர்களுக்கு கிடைக்கும்.",
        "Full name": "முழு பெயர்",
        "Bike / scooter model": "பைக் / ஸ்கூட்டர் மாடல்",
        "Bike or scooter model": "பைக் அல்லது ஸ்கூட்டர் மாடல்",
        "Pickup location within 2 km": "2 கி.மீ. உள்ள பிக்கப் இடம்",
        "Preferred service": "விருப்பமான சேவை",
        "Oil change": "ஆயில் மாற்றம்",
        "Electrical repair": "எலக்ட்ரிக்கல் பழுது",
        "Engine repair": "எஞ்சின் பழுது",
        "Preferred date, time, and issue": "விருப்பமான தேதி, நேரம் மற்றும் பிரச்சனை",
        "Request Booking": "பதிவு கோரிக்கை",
        "Workshop Glimpses": "ஒர்க்ஷாப் காட்சிகள்",
        "A quick look at the service space, bikes, and brand work handled at Ayya Two Wheelers Workshop.": "அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப் சேவை இடம், பைக்குகள் மற்றும் பிராண்ட் வேலைகளின் ஒரு சிறிய பார்வை.",
        "Trusted By Local Riders": "உள்ளூர் பயணிகள் நம்பும் சேவை",
        "Clear updates, practical pricing, and dependable service for bikes and scooters.": "பைக் மற்றும் ஸ்கூட்டர்களுக்கு தெளிவான தகவல், நடைமுறை விலை, மற்றும் நம்பகமான சேவை.",
        "Good service and quick delivery. They explained the repair before starting.": "நல்ல சேவை மற்றும் விரைவான டெலிவரி. தொடங்குவதற்கு முன் பழுது விவரத்தை விளக்கினர்.",
        "My scooter pickup improved after service. Friendly team and reasonable cost.": "சேவைக்குப் பிறகு என் ஸ்கூட்டர் பிக்கப் மேம்பட்டது. நட்பான குழு மற்றும் நியாயமான செலவு.",
        "Helpful workshop for regular maintenance. Brake and oil service was neat.": "வழக்கமான பராமரிப்புக்கு உதவும் ஒர்க்ஷாப். பிரேக் மற்றும் ஆயில் சேவை நன்றாக இருந்தது."
    };

    const titleTranslations = {
        "Ayya Two Wheelers Workshop": "அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்",
        "About | Ayya Two Wheelers Workshop": "எங்களை பற்றி | அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்",
        "Services | Ayya Two Wheelers Workshop": "சேவைகள் | அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்",
        "Contact | Ayya Two Wheelers Workshop": "தொடர்பு | அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்",
        "Book Service | Ayya Two Wheelers Workshop": "சேவை பதிவு | அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்",
        "Gallery | Ayya Two Wheelers Workshop": "புகைப்படங்கள் | அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்",
    };

    const originalText = new WeakMap();
    const originalAttributes = new WeakMap();
    const originalTitle = document.title;

    function normalizeText(value) {
        return value.replace(/\s+/g, " ").trim();
    }

    function translateTextNode(node, language) {
        if (!originalText.has(node)) {
            originalText.set(node, node.nodeValue);
        }

        const englishValue = originalText.get(node);
        const key = normalizeText(englishValue);

        if (!key || !translations[key]) {
            node.nodeValue = englishValue;
            return;
        }

        const leading = englishValue.match(/^\s*/)[0];
        const trailing = englishValue.match(/\s*$/)[0];
        node.nodeValue = language === "ta"
            ? `${leading}${translations[key]}${trailing}`
            : englishValue;
    }

    function translateAttributes(element, language) {
        if (element.matches("[data-language-toggle]")) {
            return;
        }

        ["placeholder", "aria-label", "alt"].forEach((attribute) => {
            if (!element.hasAttribute(attribute)) {
                return;
            }

            if (!originalAttributes.has(element)) {
                originalAttributes.set(element, {});
            }

            const store = originalAttributes.get(element);
            if (!store[attribute]) {
                store[attribute] = element.getAttribute(attribute);
            }

            const englishValue = store[attribute];
            element.setAttribute(attribute, language === "ta" && translations[englishValue]
                ? translations[englishValue]
                : englishValue);
        });
    }

    function applyLanguage(language) {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                const parent = node.parentElement;
                if (!parent || parent.closest("script, style, [data-no-translate]")) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const nodes = [];
        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }

        nodes.forEach((node) => translateTextNode(node, language));
        document.querySelectorAll("[placeholder], [aria-label], img[alt]").forEach((element) => {
            translateAttributes(element, language);
        });

        document.documentElement.lang = language === "ta" ? "ta" : "en";
        document.title = language === "ta" && titleTranslations[originalTitle]
            ? titleTranslations[originalTitle]
            : originalTitle;

        document.querySelectorAll("[data-language-toggle]").forEach((button) => {
            button.textContent = language === "ta" ? "English" : "தமிழ்";
            button.setAttribute("aria-label", language === "ta" ? "Switch to English" : "தமிழுக்கு மாற்று");
        });
    }

    const savedLanguage = localStorage.getItem("siteLanguage") || "en";
    applyLanguage(savedLanguage);

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
        button.addEventListener("click", () => {
            const nextLanguage = (localStorage.getItem("siteLanguage") || "en") === "ta" ? "en" : "ta";
            localStorage.setItem("siteLanguage", nextLanguage);
            applyLanguage(nextLanguage);
        });
    });
})();
