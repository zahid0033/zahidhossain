import React from "react";

function Progressbar(props) {
    return (
        <>
            <p className="text-white flex-1 text-center uppercase font-bold space-x-9">{props.skillName}</p>
            <div className="w-full bg-gray-200 rounded-full flex-1 h-max">
                <div className=" bg-amber-200 text-xs font-medium text-black-100 text-center p-0.5 leading-none rounded-l-full" style={{ width: props.percentage }}> {props.percentage} </div>
            </div>
        </>
    )
}

export default Progressbar