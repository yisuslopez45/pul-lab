const Button = () => {
  return (
    <button
      className={`
      relative
      px-10 py-4
      rounded-2xl
      bg-gradient-to-b from-amber-500 to-amber-400
      text-white text-2xl font-bold
      shadow-[0_8px_0_rgb(0,0,0,0.2),0_0_0_3px_rgba(0,0,0,0.3),inset_0_-3px_0_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]
      transform transition-transform duration-100
    `}
    >
        <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
          Saber Mas
        </span>
    </button>

  );
};

export default Button;
