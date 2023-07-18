const Alerta = ({ alerta }) => {
  return (
    <div className={`${alerta.error ? "bg-red-500 text-white" : "bg-green-400"} text-center p-3 w-4/5 m-auto rounded-md font-bold text-xl my-5` }>
      {alerta.msg}
    </div>
  );
};

export default Alerta;
