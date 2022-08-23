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
            <div className="text-gray-500 flex mx-10">
                <div className="flex-1 text-white">
                    <h1 className="text-6xl mb-5">Hello !</h1>
                    <p className="text-5xl mb-8">Lorem ipsum Dolor</p>
                    <button type="button" class="inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                            class="w-3 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
                            </path>
                        </svg>
                        Button
                    </button>
                </div>
                <div className="flex-1 text-center">
                    <img className="max-w-full h-auto rounded-full" src="https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw9c230986/Y0998004/Y0998004_C099600456_E01_ZHC.jpg?sw=1200&sh=800" />
                    {/* <img src="https://avatars.githubusercontent.com/u/20461338?v=4" /> */}
                </div>
            </div>
            <div className="flex">
                <img className="flex-1 p-10" src="data:image/png;base64,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" />
                <img className="flex-1" src="data:image/png;base64,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" />
                <img className="flex-1" src="data:image/png;base64,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" />
                <img className="flex-1" src="data:image/png;base64,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" />
            </div>
        </div>
    )
}

export default Home;