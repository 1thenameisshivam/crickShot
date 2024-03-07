import { BiCricketBall } from "react-icons/bi";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="text-white bg-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="text-3xl bg-red-800 rounded-full p-1">
            <BiCricketBall />
          </span>
          <span className="ml-3 text-xl">CrickShot</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={"/main/iccRanking"} className="mr-5 hover:text-white">
            icc-Rankings
          </Link>
          <a className="mr-5 hover:text-white">News</a>
          <a className="mr-5 hover:text-white">Matches</a>
          <a className="mr-5 hover:text-white">Fourth Link</a>
        </nav>
        <button className="inline-flex items-center bg-red-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Button
        </button>
      </div>
    </header>
  );
};

export default NavBar;
