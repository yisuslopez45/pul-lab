const Symptoms = () => {
  return (
    <>
      <div className="mt-12 w-full p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-['Press_Start_2P',_monospace]">
            Síntomas del Cáncer de Pulmón
          </h2>
        </div>

        <div className="mt-6 grid gap-6">
          <div className="p-6 bg-indigo-950 rounded-lg border-2 border-indigo-800">
            <p className="text-white mb-4">
              El cáncer de pulmón puede no presentar síntomas en etapas tempranas. 
              Cuando aparecen, pueden incluir:
            </p>

            <ul className="list-disc list-inside text-white space-y-2 text-left text-sm p-4 bg-indigo-900/80 rounded-lg border-2 border-indigo-700">
              <li>Tos persistente que no desaparece o empeora</li>
              <li>Tos con sangre o esputo oxidado</li>
              <li>Dolor en el pecho que empeora al respirar o toser</li>
              <li>Ronquera o cambios en la voz</li>
              <li>Pérdida de peso y apetito sin causa aparente</li>
              <li>Fatiga constante o debilidad</li>
              <li>Infecciones respiratorias recurrentes</li>
            </ul>

            <p className="text-white mt-6 text-center text-sm italic">
              <strong>Nota:</strong> Estos síntomas también pueden ser causados por otras condiciones. 
              Consulta a un médico para un diagnóstico preciso.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Symptoms;
