export default function NavBar() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-slate-800">
  <nav
    className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
    aria-label="Global"
  >
    <a className="flex-none text-xl font-semibold dark:text-white" href="#a">
      Zahid
    </a>
    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
      {/* <a className="font-medium text-blue-500" href="#a" aria-current="page">
        Skills
      </a> */}
      <a
        className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
        href="#job"
      >
        Job
      </a>
      <a
        className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
        href="#cro"
      >
        CRO
      </a>
      <a
        className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
        href="#sample"
      >
        Work-Sample
      </a>
    </div>
  </nav>
</header>

  )
}
