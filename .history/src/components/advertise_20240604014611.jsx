export default function Advertise() {
  return (
    <div className="bg-slate-200 p-12 advertise grid lg:grid-cols-4 md:grid-cols-1">
      <div className="lg:col-span-3">
        <h1 className="text-5xl font-bold my-8">Let's <span className=" text-red-800">Talk.</span> And build your ideas together.</h1>
        <h2 className="text-4xl font-bold my-8">To Boost your sells . . .</h2>
      </div>
      <div className="flex self-center justify-center ">
        <a href="" className=" w-48 h-20 text-center self-center flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 tracking-widest">Contact</a>
      </div>
    </div>
  )
}
