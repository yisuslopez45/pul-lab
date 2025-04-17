
import IconClose from "/images/Close.png";

type CardProps = {
    title: string;
    children: React.ReactNode;
  };

const CardIU : React.FC<CardProps> = ({ children , title }) => {
  return (
    <div className="bg-linear-to-b from-lila-200 to-lila-700 rounded-lg p-[2px] ">
      <div className="w-full bg-linear-to-b from-lila-700 to-lila-200 rounded-lg ">
        <div className="relative rounded-lg  px-7 pb-4 shadow-lg">
          <div className="relative flex items-center justify-center py-4">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <button className="absolute right-0 rounded-full p-2 text-white hover:bg-blue-600 transition-colors">
              <img src={IconClose} alt="Cerrar" className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-linear-to-b from-lila-700 to-lila-100 p-[2px] rounded-md">
            <div className="rounded-md bg-linear-to-b from-lila-900 to-lila-700 p-8 text-center ">
              <div className="space-y-4 text-white">
              <div>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIU;
