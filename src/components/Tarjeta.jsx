import prueba from "../assets/prueba.png";
import alura from "../assets/alura.svg";
import udemy from "../assets/udemy.svg";

const Tarjeta = ({ certificate }) => {
  return (
    
      
        <article className="xl:w-80 lg:w-3/12 md:w-5/12 bg-white p-5">
          <div>
            <img src={certificate.image.secure_url} alt="" />
          </div>
          <div className="text-neutral-900 pb-4">
            <h3 className="text-black font-bold text-2xl text-center p-2">
              {certificate.title}
            </h3>
            <span className=" text-sm text-neutral-500 text-center m-auto block">
              {certificate.duration}
            </span>
            <p>{certificate.description}</p>
          </div>

          <div className="flex justify-between items-center">
            <a
              className="bg-black block gap-5 text-white p-2 font-bold w-1/2 text-center"
              href="#"
            >
              Ver Detalles
            </a>
            <div className="flex flex-col w-1/2  ">
              <span className="text-sm text-center">Plataforma</span>
              <img
                className="w-1/2 m-auto"
                src={`${certificate.platform === "udemy" ? udemy : alura} `}
                alt=""
              />
            </div>
          </div>
        </article>
     
    
  );
};

export default Tarjeta;
