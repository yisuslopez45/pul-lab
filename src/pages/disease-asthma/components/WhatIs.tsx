import { Suspense } from "react"; // Import Suspense
import AsthmaCanva from "../canvas/asthmaCanva"; // Assuming this path is correct

const WhatIs = () => {
  return (
    <>
      <div className="mt-12 w-full p-8 bg-indigo-900/80 rounded-xl border-4 border-indigo-700 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-yellow-300 mb-4 font-['Press_Start_2P',_monospace] tracking-wider uppercase">
            ¿Qué es el Asma?
          </h2>
          <p className="text-indigo-100 text-lg leading-relaxed">
            Una comprensión fundamental de esta condición respiratoria crónica.
          </p>
        </div>

        <div  className="mt-6 p-6 bg-indigo-950 rounded-lg border-2 border-indigo-800 shadow-inner">
          <p className="text-gray-100 text-xl mb-4 leading-relaxed">
            El asma es una <strong className="text-yellow-200">enfermedad crónica inflamatoria</strong> que afecta las vías respiratorias de los pulmones. Se caracteriza por episodios recurrentes en los que estas vías se inflaman y se estrechan temporalmente, dificultando el paso del aire.
          </p>
          <p className="text-gray-100 text-xl mb-4 leading-relaxed">
            Esto genera síntomas distintivos como:
          </p>
          <ul className="text-gray-200 space-y-3 ms-6 mt-4 text-lg leading-relaxed">
            <li className="list-disc">
              <strong className="text-yellow-200">Dificultad para respirar:</strong> Una sensación de falta de aire o disnea.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Tos:</strong> A menudo seca y persistente.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Silbidos en el pecho (sibilancias):</strong> Un sonido agudo al exhalar.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Opresión en el pecho:</strong> Una sensación de presión o peso en el área torácica.
            </li>
          </ul>
          <br />
          <p className="text-gray-100 text-xl leading-relaxed">
            Aunque el asma <strong className="text-red-400">no tiene cura</strong>, con un diagnóstico y tratamiento adecuados, puede controlarse eficazmente, permitiendo a las personas llevar una vida plena y activa.
          </p>
          <p className="text-gray-100 text-xl mt-4 leading-relaxed">
            La condición puede ser desencadenada por una combinación de <strong className="text-yellow-200">factores genéticos y ambientales</strong>. Los episodios agudos de asma, conocidos como <strong className="text-red-400">crisis asmáticas</strong>, pueden variar en intensidad y duración, y requieren atención médica oportuna para evitar complicaciones.
          </p>
        </div>
        <div className="mt-8"> {/* Added margin top for spacing */}
          {/* Ensure AsthmaCanva is wrapped in Suspense if it uses async imports */}
          <Suspense fallback={<div className="text-center text-indigo-300 mt-8">Cargando modelo...</div>}>
            <AsthmaCanva/>
          </Suspense>
        </div>
      </div >
    </>
  );
};

export default WhatIs;
