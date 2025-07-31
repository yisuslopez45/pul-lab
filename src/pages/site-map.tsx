const SiteMap = () => {
    return (
        <main className="p-8 max-w-5xl mx-auto">
            <h1 className="text-6xl font-extrabold mb-8 text-center">Mapa del sitio</h1>
            <ul className="space-y-5 text-lg">
                
                {/* Inicio */}
                <li className="flex items-center gap-2 text-2xl">
                    <span className="text-blue-1000">•</span>
                    <a href="/" className="underline">Inicio</a>
                </li>

                {/* Enfermedades */}
                <li>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-blue-1000">•</span>
                        <strong className="text-3xl">Enfermedades</strong>
                    </div>
                    <ul className="pl-6 space-y-4">

                        {/* Neumonía */}
                        <li>
                            <div className="flex items-center gap-2">
                                <span className="text-blue-1000">•</span>
                                <strong className="text-2xl">
                                    <a href="/enfermedad-neumonia" className="underline">Neumonía</a>
                                </strong>
                            </div>
                            <ul className="pl-8 space-y-2 text-xl">
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-neumonia/que-es" className="underline">¿Qué es?</a></li>
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-neumonia/sintomas" className="underline">Síntomas</a></li>
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-neumonia/tratamiento" className="underline">Tratamiento</a></li>
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-neumonia/prevencion" className="underline">Prevención</a></li>
                            </ul>
                        </li>

                        {/* Tuberculosis */}
                        <li>
                            <div className="flex items-center gap-2">
                                <span className="text-blue-1000">•</span>
                                <strong className="text-2xl">
                                    <a href="/enfermedad-tuberculosis" className="underline">Tuberculosis</a>
                                </strong>
                            </div>
                            <ul className="pl-8 space-y-2 text-xl">
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-tuberculosis/que-es" className="underline">¿Qué es?</a></li>
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-tuberculosis/sintomas" className="underline">Síntomas</a></li>
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-tuberculosis/tratamiento" className="underline">Tratamiento</a></li>
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-tuberculosis/prevencion" className="underline">Prevención</a></li>
                            </ul>
                        </li>

                        {/* Asma */}
                        <li>
                            <div className="flex items-center gap-2">
                                <span className="text-blue-1000">•</span>
                                <strong className="text-2xl">
                                    <a href="/enfermedad-asma" className="underline">Asma</a>
                                </strong>
                            </div>
                            <ul className="pl-8 space-y-2 text-xl">
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-asma/que-es" className="underline">¿Qué es?</a></li>
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-asma/sintomas" className="underline">Síntomas</a></li>
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-asma/tratamiento" className="underline">Tratamiento</a></li>
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-asma/prevencion" className="underline">Prevención</a></li>
                            </ul>
                        </li>

                        {/* Cáncer de pulmón */}
                        <li>
                            <div className="flex items-center gap-2">
                                <span className="text-blue-1000">•</span>
                                <strong className="text-2xl">
                                    <a href="/enfermedad-cancer" className="underline">Cáncer de pulmón</a>
                                </strong>
                            </div>
                            <ul className="pl-8 space-y-2 text-xl">
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-cancer/que-es" className="underline">¿Qué es?</a></li>
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-cancer/sintomas" className="underline">Síntomas</a></li>
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-cancer/factores-riesgo" className="underline">Factores de riesgo</a></li>
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-cancer/tratamiento" className="underline">Tratamiento</a></li>
                                <li className="flex items-center gap-2"><span className="text-gray-500">•</span><a href="/enfermedad-cancer/prevencion" className="underline">Prevención</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                {/* Quiz y Perfil */}
                <li className="flex items-center gap-2 text-2xl">
                    <span className="text-blue-1000">•</span>
                    <a href="/quiz" className="underline">Quiz</a>
                </li>
                <li className="flex items-center gap-2 text-2xl">
                    <span className="text-blue-1000">•</span>
                    <a href="/perfil" className="underline">Perfil</a>
                </li>
            </ul>
        </main>
    );
};

export default SiteMap;
