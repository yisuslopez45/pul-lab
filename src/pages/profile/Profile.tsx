import {
  CircleUserRound,
  Heart,
  Mail,
  Shield,
  Sword,
} from "lucide-react";
import StatBar from "./components/StatBar";
import { useAuthStore } from "../../store/authStore";
import CardIU from "../../layout/components/CardIU";
import { useEffect, useState } from "react";
import { getAttemptsByCurrentUser, Quiz } from "../quiz/services/service_db";

const Profile = () => {
  const { userLooged } = useAuthStore();
  const [attempts, setAttempts] = useState<Quiz[]>([]);

  useEffect(() => {
    const fetchAttempts = async () => {
      if (userLooged) {
        const res = await getAttemptsByCurrentUser(userLooged);
        setAttempts(res);
      }
    };

    fetchAttempts();
  }, [userLooged]);

  const totalScore = attempts.reduce((acc, curr) => acc + curr.score, 0);
  const totalErrores = attempts.reduce((acc, curr) => acc + curr.totalErrors, 0);



  return (
    <>
      <div className=" bg-indigo-900/80 text-white  p-4 flex  justify-center items-center mt-5 rounded-lg py-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 ">
          <div className="md:col-span-2">
            <CardIU isShowClose={false} title="Perfil">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 border-4 border-lila-200 rounded-lg mb-3 overflow-hidden relative">
                  <img
                    src={`${userLooged?.photoURL}`}
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
            <CardIU isShowClose={false} title="Caracteristicas">
              <div className="space-y-2">
                <div className="space-y-3">
                  <StatBar
                    label="INTENTOS"
                    value={attempts.length}
                    icon={<Heart className="w-5 h-5" />}
                    color="green"
                  />
                  <StatBar
                    label="ACIERTOS"
                    value={totalScore}
                    icon={<Sword className="w-5 h-5" />}
                    color="red"
                  />
                  <StatBar
                    label="ERRORES"
                    value={totalErrores}
                    icon={<Shield className="w-5 h-5" />}
                    color="blue"
                  />
                  {/* <StatBar
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
                  /> */}
                </div>

                <div className="mt-6 p-3 border-2 border-dashed border-lila-600 bg-indigo-950 rounded-lg">
                  <h4 className="text-sm font-bold text-white mb-2">
                    PUNTUACION
                  </h4>
                  <p className="text-sm text-gray-300">
                    +{totalScore } ACIERTOS, +{totalErrores} ERRORES
                  </p>
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
