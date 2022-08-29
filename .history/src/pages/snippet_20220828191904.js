import React from "react";
import { CopyBlock, github } from "react-code-blocks"; //theme link: https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md

const AbTestSnippet = () => {
    return (
        <div className="mx-10 grid grid-cols-4 gap-4">
            <div className="">
                <ul className="list-none">
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                </ul>
            </div>
            <div className="col-span-3">
                <h1 className="text-white text-4xl mb-6">Snippets</h1>
                <CopyBlock
                    text={`
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
                `}
                    language="jsx"
                    showLineNumbers={true}
                    theme={github}
                />;
            </div>

        </div>
    )
}

export default AbTestSnippet