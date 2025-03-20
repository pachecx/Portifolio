import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { FaGlobeAmericas } from "react-icons/fa";
interface types {
  nome: string;
  tecnologias1: string;
  tecnologias2: string;
  tecnologias3: string;
  repositorio: string;
  deploy: string;
  Img: string;
}

const Projetos = ({
  nome,
  tecnologias1,
  tecnologias2,
  tecnologias3,
  repositorio,
  deploy,
  Img,
}: types) => {
  return (
    <div className=" ">
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="h-48 bg-gray-600 overflow-hidden">
          <img className=" w-full h-full" src={Img} />
        </div>
        <h3 className="mt-4 text-xl font-bold">{nome}</h3>
        <p className="text-gray-400 mb-1">
          {tecnologias1} | {tecnologias2} | {tecnologias3}
        </p>
        <div className="flex gap-2">
          <Link target="_blank" to={`${repositorio}`}>
            <FaGithub className="h-6 w-6" />
          </Link>
          <Link target="_blank" to={`${deploy}`}>
            <FaGlobeAmericas className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
