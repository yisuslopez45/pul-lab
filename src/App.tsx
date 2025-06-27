import LungOnlyCanva from "./pages/disease-pneumonia/canvas/LungOnlyCanva";
import { ChevronRight } from "lucide-react";
import ButtonAction from "./layout/home/ButtonAction";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";

export default function App() {

  const initAuth = useAuthStore((state) => state.initAuth);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

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
                  label="CONOCER MAS"
                  icon={<ChevronRight className="ml-2 h-10 w-10" />}
                />
              </div>
            </div>

            <div className="w-full h-[550px] ">
              <LungOnlyCanva />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
