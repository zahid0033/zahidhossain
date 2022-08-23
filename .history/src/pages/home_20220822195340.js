import React from "react"
import Title from "../components/title";

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
            <Title />
            <div className="grid grid-cols-4 gap-4 items-center">
                <img className="mb-4" src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0" />
                <img className="mb-4" src="https://graphicriver.img.customer.envatousercontent.com/files/382877628/Crown+Logo_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=d23f1316ce57be0eeda87d7735e77ede" />
                <img className="mb-4" src="https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.webp?v=1.0.0.2" />
                <img className="mb-4" src="https://pbs.twimg.com/profile_images/1154314010252206080/eAG6xnof_400x400.jpg" />
            </div>
        </div>
    )
}

export default Home;