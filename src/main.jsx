import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { themeOptions } from './theme/Theme.js'
import { ThemeProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter( 
  [
    {
      path: "/*",
      element: <App />, // App är inuti router
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,         // Opta in för `startTransition`-beteendet
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_fetcherPersist: true,  
      
    },
  }
);

createRoot(document.getElementById('root')).render(

  <StrictMode>
     <ThemeProvider theme={themeOptions}>
     <RouterProvider router={router} /> 
    </ThemeProvider>
    
    
  </StrictMode>,
)
