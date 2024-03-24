import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.js'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppContextProvider } from './context/appContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <CssBaseline />      
        <App />
      </AppContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
