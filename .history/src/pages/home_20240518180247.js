import React from "react";
import Progressbar from "../components/progressbar";
import Title from "../components/title";
import Gallery from "../components/gallery.js";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import Footer from "../components/footer";
import JobHistory from "../components/jobHistory";
import { getAllskills, getCroTools, getOffices } from "../data/data.js";

const Home = () => {
  const skills = getAllskills();
  const croTools = getCroTools();
  const offices = getOffices();
  return (
    <>
      <div className="text-gray-500 flex px-10 grid sm:grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center flex-1 text-white flex-col lg:ml-40">
          <h1 className="text-3xl mb-5">Hello! I am</h1>
          <h1 className="text-amber-200 text-4xl font-bold tracking-widest uppercase mb-5">
            MD. Zahid Hossain
          </h1>
          <p className="text-xl mb-1">Software Engineer | CRO Developer</p>
          <p className="text-l mb-8">zahidhossain0022@gmail.com</p>
          <div className="resumeCta">
            {/* <button
              type="button"
              class="px-6 pt-2.5 pb-2 bg-orange-400 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="download"
                class="w-3 mr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                ></path>
              </svg>
              Download Resume
            </button> */}
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="relative">
            <img
              src="https://i.ibb.co/YQWhHGX/IMG-0946-1-removebg-preview.png"
              className="-skew-y-6 lg:-translate-y-4"
              alt=""
            />
            <div className="absolute bg-slate-50  absolute lg:top-80 md:top-56 top-48 md:right-80 sm:right-px p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white w-44 text-center">
              <h5 className="font-semibold">Web Developer</h5>
              <p className="text-sm text-slate-400 mt-1">
                3+ years of experience
              </p>
            </div>
            <div className="absolute bg-slate-50 left-2 bottom-12 p-2 absolute lg:bottom-20 md:bottom-10 bottom-2 ltr:md:-left-5 ltr:left-2 rtl:md:-right-5 rtl:right-2 rounded-lg shadow-md dark:shadow-gray-800 bg-white m-3 w-44 text-center">
              <h3 className="text-3xl font-medium mb-0 font-bold">600+</h3>
              <p>Project Completed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-4 -skew-y-6 block translate-y-px lg:block "></div>
      <div className="mx-10">
        <div className="sm:w-5/5 lg:w-4/5 mx-auto grid grid-cols-4 gap-4 items-center">
          {offices.map((office) => (
            <img
              className="transition duration-0 hover:duration-150 ease-in-out mb-4"
              src={office.logo}
              alt={office.title}
            />
          ))}
        </div>
        <Title text="Skills" />
        <div
          id="skills"
          className="w-4/5 mx-auto grid lg:grid-cols-2 sm:grid-cols-1 mb-10"
        >
          {skills.map((skill, i) => (
            <div className="flex grid-2 mb-6 lg:mx-5 items-center">
              <Progressbar
                skillName={skill.skillName}
                percentage={skill.percentage}
              />
            </div>
          ))}
        </div>
        <Title text="Expertise in CRO Tool" />
        <div className="sm:w-5/5 lg:w-4/5 lg:mx-auto grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center croTool py-10">
          {croTools.map((tool) => (
            <img
              className={`transition duration-0 hover:duration-150 ease-in-out mb-4 ${tool.title.toLowerCase()}`}
              src={tool.logo}
              alt={tool.title}
              style={{ width: tool.styleWidth }}
            />
          ))}
        </div>
        <Title text="Work History" />
        <JobHistory />
        <Title text="Work Samples" />
        <Gallery />
        <div className="contact fixed left-0 top-2/4 ">
          <div className="mx-auto  w-fit rounded-full py-2 bg-white shadow-lg shadow-blue-500/50">
            <a
              href="https://github.com/zahid0033?tab=repositories"
              className="transition ease-in-out delay-150 hover:-translate-y-1 scale-95 hover:scale-100 duration-500"
            >
              <AiFillGithub size={"2rem"} />
            </a>
            <a
              href="https://www.linkedin.com/in/zahid-hossain-dev/"
              target="blank"
            >
              <AiFillLinkedin size={"2rem"} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
