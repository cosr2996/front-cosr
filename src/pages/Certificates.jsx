import prueba from "../assets/prueba.png";
 import alura from "../assets/alura.svg";
 import udemy from "../assets/udemy.svg";

const Certificates = () => {
  return (
    <section  className="w-full">
      <h1 className="text-white text-6xl text-center pb-20">Formación</h1>
      {/* tarjetas */}
      <h2 className="text-neutral-400 block relative xl:left-20 lg:left-40 sm:left-10">Total:42</h2>
      <div className="p-5 flex gap-10 flex-wrap  w-full justify-center"> 
        
        <article className="xl:w-80 lg:w-3/12 md:w-5/12 bg-white p-5">
          <div>
            <img src={prueba} alt="" />
          </div>
          <div className="text-neutral-900 pb-4">
            <h3 className="text-black font-bold text-2xl text-center p-2">titulo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              et quo quidem praesentium natus beatae error. Totam officiis
              quisquam quo enim,
            </p>
          </div>

          <div className="flex justify-between items-center">
            <a className="bg-black block gap-5 text-white p-2 font-bold w-1/2 text-center" href="#">
              Ver Detalles
            </a>
            <div className="flex flex-col w-1/2  ">
              <span className="text-sm text-center">Plataforma</span>
               <img className="w-1/2 m-auto" src={udemy} alt="" />
            </div>
            
          </div>
        </article>
       
       
      
      </div>
    </section>
  );
};

export default Certificates;
