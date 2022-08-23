import React from "react"

function Home() {
    return (
        <div className="mx-10">
            <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8">
                <p className="text-3xl text-gray-700 font-bold mb-5">
                    Hello!
                </p>
                <p className="text-gray-500 text-lg">
                    React and Tailwind CSS in action
                </p>
            </div>
            <div className="container text-gray-500 flex mx-10">
                <div className="flex-1 text-white">
                    <h1 className="text-6xl">Hello !</h1>
                    <p className="text-6xl">Lorem ipsum Dolor</p>
                </div>
                <div className="flex-1 text-center">
                    <img className="max-w-full h-auto rounded-full" src="https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw9c230986/Y0998004/Y0998004_C099600456_E01_ZHC.jpg?sw=1200&sh=800" />
                    {/* <img src="https://avatars.githubusercontent.com/u/20461338?v=4" /> */}
                </div>
            </div>
        </div>
    )
}

export default Home;