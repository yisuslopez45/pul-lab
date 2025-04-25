// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout/Layout'
// PAGES
import App from './App'
import Pneumonia from './pages/disease-pneumonia/Pneumonia'
import Page2 from './pages/page-2/Page2'
import NotFound from './pages/not-found/NotFound'

// Pneumonia
import WhatIsPneumonia from './pages/disease-pneumonia/components/WhatIs'
import PreventionPneumonia from './pages/disease-pneumonia/components/Prevention'
import SymptomsPneumonia from './pages/disease-pneumonia/components/Symptoms'
import TreatmentPneumonia from './pages/disease-pneumonia/components/Treatment'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<App />} />
      
      <Route path="/enfermedad-neumonia" element={<Pneumonia />}>
        <Route path="que-es" element={<WhatIsPneumonia />} />
        <Route path="prevencion" element={<PreventionPneumonia />} />
        <Route path="sintomas" element={<SymptomsPneumonia />} />
        <Route path="tratamiento" element={<TreatmentPneumonia />} />
      </Route>
      
      <Route path="/page-2" element={<Page2 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
</BrowserRouter>
)
