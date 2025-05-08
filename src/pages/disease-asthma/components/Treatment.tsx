
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
          <p className="text-indigo-200 ">
            El tratamiento del asma se basa en dos tipos principales de medicamentos y en medidas para evitar desencadenantes.
          </p>
          <p className="text-indigo-200 ">
            1. Medicamentos de alivio rápido
          </p>
          <ul className="text-indigo-200 space-y-2 ms-5 mt-4">
            <li className="list-disc">Brindan alivio inmediato durante una crisis asmática.</li>
            <li className="list-disc">Son comúnmente inhaladores broncodilatadores (como el salbutamol).</li>
            <li className="list-disc">Relajan los músculos alrededor de las vías respiratorias y permiten que el aire fluya más fácilmente.</li>
          </ul><br />

          <p className="text-indigo-200 ">
            2. Medicamentos de control a largo plazo
          </p>

          <ul className="text-indigo-200 space-y-2 ms-5 mt-4">
            <li className="list-disc">Se usan todos los días para prevenir síntomas.</li>
            <li className="list-disc">Incluyen corticosteroides inhalados, antagonistas de leucotrienos y otros.</li>
            <li className="list-disc">Reducen la inflamación y ayudan a mantener las vías respiratorias abiertas a largo plazo.</li>
          </ul><br />

          <p className="text-indigo-200 ">
            3. Evitar desencadenantes
          </p>
          <p className="text-indigo-200 ">
            Identificar y evitar factores que provocan síntomas como:
          </p>

          <ul className="text-indigo-200 space-y-2 ms-5 mt-4">
            <li className="list-disc">Ácaros del polvo</li>
            <li className="list-disc">Polen y moho</li>
            <li className="list-disc">Humo de tabaco</li>
            <li className="list-disc">Cambios bruscos de clima</li>
            <li className="list-disc">Cambios bruscos de clima</li>
            <li className="list-disc">Ejercicio sin calentamiento previo</li>
            <li className="list-disc">Infecciones respiratorias</li>
          </ul><br />


          <p className="text-indigo-200 ">
            El tratamiento debe ser personalizado por un médico, y puede requerir ajustes según la respuesta del paciente.
          </p>

        </div>
      </div>
    </>
  )
}

export default Treatment