import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Context
import { LanguageProvider } from './components/Language/languageContext';

import App from './components/App'
import Language from './components/Language/Language';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
