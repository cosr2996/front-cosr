import { Redes } from "../components/Redes";
import imagen from "../assets/yo.png";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import tailwind from "../assets/tailwind.svg";
import node from "../assets/node.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";

import code from "../assets/code.svg";
import movie from "../assets/cine.svg";
import music from "../assets/music.svg";
import game from "../assets/game.svg";
import coffe from "../assets/coffe.svg";
import build from "../assets/build.svg";
import one from "../assets/one.png";
import insignia1 from "../assets/insignia-1.png";
import insignia2 from "../assets/insignia-2.png";
import insignia3 from "../assets/insignia-3.png";
import contact from "../assets/contact_image.png";

const Index = () => {
  return (
    <section className="text-white ">
      {/* PRESENTACION */}
      <div className="bg-black lg:p-10 sm:p-5 flex sm:flex-col-reverse lg:flex-row w-11/12 m-auto gap-5">
        <div className="flex-col flex	gap-4 ">
          <h1 className=" lg:text-6xl font-bold sm:text-4xl  sm:text-center lg:text-left">
            Hola mi nombre es Omar Sanchez y soy desarrollador Front End
          </h1>
          <p className="text-lg sm:text-center lg:text-left text-neutral-400">
            
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            saepe, repudiandae omnis facere ducimus illum blanditiis a eos
            impedit non aperiam eum, hic quis exercitationem. Eaque delectus aut
            voluptas accusamus.
          </p>
          
             <Redes />
          
         
        </div>
        <div>
          <img className="lg:w-full sm:w-2/5 sm:m-auto" src={imagen} alt="" />
        </div>
      </div>
      {/* SOBRE MI */}
      <div className="p-10 flex flex-col gap-3 text-neutral-400 bg-black lg:w-11/12 ">
        <h2 className="text-2xl font-bold text-white">Sobre mi</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          reiciendis sunt sequi tempore minima quas numquam repellendus
          excepturi nihil illum esse odio neque, vitae rerum cumque quasi et
          ducimus non!
        </p>
        <p >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          saepe praesentium eum necessitatibus at laudantium et repellat omnis
          quod placeat similique voluptatem, aspernatur sit ipsum, veritatis
          beatae, porro ut soluta.
        </p>
        
        <h3 className="text-5xl text-wite font-sacramento p-3 -rotate-6 block relative sm:-top-2 lg:-top-15 xl:-top-9 text-neutral-400">
          OmarSanchez
        </h3>
      </div>

      <div className="bg-neutral-950 border-2 border-neutral-900 text-neutral-400">
        {/* SKILLS */}
        <div className="p-3 bg-neutral-950">
          <h3 className=" text-2xl text-center pb-6  font-bold text-white">Skills</h3>
          <div className="flex justify-around flex-wrap ">

          
            <div className="sm:w-1/3 sm:p-5 lg:w-2/12">
              <ul className="flex flex-col items-center gap-2">
                <li className="">
                  <img className="w-12" src={html} />
                </li>
                <li className="">HTML 5</li>
              </ul>
            </div>

            <div className="sm:w-1/3 sm:p-5 lg:w-2/12">
              <ul className="flex flex-col items-center gap-2">
                <li className="">
                  <img className="w-12" src={js} alt="" />
                </li>
                <li className="">Javascript</li>
              </ul>
            </div>

            <div className="sm:w-1/3 sm:p-5 lg:w-2/12">
              <ul className="flex flex-col items-center gap-2">
                <li className="">
                  <img className="w-12" src={tailwind} alt="" />
                </li>
                <li className="">TailWind</li>
              </ul>
            </div>

            <div className="sm:w-1/3 sm:p-5 lg:w-2/12">
              <ul className="flex flex-col items-center gap-2">
                <li className="">
                  <img className="w-12" src={node} alt="" />
                </li>
                <li className="">Node JS</li>
              </ul>
            </div>

            <div className="sm:w-1/3 sm:p-5 lg:w-2/12">
              <ul className="flex flex-col items-center gap-2">
                <li className="">
                  <img className="w-12" src={react} alt="" />
                </li>
                <li className="e">React</li>
              </ul>
            </div>

            <div className="sm:w-1/3 sm:p-5 lg:w-2/12">
              <ul className="flex flex-col items-center gap-2">
                <li className="">
                  <img className="w-12" src={css} alt="" />
                </li>
                <li className="">CSS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hobbies */}

        <div className="p-3 mt-20 bg-neutral-950 ">
          <h3 className=" text-2xl text-center pb-6 font-bold text-white">Hobbies</h3>
          <div className="flex justify-around items-center flex-wrap ">
            <div className="sm:w-1/3 sm:p-5 lg:w-2/12">
              <ul className="flex flex-col items-center gap-2">
                <li className="">
                  <img className="w-12" src={movie} />
                </li>
                <li className="">Peliculas</li>
              </ul>
            </div>

            <div className="sm:w-1/3 sm:p-5 lg:w-2/12">
              <ul className="flex flex-col items-center gap-2">
                <li className="">
                  <img className="w-12" src={music} alt="" />
                </li>
                <li className="">Musica</li>
              </ul>
            </div>

            <div className="sm:w-1/3 sm:p-5 lg:w-2/12">
              <ul className="flex flex-col items-center gap-2">
                <li className="">
                  <img className="w-12" src={game} alt="" />
                </li>
                <li className="">Jugar</li>
              </ul>
            </div>

            <div className="sm:w-1/3 sm:p-5 lg:w-2/12">
              <ul className="flex flex-col items-center  gap-2">
                <li className="">
                  <img className="w-12" src={code} alt="" />
                </li>
                <li className="">Programar</li>
              </ul>
            </div>

            <div className="sm:w-1/3 sm:p-5 lg:w-2/12">
              <ul className="flex flex-col items-center gap-2">
                <li className="">
                  <img className="w-12" src={coffe} alt="" />
                </li>
                <li className="e">Barista</li>
              </ul>
            </div>

            <div className="sm:w-1/3 sm:p-5 lg:w-2/12">
              <ul className="flex flex-col items-center gap-2">
                <li className="">
                  <img className="w-12" src={build} alt="" />
                </li>
                <li className="">Counstruir</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ONE – Oracle Next Education */}
      <div className="w-full p-5 0 flex sm:flex-col lg:flex-row sm:items-center lg:justify-around pt-20 pb-20 sm:gap-8 lg:gap-0 text-neutral-400">
        <div className="grow lg:w-1/3 sm:w-4/5">
          <h2 className="text-neutral-400 text-2xl font-bold text-center">
            ONE – Oracle Next Education
          </h2>
          <br />
          <p className="text-center">
            ONE es un programa de educación y empleabilidad con el objetivo
            social de formar personas en tecnología y conectarlas con el mercado
            laboral a través de a través de empresas colaboradoras.
          </p>
        </div>

        <div className="grow lg:w-1/3 sm:w-4/5 ">
          <img className="m-auto" src={one} alt="" />
        </div>

        <div className="grow lg:w-1/3 sm:w-4/5">
          <h3 className="text-2xl font-bold text-center">Insignias</h3>
          <div className="flex pt-5">
            <img className="w-1/3" src={insignia1} alt="" />
            <img className="w-1/3" src={insignia2} alt="" />
            <img className="w-1/3" src={insignia3} alt="" />
          </div>
        </div>
      </div>

      {/* Sección de Contacto  */}
      <div className="p-8 pt-10 bg-neutral-950 flex justify-center sm:p-0 sm:py-5 ">
        <div className="w-5/6 flex gap-8 justify-center lg:items-center">
           <div className="">
          <img className="sm:hidden lg:block" src={contact} />
        </div>

        <div className="flex flex-col gap-5 sm:w-11/12 sm:m-auto ">
          <div className="flex flex-col gap-1 text-neutral-400">
            <h2 className="text-xl font-bold">Contacto</h2>
            <h3 className="">¿Quieres contactarme?</h3>
            <h3 className="">
              Complete el siguiente formulario y me pondré en contacto con usted
              lo antes posible.
            </h3>
          </div>

          <form className="" name="form">
            <div className="flex flex-col">
              <label className="text-neutral-400" htmlFor="name">Nombre</label>
              <input
                className=" p-2 rounded-md bg-black border-2 border-neutral-400"
                type="text"
                id="name"
              />
              <span className="hidden">Este campo no es valido</span>
            </div>

            <div className="flex flex-col">
              <label className="text-neutral-400" htmlFor="name">Email</label>
              <input
                className=" p-2 rounded-md bg-black border-2  border-neutral-400"
                type="email"
                name=""
                id=""
              />
              <span className="hidden">Este campo no es valido</span>
            </div>

            <div className="flex flex-col">
              <label className="text-neutral-400" htmlFor="name">Asunto</label>
              <input
                className=" p-2 rounded-md bg-black border-2  border-neutral-400"
                type="text"
              />
              <span className="hidden">Este campo no es valido</span>
            </div>

            <div className="flex flex-col">
              <label className="text-neutral-400" htmlFor="name">Mensaje</label>
              <textarea
                className=" p-2 rounded-md bg-black border-2  border-neutral-400"
                rows="5"
                cols="40"
                id="mensagem"
                required
                maxlength="300"
                data-tipo="mensaje"
              ></textarea>
              <span className="hidden">Este campo no es valido</span>
            </div>

            <button
              type="submit"
              className=" rounded-md bg-white text-black border-2 border-neutral-950 p-3 font-bold mt-5"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
        </div>
       
      </div>
    </section>
  );
};

export default Index;
