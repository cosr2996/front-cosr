import clienteAxios from "../config/clienteAxios";


export async function obtenerProjects(){
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await clienteAxios("/projects", config);
      
      return data
      
    } catch (error) {
      console.log(error)
    }
  } 