import { useEffect, useState } from "react";
import TarjetaProject from "../components/TarjetaProject";
import clienteAxios from "../config/clienteAxios";
import Cargando from "../components/Cargando";
import Back from "../components/Back";


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    async function obtenerProjects() {
      setCargando(true);
      try {
        const { data } = await clienteAxios("/projects");
        setProjects(data);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    }
    obtenerProjects();
  }, []);

  return (
    <section className="w-full ">
      <h1 className="text-white text-6xl text-center pb-20 animate-fade-in-y">
        Proyectos
      </h1>
      {/* tarjetas */}
      <h2 className="text-neutral-400 block relative xl:left-20 lg:left-40 sm:left-10">
        Total: {projects.length}
      </h2>
      {cargando && (
        <div className="flex items-start justify-center h-screen">
          <Cargando />
        </div>
      )}
      <div className="p-5 flex gap-10 flex-wrap  w-full justify-center ">
        {projects.length
          ? projects.map((project) => (
              <TarjetaProject key={project._id} project={project} />
            ))
          : ""}
      </div>

      <div className="p-5">
        <Back ruta={'/'}/>
      </div>
    </section>
  );
};

export default Projects;
