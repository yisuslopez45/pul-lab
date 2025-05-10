import LungCancerCanva from "../canvas/LungCancerCanva";

const WhatIsLungCancer = () => {
  return (
    <>
      <div className="mt-12 w-full p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-['Press_Start_2P',_monospace]">
            ¿Qué es el Cáncer de Pulmón?
          </h2>
        </div>

        <div className="mt-6 grid gap-6">
          <div className="p-6 bg-indigo-950 rounded-lg border-2 border-indigo-800">
            <p className="text-red-200 mb-4">
              El cáncer de pulmón es un crecimiento <strong>descontrolado de células malignas</strong> que se origina en los tejidos pulmonares, generalmente en las células que recubren los bronquios. 
              Es la principal causa de muerte por cáncer a nivel mundial.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-indigo-900/80 rounded-lg border-2 border-indigo-700">
                <h3 className="font-bold text-yellow-300 mb-3 text-center">Tipos principales:</h3>
                <ul className="list-disc list-inside text-red-200 space-y-2 text-left text-sm">
                  <li>Carcinoma de células pequeñas (15% de casos)</li>
                  <li>Carcinoma no microcítico (85% de casos)</li>
                </ul>
              </div>

              <div className="p-4 bg-indigo-900/80 rounded-lg border-2 border-indigo-700">
                <h3 className="font-bold text-yellow-300 mb-3 text-center">Cómo se desarrolla:</h3>
                <ul className="list-disc list-inside text-red-200 space-y-2 text-left text-sm">
                  <li>Mutaciones genéticas por exposición a carcinógenos</li>
                  <li>Formación de tumores primarios</li>
                  <li>Posible metástasis a otros órganos</li>
                </ul>
              </div>
            </div>

            <p className="text-red-200 mt-6 text-center text-sm italic">
              <strong>Nota:</strong> El 80-90% de los casos están asociados al tabaquismo, pero también existen factores como contaminación, asbestos y predisposición genética.
            </p>
            <LungCancerCanva/>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsLungCancer;
