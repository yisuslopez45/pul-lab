import { TestTube2, LucideShieldQuestion, Pill, Carrot, Cigarette, HeartPulse } from "lucide-react";
import NavigationBars from "../../layout/components/NavigationBars";
import { Outlet } from "react-router";

const LungCancer = () => {
  const menuItems = [
    { to: "que-es", label: "¿Qué es?", icon: <LucideShieldQuestion className="w-6 h-6" /> },
    { to: "sintomas", label: "Síntomas", icon: <HeartPulse  className="w-6 h-6" /> },
    { to: "factores-riesgo", label: "Factores de riesgo", icon: <Cigarette className="w-6 h-6" /> },
    { to: "tratamiento", label: "Tratamiento", icon: <Pill className="w-6 h-6" /> },
    { to: "prevencion", label: "Prevención", icon: <Carrot className="w-6 h-6" /> },
  ];

  return (
    <>
      <NavigationBars items={menuItems} className="mt-15" />
      <div className="mt-12">
        <Outlet />
      </div>
    </>
  );
};

export default LungCancer;
