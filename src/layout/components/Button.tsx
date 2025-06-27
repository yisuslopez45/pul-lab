
type Colors = 'yellow' | 'amber' | 'blue' | 'indigo' | 'violet' | 'purple'  | 'red' | 'green'
type Props = {
  label : string,
  color? : Colors,
  onClick? : (e: React.MouseEvent<HTMLButtonElement>)=>void,
  className?: string,
  icon?: React.ReactNode,
  py? : number, //padding y
  px? : number,  //padding x
  isLoading? : boolean
}

const Button : React.FC<Props> = ({ label = '' , color = 'blue' , onClick  , className , icon , px = 6 , py = 3 , isLoading = false }) => {

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
      type="button"
      onClick={onClick}
      className={`
      ${className}
      relative
      px-${px} py-${py}
      rounded-2xl
     transition-all duration-200 active:translate-y-1 
      bg-gradient-to-b
       ${colorVariants[color]}
      text-white text-2xl font-bold
      shadow-[0_8px_0_rgb(0,0,0,0.2),0_0_0_3px_rgba(0,0,0,0.3),inset_0_-3px_0_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]
      transform transition-transform duration-100
   `}
    >
         {isLoading ? (
        <svg className="w-6 h-6 animate-spin mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
      ) : (
        <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
          {label}
          {icon}
        </span>
      )}
    </button>

  );
};

export default Button;
