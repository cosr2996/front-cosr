import clienteAxios from "../config/clienteAxios";


export async function obtenerCertificate(){
    try {
      const { data } = await clienteAxios("/certificates");
      console.log('llame a la api')
      return data
      
    } catch (error) {
      console.log(error)
    }
  } 



