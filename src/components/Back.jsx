import back from "../assets/back.svg";
import { Link } from "react-router-dom";

const Back = ({ ruta }) => {
  return (
     <Link to={ruta} className=" font-black">
    <div className="flex gap-2 bg-white p-3 rounded-md w-32 items-center cursor-pointer hover:scale-105 transition-all">
      <img src={back} alt="regresar" />
     
        Volver
      
    </div>
    </Link>
  );
};

export default Back;
