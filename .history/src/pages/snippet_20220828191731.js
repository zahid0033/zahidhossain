import React from "react";
import { CopyBlock, github } from "react-code-blocks"; //theme link: https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md

const AbTestSnippet = () => {
    return (
        <div className="mx-10 grid grid-cols-3 gap-4">
            <div className="">
                files
            </div>
            <div className="col-span-2">
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