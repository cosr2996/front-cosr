import { useEffect, useState } from "react";
import TarjetaProject from "../components/TarjetaProject";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";
import { obtenerProjects } from "../api/projects";
import { useLoaderData } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function obtenerProjects() {
      try {
        const config = {
          "Content-Type": "application/json",
        };
        const { data } = await clienteAxios("/projects", config);

        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    }
    obtenerProjects();
  }, []);

  return (
    <section className="w-full">
      <h1 className="text-white text-6xl text-center pb-20">Proyectos</h1>
      {/* tarjetas */}
      <h2 className="text-neutral-400 block relative xl:left-20 lg:left-40 sm:left-10">
        Total: {projects.length}
      </h2>
      <div className="p-5 flex gap-10 flex-wrap  w-full justify-center">
        {projects.length ? (
          projects.map((project) => (
            <TarjetaProject key={project._id} project={project} />
          ))
        ) : (
          <p className="text-6xl text-white text-center">No hay Proyectos</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
