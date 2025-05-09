import LungOnlyCanva from "./pages/disease-pneumonia/canvas/LungOnlyCanva";
import { ChevronRight } from "lucide-react";
import ButtonAction from "./layout/home/ButtonAction";
import NavigationHome from "./layout/home/NavigationHome";

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-white overflow-hidden ">
      <div className="relative w-full h-screen">
        <div className="container mx-auto px-4 pt-10 lg:pt-15 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="text-7xl font-extrabold leading-tight tracking-tighter">
                APRENDE SOBRE
                <br />
                EL CUIDADO
                <br />
                PULMONES
              </div>

              <div>
                <ButtonAction
                  label="CONOCER MAS"
                  icon={<ChevronRight className="ml-2 h-8 w-8" />}
                />
              </div>
            </div>

            <div className="w-full h-[250px] ">
              <LungOnlyCanva />
            </div>
          </div>
        </div>

        {/* Navigation Categories */}
        <NavigationHome />
      </div>
    </div>
  );
}
