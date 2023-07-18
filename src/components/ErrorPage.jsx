import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="space-y-8 text-white flex flex-col justify-center items-center w-full m-auto ">
      <h1 className="text-center text-8xl font-extrabold mt-20 text-white  m-auto">
        ERROR 404
      </h1>

      <p className=" text-center">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
