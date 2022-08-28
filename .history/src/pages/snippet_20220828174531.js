import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const AbTestSnippet = () => {
    return (
        <div>
            <CopyBlock
                text={`import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";`}
                language="jsx"
                showLineNumbers={true}
                theme={dracula}
            />;
        </div>
    )
}

export default AbTestSnippet