import React from "react";

function Title(props) {
    return (
        <h1 className="text-amber-200 text-3xl font-bold tracking-widest uppercase mb-10"  id="cro">
            {props.text}
        </h1>
    )
}

export default Title;