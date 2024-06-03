export default function HeroBanner() {
  return (
    <>
      <div className="text-gray-500 px-10 grid sm:grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center flex-1 text-white flex-col lg:ml-40">
          <h1 className="text-3xl my-10">Hello! I am</h1>
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
            <div className="absolute bg-slate-50 lg:top-62 md:top-56 sm:top-52 md:left-60 sm:left-40 p-2 rounded-lg shadow-md dark:shadow-gray-800 w-44 text-center">
              <h5 className="font-semibold">Web Developer</h5>
              <p className="text-sm text-slate-400 mt-1">
                3+ years of experience
              </p>
            </div>
            <div className="absolute bg-slate-50 p-2 lg:bottom-28 md:bottom-10 bottom-2 md:-left-12 sm:left-px rounded-lg shadow-md dark:shadow-gray-800 m-3 w-44 text-center">
              <h5 className="text-xl font-medium mb-0">600+</h5>
              <p>A/B Test Completed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-4 -skew-y-6 block translate-y-px lg:block "></div>
    </>
  )
}
