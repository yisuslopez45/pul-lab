import { Suspense } from "react"; // Import Suspense
import PersonAsthmaCanva from "../canvas/PersonAsthmaCanva"; // Assuming this path is correct

const Symptoms = () => {
  return (
    <>
      <div className="mt-12 w-full p-8 bg-indigo-900/80 rounded-xl border-4 border-indigo-700 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-yellow-300 mb-4 font-['Press_Start_2P',_monospace] tracking-wider uppercase">
            Síntomas del Asma
          </h2>
          <p className="text-indigo-100 text-lg leading-relaxed">
            Comprender los signos del asma es crucial para un manejo efectivo.
          </p>
        </div>

        <div className="mt-6 p-6 bg-indigo-950 rounded-lg border-2 border-indigo-800 shadow-inner">
          <p className="text-gray-100 text-xl mb-4 leading-relaxed">
            Los síntomas del asma pueden variar entre personas y su intensidad, pero los más comunes incluyen:
          </p>

          <ul className="text-gray-200 space-y-4 ms-6 mt-6 text-lg leading-relaxed">
            <li className="list-disc">
              <strong className="text-yellow-200">Dificultad para respirar:</strong> Sensación de no poder tomar suficiente aire, especialmente durante el ejercicio o por la noche.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Tos persistente:</strong> A menudo seca y empeora significativamente en la noche o en la madrugada.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Silbido al respirar (sibilancias):</strong> Un sonido agudo y chirriante al exhalar, causado por el estrechamiento de las vías respiratorias.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Opresión en el pecho:</strong> Una sensación de que el pecho está apretado, pesado o con presión.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Fatiga o debilidad:</strong> Al reducirse el oxígeno disponible, es común sentirse inusualmente cansado o débil.
            </li>
          </ul>
          <br />

          <p className="text-gray-100 text-xl mt-4 leading-relaxed">
            Es importante recordar que durante una <strong className="text-red-400">crisis asmática</strong>, estos síntomas se intensifican y pueden volverse peligrosos si no se administran medicamentos de forma oportuna.
          </p>

          {/* Ensure PersonAsthmaCanva is wrapped in Suspense if it uses async imports */}
          <Suspense fallback={<div className="text-center text-indigo-300 mt-8">Cargando modelo...</div>}>
            <PersonAsthmaCanva/>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Symptoms;
