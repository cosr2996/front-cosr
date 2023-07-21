import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const Project = () => {
  const [project, setproject] = useState({});
  const params = useParams();

  useEffect(() => {
    const obtenerProyecto = async () => {
      try {
        const { data } = await clienteAxios(`/projects/${params.id}`);
        setproject(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerProyecto();
  }, []);

  return (
    <div className="lg:p-16 sm:p-5  xl:w-3/4 xl:m-auto w-full  2xl:w-2/4 ">
      
      <h1 className="text-white sm:text-2xl md:text-4xl lg:text-7xl text-center p-5  mb-10 xl:text-6xl">{project.name}</h1>

      <div className="flex sm:flex-col lg:flex-row gap-4 sm:gap-8 mb-20 sm:mb-10 w-full  ">

         <div className="sm:w-full w-1/2 hover:scale-105 transition-all ">
          <img className="w-full rounded-lg" src={project.image?.secure_url} alt="" />
         </div>

         <div className=" sm:w-full  w-1/2 hover:scale-105 transition-all p-5 flex flex-col justify-between sm:gap-8 flex-wrap  bg-neutral-950 rounded-lg">
            <p className=" text-white text-lg">{project.description} </p>
            <div className="flex justify-between ">
              <span className=" text-white text-center">{project.technologies}</span>
            <span className=" text-white text-center opacity-50">{project.finished}</span>
            </div>
            
         </div>

      </div>

      <a target="blanck" className="hover:scale-105 transition-all bg-white p-4 rounded-md block sm:w-2/4 w-1/4 text-center m-auto font-bold" href={project.url}>Demo</a>

     
    </div>
  );
};

export default Project;
