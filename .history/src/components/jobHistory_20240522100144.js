import React from "react";

function JobHistory({ offices }) {
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
              <p className="text-sm text-orange-50">
                Working as a software engineer for several years. Here I am done
                more than 800 A/B Test projects. Which are most renowned brands
                in the world. Besides worked on the in-hours HRM software
                project as a frontend developer
              </p>
              <div className="jobSkills">
                <b className="text-orange-50">Skills :</b>
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
                Kernel Technologies
              </p>
              <p className="text-md text-lime-300 tracking-wider">
                Web Developer
              </p>
              <p className="text-sm text-orange-50">
                Worked as an frontend developer. Developed multiple e-commerce
                and in-house softwares. Such as MediBee, CourseBee, KrishiBee,
                Horticulture
              </p>
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
              <p className="text-sm text-orange-50">
                I did intern with the responsibility of making dynamic website
                with laravel and basic frontend languages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default JobHistory;
