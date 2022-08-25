import React from "react";
import Progressbar from "../components/progressbar";
import Title from "../components/title";
import Gallery from "../components/gallery.js";

function Home() {
    var skills = [
        {
            skillName: "React",
            percentage: "80%"
        },
        {
            skillName: "Node",
            percentage: "70%"
        },
        {
            skillName: "Laravel",
            percentage: "60%"
        },
        {
            skillName: "Docker",
            percentage: "50%"
        },
        {
            skillName: "HTML",
            percentage: "95%"
        },
        {
            skillName: "CSS",
            percentage: "90%"
        },

        {
            skillName: "React",
            percentage: "80%"
        }
    ]
    return (
        <div className="mx-10">
            <div className="text-gray-500 flex mx-10 mt-5 mb-5">
                <div className="flex justify-center flex-1 text-white flex-col">
                    <h1 className="text-6xl mb-5">Hello !</h1>
                    <Title text="Md. Zahid Hossain" />
                    <p className="text-4xl mb-8">Software Engineer</p>
                    <div className="resumeCta">
                        <button type="button" class="px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                class="w-3 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
                                </path>
                            </svg>
                            Button
                        </button>
                    </div>
                </div>
                <div className="flex-1 text-center">
                    {/* <img className="max-w-full h-auto rounded-full" src="https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw9c230986/Y0998004/Y0998004_C099600456_E01_ZHC.jpg?sw=1200&sh=800" /> */}
                    <img src="https://i.ibb.co/YQWhHGX/IMG-0946-1-removebg-preview.png" />
                </div>
            </div>
            <div className="w-4/5 mx-auto grid grid-cols-4 gap-4 items-center">
                <img className="mb-4" src="https://dreamlpg.com/assets/images/logo/logo2.png" alt="" />
                <img className="mb-4" src="https://i.ibb.co/Cw4cFTr/download.png" alt="" />
                <img className="mb-4" src="https://i.ibb.co/682Pkby/1640089257430-removebg-preview.png" alt="" />
                <img className="mb-4" src="https://i.ibb.co/SJ0mQ3y/Echo-Logyx-logo-RGB-white-1-6.png" alt="" />
            </div>
            <Title text="Skills" />
            <div id="skills" className="grid grid-cols-2 mb-10">
                {
                    skills.map((skill, i) => (
                        <div className="flex grid-2 mb-6 mx-5 items-center">
                            <Progressbar skillName={skill.skillName} percentage={skill.percentage} />
                        </div>
                    ))
                }
            </div>
            <Title text="Work Samples" />
            <Gallery />
            <Title text="Work History" />
        </div>
    )
}

export default Home;