import { Link } from "react-router-dom";

const TarjetaProject = ({ project }) => {
  return (
    <article className="sm:w-11/12 xl:w-80 lg:w-3/12 md:w-5/12 bg-white p-5 rounded-md hover:scale-105 transition-all">
      <div>
        <img src={project.image.secure_url} alt="imamgen de proyecto" />
      </div>
      <div className="text-neutral-900 pb-4">
        <h3 className="text-black font-bold text-2xl text-center p-2">
          {project.name}
        </h3>
        <p className="truncate">{project.description}</p>
      </div>

      <div className="flex flex-col gap-5 justify-between items-center">
        <span className="text-sm text-center font-bold h-10">
          {project.technologies}
        </span>
        <div className="flex gap-5 justify-between w-full">
          <Link
            to={project._id}
            className=" bg-black block gap-5 text-white p-3 font-bold w-1/2 text-center rounded-md hover:scale-105 transition-all"
            
          >
            Ver Detalles
          </Link>
          <a
            target="blank"
            className="bg-green-500 block gap-5 text-white p-3 font-bold w-1/2 text-center rounded-md hover:scale-105 transition-all"
            href={project.url}
          >
            Demo
          </a>
        </div>
      </div>
    </article>
  );
};

export default TarjetaProject;
