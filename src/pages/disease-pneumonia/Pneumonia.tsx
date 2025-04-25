import { TestTube2, LucideShieldQuestion , Pill , Carrot } from "lucide-react";
import NavigationBars from "../../layout/components/NavigationBars";
import { Outlet } from "react-router";

const Pneumonia  = () => {

  const menuItems2 = [
    { to: "que-es", label: "¿Que es?", icon: <LucideShieldQuestion className="w-6 h-6" /> },
    { to: "sintomas", label: "Sintomas" ,  icon: <TestTube2 className="w-6 h-6" />  },
    { to: "tratamiento", label: "Tratamiento" ,  icon: <Pill className="w-6 h-6" />   },
    { to: "prevencion", label: "Prevencion" ,  icon: <Carrot className="w-6 h-6" /> },
  ]

  return (
    <>
    <NavigationBars  items={menuItems2} className="mt-15" />

    <div className="mt-12">
        <Outlet />
    </div>

    </>
  );
};

export default Pneumonia ;
