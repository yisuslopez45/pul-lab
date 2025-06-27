import TuberculosisCanva from "../canvas/TuberculosisCanva";

const WhatIs = () => {
  return (
    <>
      <div className="mt-12 w-full p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-['Press_Start_2P',_monospace]">
            ¿Qué es la tuberculosis?
          </h2>
        </div>
        <div className="mt-6 grid gap-4 p-4 bg-indigo-950 rounded border-2 border-indigo-800">
          <p className="text-indigo-200">
          La tuberculosis pulmonar es una enfermedad infecciosa causada por la bacteria Mycobacterium tuberculosis, 
          que se transmite principalmente por el aire cuando una persona enferma tose, estornuda o habla. 
          Se estima que alrededor de una cuarta parte de la población mundial se ha infectado con el bacilo de la tuberculosis.
          Las personas que están infectadas pero que aún no han enfermado no pueden transmitir la enfermedad. 
          </p>
          <p className="text-indigo-200">
          La tuberculosis suele tratarse con antibióticos y puede ser mortal si no se trata.
        </p>
        <TuberculosisCanva />
      </div>
    </div >
    </>
  );
};

export default WhatIs;
