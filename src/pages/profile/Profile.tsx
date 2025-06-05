import { CircleUserRound, Heart, Mail, Shield, Star, Sword, Zap } from "lucide-react";
import StatBar from "./components/StatBar";
import { useAuthStore } from "../../store/authStore";
import CardIU from "../../layout/components/CardIU";

const Profile = () => {

  const { userLooged } = useAuthStore()

  return (
    <>
      <div className=" bg-indigo-900/80 text-white  p-4 flex  justify-center items-center mt-5 rounded-lg py-10">

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 ">
          <div className="md:col-span-2">
            <CardIU isShowClose={false} title="Perfil"  >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 border-4 border-lila-200 rounded-lg mb-3 overflow-hidden relative">
                  <img
                    src={`${ userLooged?.photoURL}`}
                    alt="Logo de React"
                    width="200"
                    className="w-full h-full object-cover"
                  />

                </div>
                <div className="flex items-center gap-1 mb-3 px-2 py-1 bg-white  text-indigo-900 rounded-4xl">
                  <CircleUserRound />
                  <span className=" text-sm font-bold ">
                    {userLooged?.displayName}
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-3 px-2 py-1 bg-white text-indigo-900 rounded-4xl">
                  <Mail />
                  <span className=" text-sm font-bold ">
                    {userLooged?.email}
                  </span>
                </div>
              </div>
            </CardIU>
          </div>

          <div className="md:col-span-4">
            <CardIU isShowClose={false} title="Caracteristicas" >
              <div className="space-y-2">
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

                <div className="mt-6 p-3 border-2 border-dashed border-lila-600 bg-indigo-950 rounded-lg">
                  <h4 className="text-sm font-bold text-white mb-2">
                    PUNTUACION
                  </h4>
                  <p className="text-sm text-gray-300">+5 ACIERTOS, +3 ERRORES</p>
                </div>
              </div>
            </CardIU>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
