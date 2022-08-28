import React from "react";
import { CopyBlock, dracula, rainbow } from "react-code-blocks";

const AbTestSnippet = () => {
    return (
        <div>
            <h1 className="text-white text-4xl mb-6">Snippets</h1>
            <CopyBlock
                text={`import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";`}
                language="jsx"
                showLineNumbers={true}
                theme={rainbow}
            />;
        </div>
    )
}

export default AbTestSnippet