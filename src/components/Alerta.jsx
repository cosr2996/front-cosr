const Alerta = ({ alerta }) => {
  return (
    <div className={`${alerta.error ? "bg-red-500" : "bg-green-400"}`}>
      {alerta.msg}
    </div>
  );
};

export default Alerta;
