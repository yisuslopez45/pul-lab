// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Layout from './layout/Layout'
// PAGES
import App from './App'
import Pneumonia from './pages/disease-pneumonia/Pneumonia'
import LungCancer from './pages/disease-cancer/LungCancer'
import Page2 from './pages/page-2/Page2'
import NotFound from './pages/not-found/NotFound'

// Pneumonia
import WhatIsPneumonia from './pages/disease-pneumonia/components/WhatIs'
import PreventionPneumonia from './pages/disease-pneumonia/components/Prevention'
import SymptomsPneumonia from './pages/disease-pneumonia/components/Symptoms'
import TreatmentPneumonia from './pages/disease-pneumonia/components/Treatment'

// Lung Cancer Components
import WhatIsLungCancer from './pages/disease-cancer/components/Whatis'
import SymptomsLungCancer from './pages/disease-cancer/components/Symptoms'
import RiskFactorsLungCancer from './pages/disease-cancer/components/RiskFactors';
import TreatmentLungCancer from './pages/disease-cancer/components/Treatment'
import PreventionLungCancer from './pages/disease-cancer/components/Prevention'


// asthma
import WhatIsAsthma from './pages/disease-asthma/components/WhatIs' 
import PreventionAsthma from './pages/disease-asthma/components/Prevention'
import SymptomsAsthma from './pages/disease-asthma/components/Symptoms'
import TreatmentAsthma from './pages/disease-asthma/components/Treatment'
import Asthma from './pages/disease-asthma/Asthma'

// Tuberculosis
import WhatIsTuberculosis from './pages/disease-tuberculosis/components/WhatIs' 
import PreventionTuberculosis from './pages/disease-tuberculosis/components/Prevention'
import SymptomsTuberculosis from './pages/disease-tuberculosis/components/Symptoms'
import TreatmentTuberculosis from './pages/disease-tuberculosis/components/Treatment'
import Tuberculosis from './pages/disease-tuberculosis/Tuberculosis'
import Profile from './pages/profile/Profile'
import Quiz from './pages/quiz/Quiz'
import Resultado from './pages/quiz/Resultado'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/resultados" element={<Resultado />} />

       {/* Rutas para Cáncer de Pulmón */}
      <Route path="/enfermedad-cancer" element={<LungCancer />}>
        <Route path="que-es" element={<WhatIsLungCancer />} />
        <Route path="sintomas" element={<SymptomsLungCancer />} />
        <Route path="factores-riesgo" element={<RiskFactorsLungCancer />} />
        <Route path="tratamiento" element={<TreatmentLungCancer />} />
        <Route path="prevencion" element={<PreventionLungCancer />} />
      </Route>


        <Route path="/enfermedad-neumonia" element={<Pneumonia />}>
          <Route index element={<Navigate to="que-es" replace />} />
          <Route  path="que-es" element={<WhatIsPneumonia />} />
          <Route path="prevencion" element={<PreventionPneumonia />} />
          <Route path="sintomas" element={<SymptomsPneumonia />} />
          <Route path="tratamiento" element={<TreatmentPneumonia />} />
        </Route>

        <Route path="/enfermedad-asma" element={<Asthma />}>
          <Route index element={<Navigate to="que-es" replace />} />
          <Route path="que-es" element={<WhatIsAsthma />} />
          <Route path="prevencion" element={<PreventionAsthma />} />
          <Route path="sintomas" element={<SymptomsAsthma />} />
          <Route path="tratamiento" element={<TreatmentAsthma />} />
        </Route>

        <Route path="/enfermedad-tuberculosis" element={<Tuberculosis />}>
          <Route index element={<Navigate to="que-es" replace />} />
          <Route path="que-es" element={<WhatIsTuberculosis />} />
          <Route path="prevencion" element={<PreventionTuberculosis />} />
          <Route path="sintomas" element={<SymptomsTuberculosis />} />
          <Route path="tratamiento" element={<TreatmentTuberculosis />} />
 
        </Route>
      
      <Route path="/page-2" element={<Page2 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
</BrowserRouter>
)
