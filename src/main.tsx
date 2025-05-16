import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import HelmetExport from 'react-helmet'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetExport>
        <App />
      </HelmetExport>
    </BrowserRouter>
  </StrictMode>,
)
