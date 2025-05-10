import  { useState } from "react";
import NavigationIcon from "./NavigationIcon";

const NavigationHome = () => {
  const [selectedCategory, setSelectedCategory] = useState("GRAPHIC DESIGN");
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#00000020] backdrop-blur-sm rounded-t-3xl border-2 border-b-0 border-lila-900/60 z-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 overflow-visible relative ">
          {["NEUMONIA", "CANCER", "ASMA", "TUBERCULOSIS"].map((category) => (
            <div className="relative">
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 w-full text-center transition-all rounded-t-3xl relative z-10 border-4  ${
                  selectedCategory === category
                    ? " bg-white text-[#ff6347] font-bold border-4 border-b-0 border-lila-700 "
                    : "hover:bg-[#ffffff20] border-transparent"
                } py-6`}
              >
                <div className="flex flex-col items-center justify-between">
                  <NavigationIcon
                    category={category}
                    selected={selectedCategory === category}
                  />
                  <span className="mt-2 font-bold">{category}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationHome;
