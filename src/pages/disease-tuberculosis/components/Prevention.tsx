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
        <p className="text-indigo-200 text-left">
          La tuberculosis pulmonar es una enfermedad infecciosa causada por la bacteria Mycobacterium tuberculosis, que se transmite principalmente por el aire cuando una persona enferma tose, estornuda o habla. Su prevención es fundamental para evitar la propagación y proteger la salud pública.
        </p>
        <ul className="text-indigo-200 space-y-2 ms-5 mt-4">
            <li className="list-disc">
              Prevención primaria (evita el contagio)
              Objetivo: Evitar que las personas se infecten.
              Medidas:
              Vacunación BCG en recién nacidos.
              Buena ventilación en espacios cerrados.
              Uso de mascarillas en entornos de riesgo.
              Educación sanitaria y promoción de la higiene respiratoria.
            </li>
            <li className="list-disc">Prevención secundaria (detección temprana y control)
              Objetivo: Detectar la enfermedad a tiempo y evitar que se propague.
              Medidas:
              Diagnóstico precoz (evaluar síntomas como tos mayor a 2 semanas).
              Pruebas a personas en contacto con casos activos.
              Tratamiento de infecciones latentes (quimioprofilaxis).
              Aislamiento temporal de personas con tuberculosis activa.
            </li>
            <li className="list-disc">Prevención terciaria (evitar complicaciones y recaídas)
              Objetivo: Curar al paciente y evitar consecuencias graves o nuevas transmisiones.
              Medidas:
              Tratamiento completo y supervisado (esquema de 6 meses).
              Control médico durante y después del tratamiento.
              Prevención de tuberculosis resistente mediante adherencia terapéutica.
              Rehabilitación y seguimiento de secuelas pulmonares si las hay.
            </li>
        </ul>
        <PreventionCanva/>
      </div>
    </div>
  </>
  )
}

export default Prevention;