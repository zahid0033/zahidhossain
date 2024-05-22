import React from "react";

function JobHistory({ offices }) {
  console.log(offices);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="grid max-w-2xl mx-auto">
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 opacity-0 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full bg-white">
                1
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-9">
            <div>
              <p className="text-2xl text-orange-300 font-semibold uppercase">
                Echologyx LTD
              </p>
              <p className="text-md text-lime-300 tracking-wider">
                {" "}
                CRO Developer{" "}
              </p>
              <p className="text-sm text-orange-50">{offices[0].description}</p>
              <div className="jobSkills mt-2">
                <b className="text-orange-50">SKILLS :</b>
                <div className="skills flex flex-wrap">
                  {offices[0].skills.map((skill) => (
                    <span className="text-orange-50 border-2 my-1 mx-2 py-1 px-3 rounded-2xl">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full bg-white">
                2
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-9">
            <div>
              <p className="text-2xl text-orange-300 font-semibold uppercase">
                {offices[0].title.toUpperCase()}
              </p>
              <p className="text-md text-lime-300 tracking-wider">
                Web Developer
              </p>
              <p className="text-sm text-orange-50">{offices[1].description}</p>
              <div className="jobSkills mt-2">
                <b className="text-orange-50">SKILLS :</b>
                <div className="skills flex flex-wrap">
                  {offices[1].skills.map((skill) => (
                    <span className="text-orange-50 border-2 my-1 mx-2 py-1 px-3 rounded-2xl">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full bg-white">
                3
              </div>
            </div>
            <div className="w-px h-full opacity-0" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-9">
            <div>
              <p className="text-2xl text-orange-300 font-semibold uppercase">
                SELCOLBD LTD
              </p>
              <p className="text-md text-lime-300 tracking-wider">
                {" "}
                Internship{" "}
              </p>
              <p className="text-sm text-orange-50">{offices[2].description}</p>

              <div className="jobSkills mt-2">
                <b className="text-orange-50">SKILLS :</b>
                <div className="skills flex flex-wrap">
                  {offices[2].skills.map((skill) => (
                    <span className="text-orange-50 border-2 my-1 mx-2 py-1 px-3 rounded-2xl">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default JobHistory;
