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
            Los síntomas del asma pueden variar entre personas, pero los más comunes son:
          </p>

          <ul className="text-indigo-200 space-y-2 ms-5 mt-4">
            <li className="list-disc">Dificultad para respirar: sensación de no poder tomar suficiente aire, especialmente durante el ejercicio o por la noche.</li>
            <li className="list-disc">Tos persistente: a menudo empeora en la noche o en la madrugada.</li>
            <li className="list-disc">Silbido al respirar (sibilancias): sonido agudo al exhalar, causado por el estrechamiento de las vías respiratorias.</li>
            <li className="list-disc">Opresión en el pecho: sensación de que el pecho está apretado o con presión.</li>
            <li className="list-disc">Fatiga o debilidad: al reducirse el oxígeno disponible, es común sentirse cansado o débil.</li>
          </ul>
          <br />

          <p className="text-indigo-200 ">
            Durante una crisis asmática, estos síntomas se intensifican y pueden volverse peligrosos si no 
            se administran medicamentos de forma oportuna.
          </p>
        </div>
      </div>
    </>
  );
};

export default Symptoms;
