import axios from "axios";
import { useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";
import Tarjeta from "../components/Tarjeta";
import { obtenerCertificate } from "../api/certificate";
import { useLoaderData } from "react-router-dom";

 export function loader() {
   const certificates =obtenerCertificate()
   return certificates;
 }


const Certificates = () => {
  //  const [certificates, setCertificates] = useState([]);
  const certificates = useLoaderData()

  
  //  useEffect(() => {
  //    const obtenerCertificates = async () => {
  //      try {
        
  //        const { data } = await clienteAxios("/certificates");
  //        console.log("llamndo ap");
  //        setCertificates(data);
  //      } catch (error) {
  //        console.log(error);
  //      }
  //    };

  //    obtenerCertificates();
  //  }, []);

 
  return (
    <section className="w-full">
      <h1 className="text-white text-6xl text-center pb-20">Formación</h1>
      {/* tarjetas */}
      <h2 className="text-neutral-400 block relative xl:left-20 lg:left-40 sm:left-10">
        Total: {certificates.length}
      </h2>
      <div className="p-5 flex gap-10 flex-wrap  w-full justify-center">
        {certificates.length ? (
          certificates.map((certificate) => (
            <Tarjeta key={certificate._id} certificate={certificate} />
          ))
        ) : (
          <p className="text-6xl text-white text-center">No hay formacion</p>
        )}
      </div>
    </section>
  );
};

export default Certificates;
