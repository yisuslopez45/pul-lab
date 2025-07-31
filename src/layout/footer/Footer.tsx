const Footer = () => {
  return (
    <footer className="bg-lila-900/60 shadow-sm w-full">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-6 md:py-8 flex justify-between items-center">
        <a 
          href="/site-map" 
          className="text-white text-lg font-semibold hover:underline transition duration-300"
        >
          🗺️ Mapa del sitio
        </a>
        <span className="text-sm text-gray-300 sm:text-center">
          © 2023 <span className="font-bold">PulLab</span>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
