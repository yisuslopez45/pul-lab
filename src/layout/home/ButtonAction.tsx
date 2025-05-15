
interface Props {
    icon?: React.ReactNode,
    label : string
}

const ButtonAction = ( { label , icon } : Props) => {
  return (
    <button
       className={`
        relative px-10 py-3 font-bold text-lg uppercase outline-none
        tracking-wider transition-all duration-150 rounded-md  
        border-4 border-b-4 focus:outline-none 
        bg-indigo-600 text-white border-indigo-800 hover:bg-indigo-500 shadow-indigo-900/30
        focus:ring-indigo-700 active:translate-y-1
      `}
    >
      <div className="flex items-center gap-2">
        <span className="font-['Press_Start_2P',_monospace] text-sm">
          {label}
        </span>
        <span className="animate-pulse text-indigo-200" >
        {icon}
        </span>
      </div>

    </button>
  );
};

export default ButtonAction;
