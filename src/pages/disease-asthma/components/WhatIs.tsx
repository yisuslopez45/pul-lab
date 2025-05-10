import AsthmaCanva from "../canvas/asthmaCanva";

const WhatIs = () => {
  return (
    <>
      <div className="mt-12 w-full p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-['Press_Start_2P',_monospace]">
            ¿Qué es el asma?
          </h2>
        </div>
        <div className="mt-6 grid gap-4 p-4 bg-indigo-950 rounded border-2 border-indigo-800">
          <p className="text-indigo-200">
            El asma es una enfermedad crónica inflamatoria que afecta las vías respiratorias de los pulmones. 
            Estas vías se inflaman y se estrechan de forma temporal, lo que dificulta el paso del aire y 
            genera síntomas como dificultad para respirar, tos y silbidos en el pecho. Aunque no tiene cura, 
            con el tratamiento adecuado puede controlarse eficazmente.
          </p>
          <p className="text-indigo-200">
            El asma puede ser desencadenada por factores genéticos y ambientales. Los episodios de asma 
            z(crisis asmáticas) pueden variar en intensidad y duración, y pueden ser peligrosos si no se tratan a tiempo.
        </p>
      </div>
      <div>
        <AsthmaCanva/>
      </div>
    </div >
    </>
  );
};

export default WhatIs;
