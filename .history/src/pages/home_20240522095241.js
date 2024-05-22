import React from "react";
import Progressbar from "../components/progressbar";
import Title from "../components/title";
import Gallery from "../components/gallery.js";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Footer from "../components/footer";
import JobHistory from "../components/jobHistory";
import { getAllskills, getCroTools, getOffices } from "../data/data.js";
import NavBar from "../components/NavBar.jsx";
import HeroBanner from "../components/heroBanner.jsx";

const Home = () => {
  const skills = getAllskills();
  const croTools = getCroTools();
  const offices = getOffices();
  return (
    <>
      <NavBar />
      <HeroBanner />
      <div className="mx-10">
        <div className="sm:w-5/5 lg:w-4/5 mx-auto grid grid-cols-4 gap-4 items-center">
          <img
            className="transition duration-0 hover:duration-150 ease-in-out mb-4"
            src=""
          />
          {offices.map((office, i) => (
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
