import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { themeOptions } from './theme/Theme.js'
import { ThemeProvider } from '@mui/material'


createRoot(document.getElementById('root')).render(

  <StrictMode>
     <ThemeProvider theme={themeOptions}>
    <App />
    </ThemeProvider>
    
    
  </StrictMode>,
)
