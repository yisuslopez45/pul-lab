import TreatmentCanva from "../canvas/TreatmentCanva";
const Treatment = () => {
  return (
    <>
    <div className="mt-12 w-full p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-['Press_Start_2P',_monospace]">
          Tratamiento
        </h2>
      </div>
      <div className="mt-6 gap-4 p-4 bg-indigo-950 rounded border-2 border-indigo-800">
        <p className="text-indigo-200  text-center">
          El tratamiento de la tuberculosis pulmonar consiste en un esquema de antibióticos
          que debe seguirse de manera estricta durante varios meses para asegurar la curación 
          completa y evitar recaídas o resistencia a los medicamentos.     
        </p>
        <ul className="text-indigo-200 space-y-2 ms-5 mt-4">
            <li className="list-disc">
              Tratamiento directamente observado (DOTS):
              En muchos países se aplica este sistema donde un profesional de salud supervisa la toma 
              diaria del medicamento para asegurar que el paciente cumpla con el tratamiento. 
            </li>
            <li className="list-disc">¿Y si hay resistencia a los medicamentos?
              Tuberculosis multirresistente (TB-MDR):
              Es resistente al menos a isoniazida y rifampicina.
              Requiere un tratamiento más largo (18-24 meses) con otros antibióticos como:
              Bedaquilina
              Linezolid
              Levofloxacino o moxifloxacino
              Clofazimina, entre otros.
            </li>
            <li className="list-disc">Importancia del tratamiento:
              Curar al paciente. Cortar la cadena de transmisión. Evitar recaídas. Prevenir la resistencia a medicamentos.
            </li>
          </ul>
          <TreatmentCanva />
      </div>
    </div>
  </>
  );
};

export default Treatment;