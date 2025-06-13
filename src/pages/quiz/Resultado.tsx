import { useEffect } from "react";
import { useAttemptsAll } from "./hooks/fetchApi";
import { CircleUserRound } from "lucide-react";
import Spinner from "../../layout/components/Spinner";

const Resultado = () => {

  const { loading, data } = useAttemptsAll()

  return (
    <div className="my-2 w-2xl mt-10 mx-auto p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
      <div className="text-center">

      </div>
      <div className="mt-6  text-center p-4 bg-indigo-950 rounded border-2 border-indigo-800">
        {loading && (
          <Spinner />
        )}

        {!loading && (
          <div >
            <div className="flex justify-between gap-4 mb-4 px-2 text-white font-bold">
              <div className="text-lg">JUGADOR</div>
              <div className="text-lg">PROMEDIO</div>
            </div>

            <div className="space-y-4 px-2">
              {data.map((result) => (
                <div className="flex justify-between items-center gap-4 p-2 bg-lila-600 rounded-2xl" >

                  <div className="flex gap-4 items-center px-3" >
                    <div className="w-12 h-12 border-4 border-lila-200 rounded-lg">
                      <img
                        src={`${result.photo}`}
                        alt="Logo de React"
                        width="200"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-1  px-2 py-1 bg-white  text-indigo-900 rounded-4xl">
                      <CircleUserRound />
                      <span className=" text-sm font-bold ">
                        {result.name}
                      </span>
                    </div>

                  </div>
                  <div className="w-10 h-10 flex items-center justify-center bg-white text-indigo-900 rounded-full">
                    <span className="text-sm font-bold">
                      {result.qualificationAverage.toFixed(1)}
                    </span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}


      </div>
    </div>
  )
}

export default Resultado