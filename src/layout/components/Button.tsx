
type Colors = 'yellow' | 'amber' | 'blue' | 'indigo' | 'violet' | 'purple'  | 'red' | 'green'
type Props = {
  label : string,
  color? : Colors,
  onClick? : ()=>void,
  className?: string
}

const Button : React.FC<Props> = ({ label = '' , color = 'blue' , onClick  , className }) => {

  const colorVariants : Record<Colors, string> = {
    blue: "from-blue-500 to-blue-400  ",
    red:"from-red-500 to-red-400 ",
    purple: "from-purple-500 to-purple-400 ",
    indigo:"from-indigo-500 to-indigo-400 ",
    amber: "from-amber-500 to-amber-400 ",
    yellow:"from-yellow-500 to-yellow-400 ",
    violet:"from-violet-500 to-violet-400 ",
    green:"from-green-500 to-green-400 ",
  };
  return (
    <button
      onClick={onClick}
      className={`
      ${className}
      relative
      px-10 py-4
      rounded-2xl
     transition-all duration-200 active:translate-y-1 
      bg-gradient-to-b
       ${colorVariants[color]}
      text-white text-2xl font-bold
      shadow-[0_8px_0_rgb(0,0,0,0.2),0_0_0_3px_rgba(0,0,0,0.3),inset_0_-3px_0_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]
      transform transition-transform duration-100
   `}
    >
        <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
         {label}
        </span>
    </button>

  );
};

export default Button;
