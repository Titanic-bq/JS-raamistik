import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TaskApp from './TaskApp.jsx'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <TaskApp />
    </LanguageProvider>
  </StrictMode>,
)
