import { Link } from "react-router-dom";
import Projetos from "./Components/Projetos";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Img1 from "./assets/image1.png";
import Img2 from "./assets/image2.png";
import Img3 from "./assets/image3.png";
import Img4 from "./assets/image4.png";
import Img5 from "./assets/image5.png";

const App = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen w-full flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center p-6">
        <div />
        <div className="flex space-x-4">
          <Link
            to={"https://github.com/pachecx"}
            target="_blank"
            className="fab fa-github cursor-pointer"
          >
            <FaGithub />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/matheus-pacheco-cruz/"}
            target="_blank"
            className="fab fa-linkedin cursor-pointer"
          >
            <FaLinkedin />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-6xl text-center p-12 min-h-screen flex flex-col justify-center">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Nice to meet you! <br /> I’m{" "}
          <span className="text-green-500">Matheus Pacheco</span>.
        </h2>
        <p className="mt-4 text-gray-400 max-w-md mx-auto">
          I'm a front-end developer passionate about building accessible web
          apps that users love.
        </p>
        <button className="mt-6 border-b-2 border-green-500 hover:text-green-500 cursor-pointer">
          CONTACT ME
        </button>
      </section>

      {/* Skills */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 text-center">
        {[
          { skill: "HTML", experience: "1 Years Experience" },
          { skill: "CSS", experience: "1 Years Experience" },
          { skill: "Javascript", experience: "1 Years Experience" },
          { skill: "Typescript", experience: "1 Years Experience" },
          { skill: "Git", experience: "1 Years Experience" },
          { skill: "React", experience: "1 Years Experience" },
          { skill: "Angular", experience: "0.4 Years Experience" },
          { skill: "Tailwind", experience: "0.6 Years Experience" },
          { skill: "Styled Component", experience: "1 Years Experience" },
        ].map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold">{item.skill}</h3>
            <p className="text-gray-400">{item.experience}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="w-full max-w-6xl p-12 min-h-screen">
        <h2 className="text-4xl font-bold">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          <Projetos
            nome=" Card_Interativo"
            tecnologias1="React.js"
            tecnologias2=" TypeScript"
            tecnologias3="Zod"
            repositorio={"https://github.com/pachecx/Card_Interativo"}
            deploy={"https://pachecx.github.io/Card_Interativo/"}
            Img={Img1}
          />

          <Projetos
            nome="Calculadora_de_Gorjeta"
            tecnologias1="React.js"
            tecnologias2="JavaScript"
            tecnologias3="Css"
            repositorio={"https://github.com/pachecx/Calculadora_de_Gorjeta"}
            deploy={"https://pachecx.github.io/Calculadora_de_Gorjeta/"}
            Img={Img2}
          />

          <Projetos
            nome="IP_Address_Tracker"
            tecnologias1="React.js"
            tecnologias2="TypeScript"
            tecnologias3="Styled-Components"
            repositorio={"https://github.com/pachecx/IP_Address_Tracker"}
            deploy={"https://pachecx.github.io/IP_Address_Tracker/"}
            Img={Img3}
          />

          <Projetos
            nome="Advice_Generator"
            tecnologias1="React.js"
            tecnologias2="TypeScript"
            tecnologias3="Styled-Components"
            repositorio={"https://github.com/pachecx/Advice_Generator"}
            deploy={"https://pachecx.github.io/Advice_Generator/"}
            Img={Img4}
          />
          <Projetos
            nome="Autismo_Tech
"
            tecnologias1="React.js"
            tecnologias2="TypeScript"
            tecnologias3="Css"
            repositorio={"https://github.com/pachecx/Autismo_Tech"}
            deploy={"https://autismo-tech.vercel.app/"}
            Img={Img5}
          />
        </div>
        {/* https://pachecx.github.io/Card_Interativo/ */}
      </section>

      {/* Contact */}
      <section className="w-full max-w-6xl p-12 text-center min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-gray-400 max-w-md mx-auto mt-4">
          Feel free to reach out to me through the following channels:
        </p>

        <div className="mt-6 space-y-4 text-lg">
          <p>
            Email:{" "}
            <a
              href="mailto:seuemail@email.com"
              className="text-green-500 hover:underline"
            >
              pachecx35@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+5511999999999"
              className="text-green-500 hover:underline"
            >
              +55 (99) 98144-3961
            </a>
          </p>
          <p>Location: Curitiba, Brazil</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl p-6 flex justify-between items-center">
        <div />
        <div className="flex space-x-4">
          <Link
            to={"https://github.com/pachecx"}
            target="_blank"
            className="fab fa-github cursor-pointer"
          >
            <FaGithub />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/matheus-pacheco-cruz/"}
            target="_blank"
            className="fab fa-linkedin cursor-pointer"
          >
            <FaLinkedin />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default App;
