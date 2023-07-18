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
import { useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";

const Index = () => {
  const [favorito, setFavorito] = useState("");

  useEffect(() => {
    const obtenerFavorito = async () => {
      try {
        const { data } = await clienteAxios(
          "/projects/64b20ce7e98b1a3d24f1a119"
        );
        setFavorito(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerFavorito();
  }, []);

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
        <p>
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
          <h3 className=" text-2xl text-center pb-6  font-bold text-white">
            Skills
          </h3>
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
          <h3 className=" text-2xl text-center pb-6 font-bold text-white">
            Hobbies
          </h3>
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

      {/* mi proyecto favorito */}

      <div className="   bg-neutral-950  pt-10 pb-10">
        <div className="flex  m-auto sm:flex-col p-5 lg:flex-row bg-neutral-950 gap-10 lg:w-11/12">
          <div>
            <img src={favorito.image?.secure_url} alt="" />
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="sm:text-4xl sm: text-center lg:text-6xl p-5">
                {favorito.name}
              </h1>
              <div className="flex sm:flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between p-2">
                <span className="opacity-50">{favorito.technologies}</span>
                <span className="opacity-50">{favorito.finished}</span>
              </div>

              <p>{favorito.description}</p>

              <a
                className="hover:scale-105 transition-all bg-white text-black block w-1/2 text-center font-bold p-3 m-auto rounded-md lg:mt-10"
                target="blank"
                href={favorito.url}
              >
                {" "}
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
