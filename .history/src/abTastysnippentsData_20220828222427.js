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
    },
    {
        fileName: "Dynamic HTML Render",
        code:
            `var recommendationDiv = document.createElement('div');
var template =  
    '<div class="dy_unit dy_smart_object_1177373 dyother dyMonitor" data-dy-exp-id="1177373" data-dy-var-id="1177373" data-dy-ver-data="1407118::0:1637005445257:21332:26242:1:0:0" data-dy-att-method="0" data-dy-att-seq="26242" data-adid="smart_object_1177373||433|||">'+
        '<style rel="stylesheet"></style><div class="recs_15508236">'+
        '<div class="recs_15508236">'+
            '<span class="mini_cart_title_z">Add a Mini Tattoo Layer for $5</span>'+
            '<p class="mini_cart_code_z">Use Code <span>TATTOOMINI</span></p>'+
            '<div class="productsColumn_z"> '
            productDataFromSession.forEach(function (product) {
            template += 
                '<div class="miniCartContainers_z" data-pid="'+product.productId+'" >'+
                    '<a href="'+product.productLink+'" class="rec_item_15508236"> <img src='+product.productImg+'> </a>'+
                    '<div class="mini_cart_detailContainer">'+
                        '<div class="mini_cart_rec_name">'+product.productName+'</div>'+
                        '<div class="mini_cart_product_color">'+product.productColor+'</div>'+
                        '<div class="mini_rec_price rec_price"><span class="mini_cart_presentPrice_z">$5.00 <del class="mini_cart_rec_price_num">$'+product.productPrice+'.00</del></span></div>'+
                        '<div class="mini_cartBtnDiv_z"><span class="mini_cart_cartBtn_z">ADD TO BAG</span></div>'+
                    '</div>'+
                '</div>'
            })
        
        template += 
            '</div>'+
        '</div>'+
    '</div>;'
    
    recommendationDiv.innerHTML += template;`
    },
    {
        fileName: "Is Element Visible In View Port",
        code:
            `function isElementVisibleInViewport(el) {
    var top = el.getBoundingClientRect().top;
    var right = el.getBoundingClientRect().right;
    var bottom = el.getBoundingClientRect().bottom;
    var left = el.getBoundingClientRect().left;
    var innerWidth = window.innerWidth;
    var innerHeight = window.innerHeight;

    return ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
}`
    },
    {
        fileName: "KvdVegan Add To Cart",
        code:
            `var xhr = new XMLHttpRequest();
xhr.open("POST", 'https://www.kvdveganbeauty.com/on/demandware.store/Sites-KVD-Site/default/Cart-AddProduct?format=ajax', true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        app.minicart.refresh();
    }
}
xhr.send("availability=in-stock&Quantity=1&cartAction=add&pid=" + productCode);`
    }

]

export default abTastySnippetsData;