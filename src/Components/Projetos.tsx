import { FaGithub } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";

interface types {
  nome: string;
  tecnologias1: string;
  tecnologias2: string;
  tecnologias3: string;
}

const Projetos = ({
  nome,
  tecnologias1,
  tecnologias2,
  tecnologias3,
}: types) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="h-48 bg-gray-600"></div>
        <h3 className="mt-4 text-xl font-bold">{nome}</h3>
        <p className="text-gray-400 mb-1">
          {tecnologias1} | {tecnologias2} | {tecnologias3}
        </p>
        <div className="flex gap-2">
          <FaGithub />
          <RiVercelLine />
        </div>
      </div>
    </div>
  );
};

export default Projetos;
