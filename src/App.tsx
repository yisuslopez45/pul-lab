import LungOnlyCanva from "./pages/disease-pneumonia/canvas/LungOnlyCanva";
import { ChevronRight } from "lucide-react";
import ButtonAction from "./layout/home/ButtonAction";
import { useAuthStore } from "./store/authStore";
import { useEffect, useRef } from "react";
import { ListNavigationDisease } from "../src/layout/helpers/ListTabs";
import { NavLink } from "react-router";


export default function App() {

  const initAuth = useAuthStore((state) => state.initAuth);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  const diseasesSectionRef = useRef<HTMLDivElement>(null);

  const scrollToDiseasesSection = () => {
    diseasesSectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className=" bg-transparent text-white overflow-hidden ">
      <div className="relative w-full">
        <div className="container mx-auto px-4 pt-10 lg:pt-15 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="text-7xl font-extrabold leading-tight tracking-tighter">
                APRENDE SOBRE
                <br />
                EL CUIDADO DE
                <br />
                LOS PULMONES
              </div>
              <div>
                <p className="text-2xl" >
                  Bienvenido a nuestra plataforma 3D. Explora enfermedades pulmonares de forma visual e interactiva
                </p>
              </div>
              <div className="p-2">
                <ButtonAction
                  label="CONOCER MÁS"
                  icon={<ChevronRight className="ml-2 h-6 w-6" />}
                  onClick={scrollToDiseasesSection}
                />
              </div>
            </div>

            <div className="w-full h-[550px] ">
              <LungOnlyCanva />
            </div>
          </div>
        </div>
      </div>

      <div ref={diseasesSectionRef} className="w-full bg-slate-900 py-16 mt-10  mb-10 rounded-t-3xl shadow-lg"> {/* Adjusted background color */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-indigo-400"> {/* Adjusted title color */}
            Enfermedades Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {ListNavigationDisease.map((topic, index) => (
              <NavLink to={topic.to} end>
                <div
                  key={index}
                  className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-slate-700 hover:border-indigo-400"
                >
                  <h3 className="text-2xl font-bold mb-3 text-indigo-300">{topic.title}</h3>
                  <p className="text-gray-300 text-lg mb-4">{topic.description}</p>
                  <p className="text-gray-300 text-lg mb-4">{"Explore sus causas, síntomas y tratamientos."}</p>
                  <div className="flex items-center justify-end text-indigo-400 hover:text-indigo-300">
                    <span className="font-semibold text-lg">Explorar</span>
                    <ChevronRight className="ml-2 h-6 w-6" />
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
