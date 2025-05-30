
type Colors = "red" | "blue" | "green" | "purple" | "yellow";

type StatBarProps = {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: "red" | "blue" | "green" | "purple" | "yellow";
};


const StatBar: React.FC<StatBarProps> = ({ label, value, icon, color }) => {
  const getColorClasses = (color : Colors) => {
    const colors = {
      red: "border-red-500 bg-red-900/50",
      blue: "border-blue-500 bg-blue-900/50",
      green: "border-green-500 bg-green-900/50",
      purple: "border-purple-500 bg-purple-900/50",
      yellow: "border-yellow-500 bg-yellow-900/50",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="flex items-center">
      <div className="w-24 flex-shrink-0">
        <div className="flex items-center">
          {icon}
          <span className="ml-2 font-bold text-sm">{label}</span>
        </div>
      </div>

      <div className="flex-grow ml-2">
        <div className="h-6 w-full bg-indigo-950 border-2 border-gray-600 rounded-sm overflow-hidden flex">
          <div
            className={`h-full border-r-2 border-gray-600 ${getColorClasses(color)}`}
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>

      <div className="w-10 ml-2 text-right font-bold">{value}</div>
    </div>
  );
}
export default StatBar;