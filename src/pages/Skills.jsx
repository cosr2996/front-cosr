import Back from "../components/Back";
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
import ItemSkill from "../components/ItemSkill";
import styleComponents from "../assets/StyledComponents.svg"
import MUI from "../assets/MUI.svg"

const Skills = () => {
  return (
    <>
      <h1 className="text-white text-center text-6xl font-bold animate-fade-in-y">Skills</h1>
      <div className="p-10 flex gap-5 justify-around flex-wrap">
        <ItemSkill title="React" image={react} progress={50} nivel={"Medio"} />
        <ItemSkill title="Node" image={node} progress={90} nivel={"Alto"} />
        <ItemSkill image={html} title="HTML" progress={90} nivel={"Alto"} />
        <ItemSkill image={css} title="CSS" progress={90} nivel={"Alto"} />
        <ItemSkill image={tailwind} title="TailWind" progress={90} nivel={"Alto"} />
        <ItemSkill image={js} title="Javascript" progress={50} nivel={"Medio"} />
        <ItemSkill image={mongo} title="MongoDB" progress={50} nivel={"Medio"} />
        <ItemSkill image={express} title="Express" progress={50} nivel={"Medio"} />
        <ItemSkill image={next} title="Next" progress={25} nivel={"Bajo"} />
        <ItemSkill image={vitejs} title="Vite" progress={90} nivel={"Alto"} />
        <ItemSkill image={redux} title="Redux" progress={25} nivel={"Bajo"} />
        <ItemSkill image={prisma} title="Prisma" progress={25} nivel={"Bajo"} /> 
        <ItemSkill image={styleComponents} title="Styled Components" progress={50} nivel={"Medio"} /> 
        <ItemSkill image={MUI} title="MUI" progress={50} nivel={"Medio"} /> 
      </div>
      <div className="p-5">
        <Back ruta={'/'}/>
      </div>
    </>
  );
};

export default Skills;