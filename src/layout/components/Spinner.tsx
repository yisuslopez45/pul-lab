import { useState, useEffect } from "react"

const Spinner = () => {
  const [loadingText, setLoadingText] = useState("CARGANDO")
  const [dots, setDots] = useState(".")

  useEffect(() => {

    const messages = ["CARGANDO", "ALMACENANDO BÚFER", "PROCESANDO", "CALCULANDO", "RENDERIZANDO"]

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length)
      setLoadingText(messages[randomIndex])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

 
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "."
        return prev + "."
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center w-full h-full my-10">
      <div className="relative flex flex-col items-center">
      
        <div className="relative p-8 bg-indigo-900 border-4 border-indigo-700 rounded-lg shadow-[8px_8px_0px_0px_rgba(91,117,254,0.7)] transform rotate-3 overflow-hidden">
      
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent bg-[length:100%_4px] bg-repeat-y opacity-10 pointer-events-none"
            style={{ backgroundImage: "linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)" }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center p-6 bg-indigo-800 rounded border-2 border-indigo-600">
       
            <div className="relative w-16 h-16 mb-4 animate-[spin_3s_linear_infinite]">
              <div className="absolute w-full h-full bg-purple-500 transform rotate-45 rounded-sm shadow-[4px_4px_0px_0px_rgba(147,51,234,0.7)]"></div>
              <div className="absolute w-full h-full bg-fuchsia-500 transform rotate-[135deg] rounded-sm shadow-[4px_4px_0px_0px_rgba(217,70,239,0.7)]"></div>
            </div>

            <div className="mt-4 font-mono text-xl font-bold tracking-widest text-cyan-300 animate-pulse">
              {loadingText}
              {dots}
            </div>

            <div className="w-full h-4 mt-4 bg-indigo-950 rounded-sm overflow-hidden border-2 border-indigo-600">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-[progressBar_5s_ease-in-out_infinite]"></div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Spinner;
