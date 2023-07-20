import { Outlet, Link ,useLocation} from "react-router-dom";
import logo from "../assets/logo.svg";
import { Redes } from "./Redes";


function Layout() {

  const location = useLocation()
  
  return (
    <div className="font-raleway">
      <header className="bg-black flex justify-between p-5 h-15 sm:flex-col lg:flex-row  ">
        <div className="flex items-center gap-2 sm:justify-center sm:mb-5 md:mb-10 lg:mb-0">
          <img src={logo} alt="" className="w-10" />
          <Link className={`${location.pathname === '/' ? 'text-white' :''} text-neutral-400  cursor-pointer hover:text-white  transition duration-300 sm:text-2xl lg:text-xl hover:scale-105 hover:border-b-2 `} to={'/'}>
          Omar Sánchez
          </Link>
        </div>

        <nav className="text-neutral-400  flex sm:justify-center lg:h-12 ">
          <ul className="flex sm:gap-5 items-center sm:flex-col lg:flex-row md:flex-row md:gap-20 lg:gap-8">
            <li className="cursor-pointer hover:text-white lg:text-lg hover:scale-105 hover:border-b-2  transition duration-300">
              <Link className={`${location.pathname === '/skills' ? 'text-white' :''}`} to={"/skills"}>Skills</Link>
            </li>

            <li className="cursor-pointer hover:text-white lg:text-lg hover:scale-105 hover:border-b-2  transition duration-300">
              <Link className={`${location.pathname === '/certificates' ? 'text-white' :''}`} to={"/certificates"}>Formacion</Link>
            </li>
            <li className="cursor-pointer hover:text-white lg:text-lg hover:scale-105 hover:border-b-2 transition duration-300">
              <Link className={`${location.pathname === '/projects' ? 'text-white' :''}`} to={"/projects"}>Proyectos</Link>
            </li>
          </ul>
        </nav>
        <hr className="w-4/5 m-auto mt-5 lg:hidden"  />
      </header>

      <main className="">
        <Outlet />
      </main>

      <footer className="bg-black text-neutral-400 flex p-5 justify-between text-lg sm:flex-col sm:items-center lg:flex-row">
        <div className="flex gap-6 ">
          <h2 className="sm:hidden md:block">
            Desarrollado por{" "}
            <span className="text-neutral-200 ">Omar Sanchez </span>
          </h2>
          <h3 className="text-4xl text-wite font-sacramento  text-center ">
            OmarSanchez
          </h3>
          <span className="sm:hidden md:block opacity-70">2023</span>
        </div>

        <div>
          <Redes />
        </div>
      </footer>
    </div>
  );
}

export default Layout;
