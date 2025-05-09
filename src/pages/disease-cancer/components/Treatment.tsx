const TreatmentLungCancer = () => {
  return (
    <>
      <div className="mt-12 w-full p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-['Press_Start_2P',_monospace]">
            Tratamiento para Cáncer de Pulmón
          </h2>
        </div>

        <div className="mt-6 grid gap-4 p-4 bg-indigo-950 rounded border-2 border-indigo-800">
          <p className="text-red-200 text-center mb-4">
            El tratamiento depende del tipo, estadio y salud general del paciente. Las opciones incluyen:
          </p>

          <div className="flex justify-center">
            <ul className="list-disc list-inside text-red-200 text-left space-y-3">
              <li>
                <strong>Cirugía:</strong> Para extirpar el tumor (lobectomía, neumonectomía)
              </li>
              <li>
                <strong>Quimioterapia:</strong> Medicamentos que destruyen células cancerosas
              </li>
              <li>
                <strong>Radioterapia:</strong> Rayos de alta energía para eliminar células malignas
              </li>
              <li>
                <strong>Inmunoterapia:</strong> Estimula el sistema inmunológico para combatir el cáncer
              </li>
              <li>
                <strong>Terapia dirigida:</strong> Fármacos que atacan mutaciones específicas
              </li>
            </ul>
          </div>

          <div className="mt-8 w-full p-4 bg-indigo-900/80 rounded-lg border-2 border-indigo-700">
            <p className="text-red-100 text-center text-sm">
              <strong>Nota:</strong> Los tratamientos pueden combinarse. El plan se personaliza según cada caso mediante un equipo multidisciplinario.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreatmentLungCancer;
