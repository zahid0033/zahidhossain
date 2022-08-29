import React, { useState } from "react";
import { CopyBlock, github, dracula } from "react-code-blocks"; //theme link: https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md

const AbTestSnippet = () => {
    const [clickedSnippetNumber, setClickedSnippetNumber] = useState(0)
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
        }
    ]
    return (
        <>
            <h1 className="text-white text-4xl mb-6">Snippets</h1>
            <div className="mx-16 px-16 grid grid-cols-4 gap-4">
                <div className="">
                    <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                        {
                            abTastySnippetsData.map((list, i) => (
                                <li className="cursor-pointer capitalize  block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" onClick={() => setClickedSnippetNumber(i)}>{list.fileName}</li>
                            ))
                        }

                    </ul>
                </div>
                <div className="col-span-3">
                    <CopyBlock
                        text={abTastySnippetsData[clickedSnippetNumber].code}
                        language="js"
                        showLineNumbers={false}
                        theme={dracula}
                    />;
                </div>

            </div>
        </>
    )
}

export default AbTestSnippet