import axios from "axios";
import { useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";
import Tarjeta from "../components/Tarjeta";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  useEffect(() => {
    const obtenerCertificates = async () => {
      try {
        const config = {
          "Content-Type": "application/json",
        };
        const { data } = await clienteAxios("/certificates", config);
        setCertificates(data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerCertificates();
  }, []);

  console.log(certificates)
  return (
    <section className="w-full">
      <h1 className="text-white text-6xl text-center pb-20">Formación</h1>
      {/* tarjetas */}
      <h2 className="text-neutral-400 block relative xl:left-20 lg:left-40 sm:left-10">
        Total:42
      </h2>
      <div className="p-5 flex gap-10 flex-wrap  w-full justify-center">
        {certificates.length ? (
          certificates.map((certificate) => (
            <Tarjeta key={certificate._id} certificate={certificate} />
          ))
        ) : (
          <p className="text-6xl text-white text-center">No jay formacion</p>
        )}
      </div>
    </section>
  );
};

export default Certificates;
