import RiskFactorsCanvas from "../canvas/RiskFactorsCanvas";

const RiskFactorsLung = () => {
    return (
      <div className="mt-12 w-full p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-['Press_Start_2P',_monospace]">
            Factores de Riesgo
          </h2>
        </div>
  
        <div className="mt-6 grid gap-6">
          {/* Factores principales y otros */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Principales Factores */}
            <div className="p-6 bg-indigo-950 rounded border-2 border-indigo-800 space-y-4">
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Principales Factores</h3>
              <ul className="text-white space-y-3 text-left text-sm">
                <li className="flex items-start">
                  <span className="bg-red-800 rounded-full p-1 mr-3">⚠️</span>
                  <span><strong>Tabaquismo:</strong> Responsable del 80-90% de casos (fumadores activos y pasivos)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-800 rounded-full p-1 mr-3">⚠️</span>
                  <span><strong>Exposición laboral:</strong> Asbesto, arsénico, níquel, humo diésel</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-800 rounded-full p-1 mr-3">⚠️</span>
                  <span><strong>Contaminación ambiental:</strong> Partículas PM2.5 y radón residencial</span>
                </li>
              </ul>
            </div>
  
            {/* Otros Factores */}
            <div className="p-6 bg-indigo-950 rounded border-2 border-indigo-800 space-y-4">
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Otros Factores</h3>
              <ul className="text-white space-y-3 text-left text-sm">
                <li className="flex items-start">
                  <span className="bg-red-800 rounded-full p-1 mr-3">⚠️</span>
                  <span><strong>Antecedentes familiares:</strong> Mayor riesgo si parientes de primer grado lo padecieron</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-800 rounded-full p-1 mr-3">⚠️</span>
                  <span><strong>Enfermedades pulmonares:</strong> EPOC o fibrosis pulmonar aumentan el riesgo</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-800 rounded-full p-1 mr-3">⚠️</span>
                  <span><strong>Edad:</strong> 65+ años tiene mayor incidencia</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Niveles de riesgo */}
          <div className="p-6 bg-indigo-950 rounded border-2 border-indigo-800">
            <h4 className="text-lg font-semibold text-yellow-200 mb-4">Niveles de riesgo relativo</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-32 text-white text-sm">Fumador activo:</div>
                <div className="h-4 bg-gradient-to-r from-red-500 to-red-800 w-full max-w-xs rounded-full"></div>
                <span className="ml-2 text-yellow-300 text-sm">15-30x</span>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-white text-sm">Exposición a radón:</div>
                <div className="h-4 bg-gradient-to-r from-red-400 to-red-700 w-2/3 rounded-full"></div>
                <span className="ml-2 text-yellow-300 text-sm">3-5x</span>
              </div>
            </div>
          </div>
  
          {/* Nota Final */}
          <div className="p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700 mt-6">
            <p className="text-white text-sm italic text-center">
              <strong>Nota:</strong> La presencia de factores de riesgo no garantiza que se desarrollará cáncer, 
              pero aumenta la probabilidad. Consulta a un neumólogo si tienes múltiples factores.
            </p>
          </div>
          <RiskFactorsCanvas />
        </div>
      </div>
    );
  };
  
  export default RiskFactorsLung;
  