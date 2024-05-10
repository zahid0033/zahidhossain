import React from "react";
import Progressbar from "../components/progressbar";
import Title from "../components/title";
import Gallery from "../components/gallery.js";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import Footer from "../components/footer";
import JobHistory from "../components/jobHistory";

const Home = () => {
  var skills = [
    {
      skillName: "React",
      percentage: "80%",
    },
    {
      skillName: "Node",
      percentage: "70%",
    },
    {
      skillName: "Laravel",
      percentage: "60%",
    },
    {
      skillName: "Docker",
      percentage: "50%",
    },
    {
      skillName: "HTML",
      percentage: "95%",
    },
    {
      skillName: "CSS",
      percentage: "90%",
    },

    {
      skillName: "React",
      percentage: "80%",
    },
  ];
  return (
    <>
      <div className="text-gray-500 flex px-10 mb-">
        <div className="flex justify-center flex-1 text-white flex-col">
          <h1 className="text-3xl mb-5">Hello! I am</h1>
          <h1 className="text-amber-200 text-4xl font-bold tracking-widest uppercase">
            MD. Zahid Hossain
          </h1>
          <p className="text-3xl mb-8">Software Engineer</p>
          <div className="resumeCta">
            <button
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
            </button>
          </div>
        </div>
        <div className="flex-1 text-center">
          {/* <img className="max-w-full h-auto rounded-full" src="https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw9c230986/Y0998004/Y0998004_C099600456_E01_ZHC.jpg?sw=1200&sh=800" /> */}
          <img
            src="https://i.ibb.co/YQWhHGX/IMG-0946-1-removebg-preview.png"
            className="-skew-y-6 -translate-y-4"
            alt=""
          />
        </div>
      </div>
      <div className="w-full border-t-4 -skew-y-6 block sm:hidden lg:block "></div>
      <div className="mx-10">
        <div className="w-4/5 mx-auto grid grid-cols-4 gap-4 items-center">
          <img
            className="transition duration-0 hover:duration-150 ease-in-out mb-4"
            src="https://dreamlpg.com/assets/images/logo/logo2.png"
            alt=""
          />
          <img
            className="mb-4"
            src="https://i.ibb.co/Cw4cFTr/download.png"
            alt=""
          />
          <img
            className="mb-4"
            src="https://i.ibb.co/682Pkby/1640089257430-removebg-preview.png"
            alt=""
          />
          <img
            className="mb-4"
            src="https://i.ibb.co/SJ0mQ3y/Echo-Logyx-logo-RGB-white-1-6.png"
            alt=""
          />
        </div>
        <Title text="Skills" />
        <div
          id="skills"
          className="w-4/5 mx-auto grid lg:grid-cols-2 sm:grid-cols-1 mb-10"
        >
          {skills.map((skill, i) => (
            <div className="flex grid-2 mb-6 mx-5 items-center">
              <Progressbar
                skillName={skill.skillName}
                percentage={skill.percentage}
              />
            </div>
          ))}
        </div>
        <Title text="Expertise in CRO Tool" />
        <div className="w-5/5 mx-auto grid grid-cols-4 gap-4 items-center croTool">
          <img
            className="transition duration-0 hover:duration-150 ease-in-out mb-4"
            src="https://www.abtasty.com/wp-content/uploads/2024/01/cropped-logo-abtasty-green.png"
            alt="ABTasty"
          />
          <img
            className="mb-4"
            src="https://www.coveo.com/public/img/logos/coveo/coveo_logo_en.svg"
            alt=""
          />
          <img
            className="mb-4"
            src="https://static.wingify.com/gcp/images/vwo-logo-white.svg"
            alt=""
          />
          <img
            className="mb-4"
            src="https://www.guberman.co.il/sites/guberman/files/client_logos/dynamic-yield-logo-300x145.png"
            alt=""
          />
          <img
            className="mb-4"
            src="data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsPSJDb252ZXJ0IExvZ28iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE1MyAzMyIgY2xhc3M9InN2Zy13aGl0ZSI+PHBhdGggZD0iTTE3Ljk0IDI0LjgyM2g0LjY5OWMtLjY5IDIuNjM0LTIuMDA3IDQuNjQtMy45NDcgNi4wMThDMTYuNzQ4IDMyLjI4MyAxNC4zMDggMzMgMTEuMzY1IDMzYy0zLjU3IDAtNi4zNTUtMS4xNTctOC4zNi0zLjQ3NUMxIDI3LjI3IDAgMjQuMDQgMCAxOS44MzdjMC00LjAwOS45NjgtNy4xNDIgMi45MTItOS4zOTcgMi0yLjMxOSA0Ljc5LTMuNDgyIDguMzYtMy40ODIgMy43NiAwIDYuNjY4IDEuMTMgOC43MzYgMy4zODUgMS4xMjcgMS4zOCAxLjk0IDIuOTc4IDIuNDQ0IDQuNzk0aC02LjU3OGMtLjMxNC0uNjI0LS42MjYtMS4wOTItLjkzNi0xLjQwOS0uODItLjg3OC0xLjk3Ni0xLjMxNy0zLjQ3Ni0xLjMxNy0xLjM4MiAwLTIuNTA4LjQ0LTMuMzgzIDEuMzE3LTEuMTI3IDEuMjU0LTEuNjkxIDMuMzI3LTEuNjkxIDYuMjEgMCAyLjg4LjU2NCA0LjkxNSAxLjY5IDYuMTA3LjgxIDEuMDAyIDIuMDMgMS41MDMgMy42NjQgMS41MDMgMS4wNjUgMCAxLjk2OC0uMjE3IDIuNzI0LS42NTcuMTg4LS4wNjEuMzU4LS4xNzMuNTE0LS4zMjkuMTU4LS4xNi4zMjktLjMzLjUyLS41MTcuMTIyLS4xOS4zNzQtLjQzOC43NDgtLjc1Mi4zODEtLjMxLjk0Mi0uNDcgMS42OTItLjQ3Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4zMTQgMjUuNzJjLjU2MSAxLjkxMiAxLjUwNSAzLjQzIDIuODE4IDQuNTU3IDEuMjUyIDEuMTI3IDIuOTMxIDEuOTI4IDUuMDI5IDIuMzk0IDIuMDk1LjQ3NCA0LjE4LjQzIDYuMjQ2LS4xMzggMi4zMTQtLjUwMiA0LjIyNS0xLjc4OCA1LjczNS0zLjg1NS42ODEtMS4wMDIgMS4yNS0yLjIyMiAxLjY4OC0zLjY2My40MzYtMS40NDIuNjU1LTMuMTY2LjY1NS01LjE3OCAwLTIuNzU2LS41MzUtNS4xNjUtMS42LTcuMjM2LTEuMTI0LTIuMzE2LTIuODc2LTMuOTUtNS4yNTUtNC44ODgtMi4wNjYtLjc1Ni00LjM4NC0uOTU1LTYuOTUzLS42MTMtMi41NjkuMzQ2LTQuNjY3IDEuNDYtNi4yOTQgMy4zNC0xLjAwNyAxLjEyNC0xLjc0IDIuNTM5LTIuMjE0IDQuMjMyYTE5LjEyIDE5LjEyIDAgMDAtLjcgNS4wNzhjMCAyLjA2LjI4IDQuMDU2Ljg0NSA1Ljk3em01LjU0OS01LjU1Yy0uMTI5LTIuODUzLjQ2NC00Ljk5OCAxLjc3OS02LjQ0Mi40MzgtLjQzNiAxLjEzLS43OTggMi4wNjgtMS4wODFhNC41OCA0LjU4IDAgMDEyLjgxNS4wNDhjLjk0Mi4zMTYgMS43NzUgMS4wMzMgMi40OTEgMi4xNjQuNzI0IDEuMTI3IDEuMDgxIDIuODIgMS4wODEgNS4wNzgtLjA2IDIuNTAzLS40NjcgNC4zMjEtMS4yMiA1LjQ0OS0uNzUxIDEuMTI3LTEuNjE3IDEuODMyLTIuNTg1IDIuMTE3YTQuNDcgNC40NyAwIDAxLTIuODY3LS4wOTdjLS45MzUtLjM0Mi0xLjU5NC0uNzYzLTEuOTY4LTEuMjY3LS45NDItMS4xMjQtMS40NzUtMy4xMTMtMS41OTQtNS45N3oiPjwvcGF0aD48cGF0aCBkPSJNNjkuMzExIDMyLjUzNGgtMy4yODVjLS45NCAwLTEuNzA4LS4zLTIuMzAyLS44OTUtLjU5Ny0uNTk4LS44OS0xLjM2Mi0uODktMi4zMDJWMTYuNTUyYzAtMS41MDUtLjQ1OC0yLjYwNC0xLjM2Ni0zLjI5NWE0LjkyOCA0LjkyOCAwIDAwLTMuMDU0LTEuMDM0IDQuNzMgNC43MyAwIDAwLTMuMDA0IDEuMDM0Yy0uODc4LjY5LTEuMzE3IDEuNzktMS4zMTcgMy4yOTV2MTUuOTgyaC02LjU3MlYxNy44NjdjMC00LjI2IDEuMTA3LTcuMTEzIDMuMzM0LTguNTU4IDIuMjIxLTEuNDQgNC42NzctMi4yMjIgNy4zNzMtMi4zNTEgMi43NTYgMCA1LjI5LjcyMyA3LjYxIDIuMTY0IDIuMzE4IDEuNDQgMy40NzMgNC4zNTggMy40NzMgOC43NDV2MTQuNjY3eiI+PC9wYXRoPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTE4LjY2NyAyNC44MjNoLTQuNjk4Yy0uNzQ3IDAtMS4zMzMuMTU5LTEuNzM1LjQ3LS40MDguMzE0LS42NDcuNTYyLS43MDQuNzUybC0uMTQ4LjE0Ny0uMzcyLjM3YTEuMzMgMS4zMyAwIDAxLS41MTcuMzNjLS43NTEuNDQtMS42NTkuNjU2LTIuNzIyLjY1Ni0xLjYyOSAwLTIuODU1LS41MDEtMy42NjYtMS41MDMtLjg3Ny0uOTQtMS4zNDYtMi4zODMtMS40MDYtNC4zMjZoMTYuMjQ5Yy4wNjQtLjEyMy4wOTUtLjM0MS4wOTUtLjY1OHYtMS4wMzRjMC00LjEzNC0uOTk5LTcuMzYyLTMuMDAzLTkuNjg0LTIuMDcxLTIuMjU1LTQuOTgyLTMuMzg1LTguNzQyLTMuMzg1LTMuNTYzIDAtNi4zNTUgMS4xNjMtOC4zNTcgMy40ODItMS45NDIgMi4yNTUtMi45MTcgNS4zODgtMi45MTcgOS4zOTcgMCA0LjIwMyAxLjAwMyA3LjQzMyAzLjAwOCA5LjY4OCAyLjAwNCAyLjMxOCA0Ljc5NCAzLjQ3NSA4LjM2MiAzLjQ3NSAyLjk0NSAwIDUuMzg4LS43MTggNy4zMzEtMi4xNiAxLjkzNi0xLjM3OCAzLjI1NC0zLjM4NCAzLjk0Mi02LjAxN3ptLTYuMzg5LTcuMzM1aC05LjU3OWMuMDYtMS42MjguNTI5LTIuODggMS40MDctMy43Ni44NzgtLjg3OCAyLjAwMy0xLjMxNyAzLjM4LTEuMzE3IDEuNTA0IDAgMi42NjIuNDQgMy40OCAxLjMxNy43NTEuODE0IDEuMTg2IDIuMDY3IDEuMzEyIDMuNzZ6Ij48L3BhdGg+PHBhdGggZD0iTTEyMC4wNzcgMzIuNTMzVjIwLjQwMmMwLTIuNDQyLjM2Mi00LjQ5NCAxLjA4LTYuMTU3LjcyMS0xLjY2IDEuNzA1LTIuOTkxIDIuOTYtMy45OTIgMS4xOS0uOTQ0IDIuNTgzLTEuNjMyIDQuMTgyLTIuMDdhMTguNTUyIDE4LjU1MiAwIDAxNC45MjgtLjY2SDEzNC4xNjhWMTQuMmgtMi4xNThjLTEuODE4IDAtMy4xNjguNDQtNC4wNCAxLjMxMS0uODc5Ljg4Mi0xLjMxOCAyLjI2Mi0xLjMxOCA0LjE0MnYxMi44OGgtNi41NzV6TTE0NS45MDcgMzIuNTMzYy0yLjA2Mi4xMjEtNC4zMDQuMDkzLTYuNzEzLS4wOTUtMi40MTQtLjE4OC0zLjYxNC0xLjcyMy0zLjYxNC00LjYwNlYuMTg3aDMuMzgxYy44MSAwIDEuNTMzLjMxNyAyLjE1OC45NDMuNjI3LjYyNy45NDEgMS4zOC45NDEgMi4yNTh2NC4yMjloMy44NDZ2MS4zMTdjMCAuOTM3LS4zMSAxLjcwNi0uOTMzIDIuMzA0YTMuMTYzIDMuMTYzIDAgMDEtMi4yNTcuODk0aC0uNjU1djEzLjkxM2MwIDEuMDYzLjYyMSAxLjU5OCAxLjg3OCAxLjU5OGgxLjk2N3Y0Ljg5aC4wMDF6Ij48L3BhdGg+PHBhdGggb3BhY2l0eT0iLjUiIGQ9Ik03MS44MzkgOC45ODVsLTEuNDcgMy42MSAzLjA3MyA2Ljk1IDMuMzQxLTguNjg5LTQuOTQ0LTEuODcxeiIgZmlsbD0iaW5oZXJpdCIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1maWxsPSIiIHN0eWxlPSItLWRhcmtyZWFkZXItaW5saW5lLWZpbGw6IGluaGVyaXQ7Ij48L3BhdGg+PHBhdGggb3BhY2l0eT0iLjc1IiBkPSJNODAuMzkgOC4zMTZsLTUuNDc4IDE0LjQzOCAzLjA3MyA3LjA4NSA3LjYxNy0xOS41MTctNS4yMTEtMi4wMDZ6IiBmaWxsPSJpbmhlcml0IiBkYXRhLWRhcmtyZWFkZXItaW5saW5lLWZpbGw9IiIgc3R5bGU9Ii0tZGFya3JlYWRlci1pbmxpbmUtZmlsbDogaW5oZXJpdDsiPjwvcGF0aD48cGF0aCBkPSJNOTYuMDI1IDEwLjMyMkw5NC40MiAxLjA5OGwtNy4zNSA1LjYxNCAyLjAwNS44MDItOS43NTQgMjUuMjY2aDUuNjEyTDk0LjAyIDkuNTJsMi4wMDUuODAyek0xNDkuOTA2IDMuMTI0Yy0xLjQ5MiAwLTIuNyAxLjIyNi0yLjcgMi43MTUgMCAxLjUgMS4yMDggMi43MTQgMi43IDIuNzE0YTIuNzE1IDIuNzE1IDAgMDAwLTUuNDN6bTAgNC45MDRhMi4xNzYgMi4xNzYgMCAwMS0yLjE3OC0yLjE5YzAtMS4yMDQuOTY5LTIuMTg5IDIuMTc4LTIuMTg5YTIuMTkgMi4xOSAwIDAxMCA0LjM3OXptMS4xOTgtLjg4N2MtLjU3Ny0xLjA2Mi0uNTQ0LTEuMDA3LS41NzctMS4wNS4yNjEtLjE1NC40MjUtLjQ2LjQyNS0uODEgMC0uNTctLjMyNy0uOTMxLTEuMS0uOTMxaC0uODYxYS4xMzIuMTMyIDAgMDAtLjEzLjEzMXYyLjcxNWMwIC4wNzcuMDU0LjEzMS4xMy4xMzFoLjQyNWEuMTMzLjEzMyAwIDAwLjEzMS0uMTMxdi0uOTA5aC4zNDhsLjUxMi45NzVjLjAyMi4wNDMuMDc2LjA2NS4xMi4wNjVoLjQ1N2MuMTA5IDAgLjE2NC0uMDk4LjEyLS4xODZ6bS0xLjE5OC0xLjQ3OGgtLjM1OXYtLjdoLjI5NGMuMzQ4IDAgLjQyNC4xMzEuNDI0LjM1IDAgLjIzLS4xMy4zNS0uMzU5LjM1eiI+PC9wYXRoPjwvc3ZnPg=="
            alt=""
          />
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
            <a href="https://www.facebook.com/zahidhossain123/">
              <AiFillFacebook size={"2rem"} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
