import React, { useState } from "react";
import { CopyBlock, github, dracula } from "react-code-blocks"; //theme link: https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md
import abTastySnippetsData from "../data/abTastysnippentsData";
import Footer from "../components/Footer";

const Snippet = () => {
  const [clickedSnippetNumber, setClickedSnippetNumber] = useState(0);
  const [showLineNumber, setShowLineNumbers] = useState(false);
  const [theme, setTheme] = useState("github");

  return (
    <>
      <h1 className="mx-2 px-2 sm:mx-16 sm:px-16 text-white text-4xl mb-10 mt-12 ">
        Snippets
      </h1>
      <p className="mx-2 px-2 sm:mx-16 sm:px-16 text-4xl mb-10 mt-12 text-center text-sky-500 capitalize">
        {abTastySnippetsData[clickedSnippetNumber].fileName}
      </p>
      <div className="mx-2 px-2 sm:mx-16 sm:px-16 grid grid-cols-4 gap-4">
        <div>
          <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
            {abTastySnippetsData.map((list, i) => {
              return clickedSnippetNumber === i ? (
                <li className="cursor-pointer capitalize block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400">
                  {list.fileName}
                </li>
              ) : (
                <li
                  className="cursor-pointer capitalize block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  onClick={() => setClickedSnippetNumber(i)}
                >
                  {list.fileName}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-3">
          <label
            for="default-toggle"
            class="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id="default-toggle"
              class="sr-only peer"
              checked={showLineNumber}
              onClick={() => setShowLineNumbers(!showLineNumber)}
            />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Show number Lines
            </span>
          </label>
          <label
            for="themeToogle"
            class="inline-flex relative items-center cursor-pointer ml-8"
          >
            <input
              type="checkbox"
              value=""
              id="themeToogle"
              class="sr-only peer"
              onClick={() => {
                theme === "dracula" ? setTheme("github") : setTheme("dracula");
              }}
            />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Dracula
            </span>
          </label>
          <CopyBlock
            text={abTastySnippetsData[clickedSnippetNumber].code}
            language="js"
            showLineNumbers={showLineNumber}
            theme={theme === "dracula" ? dracula : github}
          />
          ;
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Snippet;
