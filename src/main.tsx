// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout/Layout'
// PAGES
import App from './App'
import Page1 from './pages/page-1/Page1'
import Page2 from './pages/page-2/Page2'
import NotFound from './pages/not-found/NotFound'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/page-1" element={<Page1 />} />
      <Route path="/page-2" element={<Page2 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
</BrowserRouter>
)
