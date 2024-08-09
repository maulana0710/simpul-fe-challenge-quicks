import Image from "next/image";
import SearchIcon from "@/../public/icons/action/search_24px.svg";
const Navbar = () => {
  return (
    <>
      <nav className="bg-tertiary dark:bg-tertiary">
        <div className="flex flex-wrap items-center justify-between mx-auto p-2">
          <div
            className="items-center justify-between hidden w-full h-6 md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="rounded-lg text-sm p-2.5 me-1"
            >
              <Image
                src={SearchIcon}
                alt="Home Icon"
                style={{ width: "auto", height: "auto" }}
                width={24}
                height={24}
                className="w-1/2"
              />
              <span className="sr-only">Search</span>
            </button>
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
