import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Make sure this is imported before App

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
