const abTastySnippetsData = [
  {
    fileName: "Basic Structure",
    code: `import './styles/index.scss'; // If you don't code on cli, delete this line
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
`,
  },
  {
    fileName: "Click anywhere except a specific div",
    code: `document.addEventListener('click', function (e) {
    var isClickInsideElement = document.querySelector('.box').contains(e.target);
    if (!isClickInsideElement) {
        // If the click is outside the box element, do something
    }
});`,
  },
  {
    fileName: "Detect IOS Device",
    code: `(function iOS() {
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
})();`,
  },
  {
    fileName: "Dynamic HTML Render",
    code: `var recommendationDiv = document.createElement('div');
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
    
    recommendationDiv.innerHTML += template;`,
  },
  {
    fileName: "Is Element Visible In View Port",
    code: `function isElementVisibleInViewport(el) {
    var top = el.getBoundingClientRect().top;
    var right = el.getBoundingClientRect().right;
    var bottom = el.getBoundingClientRect().bottom;
    var left = el.getBoundingClientRect().left;
    var innerWidth = window.innerWidth;
    var innerHeight = window.innerHeight;

    return ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
}`,
  },
  {
    fileName: "KvdVegan Add To Cart",
    code: `var xhr = new XMLHttpRequest();
xhr.open("POST", 'https://www.kvdveganbeauty.com/on/demandware.store/Sites-KVD-Site/default/Cart-AddProduct?format=ajax', true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        app.minicart.refresh();
    }
}
xhr.send("availability=in-stock&Quantity=1&cartAction=add&pid=" + productCode);`,
  },
  {
    fileName: "Rimowa add to cart",
    code: `function addToCartAPICall(pid, productsInBundle) {
        var dataToSend = {
            'pid': pid,
            'source': 'pdp',
            // 'DLObject%5Bname%5D': false,
            action: '',
            quantity: 1,
            options: '%5B%5D'
        }
        var dataEncoded = ''
        Object.entries(dataToSend).forEach(function ([key, value], index, array) {
            dataEncoded += key + '=' + value + ((index != array.length - 1) ? '&' : '');
        });
    
        var xhr_ = new XMLHttpRequest();
        var xhr_url = document.querySelector('input.js-add-to-cart-url').value;
        // xhr_.open("POST", 'https://www.rimowa.com/gb/en/addproduct?format=ajax', true);
        xhr_.open("POST", xhr_url + '?format=ajax', true);
        xhr_.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr_.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                var response = JSON.parse(this.response);
                var xhr__ = new XMLHttpRequest();
                xhr__.open("POST", response.url + '?format=ajax', true);
                xhr__.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                var dataToSend_ = 'pid=' + response.pid + '&' +
                    'source=pdp&' +
                    'action=&' +
                    'DLQuantity=1&' +
                    (function () {
                        var str = '';
                        Object.entries(response['DLObject']).forEach(function ([key, value], index, array) {
                            str += 'DLObject[' + key + ']=' + value + ((index != array.length - 1) ? '&' : '');
                        });
                        return str;
                    })();
                xhr__.onreadystatechange = function () {
                    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                        productsInBundle[pid] = true;
                        var allProductsAddedToBundle = Object.values(productsInBundle).every(function (val) {
                            return val;
                        });
                        allProductsAddedToBundle && bundleCart.addCurrentProduct();
                        console.log('Product --' + pid + '-- added to cart! ------------->');
                    }
                }
                xhr__.send(dataToSend_);
            }
        }
        xhr_.send(dataEncoded);
    }`,
  },
  {
    fileName: "Match Media",
    code: `let media = window.matchMedia('(max-width: 771px)');
if (media.matches) {
    // code here if matches
} else {
    // code here if doesn't match
}`,
  },
  {
    fileName: "Network Call Check",
    code: `(function () {
    var send = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function () {
        this.addEventListener('load', function (e) {
            if (this.responseURL.match(/(Cart-MiniCart|Cart-AddProduct)/i)) {
                setTimeout(function(){
                    // code in here
                },0)
            }
        });
        return send.apply(this, arguments);
    };
})();`,
  },
  {
    fileName: "Show Div Once In A Day",
    code: `function checkPopInTime() {
    if (localStorage.last) {
        if ((localStorage.last - Date.now()) / (1000 * 60 * 60 * 24 * 1) >= 1) { //Date.now() is in milliseconds, so convert it all to days, and if it's more than 1 day, show the div
            localStorage.last = Date.now(); //Reset your timer
            document.querySelector('.box').style.display = 'block';
        }
    }
    else {
        localStorage.last = Date.now();
        document.querySelector('.box').style.display = 'block';
    }
}`,
  },
  {
    fileName: "SPA on url change content refresh",
    code: `(function (history) {
    if (window.URL_CHANGE_LISTENER_ADDED) {
        return;
    }
    var pushState = history.pushState;
    history.pushState = function (state) {
        console.log('SPA Pushed!');
        document.querySelector('.pdpBar__buttons__add__actions+[data-dy-embedded-object="true"]') &&
            document.querySelector('.pdpBar__buttons__add__actions+[data-dy-embedded-object="true"]').remove();
        DY.API('spa', {
            context: DY.recommendationContext,
            url: window.location.href,
            countAsPageview: true
        });
        return pushState.apply(history, arguments);
    };
    window.URL_CHANGE_LISTENER_ADDED = true;
})(window.history);`,
  },
  {
    fileName: "Xmlhttpsrequest",
    code: `var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = function () {
    if (this.status >= 200 && this.status < 300) {
        var availableContainer = ((new DOMParser()).parseFromString(xhr.response, 'text/html')).querySelector('.availability.product-availability');
    }
};
xhr.send();`,
  },
  {
    fileName: "carousel configaration",
    code: `// =========== slick slider ===========

// slick slider resize on reposition
$('.slider-class').slick('setPosition');

// =========== owl carousel =============

// owl carousel resize on reposition
owl.data()['owl.carousel'].trigger('refresh.owl.carousel');

$('.homeBanner').trigger('refresh.owl.carousel');

// stop autoplay 
owl.on('changed.owl.carousel', function (event) {
    owl.trigger('stop.owl.autoplay');
});`,
  },
  {
    fileName: "Url change detect",
    code: `(function urlChangeDetect() {
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      structure.init();
      console.log("DY_mutation_observer");
    }
  }).observe(document.querySelector("body"), { subtree: true, childList: true });
})();`,
  },
  {
    fileName: "Script Load detect",
    code: `var injectScript = (src) =>
    new Promise((resolve, reject) => {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", resolve);
        script.addEventListener("error", (e) => reject(e));
        document.head.appendChild(script);
    });
    injectScript("https://unpkg.com/swiper@8/swiper-bundle.min.js")
    .then(() => {
        var swiper = new Swiper(".recently-viewed-modal", {
        slidesPerView: 2,
        breakpoints: {
            1024: { slidesPerView: 4, spaceBetween: 24 },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        });
    })
    .catch((error) => {
        console.error(error);
});
`,
  },
  {
    fileName: "Replace an element (Slick Slider)",
    code: `var videoContent = "<div>content..</div>";
$(".pdp-img-carousel").slick("slickRemove", videoIndex, false);
$(".pdp-img-carousel").slick("slickAdd", videoContent, 3, true);      
      `,
  },
];

export default abTastySnippetsData;
