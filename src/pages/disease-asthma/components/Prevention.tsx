import { Suspense } from "react"
import KitAsthmaCanva from "../canvas/KitAsthmaCanva"

const Prevention = () => {
  return (
    <>
      <div className="mt-12 w-full p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-['Press_Start_2P',_monospace]">
            Prevencion
          </h2>
        </div>
        <div className="mt-6 gap-4 p-4 bg-indigo-950 rounded border-2 border-indigo-800">
          <p className="text-indigo-200 ">
            Prevenir crisis asmáticas implica controlar los factores de riesgo y seguir un tratamiento continuo:
          </p>

          <ul className="text-indigo-200 space-y-2 ms-5 mt-4">
            <li className="list-disc"><b>Seguir el tratamiento recetado:</b> tomar medicamentos de mantenimiento incluso si no hay síntomas.</li>
            <li className="list-disc"><b>Evitar alérgenos e irritantes:</b> mantener la casa limpia, evitar el polvo, humo, animales si se es alérgico, etc.</li>
            <li className="list-disc"><b>Llevar un plan de acción:</b> elaborado junto al médico, para saber cómo actuar en caso de una crisis.</li>
            <li className="list-disc"><b>Monitorear los síntomas:</b> usar un medidor de flujo espiratorio para controlar el estado de los pulmones.</li>
            <li className="list-disc"><b>Vacunarse:</b> contra la gripe y neumonía para evitar infecciones respiratorias que pueden agravar el asma.</li>
            <li className="list-disc"><b>Ejercicio controlado:</b> con calentamiento y supervisión médica, ya que el ejercicio también puede ser beneficioso si se maneja adecuadamente.</li>
          </ul><br />

          <Suspense fallback={<div className="text-center text-indigo-300 mt-8">Cargando modelo...</div>}>
            <KitAsthmaCanva/>
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Prevention