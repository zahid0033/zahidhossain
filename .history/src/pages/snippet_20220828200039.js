import React, { useState } from "react";
import { CopyBlock, github } from "react-code-blocks"; //theme link: https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md

const AbTestSnippet = () => {
    const [clickedSnippetNumber, setClickedSnippetNumber] = useState(0)
    const abTastySnippetsData = [
        {
            fileName: "home.js",
            code: `import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";`
        },
        {
            fileName: "test.js",
            code: `import React from "react";
    import { CopyBlock, github } from "react-code-blocks";`
        }
    ]
    console.log(clickedSnippetNumber)
    return (
        <>
            <h1 className="text-white text-4xl mb-6">Snippets</h1>
            <div className="mx-10 grid grid-cols-4 gap-4">
                <div className="">
                    <ul className="list-none ">
                        {
                            abTastySnippetsData.map((list, i) => (
                                <><li className="bg-slate-100 mb-1" onClick={() => setClickedSnippetNumber(i)}>{list.fileName}</li></>
                            ))
                        }

                    </ul>
                </div>
                <div className="col-span-3">
                    <CopyBlock
                        text={abTastySnippetsData[clickedSnippetNumber].code}
                        language="js"
                        showLineNumbers={true}
                        theme={github}
                    />;
                </div>

            </div>
        </>
    )
}

export default AbTestSnippet