import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ThemeProvider} from 'theme-ui'
import {theme} from './theme-ui'

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </React.StrictMode>
  )
