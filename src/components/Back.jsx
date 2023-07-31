import back from "../assets/back.svg";
import { Link } from "react-router-dom";

const Back = ({ ruta }) => {
  return (
    <div className="flex gap-2 bg-white p-3 rounded-md w-32 items-center cursor-pointer hover:scale-105 transition-all">
      <img src={back} alt="regresar" />
      <Link to={ruta} className=" font-black">
        Volver
      </Link>
    </div>
  );
};

export default Back;
