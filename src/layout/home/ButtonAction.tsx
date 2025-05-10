
interface Props {
    icon?: React.ReactNode,
    label : string
}

const ButtonAction = ( { label , icon } : Props) => {
  return (
    <button
      className={`
      relative px-12 py-4 font-bold text-lg uppercase 
      tracking-wider transition-all duration-200 rounded-md  
      border-4 border-b-8 active:border-b-4 active:translate-y-1 
      focus:outline-none focus:ring-2 focus:ring-offset-2 
      bg-indigo-600 text-white border-indigo-800 hover:bg-indigo-500 shadow-indigo-900/30
      focus:ring-indigo-700
    
      `}
    >
      <div className="flex items-center gap-2">
        <span className="font-['Press_Start_2P',_monospace] text-sm">
          {label}
        </span>

        {icon}
      </div>

      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-indigo-500  rounded-full animate-pulse" />
    </button>
  );
};

export default ButtonAction;
