import { Suspense } from "react";
import KitAsthmaCanva from "../canvas/KitAsthmaCanva";

const Prevention = () => {
  return (
    <>
      <div className="mt-12 w-full p-8 bg-indigo-900/80 rounded-xl border-4 border-indigo-700 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-yellow-300 mb-4 font-['Press_Start_2P',_monospace] tracking-wider uppercase">
            Prevención del Asma
          </h2>
          <p className="text-indigo-100 text-lg leading-relaxed">
            Adoptar medidas preventivas es clave para controlar el asma y mejorar la calidad de vida.
          </p>
        </div>

        <div className="mt-6 p-6 bg-indigo-950 rounded-lg border-2 border-indigo-800 shadow-inner">
          <p className="text-gray-100 text-xl mb-4 leading-relaxed">
            Prevenir las crisis asmáticas implica controlar los factores de riesgo y seguir un tratamiento continuo:
          </p>

          <ul className="text-gray-200 space-y-4 ms-6 mt-6 text-lg leading-relaxed">
            <li className="list-disc">
              <strong className="text-yellow-200">Seguir el tratamiento recetado:</strong> Tomar medicamentos de mantenimiento incluso si no hay síntomas visibles.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Evitar alérgenos e irritantes:</strong> Mantener la casa limpia, evitar el polvo, humo y pelo de animales si se es alérgico.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Llevar un plan de acción:</strong> Elaborado junto al médico, para saber cómo actuar en caso de una crisis.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Monitorear los síntomas:</strong> Usar un medidor de flujo espiratorio para controlar el estado de los pulmones.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Vacunarse:</strong> Contra la gripe y neumonía para evitar infecciones respiratorias que pueden agravar el asma.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Ejercicio controlado:</strong> Con calentamiento y supervisión médica, puede ser beneficioso si se maneja adecuadamente.
            </li>
          </ul>
          <br />

          <p className="text-gray-100 text-xl mt-4 leading-relaxed">
            Un enfoque proactivo y el seguimiento médico constante son fundamentales para mantener el asma bajo control y evitar complicaciones.
          </p>

          <br /><br />

          <Suspense fallback={<div className="text-center text-indigo-300 mt-8">Cargando modelo...</div>}>
            <KitAsthmaCanva />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Prevention;