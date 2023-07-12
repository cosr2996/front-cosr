import React from "react";
import icon from '../assets/arrow.png'
import cv from '../assets/cv.pdf'

export const Redes = () => {
  return (
    <div className=" font-bold">
      <ul className="flex gap-5 sm:justify-around lg:justify-normal sm:items-center">
        <li className="flex gap-1 items-center hover:text-white  transition duration-300">
          <a href="https://github.com/cosr2996">GitHub</a>
          <img src={icon} className="w-4 h-4" />
        </li>
        <li className="flex gap-1 items-center hover:text-white  transition duration-300">
          <a href="https://www.linkedin.com/in/omar-sanchez-react-front-end-web-developer/">Linkedin</a>
          <img src={icon} className="w-4 h-4" />
        </li>
        <li className="flex gap-1 items-center hover:text-white  transition duration-300 ">
          <a href="">Instagram</a>
          <img src={icon} className="w-4 h-4" />
        </li>
        <li className="flex gap-1 items-center hover:text-white  transition duration-300">
          <a download="cv.pdf" href={cv}>
            Currículo
          </a>
          <img src={icon} className="w-4 h-4" />
        </li>
      </ul>
    </div>
  );
};
