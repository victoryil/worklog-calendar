import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ColorConfigProvider } from "./context/ColorConfigContext";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ColorConfigProvider>
          <App />
      </ColorConfigProvider>
  </StrictMode>,
)
