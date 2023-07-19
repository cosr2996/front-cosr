import { useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";
import Tarjeta from "../components/Tarjeta";
import Cargando from "../components/Cargando";


const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const obtenerCertificates = async () => {
      setCargando(true);
      try {
        const { data } = await clienteAxios("/certificates");
        setCertificates(data);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerCertificates();
  }, []);

  return (
    <section className="w-full">
      <h1 className="text-white text-6xl text-center pb-20">Formación</h1>
      {/* tarjetas */}
      <h2 className="text-neutral-400 block relative xl:left-20 lg:left-40 sm:left-10">
        Total: {certificates.length}
      </h2>
      {cargando && (
      <div className="flex items-center justify-center">
        <Cargando/>
      </div>
      )}
      <div className="p-5 flex gap-10 flex-wrap  w-full justify-center">
        {certificates.length ? (
          certificates.map((certificate) => (
            <Tarjeta key={certificate._id} certificate={certificate} />
          ))
        ) : ''}
      </div>
    </section>
  );
};

export default Certificates;