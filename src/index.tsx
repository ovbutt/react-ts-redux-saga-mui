import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import AppRoutes from './routes'
import { ErrorBoundary } from './views'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyledEngineProvider, ThemeProvider, CssBaseline } from '@mui/material'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <ErrorBoundary>
              <Routes>
                <Route path="/*" element={<AppRoutes />} />
              </Routes>
            </ErrorBoundary>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
