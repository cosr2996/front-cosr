import { useParams } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import { useEffect, useState } from "react";
import alura from "../assets/alura.svg";
import udemy from "../assets/udemy.svg";

const Certificate = () => {
  const [certificate, setcertificate] = useState({});
  const params = useParams();

  useEffect(() => {
    const obtenerProyecto = async () => {
      try {
        const { data } = await clienteAxios(`/certificates/${params.id}`);
        setcertificate(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerProyecto();
  }, []);

  return (
    <div className="lg:p-16 sm:p-5  xl:w-3/4 xl:m-auto w-full  2xl:w-2/4 ">
      <h1 className="text-white sm:text-2xl md:text-4xl lg:text-7xl text-center p-5  mb-10 xl:text-6xl">
        {certificate.title}
      </h1>

      <div className="flex sm:flex-col lg:flex-row gap-4 sm:gap-8 mb-20 sm:mb-10 w-full  ">
        <div className="sm:w-full w-1/2 hover:scale-105 transition-all ">
          <img
            className="w-full rounded-lg"
            src={certificate.image?.secure_url}
            alt=""
          />
        </div>

        <div className=" sm:w-full  w-1/2 hover:scale-105 transition-all p-5 flex flex-col justify-arrund sm:gap-8 flex-wrap  bg-neutral-300 rounded-lg">
          <img
            className="w-32 "
            src={`${certificate.platform === "udemy" ? udemy : alura} `}
            alt=""
          />
          <p className=" text-black text-lg">{certificate.description} </p>
          <span className=" text-black text-right">
            {certificate.duration}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
