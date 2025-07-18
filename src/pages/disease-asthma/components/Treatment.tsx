import { Suspense } from "react";
import InhalerAsthmaCanva from "../canvas/InhalerAsthmaCanva"; 

const Treatment = () => {
  return (
    <>
      <div className="mt-12 w-full p-8 bg-indigo-900/80 rounded-xl border-4 border-indigo-700 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-yellow-300 mb-4 font-['Press_Start_2P',_monospace] tracking-wider uppercase">
            Tratamiento del Asma
          </h2>
          <p className="text-indigo-100 text-lg leading-relaxed">
            Un enfoque integral para controlar el asma y mejorar la calidad de vida.
          </p>
        </div>

        <div className="mt-6 p-6 bg-indigo-950 rounded-lg border-2 border-indigo-800 shadow-inner">
          <p className="text-gray-100 text-xl mb-4 leading-relaxed">
            El tratamiento del asma se basa en dos tipos principales de medicamentos y en medidas clave para evitar los desencadenantes:
          </p>

          <h3 className="text-2xl font-semibold text-yellow-200 mt-6 mb-3">1. Medicamentos de Alivio Rápido</h3>
          <p className="text-gray-200 text-lg mb-3 leading-relaxed">
            Estos medicamentos actúan rápidamente para aliviar los síntomas durante una crisis asmática:
          </p>
          <ul className="text-gray-200 space-y-3 ms-6 mt-4 text-lg leading-relaxed">
            <li className="list-disc">
              <strong className="text-yellow-200">Alivio inmediato:</strong> Brindan un alivio rápido de la dificultad para respirar y la opresión en el pecho.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Broncodilatadores:</strong> Son comúnmente inhaladores broncodilatadores de acción corta (como el salbutamol).
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Mecanismo de acción:</strong> Relajan los músculos que rodean las vías respiratorias, permitiendo que el aire fluya más fácilmente.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-yellow-200 mt-8 mb-3">2. Medicamentos de Control a Largo Plazo</h3>
          <p className="text-gray-200 text-lg mb-3 leading-relaxed">
            Se utilizan diariamente para prevenir los síntomas y reducir la inflamación crónica de las vías respiratorias:
          </p>
          <ul className="text-gray-200 space-y-3 ms-6 mt-4 text-lg leading-relaxed">
            <li className="list-disc">
              <strong className="text-yellow-200">Prevención diaria:</strong> Se usan todos los días para prevenir la aparición de síntomas y exacerbaciones.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Tipos comunes:</strong> Incluyen corticosteroides inhalados, antagonistas de leucotrienos y otros modificadores de la respuesta inmune.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Efecto a largo plazo:</strong> Reducen la inflamación y ayudan a mantener las vías respiratorias abiertas de forma sostenida.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-yellow-200 mt-8 mb-3">3. Evitar Desencadenantes</h3>
          <p className="text-gray-200 text-lg mb-3 leading-relaxed">
            Identificar y evitar los factores que pueden provocar o empeorar los síntomas del asma es fundamental:
          </p>
          <ul className="text-gray-200 space-y-3 ms-6 mt-4 text-lg leading-relaxed">
            <li className="list-disc">
              <strong className="text-yellow-200">Alérgenos comunes:</strong> Ácaros del polvo, polen, moho, caspa de animales.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Irritantes:</strong> Humo de tabaco (activo y pasivo), contaminación del aire, vapores químicos.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Factores ambientales:</strong> Cambios bruscos de clima, aire frío y seco.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Actividad física:</strong> Ejercicio intenso sin un calentamiento adecuado.
            </li>
            <li className="list-disc">
              <strong className="text-yellow-200">Infecciones:</strong> Infecciones respiratorias virales (resfriados, gripe).
            </li>
          </ul>

          <p className="text-gray-100 text-xl mt-8 leading-relaxed">
            Es crucial que el tratamiento del asma sea <strong className="text-red-400">personalizado y supervisado por un médico</strong>, quien podrá ajustarlo según la respuesta individual del paciente y la evolución de la enfermedad.
          </p>

          
          <Suspense fallback={<div className="text-center text-indigo-300 mt-8">Cargando modelo...</div>}>
            <InhalerAsthmaCanva/>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Treatment;
