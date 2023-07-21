import React from "react";
import icon from '../assets/arrow.webp'
import cv from '../assets/cv.pdf'

export const Redes = ({route}) => {
  return (
    <div className=" font-bold sm:text-sm lg:text-lg">
      <ul className="flex gap-5 sm:justify-around lg:justify-normal sm:items-center">
        <li className="flex gap-1 items-center  hover:scale-105  transition duration-300">
          <a target="blank" href="https://github.com/cosr2996">GitHub</a>
          <img src={icon} className="w-4 h-4" />
        </li>
        <li className="flex gap-1 items-center  hover:scale-105  transition duration-300">
          <a target="blank" href="https://www.linkedin.com/in/omar-sanchez-react-front-end-web-developer/">Linkedin</a>
          <img src={icon} className="w-4 h-4" />
        </li>
        <li className="flex gap-1 items-center  hover:scale-105  transition duration-300 ">
          <a target="blank" href="https://www.instagram.com/cosr2000/">Instagram</a>
          <img src={icon} className="w-4 h-4" />
        </li>
        <li className={`flex gap-1  items-center  hover:scale-105  transition duration-300 bg-green-500 p-1 rounded-md ${route ==='footer'? 'text-white':""}`}>
          <a download="cv.pdf" href={cv}>
          Curriculum
          </a>
          <img src={icon} className="w-4 h-4 sm:hidden lg:block" />
        </li>
      </ul>
    </div>
  );
};
