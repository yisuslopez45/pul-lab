import DiseasePreventionModel from "../canvas/PreventionCanvas";


const LungCancerPrevention = () => {
  return (
    <>
      <div className="mt-12 w-full p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
        <div className="text-red-200 text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-['Press_Start_2P',_monospace]">
            Prevención del Cáncer de Pulmón
          </h2>
        </div>
        <div className="mt-6 grid text-center gap-4 p-4 bg-indigo-950 rounded border-2 border-indigo-800">
          <p className="text-red-200 text-center">
            Para reducir el riesgo de cáncer de pulmón:
          </p>
          <ul className="list-disc list-inside text-red-200 mt-2 space-y-2 text-left">
            <li>No fumes y evita el humo de segunda mano.</li>
            <li>Evita la exposición a carcinógenos (como asbesto o radón).</li>
            <li>Mantén una dieta rica en frutas y verduras.</li>
            <li>Realiza ejercicio regularmente.</li>
            <li>Consulta a tu médico si tienes antecedentes familiares.</li>
          </ul>
          <DiseasePreventionModel />
        </div>
      </div>
    </>
  );
};

export default LungCancerPrevention;