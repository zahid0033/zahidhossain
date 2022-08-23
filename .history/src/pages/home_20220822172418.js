import React from "react"

function Home() {
    return (
        <div className="">
            <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <p className="text-3xl text-gray-700 font-bold mb-5">
                    Welcome!
                </p>
                <p className="text-gray-500 text-lg">
                    React and Tailwind CSS in action
                </p>
            </div>
            <div className="container text-gray-500">
                <div>
                    <h1>I am web developer</h1>
                </div>
                <div>
                    <p>Javascript</p>
                </div>
            </div>
        </div>
    )
}

export default Home;