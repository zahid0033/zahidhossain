const abTastySnippetsData = [
    {
        fileName: "(Tracking) Element View On Screen",
        code:
            `function addScrollEvent(el) {
    document.addEventListener("scroll", function () {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        if (isVisible && !window.carouselViewed) {
            dataLayer.push({ 'event': 'event1_abTest', 'abTestCategory': 'ABTests', 'abTestAction': 'h061021HPCocktailCarousel', 'abTestLabel': 'h061021_ViewBlockCocktail' });
            window.carouselViewed = true;
        }
    })
}
`
    },
    {
        fileName: "Basic Structure",
        code:
            `import './styles/index.scss'; // If you don't code on cli, delete this line
/* DO NOT IMPORT ANYTHING */
var structure = {
    init: function () {
        this.mainJS();
        this.goalJS();
    },
    
    mainJS: function () {
        //For JS
    },
    goalJS: function () {
        //For JS
    },
    slider: function () {
        //For JS
    }
};

(function pollFor() {
    if (document.querySelector('menu')) {
        try {
            structure.init();
            console.log("Variation- A: 01");
        } catch (error) {
            console.log("Initialization error:", error);
        }
    } else {
        setTimeout(pollFor, 25);
    }
})();
`
    },
    {
        fileName: "Click anywhere except a specific div",
        code:
            `document.addEventListener('click', function (e) {
    var isClickInsideElement = document.querySelector('.box').contains(e.target);
    if (!isClickInsideElement) {
        // If the click is outside the box element, do something
    }
});`
    },
    {
        fileName: "Datalayer parameter",
        code:
            `window.dataLayer.push({
    event: 'trackEvent',
    eventCategory: 'ABtest',
    eventAction: 'SearchBar',
    eventLabel: 'search_CTA_click',
    nonInteraction: false
});`
    },
    {
        fileName: "Detect IOS Device",
        code:
            `(function iOS() {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
})();`
    }

]

export default abTastySnippetsData;