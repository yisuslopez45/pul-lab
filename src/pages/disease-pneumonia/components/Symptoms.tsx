import SymptomCanva from "../canvas/SymptomCanva";

export const SymptomsLungCancer = () => {
  return (
    <>
      <div className="mt-12 w-full p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-['Press_Start_2P',_monospace]">
           Sintomas
          </h2>
        </div>
        <div className="mt-6  gap-4 p-4 bg-indigo-950 rounded border-2 border-indigo-800 ">
          <p className="text-indigo-200 ">
            La neumonía es una infección que inflama los sacos aéreos de uno o
            ambos pulmones. Estos sacos (llamados alvéolos) pueden llenarse de
            líquido o pus, lo que causa síntomas como:
          </p>

          <ul className="text-indigo-200 space-y-2 ms-5 mt-4 mb-5">
            <li className="list-disc">
              Tos, a veces con flema o mucosidad
            </li>
            <li className="list-disc">Fiebre o escalofríos</li>
            <li className="list-disc">Dificultad para respirar</li>
            <li className="list-disc">
              Dolor en el pecho al respirar o toser
            </li>
          </ul>

          <SymptomCanva  />
        </div>
      </div>
    </>
  );
};

export default SymptomsLungCancer;
