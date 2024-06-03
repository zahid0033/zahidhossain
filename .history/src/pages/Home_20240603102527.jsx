import React from "react";
import Progressbar from "../components/Progressbar.jsx";
import Title from "../components/Title.jsx";
import Gallery from "../components/Gallery.jsx";
import Footer from "../components/Footer.jsx";
import JobHistory from "../components/JobHistory.jsx";
import { getAllskills, getCroTools, getOffices } from "../data/data.js";
import NavBar from "../components/NavBar.jsx";
import HeroBanner from "../components/heroBanner.jsx";
import FloatingContact from "../components/FloatingContact.jsx";

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
            src=" "
            alt=""
          />

          {offices.map((office, i) => (
            <img
              className="transition duration-0 hover:duration-150 ease-in-out mb-4"
              src={office.logo}
              alt={office.title}
              key={i}
            />
          ))}
        </div>
        {/* <Title text="Skills" />
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
        </div> */}

        <Title text="Work History" />
        <JobHistory offices={offices} />

        <Title text="Expertise in CRO Tool" />
        <div className="sm:w-5/5 lg:w-4/5 lg:mx-auto grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center croTool py-10">
          {croTools.map((tool,i) => (
            <img
              className={`transition duration-0 hover:duration-150 ease-in-out mb-4 ${tool.title.toLowerCase()}`}
              src={tool.logo}
              alt={tool.title}
              style={{ width: tool.styleWidth }}
              key={i}
            />
          ))}
        </div>
        <Title text="Work Samples" />
        <Gallery />
        <FloatingContact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
