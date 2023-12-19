import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="bg-slate-50 shadow-md flex justify-between items-center">
      <div className=" max-w-6xl  p-3">
        {/* <Link to='/'> */}
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Vehicle</span>
          <span className="text-slate-700">Harbour</span>
        </h1>
        {/* </Link> */}
      </div>

      <div className="flex gap-4  justify-around pl-10 w-1/2">
        <ul className="flex gap-4">
          {/* <Link to='/'> */}
          <li className="hidden sm:inline text-slate-700 hover:underline">
            Home
          </li>
          {/* </Link> */}
          {/* <Link to='/about'> */}
          <li className="hidden sm:inline text-slate-700 hover:underline">
            About
          </li>
          {/* </Link> */}
          {/* <Link to='/profile'> */}
          <li className="hidden sm:inline text-slate-700 hover:underline">
            About
          </li>
          {/* </Link> */}
          {/* <Link to='/profile'> */}
          <li className="hidden sm:inline text-slate-700 hover:underline">
            About
          </li>
          {/* </Link> */}
          {/* <Link to='/profile'> */}
          <li className="hidden sm:inline text-slate-700 hover:underline">
            About
          </li>
          {/* </Link> */}
        </ul>
        <div className="relative">
          <button
            onClick={handleDropdownToggle}
            className="font-bold px-4 py-1 justify-center bg-green-300 flex"
          >
            <img
              className="h-4 top-1 relative flex  mr-2"
              src="english_flag.png"
              alt="English Flag"
            />
            <p>English</p>
            <img
              className={`h-[6px] relative top-[10px] ml-2 transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              src="Vector.png"
              alt="Dropdown Arrow"
            />
          </button>

          {isDropdownOpen && (
            <div className=" z-40 absolute w-[8.4rem] top-full right-0 mt-1 bg-white border border-gray-300 shadow-lg rounded-md">
              <ul className="">
                <li className="hover:bg-gray-200 px-2 py-1">Hindi</li>
                <li className="px-2 py-1 hover:bg-gray-200">Chinise</li>
                <li className="px-2 py-1 hover:bg-gray-200">French</li>
                <li className="px-2 py-1 hover:bg-gray-200">Nepali</li>
                <li className="px-2 py-1 hover:bg-gray-200">Arebic</li>
                <li className="px-2 py-1 hover:bg-gray-200">Bengali</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
