import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const AbTestSnippet = () => {
    return (
        <div>
            <CopyBlock
                text={code}
                language={language}
                showLineNumbers={showLineNumbers}
                theme={dracula}
                codeBlock
            />;
        </div>
    )
}

export default AbTestSnippet