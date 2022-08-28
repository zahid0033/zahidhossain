import React, { useState } from "react";
import { CopyBlock, github, dracula } from "react-code-blocks"; //theme link: https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md
import abTastySnippetsData from "../abTastysnippentsData";

const AbTestSnippet = () => {
    const [clickedSnippetNumber, setClickedSnippetNumber] = useState(0)

    return (
        <>
            <h1 className="text-white text-4xl mb-6">Snippets</h1>
            <div className="mx-16 px-16 grid grid-cols-4 gap-4">
                <div className="">
                    <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                        {
                            abTastySnippetsData.map((list, i) => {
                                return clickedSnippetNumber == i ? (
                                    <li className="block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400">{list.fileName}</li>
                                ) : (
                                    <li className="cursor-pointer capitalize  block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" onClick={() => setClickedSnippetNumber(i)}>{list.fileName}</li>
                                )

                            })
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