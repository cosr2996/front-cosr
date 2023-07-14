import { useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

const NuevoCertificate = () => {
  const [title, settitle] = useState("");
  const [duration, setduration] = useState("");
  const [description, setdescription] = useState("");
  const [platform, setplatform] = useState("");
  const [image, setimage] = useState(null);
  const [alerta, setAlerta] = useState("");

   const handleSubmit = async (e) => {
     e.preventDefault();

     //?validacion
     if ([title, duration, description, platform, image].includes("")) {
       setAlerta({
        msg: "Todos los campos son obligatorios",
         error: true,
       });
       return;
     }
     setAlerta({});

     //? crear certificado en la api
//     try {
//       const { data } = await clienteAxios.post("/certificates", {
//         title,
//         duration,
//         description,
//         platform,
//         image
//       });
//     } catch (error) {
//       console.log(error);
//     }
   };



  const { msg } = alerta;

  return (
    <section>
      <h1 className="text-white text-6xl text-center p-5">nuevo certificado</h1>

      {msg && <Alerta alerta={alerta} />}
      <form className="flex flex-col gap-5 w-1/2 m-auto" id="form" onSubmit={handleSubmit} encType="multipart/form-data">
        <input
        className="p-2 rounded-md"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
        className="p-2 rounded-md"
          type="text"
          placeholder="duration"
          value={duration}
          onChange={(e) => setduration(e.target.value)}
        />
        <input
        className="p-2 rounded-md"
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        
        <input
        className="p-2 rounded-md"
          type="text"
          placeholder="platform"
          value={platform}
          onChange={(e) => setplatform(e.target.value)}
        />
        <input
        className="p-2 rounded-md text-white"
          type="file"
          name="image"
          id=""
          onChange={(e) => setimage(e.target.files)}
        />
        <button className="bg-white rounded-lg w-40 p-3 m-auto" type="submit">
          crear
        </button>
      </form>
    </section>
  );
};

export default NuevoCertificate;
