import TreatmentCanva from "../canvas/TreatmentCanva";

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
        <p className="text-indigo-200  text-center">
        El tratamiento de la neumonía depende del tipo y la gravedad, pero generalmente involucra antibióticos para neumonías bacterianas y antivirales para neumonías virales. El reposo, líquidos y medicamentos para aliviar la fiebre y la tos pueden ser útiles independientemente del tipo de neumonía. En casos graves, puede ser necesario hospitalización, terapia respiratoria y otros procedimientos. 
        </p>

        <TreatmentCanva/>

      </div>
    </div>
  </>
  )
}

export default Treatment;