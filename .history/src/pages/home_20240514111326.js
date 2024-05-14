import React from "react";
import Progressbar from "../components/progressbar";
import Title from "../components/title";
import Gallery from "../components/gallery.js";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import Footer from "../components/footer";
import JobHistory from "../components/jobHistory";
import { skills } from "../utils/index.js";

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
        <div className="w-4/5 mx-auto grid grid-cols-5 gap-4 items-center croTool py-10">
          <img
            className="transition duration-0 hover:duration-150 ease-in-out mb-4"
            src="https://www.abtasty.com/wp-content/uploads/2024/01/cropped-logo-abtasty-green.png"
            alt="ABTasty"
          />
          <img
            className="mb-4"
            src="https://www.coveo.com/public/img/logos/coveo/coveo_logo_en.svg"
            alt="Qubit"
          />
          <img
            className="mb-4"
            src="https://static.wingify.com/gcp/images/vwo-logo-white.svg"
            alt="VWO"
          />
          {/* <img
            className="mb-4"
            src="https://www.guberman.co.il/sites/guberman/files/client_logos/dynamic-yield-logo-300x145.png"
            alt="Dynamic yield"
          /> */}
          <img
            className="mb-4"
            src="https://ww1.prweb.com/prfiles/2018/06/12/15690859/dynamic_yield.png"
            alt="Dynamic yield"
          />
          <img
            className="mb-4"
            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMTYyIDM4IiB3aWR0aD0iMTUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtbGFiZWw9IkJhY2sgdG8gaG9tZXBhZ2UiPjx0aXRsZT5PcHRpbWl6ZWx5IExvZ288L3RpdGxlPjxwYXRoIGQ9Im0xMi44MzU5IDIwLjQ1NTZ2NC40ODVjMy40MjIxLS4wMDQgNi43MDI5LTEuMzIzNSA5LjEyMjctMy42NjkxczMuNzgxLTUuNTI1NyAzLjc4NTItOC44NDI4aC00LjYyN2MtLjAwMjcgMi4xMjgtLjg3NjEgNC4xNjgyLTIuNDI4NCA1LjY3MjktMS41NTI0IDEuNTA0OC0zLjY1NzEgMi4zNTEzLTUuODUyNSAyLjM1NHoiIGZpbGw9IiMzYmUwODEiPjwvcGF0aD48cGF0aCBkPSJtMTIuODM0NiAzMi44MDk5Yy0yLjE3OTYgMC00LjI2OTg5LS44MzkzLTUuODExMDgtMi4zMzMyLTEuNTQxMi0xLjQ5MzktMi40MDcwMy0zLjUyMDEtMi40MDcwMy01LjYzMjggMC0yLjExMjguODY1ODMtNC4xMzg5IDIuNDA3MDMtNS42MzI5IDEuNTQxMTktMS40OTM5IDMuNjMxNDgtMi4zMzMyIDUuODExMDgtMi4zMzMydi00LjQ1MmMtMS42ODMxLS4wMDIzLTMuMzUwMTEuMzE2Ny00LjkwNTk3LjkzODktMS41NTU4Ni42MjIxLTIuOTcwMDcgMS41MzUzLTQuMTYxODcgMi42ODcycy0yLjEzNzg2IDIuNTIwMi0yLjc4NDE1OSA0LjAyNjVjLS42NDYzIDEuNTA2NC0uOTgwMTgzNTUgMy4xMjE0LS45ODI1ODc5MiA0Ljc1MjhzLjMyNjcxNzkyIDMuMjQ3My45Njg1NzQ5MiA0Ljc1NTVjLjY0MTg2MiAxLjUwODEgMS41ODM4ODIgMi44Nzg5IDIuNzcyMjgyIDQuMDM0MiAxLjE4ODQgMS4xNTUyIDIuNTk5OTEgMi4wNzIzIDQuMTUzOTMgMi42OTg3IDEuNTU0MDIuNjI2NSAzLjIyMDEuOTUwMiA0LjkwMzIuOTUyNWguMDM2NnoiIGZpbGw9IiMwMDM3ZmYiPjwvcGF0aD48cGF0aCBkPSJtMTIuODM1OSAzMi44MXY0LjQ1MmMzLjM5OTEgMCA2LjY1OS0xLjMwODggOS4wNjI1LTMuNjM4NnMzLjc1MzgtNS40ODk3IDMuNzUzOC04Ljc4NDVoLTQuNTk4MWMtLjAwMTQgMi4xMTI3LS44Njc1IDQuMTM4Ny0yLjQwODMgNS42MzMxLTEuNTQwNyAxLjQ5NDQtMy42MzAyIDIuMzM1My01LjgwOTkgMi4zMzh6IiBmaWxsPSIjMGNmIj48L3BhdGg+PHBhdGggZD0ibTEyLjgzNTkgNy45NzExdjQuNDUyYzMuMzk5MSAwIDYuNjU5LTEuMzA4OCA5LjA2MjUtMy42Mzg2MSAyLjQwMzUtMi4zMjk3OSAzLjc1MzgtNS40ODk2NyAzLjc1MzgtOC43ODQ0OWgtNC41OTgxYy0uMDAxNCAyLjExMjc4LS44Njc1IDQuMTM4NzEtMi40MDgzIDUuNjMzMTQtMS41NDA3IDEuNDk0NDQtMy42MzAyIDIuMzM1MjctNS44MDk5IDIuMzM3OTZ6IiBmaWxsPSIjODYxZGZmIj48L3BhdGg+PHBhdGggZD0ibTI1LjcyNjYgNy45NzExdjQuNDUyYzMuMzk5MSAwIDYuNjU4OS0xLjMwODggOS4wNjI0LTMuNjM4NjEgMi40MDM2LTIuMzI5NzkgMy43NTM4LTUuNDg5NjcgMy43NTM4LTguNzg0NDloLTQuNTk1NWMtLjAwMTQgMi4xMTMyMS0uODY3OSA0LjEzOTUzLTIuNDA5MiA1LjYzNDA0LTEuNTQxMyAxLjQ5NDUtMy42MzE0IDIuMzM1MDQtNS44MTE1IDIuMzM3MDZ6IiBmaWxsPSIjZmY4MTEwIj48L3BhdGg+PGcgZmlsbD0iIzAwMCI+PHBhdGggZD0ibTU5Ljk0NTMgMTguNjAxNmgyLjM2NzFsLjU1NzEgMS4yMTE5Yy4yOTU4LS4yNjI0LjYyMzQtLjQ4ODguOTc1Ni0uNjc0NC4zNjctLjE4MjEuNzQ4My0uMzM1NSAxLjE0MDQtLjQ1ODkuNDg2NC0uMTQ4Ny45OTQtLjIyMTUgMS41MDQtLjIxNTUuNzg3OS0uMDA0NCAxLjU2NzUuMTU1NiAyLjI4Ni40NjkuNzIwNy4zMTE3IDEuMzY5Mi43NjA5IDEuOTA2NyAxLjMyMDkuNTU4OS41ODcyIDEuMDAyMSAxLjI2ODYgMS4zMDc4IDIuMDEwNi42NDcyIDEuNjMyLjY0NzIgMy40Mzg2IDAgNS4wNzA2LS4zMDUuNzQyMy0uNzQ4MyAxLjQyMzgtMS4zMDc4IDIuMDEwNi0uNTM3Ni41NjA1LTEuMTg2MSAxLjAxMDYtMS45MDY3IDEuMzIzNC0uNzE3OS4zMTI3LTEuNDk2NC40NzM1LTIuMjgzNC40NzE2LS40NzYzLjAwODctLjk1MS0uMDU0Ni0xLjQwNzItLjE4NzYtLjM1ODMtLjExMDctLjcwOC0uMjQ2My0xLjA0NjItLjQwNTctLjMyMTUtLjE3MjMtLjYyMDktLjM4MDgtLjg5MTktLjYyMTF2NS4zOTc3aC0zLjIwMTV6bTYuMTI1NyA5LjU4MWMuNDI1NS4wMDk3Ljg0ODUtLjA2NjkgMS4yNDE3LS4yMjUuMzkzMi0uMTU4Ljc0OC0uMzk0IDEuMDQxNy0uNjkyOC42MTU1LS42MTE4LjkyMjQtMS40MzA3LjkyMDYtMi40NTY3LjAyMjItLjQ0ODItLjA0NzctLjg5NjItLjIwNTgtMS4zMTgtLjE1OC0uNDIxOC0uNDAxLS44MDg4LS43MTQ4LTEuMTM4Ny0uMjk5NS0uMjkwNC0uNjU1MS0uNTIwOC0xLjA0NjQtLjY3NzktLjM5MTQtLjE1NzItLjgxMDgtLjIzODEtMS4yMzQ0LS4yMzgxcy0uODQzMS4wODA5LTEuMjM0NC4yMzgxYy0uMzkxMy4xNTcxLS43NDY5LjM4NzUtMS4wNDY0LjY3NzktLjYxMi42MTM1LS45MTgxIDEuNDMyNC0uOTE4MSAyLjQ1NjdzLjMwNjEgMS44NDMyLjkxODEgMi40NTY3Yy4yOTM2LjI5ODguNjQ4NS41MzQ4IDEuMDQxNy42OTI4LjM5MzIuMTU4MS44MTYxLjIzNDcgMS4yNDE3LjIyNXoiPjwvcGF0aD48cGF0aCBkPSJtODAuMTM0MSAzMS4xNTI0Yy0uNTk1OC4wMDY5LTEuMTg3NC0uMDk4MS0xLjc0Mi0uMzA5My0uNTE4Mi0uMjAwOC0uOTg0My0uNTA5OS0xLjM2NTMtLjkwNTEtLjM4NzctLjQwNzktLjY4OTctLjg4NDktLjg4OTMtMS40MDQ2LS4yMjI5LS41ODc1LS4zMzItMS4yMDk4LS4zMjE3LTEuODM1NnYtNS4yNjM0aC0xLjk0ODZ2LTIuNTYzMmguODM0NGMxLjAyMTggMCAxLjUzMjctLjQ5NTIgMS41MzI3LTEuNDg1N3YtMS43NDY4aDIuNzg1NnYyLjk3MTRoMi43ODI5djIuODMyaC0yLjc4Mjl2NS4xMjg5Yy0uMDE3Ni4yMTM0LjAwODQuNDI4MS4wNzY1LjYzMThzLjE3NjkuMzkyNC4zMjAyLjU1NTMuMzE4My4yOTY5LjUxNS4zOTQyYy4xOTY3LjA5NzQuNDExMy4xNTYyLjYzMTQuMTczMi4wODcxLjAwNzMuMTc0Ni4wMDczLjI2MTYgMCAuMTIwMi4wMDYuMjQwNy4wMDYuMzYxIDAgLjA4ODEtLjAwNjguMTc1Ni0uMDIwNC4yNjE1LS4wNDA2LjA3NjgtLjAxOTQuMTUxMy0uMDQ2Ni4yMjIzLS4wODExdjIuNzAwMWMtLjE0MzQuMDU4NS0uMjkyMy4xMDM1LS40NDQ2LjEzNDQtLjM1NjIuMDg3Ni0uNzIzNC4xMjYxLTEuMDkwNy4xMTQxeiI+PC9wYXRoPjxwYXRoIGQ9Im04Ni4xMiAxNy4xMTZjLS40MzA4LjAxMDYtLjg1Mi0uMTI0Ny0xLjE5MTEtLjM4MjQtLjMzOTEtLjI1NzgtLjU3NS0uNjIyLS42NjcyLTEuMDMwMS0uMDkyMi0uNDA4LS4wMzQ5LS44MzQ1LjE2MjEtMS4yMDYuMTk2OS0uMzcxNi41MjEyLS42NjUuOTE3Mi0uODMuMzk1OS0uMTY0OS44Mzg4LS4xOTEgMS4yNTI0LS4wNzM4LjQxMzcuMTE3Mi43NzIzLjM3MDMgMS4wMTQzLjcxNnMuMzUyMi43NjIyLjMxMTcgMS4xNzgxYy0uMDQwNC40MTU5LS4yMjkxLjgwNTItLjUzMzUgMS4xMDA5LS4xNjI2LjE2NzEtLjM1ODguMzAwMS0uNTc2Ni4zOTA4LS4yMTc3LjA5MDctLjQ1MjMuMTM3MS0uNjg5My4xMzY1em0tMS42NzEzIDEuNDg1N2gzLjIwMTR2MTIuNDIzMmgtMy4yMDE0eiI+PC9wYXRoPjxwYXRoIGQ9Im05MC43MTA5IDE4LjYwMThoMi4zNjcxbC41NTcxIDEuMjExOWMuMjYyNS0uMjUzNy41NTE4LS40Nzk3Ljg2MzItLjY3NDUuMzAyMi0uMTgwOC42MjA5LS4zMzQ0Ljk1Mi0uNDU4OC40LS4xNDc3LjgyNS0uMjIwOCAxLjI1MjktLjIxNTUuNTY4My0uMDE0IDEuMTM0Ni4wNzE5IDEuNjcxMy4yNTM1LjQwMTEuMTQxNS43ODM5LjMyNzggMS4xNDA0LjU1NTIuMzE5NS4yMTc5LjU5NDEuNDkyMy44MDgxLjgwODguMzA2LS4zMTE4LjY1Mi0uNTgzNyAxLjAzMS0uODA4OC4zODEtLjIyLjc4Mi0uNDA1OCAxLjE5OC0uNTU1Mi40OS0uMTczNyAxLjAwOC0uMjU5NyAxLjUzLS4yNTM1IDEuMzk0IDAgMi41MDUuNDMzNSAzLjM0MiAxLjI5NTVzMS4yNTMgMi4xNDI0IDEuMjUzIDMuODMzNHY3LjQyMzVoLTMuMjA2di03LjE1MjJjLjAzNS0uNjQ3OS0uMTktMS4yODM5LS42MjgtMS43NzQ3LS4xNjYtLjE4NjQtLjM2OC0uMzM5Mi0uNTk1LS40NDk3LS4yMjYtLjExMDYtLjQ3My0uMTc2Ny0uNzI3LS4xOTQ2LS4yNTMtLjAxNzktLjUwNy4wMTI4LS43NDguMDkwM3MtLjQ2NC4yMDAyLS42NTYuMzYxM2MtLjA3LjA2MDQtLjEzNi4xMjQ3LS4xOTguMTkyNy0uNDM4LjQ5MDUtLjY2MyAxLjEyNjktLjYyNSAxLjc3NDd2Ny4xNTIyaC0zLjIwNDV2LTcuMTUyMmMuMDM3MS0uNjQ3OC0uMTg3MS0xLjI4NDItLjYyNTItMS43NzQ3LS4xNjU5LS4xODY0LS4zNjgyLS4zMzkzLS41OTUyLS40NDk5cy0uNDc0Mi0uMTc2Ny0uNzI3Ni0uMTk0NmMtLjI1MzMtLjAxNzktLjUwNzkuMDEyOC0uNzQ5LjA5MDNzLS40NjQxLjIwMDQtLjY1NjIuMzYxNWMtLjA2OTkuMDU5Ny0uMTM1NS4xMjQxLS4xOTYyLjE5MjctLjQzNzguNDkwOC0uNjYyNyAxLjEyNjgtLjYyNzcgMS43NzQ3djcuMTUyMmgtMy4yMDE1eiI+PC9wYXRoPjxwYXRoIGQ9Im0xMTMuMjY4IDE3LjExNTRjLS40MzIuMDExLS44NTUtLjEyNDItMS4xOTUtLjM4MjYtLjM0MS0uMjU4My0uNTc4LS42MjM1LS42Ny0xLjAzMjktLjA5My0uNDA5My0uMDM2LS44MzcxLjE2Mi0xLjIxLjE5Ny0uMzcyOC41MjMtLjY2NzIuOTItLjgzMjdzLjg0MS0uMTkxNiAxLjI1Ni0uMDczOS43NzUuMzcxOCAxLjAxNy43MTg3Yy4yNDMuMzQ2OS4zNTMuNzY0OS4zMTIgMS4xODIxcy0uMjMuODA3Ni0uNTM2IDEuMTAzOWMtLjE2My4xNjcxLS4zNTkuMzAwMS0uNTc3LjM5MDgtLjIxNy4wOTA3LS40NTIuMTM3Mi0uNjg5LjEzNjZ6bS0xLjY3MSAxLjQ4NTdoMy4yMDl2MTIuNDIzMWgtMy4yMDl6Ij48L3BhdGg+PHBhdGggZD0ibTExNy4xNiAyOC40NTEzIDUuNTY5LTYuODgwOWgtNS41Njl2LTIuOTY4OGg5LjYwN3YyLjU2MzJsLTUuNTYzIDYuODk2MWg1Ljg0NnYyLjk2ODloLTkuODl6Ij48L3BhdGg+PHBhdGggZD0ibTEzNS4xMzEgMzEuMTUxN2MtLjg0OS4wMDMxLTEuNjg5LS4xNjk4LTIuNDY0LS41MDctLjc2MS0uMzI0OC0xLjQ1MS0uNzg3OC0yLjAzMi0xLjM2NDEtLjU4OS0uNTgwOS0xLjA2Mi0xLjI2MjYtMS4zOTQtMi4wMTA1LS4zNC0uNzgxNy0uNTE0LTEuNjIxMy0uNTE0LTIuNDY5NHMuMTc0LTEuNjg3Ny41MTQtMi40Njk0Yy4zMzItLjc0NzkuODA1LTEuNDI5NiAxLjM5NC0yLjAxMDUuNTgyLS41NzU1IDEuMjcxLTEuMDM4NCAyLjAzMi0xLjM2NC43NjEtLjMyMiAxLjU4MS0uNDkxNiAyLjQxMS0uNDk4Ni44My0uMDA2OSAxLjY1My4xNDg4IDIuNDIuNDU4LjczMi4zMDE0IDEuMzk1Ljc0MTkgMS45NDggMS4yOTU2LjU3Mi41ODA4IDEuMDIxIDEuMjYzNiAxLjMyNCAyLjAxMDUuMzMyLjgyMTEuNDk3IDEuNjk2Ni40ODYgMi41Nzg0LjAwMS4xMzk5LS4wMDguMjc5Ni0uMDI2LjQxODMtLjAyMS4xMzQ0LS4wMzkuMjY2My0uMDU3LjM5My0uMDE5LjEyNjgtLjAzNy4yNzg5LS4wNTUuNDAzMWgtOC45MTFjLjEzOC41OTc2LjQ3IDEuMTM2Ni45NDYgMS41MzkuNTU3LjQzODcgMS4yNjIuNjYwMiAxLjk3OC42MjExLjM2Mi4wMDc0LjcyNC0uMDM3OSAxLjA3Mi0uMTM0My4yNTktLjA3ODQuNTA3LS4xODc0LjczOC0uMzI0Ni4yMS0uMTMzOS4zOTgtLjI5ODEuNTU3LS40ODY3aDMuMzQzYy0uMTg2LjUwMDgtLjQ0NC45NzM3LS43NjcgMS40MDQ1LS4zNS40ODA0LS43NzMuOTA3Ni0xLjI1MyAxLjI2NzctLjUwOS4zNzc1LTEuMDcyLjY4MjMtMS42NzEuOTA1MS0uNjQ1LjIzNDQtMS4zMy4zNTEzLTIuMDE5LjM0NDh6bTMuMDYzLTcuMjg2NWMtLjEzMy0uNjkzNC0uNTEyLTEuMzE5OS0xLjA3Mi0xLjc3MDgtLjU1OS0uNDUwOS0xLjI2NC0uNjk3OC0xLjk5MS0uNjk3OC0uNzI4IDAtMS40MzIuMjQ2OS0xLjk5Mi42OTc4LS41NTkuNDUwOS0uOTM4IDEuMDc3NC0xLjA3MSAxLjc3MDh6Ij48L3BhdGg+PHBhdGggZD0ibTE0My42MjEgMTQuMDEyMmgzLjIwMnYxNy4wMDQ1aC0zLjIwMnoiPjwvcGF0aD48cGF0aCBkPSJtMTUxLjY4NiAzNS40NzE3Yy0uMTQ3IDAtLjI5MS0uMDA1MS0uNDMyLS4wMTUyLS4xMTctLjAwNi0uMjMzLS4wMTk2LS4zNDgtLjA0MDYtLjExMy0uMDEzMi0uMjI1LS4wNDA1LS4zMzItLjA4MTF2LTIuNTYzMmMuNTgxLjAzNzEgMS4xNTctLjEyNTQgMS42MjctLjQ1ODkuMzg3LS4zMTE1LjY4OC0uNzEwMy44NzktMS4xNjEybC4yNzctLjY3NDQtNC44NzMtMTEuODc1NWgzLjM0M2wzLjIwMiA4LjA5NTMgMi45MzQtOC4wOTUzaDMuMzQzYy0uOTEgMi4yNjY2LTEuNzM3IDQuMzE3Ni0yLjQ4IDYuMTUzMi0uMzE2Ljc5MS0uNjI3IDEuNTY2OS0uOTMzIDIuMzE5OS0uMzA2Ljc1MjktLjU3OCAxLjQ0NTEtLjgyMiAyLjA2NjMtLjI0My42MjExLS40NDQgMS4xMzgzLS42MTIgMS41NTE2LS4xNjcuNDEzMi0uMjYxLjY1NjYtLjMwNi43MzAyLS4yNjkuNjQzNS0uNTggMS4yNjk0LS45MzQgMS44NzM2LS4yNjQuNDYyNy0uNTk3Ljg4NTUtLjk4OCAxLjI1NS0uMzI2LjMwODQtLjcxNC41NDc2LTEuMTQxLjcwMjItLjQ1MS4xNTIxLS45MjYuMjI1OS0xLjQwNC4yMTgxeiI+PC9wYXRoPjxwYXRoIGQ9Im00OC4wODY0IDEyLjQyNThjLTEuOTA5OSAwLTMuNzc3LjU0OS01LjM2NSAxLjU3NzVzLTIuODI1NyAyLjQ5MDQtMy41NTY2IDQuMjAwOC0uOTIyMiAzLjU5MjUtLjU0OTYgNS40MDgzYy4zNzI2IDEuODE1NyAxLjI5MjQgMy40ODM2IDIuNjQyOSA0Ljc5MjdzMy4wNzExIDIuMjAwNiA0Ljk0NDMgMi41NjE3YzEuODczMy4zNjEyIDMuODE0OS4xNzU5IDUuNTc5NC0uNTMyNnMzLjI3MjctMS45MDgyIDQuMzMzOC0zLjQ0NzZjMS4wNjExLTEuNTM5MyAxLjYyNzQtMy4zNDkgMS42Mjc0LTUuMjAwNC4wMDA0LTEuMjI5My0uMjQ5Mi0yLjQ0NjYtLjczNDMtMy41ODI0LS40ODUyLTEuMTM1OS0xLjE5NjUtMi4xNjc5LTIuMDkzMy0zLjAzNzEtLjg5NjctLjg2OTMtMS45NjE0LTEuNTU4OC0zLjEzMzItMi4wMjkxLTEuMTcxNy0uNDcwMy0yLjQyNzYtLjcxMjItMy42OTU4LS43MTE4em0wIDE1LjQ2NTVjLTEuMjQ4Ni4wMTQ1LTIuNDczNC0uMzMwNC0zLjUxOTYtLjk5MTEtMS4wNDYxLS42NjA3LTEuODY2NS0xLjYwNzUtMi4zNTcyLTIuNzIwNC0uNDkwNy0xLjExMy0uNjI5Ny0yLjM0Mi0uMzk5My0zLjUzMTUuMjMwNC0xLjE4OTYuODE5Ny0yLjI4NjEgMS42OTM0LTMuMTUwOC44NzM3LS44NjQ2IDEuOTkyNS0xLjQ1ODUgMy4yMTQ2LTEuNzA2NSAxLjIyMjEtLjI0NzkgMi40OTI3LS4xMzg4IDMuNjUwOC4zMTM2IDEuMTU4MS40NTI1IDIuMTUxNiAxLjIyNzggMi44NTQ4IDIuMjI4LjcwMzIgMS4wMDAxIDEuMDg0NCAyLjE4IDEuMDk1NCAzLjM5MDN2LjA3MDljLjAwNTUgMS42MDk5LS42NDczIDMuMTU2My0xLjgxNTUgNC4zMDA2cy0yLjc1NjcgMS43OTMxLTQuNDE3NCAxLjgwNDV6Ij48L3BhdGg+PC9nPjwvc3ZnPg=="
            alt="Optimizely"
          />
          <img
            className="mb-4"
            src="https://media.trustradius.com/vendor-logos/hj/KM/3RT163VGVFQZ-180x180.PNG"
            alt="Kameloon"
          />
          <img
            className="mb-4"
            src="data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsPSJDb252ZXJ0IExvZ28iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE1MyAzMyIgY2xhc3M9InN2Zy13aGl0ZSI+PHBhdGggZD0iTTE3Ljk0IDI0LjgyM2g0LjY5OWMtLjY5IDIuNjM0LTIuMDA3IDQuNjQtMy45NDcgNi4wMThDMTYuNzQ4IDMyLjI4MyAxNC4zMDggMzMgMTEuMzY1IDMzYy0zLjU3IDAtNi4zNTUtMS4xNTctOC4zNi0zLjQ3NUMxIDI3LjI3IDAgMjQuMDQgMCAxOS44MzdjMC00LjAwOS45NjgtNy4xNDIgMi45MTItOS4zOTcgMi0yLjMxOSA0Ljc5LTMuNDgyIDguMzYtMy40ODIgMy43NiAwIDYuNjY4IDEuMTMgOC43MzYgMy4zODUgMS4xMjcgMS4zOCAxLjk0IDIuOTc4IDIuNDQ0IDQuNzk0aC02LjU3OGMtLjMxNC0uNjI0LS42MjYtMS4wOTItLjkzNi0xLjQwOS0uODItLjg3OC0xLjk3Ni0xLjMxNy0zLjQ3Ni0xLjMxNy0xLjM4MiAwLTIuNTA4LjQ0LTMuMzgzIDEuMzE3LTEuMTI3IDEuMjU0LTEuNjkxIDMuMzI3LTEuNjkxIDYuMjEgMCAyLjg4LjU2NCA0LjkxNSAxLjY5IDYuMTA3LjgxIDEuMDAyIDIuMDMgMS41MDMgMy42NjQgMS41MDMgMS4wNjUgMCAxLjk2OC0uMjE3IDIuNzI0LS42NTcuMTg4LS4wNjEuMzU4LS4xNzMuNTE0LS4zMjkuMTU4LS4xNi4zMjktLjMzLjUyLS41MTcuMTIyLS4xOS4zNzQtLjQzOC43NDgtLjc1Mi4zODEtLjMxLjk0Mi0uNDcgMS42OTItLjQ3Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4zMTQgMjUuNzJjLjU2MSAxLjkxMiAxLjUwNSAzLjQzIDIuODE4IDQuNTU3IDEuMjUyIDEuMTI3IDIuOTMxIDEuOTI4IDUuMDI5IDIuMzk0IDIuMDk1LjQ3NCA0LjE4LjQzIDYuMjQ2LS4xMzggMi4zMTQtLjUwMiA0LjIyNS0xLjc4OCA1LjczNS0zLjg1NS42ODEtMS4wMDIgMS4yNS0yLjIyMiAxLjY4OC0zLjY2My40MzYtMS40NDIuNjU1LTMuMTY2LjY1NS01LjE3OCAwLTIuNzU2LS41MzUtNS4xNjUtMS42LTcuMjM2LTEuMTI0LTIuMzE2LTIuODc2LTMuOTUtNS4yNTUtNC44ODgtMi4wNjYtLjc1Ni00LjM4NC0uOTU1LTYuOTUzLS42MTMtMi41NjkuMzQ2LTQuNjY3IDEuNDYtNi4yOTQgMy4zNC0xLjAwNyAxLjEyNC0xLjc0IDIuNTM5LTIuMjE0IDQuMjMyYTE5LjEyIDE5LjEyIDAgMDAtLjcgNS4wNzhjMCAyLjA2LjI4IDQuMDU2Ljg0NSA1Ljk3em01LjU0OS01LjU1Yy0uMTI5LTIuODUzLjQ2NC00Ljk5OCAxLjc3OS02LjQ0Mi40MzgtLjQzNiAxLjEzLS43OTggMi4wNjgtMS4wODFhNC41OCA0LjU4IDAgMDEyLjgxNS4wNDhjLjk0Mi4zMTYgMS43NzUgMS4wMzMgMi40OTEgMi4xNjQuNzI0IDEuMTI3IDEuMDgxIDIuODIgMS4wODEgNS4wNzgtLjA2IDIuNTAzLS40NjcgNC4zMjEtMS4yMiA1LjQ0OS0uNzUxIDEuMTI3LTEuNjE3IDEuODMyLTIuNTg1IDIuMTE3YTQuNDcgNC40NyAwIDAxLTIuODY3LS4wOTdjLS45MzUtLjM0Mi0xLjU5NC0uNzYzLTEuOTY4LTEuMjY3LS45NDItMS4xMjQtMS40NzUtMy4xMTMtMS41OTQtNS45N3oiPjwvcGF0aD48cGF0aCBkPSJNNjkuMzExIDMyLjUzNGgtMy4yODVjLS45NCAwLTEuNzA4LS4zLTIuMzAyLS44OTUtLjU5Ny0uNTk4LS44OS0xLjM2Mi0uODktMi4zMDJWMTYuNTUyYzAtMS41MDUtLjQ1OC0yLjYwNC0xLjM2Ni0zLjI5NWE0LjkyOCA0LjkyOCAwIDAwLTMuMDU0LTEuMDM0IDQuNzMgNC43MyAwIDAwLTMuMDA0IDEuMDM0Yy0uODc4LjY5LTEuMzE3IDEuNzktMS4zMTcgMy4yOTV2MTUuOTgyaC02LjU3MlYxNy44NjdjMC00LjI2IDEuMTA3LTcuMTEzIDMuMzM0LTguNTU4IDIuMjIxLTEuNDQgNC42NzctMi4yMjIgNy4zNzMtMi4zNTEgMi43NTYgMCA1LjI5LjcyMyA3LjYxIDIuMTY0IDIuMzE4IDEuNDQgMy40NzMgNC4zNTggMy40NzMgOC43NDV2MTQuNjY3eiI+PC9wYXRoPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTE4LjY2NyAyNC44MjNoLTQuNjk4Yy0uNzQ3IDAtMS4zMzMuMTU5LTEuNzM1LjQ3LS40MDguMzE0LS42NDcuNTYyLS43MDQuNzUybC0uMTQ4LjE0Ny0uMzcyLjM3YTEuMzMgMS4zMyAwIDAxLS41MTcuMzNjLS43NTEuNDQtMS42NTkuNjU2LTIuNzIyLjY1Ni0xLjYyOSAwLTIuODU1LS41MDEtMy42NjYtMS41MDMtLjg3Ny0uOTQtMS4zNDYtMi4zODMtMS40MDYtNC4zMjZoMTYuMjQ5Yy4wNjQtLjEyMy4wOTUtLjM0MS4wOTUtLjY1OHYtMS4wMzRjMC00LjEzNC0uOTk5LTcuMzYyLTMuMDAzLTkuNjg0LTIuMDcxLTIuMjU1LTQuOTgyLTMuMzg1LTguNzQyLTMuMzg1LTMuNTYzIDAtNi4zNTUgMS4xNjMtOC4zNTcgMy40ODItMS45NDIgMi4yNTUtMi45MTcgNS4zODgtMi45MTcgOS4zOTcgMCA0LjIwMyAxLjAwMyA3LjQzMyAzLjAwOCA5LjY4OCAyLjAwNCAyLjMxOCA0Ljc5NCAzLjQ3NSA4LjM2MiAzLjQ3NSAyLjk0NSAwIDUuMzg4LS43MTggNy4zMzEtMi4xNiAxLjkzNi0xLjM3OCAzLjI1NC0zLjM4NCAzLjk0Mi02LjAxN3ptLTYuMzg5LTcuMzM1aC05LjU3OWMuMDYtMS42MjguNTI5LTIuODggMS40MDctMy43Ni44NzgtLjg3OCAyLjAwMy0xLjMxNyAzLjM4LTEuMzE3IDEuNTA0IDAgMi42NjIuNDQgMy40OCAxLjMxNy43NTEuODE0IDEuMTg2IDIuMDY3IDEuMzEyIDMuNzZ6Ij48L3BhdGg+PHBhdGggZD0iTTEyMC4wNzcgMzIuNTMzVjIwLjQwMmMwLTIuNDQyLjM2Mi00LjQ5NCAxLjA4LTYuMTU3LjcyMS0xLjY2IDEuNzA1LTIuOTkxIDIuOTYtMy45OTIgMS4xOS0uOTQ0IDIuNTgzLTEuNjMyIDQuMTgyLTIuMDdhMTguNTUyIDE4LjU1MiAwIDAxNC45MjgtLjY2SDEzNC4xNjhWMTQuMmgtMi4xNThjLTEuODE4IDAtMy4xNjguNDQtNC4wNCAxLjMxMS0uODc5Ljg4Mi0xLjMxOCAyLjI2Mi0xLjMxOCA0LjE0MnYxMi44OGgtNi41NzV6TTE0NS45MDcgMzIuNTMzYy0yLjA2Mi4xMjEtNC4zMDQuMDkzLTYuNzEzLS4wOTUtMi40MTQtLjE4OC0zLjYxNC0xLjcyMy0zLjYxNC00LjYwNlYuMTg3aDMuMzgxYy44MSAwIDEuNTMzLjMxNyAyLjE1OC45NDMuNjI3LjYyNy45NDEgMS4zOC45NDEgMi4yNTh2NC4yMjloMy44NDZ2MS4zMTdjMCAuOTM3LS4zMSAxLjcwNi0uOTMzIDIuMzA0YTMuMTYzIDMuMTYzIDAgMDEtMi4yNTcuODk0aC0uNjU1djEzLjkxM2MwIDEuMDYzLjYyMSAxLjU5OCAxLjg3OCAxLjU5OGgxLjk2N3Y0Ljg5aC4wMDF6Ij48L3BhdGg+PHBhdGggb3BhY2l0eT0iLjUiIGQ9Ik03MS44MzkgOC45ODVsLTEuNDcgMy42MSAzLjA3MyA2Ljk1IDMuMzQxLTguNjg5LTQuOTQ0LTEuODcxeiIgZmlsbD0iaW5oZXJpdCIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1maWxsPSIiIHN0eWxlPSItLWRhcmtyZWFkZXItaW5saW5lLWZpbGw6IGluaGVyaXQ7Ij48L3BhdGg+PHBhdGggb3BhY2l0eT0iLjc1IiBkPSJNODAuMzkgOC4zMTZsLTUuNDc4IDE0LjQzOCAzLjA3MyA3LjA4NSA3LjYxNy0xOS41MTctNS4yMTEtMi4wMDZ6IiBmaWxsPSJpbmhlcml0IiBkYXRhLWRhcmtyZWFkZXItaW5saW5lLWZpbGw9IiIgc3R5bGU9Ii0tZGFya3JlYWRlci1pbmxpbmUtZmlsbDogaW5oZXJpdDsiPjwvcGF0aD48cGF0aCBkPSJNOTYuMDI1IDEwLjMyMkw5NC40MiAxLjA5OGwtNy4zNSA1LjYxNCAyLjAwNS44MDItOS43NTQgMjUuMjY2aDUuNjEyTDk0LjAyIDkuNTJsMi4wMDUuODAyek0xNDkuOTA2IDMuMTI0Yy0xLjQ5MiAwLTIuNyAxLjIyNi0yLjcgMi43MTUgMCAxLjUgMS4yMDggMi43MTQgMi43IDIuNzE0YTIuNzE1IDIuNzE1IDAgMDAwLTUuNDN6bTAgNC45MDRhMi4xNzYgMi4xNzYgMCAwMS0yLjE3OC0yLjE5YzAtMS4yMDQuOTY5LTIuMTg5IDIuMTc4LTIuMTg5YTIuMTkgMi4xOSAwIDAxMCA0LjM3OXptMS4xOTgtLjg4N2MtLjU3Ny0xLjA2Mi0uNTQ0LTEuMDA3LS41NzctMS4wNS4yNjEtLjE1NC40MjUtLjQ2LjQyNS0uODEgMC0uNTctLjMyNy0uOTMxLTEuMS0uOTMxaC0uODYxYS4xMzIuMTMyIDAgMDAtLjEzLjEzMXYyLjcxNWMwIC4wNzcuMDU0LjEzMS4xMy4xMzFoLjQyNWEuMTMzLjEzMyAwIDAwLjEzMS0uMTMxdi0uOTA5aC4zNDhsLjUxMi45NzVjLjAyMi4wNDMuMDc2LjA2NS4xMi4wNjVoLjQ1N2MuMTA5IDAgLjE2NC0uMDk4LjEyLS4xODZ6bS0xLjE5OC0xLjQ3OGgtLjM1OXYtLjdoLjI5NGMuMzQ4IDAgLjQyNC4xMzEuNDI0LjM1IDAgLjIzLS4xMy4zNS0uMzU5LjM1eiI+PC9wYXRoPjwvc3ZnPg=="
            alt="Convert"
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
