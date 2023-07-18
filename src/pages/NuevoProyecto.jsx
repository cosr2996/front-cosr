import { useState } from 'react';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/clienteAxios';

const NuevoProyecto = () => {
    const [name, setName] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [description, setdescription] = useState("");
    const [finished, setFinished] = useState("");
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [alerta, setAlerta] = useState("");
  
    const manejarCambioImagen = (event) => {
      //? Obtén la imagen del evento del input
      const imagenSeleccionada = event.target.files[0];
      setImage(imagenSeleccionada);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      //?validacion
      if ([name, technologies, description, finished, image].includes("")) {
        setAlerta({
          msg: "Todos los campos son obligatorios",
          error: true,
        });
  
        setTimeout(() => {
          setAlerta({});
        }, "3000");
        return;
      }
      setAlerta({});
  
      try {
        //? Crea un objeto FormData y adjunta la imagen
        
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("technologies", technologies);
        formData.append("url", url);
        formData.append("finished", finished);
  
        //? Realiza la solicitud HTTP utilizando Axios con async/await
        const response = await clienteAxios.post("/projects", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        //? La solicitud se ha completado exitosamente
        setAlerta({
          msg: "proyecto creado con exito",
          error: false,
        });
        setTimeout(() => {
          setAlerta({});
          setImage("");
          setFinished("");
          setTechnologies("");
          setdescription("");
          setUrl("");
          setImage(null);
        }, "3000");
      } catch (error) {
        //? Ocurrió un error al enviar la imagen
        console.error(error);
      }
    };
  
    const { msg } = alerta;
  
    return (
      <section>
        <h1 className="text-white text-6xl text-center p-5">Nuevo Proyecto</h1>
  
        {msg && <Alerta alerta={alerta} />}
        <form
          className="flex flex-col gap-5 w-1/2 m-auto"
          id="form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <input
            className="p-2 rounded-md"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="p-2 rounded-md"
            type="text"
            placeholder="technologies"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
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
            placeholder="finished"
            value={finished}
            onChange={(e) => setFinished(e.target.value)}
          />
          <input
            className="p-2 rounded-md"
            type="text"
            placeholder="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            className="p-2 rounded-md text-white"
            type="file"
            name="image"
            id=""
            onChange={manejarCambioImagen}
          />
          <button className="bg-white rounded-lg w-40 p-3 m-auto" type="submit">
            Crear Poyecto
          </button>
        </form>
      </section>
    );
}

export default NuevoProyecto