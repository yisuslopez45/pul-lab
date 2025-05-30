import { Heart, Shield, Star, Sword, Zap } from "lucide-react";
import Button from "../../layout/components/Button";
import StatBar from "./components/StatBar";

const Profile = () => {
  return (
    <>
      <div className=" bg-indigo-950 text-white font-mono p-4 flex flex-col items-center mt-5 rounded-lg py-10">
        <div className="w-full max-w-3xl flex justify-between items-center mb-6 border-4 border-yellow-400 bg-indigo-900 p-3       rounded-lg">
          <h6 className="text-sm md:text-3xl font-bold text-yellow-400 tracking-wider">
            PERFIL USUARIO
          </h6>
          <Button label="Guardar" color="yellow" />
        </div>

        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="border-4 border-purple-500 bg-indigo-900 p-4 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 border-4 border-purple-500 rounded-lg mb-3 overflow-hidden relative">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
                    alt="Logo de React"
                    width="200"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/50"></div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-400 text-indigo-900 px-2 py-1 text-sm font-bold rounded">
                    {" "}
                    Nivel 123{" "}
                  </span>
                  <span className="text-gray-300 text-xs">
                    DESDE 2025-04-12
                  </span>
                </div>

                <div className="w-full mb-4">
                  {/* <div className="flex justify-between text-xs mb-1">
                    <span>XP: 12</span>
                    <span>100</span>
                  </div> */}
                  {/* <StatBar
                    label=""
                    value={0}
                    icon={''}
                    color="red"
                  /> */}
                </div>
                <Button label="Editar" color="green" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/50"></div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-4 border-4 border-purple-500 rounded-md p-3">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-400 pb-2">
                CARACTERISTICAS
              </h3>

              <div className="space-y-3">
                <StatBar
                  label="ACIERTOS"
                  value={1}
                  icon={<Sword className="w-5 h-5" />}
                  color="red"
                />
                <StatBar
                  label="ERRORES"
                  value={7}
                  icon={<Shield className="w-5 h-5" />}
                  color="blue"
                />
                <StatBar
                  label="INTENTOS"
                  value={1222}
                  icon={<Heart className="w-5 h-5" />}
                  color="green"
                />
                <StatBar
                  label="FALLAS"
                  value={12}
                  icon={<Star className="w-5 h-5" />}
                  color="purple"
                />
                <StatBar
                  label="TIEMPO"
                  value={12}
                  icon={<Zap className="w-5 h-5" />}
                  color="yellow"
                />
              </div>

              <div className="mt-6 p-3 border-2 border-dashed border-cyan-400 bg-indigo-950 rounded-lg">
                <h4 className="text-sm font-bold text-cyan-300 mb-2">
                 PUNTUACION
                </h4>
                <p className="text-sm text-gray-300">+5 ACIERTOS, +3 ERRORES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
