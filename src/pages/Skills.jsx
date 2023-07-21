
import react from "../assets/react.svg";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import tailwind from "../assets/tailwind.svg";
import node from "../assets/node.svg";
import js from "../assets/js.svg";
import mongo from "../assets/mongo.svg";
import express from "../assets/express.svg";
import next from "../assets/next.svg";
import vitejs from "../assets/vitejs.svg";
import redux from "../assets/redux.svg";
import prisma from "../assets/prisma.svg";
//import Skill from '../components/Skill'

const Skills = () => {
  return (
    <>
      <h1 className="text-white text-center text-6xl font-bold animate-fade-in-y">Skills</h1>
      <div className="p-10 flex gap-5 justify-around flex-wrap">
        {/* <Skill title="React" image={react} progress={50} nivel={"Medio"} />
        <Skill title="Node" image={node} progress={90} nivel={"Alto"} />
        <Skill image={html} title="HTML" progress={90} nivel={"Alto"} />
        <Skill image={css} title="CSS" progress={90} nivel={"Alto"} />
        <Skill image={tailwind} title="TailWind" progress={90} nivel={"Alto"} />
        <Skill image={js} title="Javascript" progress={50} nivel={"Medio"} />
        <Skill image={mongo} title="MongoDB" progress={50} nivel={"Medio"} />
        <Skill image={express} title="Express" progress={50} nivel={"Medio"} />
        <Skill image={next} title="Next" progress={25} nivel={"Bajo"} />
        <Skill image={vitejs} title="Vite" progress={90} nivel={"Alto"} />
        <Skill image={redux} title="Redux" progress={25} nivel={"Bajo"} />
        <Skill image={prisma} title="Prisma" progress={25} nivel={"Bajo"} /> */}
      </div>
    </>
  );
};

export default Skills;