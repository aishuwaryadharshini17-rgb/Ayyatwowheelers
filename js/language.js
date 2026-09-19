(function () {
    const translations = {
        "Home": "முகப்பு",
        "Service": "சேவை",
        "Services": "சேவைகள்",
        "About": "எங்களை பற்றி",
        "Gallery": "புகைப்படங்கள்",
        "Workshop Visual Diary": "ஒர்க்ஷாப் காட்சி டைரி",
        "Service bays, brand work, repairs, and delivery-ready bikes from our daily workshop routine.": "எங்கள் தினசரி ஒர்க்ஷாப் பணிகளில் உள்ள சேவை பகுதி, பிராண்டு வேலை, பழுது வேலை, மற்றும் டெலிவரிக்கு தயாரான பைக்குகள்.",
        "All": "அனைத்தும்",
        "Repair": "பழுது",
        "Brands": "பிராண்டுகள்",
        "Delivery": "டெலிவரி",
        "View More": "மேலும் பார்க்க",
        "Previous gallery image": "முந்தைய கேலரி படம்",
        "Next gallery image": "அடுத்த கேலரி படம்",
        "Contact": "தொடர்பு",
        "Admin Login": "அட்மின் உள்நுழைவு",
        "Book a Service": "சேவை பதிவு செய்யவும்",
        "Book Service": "சேவை பதிவு",
        "Explore Services": "சேவைகளை பார்க்கவும்",
        "Track Service": "சேவையை கண்காணிக்கவும்",
        "Call us": "அழைக்கவும்",
        "Call Now": "இப்போது அழைக்கவும்",
        "Ayya Two Wheelers Workshop": "அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்",
        "About Ayya Two Wheelers": "அய்யா டூ வீலர்ஸ் பற்றி",
        "Expert Care For Your Bike": "உங்கள் பைக்கிற்கு நிபுணர் பராமரிப்பு",
        "Fast, reliable two wheeler service in Madurai with trusted mechanics, clear pricing, and careful support for every ride.": "மதுரையில் நம்பகமான மெக்கானிக்குகள், தெளிவான விலை, மற்றும் ஒவ்வொரு பயணத்திற்கும் கவனமான ஆதரவுடன் வேகமான டூ வீலர் சேவை.",
        "Brands We Service": "நாங்கள் சேவை செய்யும் பிராண்டுகள்",
        "Workshop Services": "ஒர்க்ஷாப் சேவைகள்",
        "General Service": "பொது சேவை",
        "Oil change, chain care, brakes, filters, lights, and full safety checks.": "ஆயில் மாற்றம், செயின் பராமரிப்பு, பிரேக், ஃபில்டர், லைட், மற்றும் முழு பாதுகாப்பு சோதனை.",
        "Engine & Tune-Up": "எஞ்சின் மற்றும் டியூன்-அப்",
        "Smooth pickup, stable idle, better mileage, and careful fault diagnosis.": "சீரான பிக்கப், நிலையான ஐடில், சிறந்த மைலேஜ், மற்றும் கவனமான கோளாறு கண்டறிதல்.",
        "Electrical Work": "எலக்ட்ரிக்கல் வேலை",
        "Battery, wiring, starter, lamps, horn, and charging system support.": "பேட்டரி, வயரிங், ஸ்டார்டர், லைட், ஹார்ன், மற்றும் சார்ஜிங் சிஸ்டம் ஆதரவு.",
        "Modification": "மாடிபிகேஷன்",
        "Custom fitting, accessory setup, handlebar changes, lights & upgrades.": "கஸ்டம் ஃபிட்டிங், ஆக்சஸரி அமைப்பு, ஹேண்டில்பார் மாற்றம், லைட் மற்றும் மேம்பாடுகள்.",
        "Painting": "பெயிண்டிங்",
        "Bike touch-ups, panel painting, color refresh, and clean finishing work.": "பைக் டச்-அப், பேனல் பெயிண்டிங், நிற புதுப்பிப்பு, மற்றும் சுத்தமான ஃபினிஷிங் வேலை.",
        "Water Wash": "வாட்டர் வாஷ்",
        "Exterior wash, dust removal, wheel cleaning, and neat detailing every ride.": "வெளிப்புற வாஷ், தூசி நீக்கம், வீல் கிளீனிங், மற்றும் ஒவ்வொரு பயணத்திற்கும் சுத்தமான டீடெய்லிங்.",
        "Why Ayya Two wheelers?": "ஏன் அய்யா டூ வீலர்ஸ்?",
        "Reliable service for every ride.": "ஒவ்வொரு பயணத்திற்கும் நம்பகமான சேவை.",
        "We keep the workshop experience simple: skilled hands, clear updates, quality parts, and service you can trust before every trip.": "திறமையான வேலை, தெளிவான அப்டேட், தரமான பாகங்கள், மற்றும் ஒவ்வொரு பயணத்துக்கும் முன் நம்பக்கூடிய சேவையுடன் ஒர்க்ஷாப் அனுபவத்தை எளிமையாக வைத்திருக்கிறோம்.",
        "Experienced Mechanics": "அனுபவமுள்ள மெக்கானிக்குகள்",
        "Transparent Pricing": "தெளிவான விலை",
        "Quality Spare Parts": "தரமான ஸ்பேர் பாகங்கள்",
        "Fast & Reliable Service": "வேகமான மற்றும் நம்பகமான சேவை",
        "Customer Satisfaction": "வாடிக்கையாளர் திருப்தி",
        "Need quick bike service in Madurai?": "மதுரையில் உடனடி பைக் சேவை வேண்டுமா?",
        "Call us for service timing, repair estimates, and workshop directions.": "சேவை நேரம், பழுது செலவு மதிப்பீடு, மற்றும் ஒர்க்ஷாப் வழிகாட்டுதலுக்கு அழைக்கவும்.",
        "Call 7540081247": "7540081247 அழைக்கவும்",
        "Built on Trust. Driven by Experience.": "நம்பிக்கையில் உருவானது. அனுபவத்தால் முன்னேறுகிறது.",
        "Professional two-wheeler service, repair and maintenance focused on keeping your ride reliable, smooth and road-ready.": "உங்கள் வாகனம் நம்பகமாகவும், சீராகவும், சாலைக்கு தயாராகவும் இருக்க தொழில்முறை டூ வீலர் சேவை, பழுது, மற்றும் பராமரிப்பு.",
        "Our Mission": "எங்கள் நோக்கம்",
        "Service with honest workmanship.": "நேர்மையான வேலைப்பாடுடன் சேவை.",
        "To provide dependable two-wheeler service with honest workmanship, quality care and customer-first service.": "நேர்மையான வேலைப்பாடு, தரமான பராமரிப்பு, மற்றும் வாடிக்கையாளர் முதன்மை சேவையுடன் நம்பகமான டூ வீலர் சேவை வழங்குவது.",
        "Opening Time": "திறக்கும் நேரம்",
        "Weekly Service": "வாராந்திர சேவை",
        "Multi Brand": "பல பிராண்டுகள்",
        "Bike Support": "பைக் ஆதரவு",
        "Our Services": "எங்கள் சேவைகள்",
        "Complete Two Wheeler Care": "முழுமையான டூ வீலர் பராமரிப்பு",
        "From routine maintenance to fault finding, we handle daily-use bikes and scooters with clear communication and careful workmanship.": "வழக்கமான பராமரிப்பிலிருந்து கோளாறு கண்டறிதல் வரை, தினசரி பயன்பாட்டு பைக்குகள் மற்றும் ஸ்கூட்டர்களை தெளிவான தகவலுடனும் கவனமான வேலைப்பாடுடனும் கையாள்கிறோம்.",
        "Oil & Filter Change": "ஆயில் மற்றும் ஃபில்டர் மாற்றம்",
        "Engine oil, air filter, oil filter, and basic running condition inspection.": "எஞ்சின் ஆயில், ஏர் ஃபில்டர், ஆயில் ஃபில்டர், மற்றும் அடிப்படை ஓட்ட நிலை சோதனை.",
        "Brakes, clutch, chain, cables, lights, tyre pressure, and safety checks.": "பிரேக், கிளட்ச், செயின், கேபிள்கள், லைட், டயர் அழுத்தம், மற்றும் பாதுகாப்பு சோதனைகள்.",
        "Battery & Electrical": "பேட்டரி மற்றும் எலக்ட்ரிக்கல்",
        "Battery testing, charging issues, switches, lamps, horn, and wiring repairs.": "பேட்டரி சோதனை, சார்ஜிங் பிரச்சனை, ஸ்விட்ச், லைட், ஹார்ன், மற்றும் வயரிங் பழுது.",
        "Engine Tune-Up": "எஞ்சின் டியூன்-அப்",
        "Idle tuning, pickup improvement, mileage support, and noise diagnosis.": "ஐடில் டியூனிங், பிக்கப் மேம்பாடு, மைலேஜ் ஆதரவு, மற்றும் சத்தம் கண்டறிதல்.",
        "Brake Service": "பிரேக் சேவை",
        "Brake shoe or pad replacement, lever adjustment, and road-ready checks.": "பிரேக் ஷூ அல்லது பேட் மாற்றம், லீவர் அட்ஜஸ்ட்மெண்ட், மற்றும் சாலை தயார்நிலை சோதனை.",
        "Repair Work": "பழுது வேலை",
        "Practical fixes for breakdowns, worn parts, leaks, vibration, and daily ride issues.": "பிரேக் டவுன், தேய்ந்த பாகங்கள், லீக், அதிர்வு, மற்றும் தினசரி பயண பிரச்சனைகளுக்கான நடைமுறை சரிசெய்தல்.",
        "Ready for service?": "சேவைக்கு தயாரா?",
        "Your bike deserves the right care.": "உங்கள் பைக்கிற்கு சரியான பராமரிப்பு தேவை.",
        "Book your service and keep your ride ready for the road. Workshop booking support is available within 2 km around our location.": "உங்கள் சேவையை பதிவு செய்து, உங்கள் வாகனத்தை சாலைக்கு தயாராக வைத்திருங்கள். எங்கள் இடத்திலிருந்து 2 கி.மீ. சுற்றளவில் பதிவு ஆதரவு கிடைக்கும்.",
        "Booking": "பதிவு",
        "Book a service slot.": "சேவை நேரத்தை பதிவு செய்யுங்கள்.",
        "Share your bike details and preferred timing. Booking support is available within 2 km around our workshop location.": "உங்கள் பைக் விவரங்களையும் விருப்பமான நேரத்தையும் பகிரவும். எங்கள் ஒர்க்ஷாப் இடத்திலிருந்து 2 கி.மீ. சுற்றளவில் பதிவு ஆதரவு கிடைக்கும்.",
        "Available for customers within 2 km of Jeyam complex, Podhumbu main road, Prc colony 2 street, Madurai-18.": "ஜெயம் காம்ப்ளக்ஸ், பொதும்பு மெயின் ரோடு, PRC காலனி 2வது தெரு, மதுரை-18 இடத்திலிருந்து 2 கி.மீ. உள்ள வாடிக்கையாளர்களுக்கு கிடைக்கும்.",
        "Your name": "உங்கள் பெயர்",
        "Full name": "முழு பெயர்",
        "Phone number": "தொலைபேசி எண்",
        "Bike / scooter model": "பைக் / ஸ்கூட்டர் மாடல்",
        "Bike or scooter model": "பைக் அல்லது ஸ்கூட்டர் மாடல்",
        "Pickup location within 2 km": "2 கி.மீ. உள்ள பிக்கப் இடம்",
        "Preferred service": "விருப்பமான சேவை",
        "General service": "பொது சேவை",
        "Oil change": "ஆயில் மாற்றம்",
        "Brake service": "பிரேக் சேவை",
        "Electrical repair": "எலக்ட்ரிக்கல் பழுது",
        "Engine repair": "எஞ்சின் பழுது",
        "Service type": "சேவை வகை",
        "Repair work": "பழுது வேலை",
        "Electrical work": "எலக்ட்ரிக்கல் வேலை",
        "Engine tune-up": "எஞ்சின் டியூன்-அப்",
        "Bike model and service details": "பைக் மாடல் மற்றும் சேவை விவரம்",
        "Service details": "சேவை விவரம்",
        "Preferred date, time, and issue": "விருப்பமான தேதி, நேரம், மற்றும் பிரச்சனை",
        "Request Booking": "பதிவு கோரிக்கை",
        "Send Enquiry": "விசாரணை அனுப்பவும்",
        "Visit or call the workshop.": "ஒர்க்ஷாப் வரவும் அல்லது அழைக்கவும்.",
        "Location": "இடம்",
        "Find Ayya Two Wheelers Workshop": "அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப் இடத்தை காண்க",
        "Jeyam complex, Podhumbu main road, Prc colony 2 street, Madurai-18": "ஜெயம் காம்ப்ளக்ஸ், பொதும்பு மெயின் ரோடு, PRC காலனி 2வது தெரு, மதுரை-18",
        "Mon-Sat: 9.30 AM - 9.30 PM": "திங்கள்-சனி: காலை 9.30 - இரவு 9.30",
        "Use My Location": "என் இருப்பிடத்தை பயன்படுத்து",
        "Tap the button and allow location permission to open directions from your place.": "பொத்தானை தட்டி, உங்கள் இடத்திலிருந்து வழித்தடம் திறக்க இருப்பிட அனுமதி வழங்கவும்.",
        "Workshop location map": "ஒர்க்ஷாப் இட வரைபடம்",
        "Ayya Two Wheelers Workshop location on Google Maps": "Google Maps-ல் அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப் இடம்",
        "Workshop Glimpses": "ஒர்க்ஷாப் காட்சிகள்",
        "A quick look at the service space, bikes, and brand work handled at Ayya Two Wheelers Workshop.": "அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப் சேவை இடம், பைக்குகள், மற்றும் பிராண்டு வேலைகளின் ஒரு சிறிய பார்வை.",
        "Workshop service photo": "ஒர்க்ஷாப் சேவை படம்",
        "Two wheeler maintenance photo": "டூ வீலர் பராமரிப்பு படம்",
        "Bike repair photo": "பைக் பழுது படம்",
        "Workshop bike photo": "ஒர்க்ஷாப் பைக் படம்",
        "TVS bike service": "TVS பைக் சேவை",
        "KTM bike service": "KTM பைக் சேவை",
        "Service Moments": "சேவை தருணங்கள்",
        "From check-in to delivery, every bike gets careful attention.": "செக்-இன் முதல் டெலிவரி வரை, ஒவ்வொரு பைக்கிற்கும் கவனமான பராமரிப்பு கிடைக்கும்.",
        "Initial Inspection": "ஆரம்ப சோதனை",
        "We check the bike condition, listen to the issue, and explain the service clearly before work starts.": "வேலை தொடங்குவதற்கு முன் பைக் நிலையை சரிபார்த்து, பிரச்சனையை கேட்டு, சேவையை தெளிவாக விளக்குகிறோம்.",
        "Skilled Repair": "திறமையான பழுது வேலை",
        "Mechanical, electrical, brake, and general service work is handled with practical care and quality parts.": "மெக்கானிக்கல், எலக்ட்ரிக்கல், பிரேக், மற்றும் பொது சேவை வேலைகள் நடைமுறை கவனத்துடனும் தரமான பாகங்களுடனும் செய்யப்படும்.",
        "Ready Delivery": "தயார் டெலிவரி",
        "Final checks help make sure your two wheeler is clean, smooth, and ready for the road.": "இறுதி சோதனைகள் உங்கள் டூ வீலர் சுத்தமாகவும், சீராகவும், சாலைக்கு தயாராகவும் இருப்பதை உறுதி செய்ய உதவும்.",
        "Trusted By Local Riders": "உள்ளூர் பயணிகள் நம்பும் சேவை",
        "Clear updates, practical pricing, and dependable service for bikes and scooters.": "பைக்குகள் மற்றும் ஸ்கூட்டர்களுக்கு தெளிவான அப்டேட், நடைமுறை விலை, மற்றும் நம்பகமான சேவை.",
        "Good service and quick delivery. They explained the repair before starting.": "நல்ல சேவை மற்றும் விரைவான டெலிவரி. தொடங்குவதற்கு முன் பழுது விவரத்தை விளக்கினர்.",
        "My scooter pickup improved after service. Friendly team and reasonable cost.": "சேவைக்குப் பிறகு என் ஸ்கூட்டர் பிக்கப் மேம்பட்டது. நட்பான குழு மற்றும் நியாயமான செலவு.",
        "Helpful workshop for regular maintenance. Brake and oil service was neat.": "வழக்கமான பராமரிப்புக்கு உதவும் ஒர்க்ஷாப். பிரேக் மற்றும் ஆயில் சேவை நன்றாக இருந்தது.",
        "Madurai's trusted two wheeler service workshop. We make bike servicing simple, transparent, and reliable.": "மதுரையின் நம்பகமான டூ வீலர் சேவை ஒர்க்ஷாப். பைக் சேவையை எளிமையாகவும், தெளிவாகவும், நம்பகமாகவும் செய்கிறோம்.",
        "Quick Links": "விரைவு இணைப்புகள்",
        "Support": "ஆதரவு",
        "Privacy Policy": "தனியுரிமை கொள்கை",
        "Terms of Service": "சேவை விதிமுறைகள்",
        "Return Policy": "திரும்பப் பெறும் கொள்கை",
        "Contact Us": "எங்களை தொடர்பு கொள்ள",
        "Facebook": "பேஸ்புக்",
        "Instagram": "இன்ஸ்டாகிராம்",
        "Twitter": "ட்விட்டர்",
        "YouTube": "யூடியூப்",
        "WhatsApp": "வாட்ஸ்அப்",
        "© 2026 Ayya Two Wheelers Workshop. All rights reserved.": "© 2026 அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    };

    const titleTranslations = {
        "Ayya Two Wheelers Workshop": "அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்",
        "About | Ayya Two Wheelers Workshop": "எங்களை பற்றி | அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்",
        "Services | Ayya Two Wheelers Workshop": "சேவைகள் | அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்",
        "Contact | Ayya Two Wheelers Workshop": "தொடர்பு | அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்",
        "Book Service | Ayya Two Wheelers Workshop": "சேவை பதிவு | அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்",
        "Gallery | Ayya Two Wheelers Workshop": "புகைப்படங்கள் | அய்யா டூ வீலர்ஸ் ஒர்க்ஷாப்"
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

        ["placeholder", "aria-label", "alt", "title"].forEach((attribute) => {
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

    function updateLanguageButton(language) {
        document.querySelectorAll("[data-language-toggle]").forEach((button) => {
            button.textContent = language === "ta" ? "EN" : "TN";
            button.setAttribute("aria-label", language === "ta" ? "Switch to English" : "தமிழுக்கு மாற்று");
            button.setAttribute("title", language === "ta" ? "Switch to English" : "தமிழுக்கு மாற்று");
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
        document.querySelectorAll("[placeholder], [aria-label], [title], img[alt]").forEach((element) => {
            translateAttributes(element, language);
        });

        document.documentElement.lang = language === "ta" ? "ta" : "en";
        document.title = language === "ta" && titleTranslations[originalTitle]
            ? titleTranslations[originalTitle]
            : originalTitle;
        updateLanguageButton(language);
    }

    const savedLanguage = localStorage.getItem("siteLanguage") || "en";
    applyLanguage(savedLanguage);

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
        button.addEventListener("click", () => {
            const currentLanguage = localStorage.getItem("siteLanguage") || "en";
            const nextLanguage = currentLanguage === "ta" ? "en" : "ta";
            localStorage.setItem("siteLanguage", nextLanguage);
            applyLanguage(nextLanguage);
        });
    });
})();
