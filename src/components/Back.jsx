import back from "../assets/back.svg";

const Back = ({ ruta }) => {
  return (
    <div className="flex gap-2 bg-white p-3 rounded-md w-32 items-center cursor-pointer hover:scale-105 transition-all">
      <img src={back} alt="regresar" />
      <a href={ruta} className=" font-black">
        Volver
      </a>
    </div>
  );
};

export default Back;
