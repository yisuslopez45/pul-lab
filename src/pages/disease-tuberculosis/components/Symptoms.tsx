import SymptomsCanva from "../canvas/SymptomsCanva";
const Symptoms = () => {
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
            La tuberculosis pulmonar es una enfermedad infecciosa causada por una bacteria que se transmite por el aire cuando una persona enferma tose o estornuda. Al ingresar al cuerpo, la bacteria llega a los pulmones y puede quedar inactiva por años o activarse y comenzar a dañar el tejido pulmonar. Esto produce síntomas como:
          </p>
          <ul className="text-indigo-200 space-y-2 ms-5 mt-4">
            <li className="list-disc">
              tos persistente
            </li>
            <li className="list-disc">Fiebre y perdidad de peso</li>
            <li className="list-disc">sudoracion nocturna</li>
          </ul>
          <SymptomsCanva />
        </div>
      </div>
    </>
  );
};

export default Symptoms;
