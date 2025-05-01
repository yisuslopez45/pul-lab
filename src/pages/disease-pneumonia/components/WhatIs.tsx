import LungPneumoniaCanva from "../canvas/LungPneumoniaCanva";

const WhatIs = () => {
  return (
    <>
      <div className="mt-12 w-full p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-['Press_Start_2P',_monospace]">
            ¿Que es la Neumonia?
          </h2>
        </div>
        <div className="mt-6  text-center p-4 bg-indigo-950 rounded border-2 border-indigo-800">
          <p className="text-indigo-200">
          Inflamación grave de los pulmones en la que los alvéolos (bolsas diminutas de aire) están llenos de líquido. Esto puede causar una disminución en la cantidad de oxígeno que la sangre absorbe del aire que entra al pulmón en la respiración. Por lo general, la causa de la neumonía es una infección, pero a veces también se debe a la radioterapia, una alergia o la irritación del tejido del pulmón por las sustancias inhaladas. Es posible que afecte una parte o la totalidad de los pulmones. También se llama pulmonía.
          </p>
          <LungPneumoniaCanva/>
        </div>
      </div>
    </>
  );
};

export default WhatIs;
