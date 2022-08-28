import React from "react";
import { CopyBlock, github } from "react-code-blocks"; //theme link: https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md

const AbTestSnippet = () => {
    return (
        <>
            <h1 className="text-white text-4xl mb-6">Snippets</h1>
            <div className="mx-10 grid grid-cols-4 gap-4">
                <div className="">
                    <ul className="list-none bg-slate-100">
                        <li>home page</li>
                        <li>media Query</li>
                        <li>homepage</li>
                        <li>homepage</li>
                    </ul>
                </div>
                <div className="col-span-3">
                    <CopyBlock
                        text={
                            `import React from "react";
    import { CopyBlock, dracula } from "react-code-blocks";                `}
                        language="jsx"
                        showLineNumbers={true}
                        theme={github}
                    />;
                </div>

            </div>
        </>
    )
}

export default AbTestSnippet