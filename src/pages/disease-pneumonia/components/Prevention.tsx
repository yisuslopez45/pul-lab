import PreventionCanva from "../canvas/PreventionCanva"

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
        <p className="text-indigo-200 text-center">
        Una buena higiene (lavarse las manos con frecuencia), dejar de fumar y mantener el sistema inmunitario fuerte mediante actividad física regular y una dieta saludable son otras formas de disminuir el riesgo de contraer una neumonía
        </p>
        <PreventionCanva/>
      </div>
    </div>
  </>
  )
}

export default Prevention