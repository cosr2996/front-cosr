import clienteAxios from "../config/clienteAxios";


export async function obtenerProjects(){
    try {
      const { data } = await clienteAxios("/projects");
      return data
      
    } catch (error) {
      console.log(error)
    }
  }
  
