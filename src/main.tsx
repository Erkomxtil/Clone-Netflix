import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './components/Router'
import './index.css'
import { UserProvider } from './utils/context/languageContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <Router />
    </UserProvider>
  </React.StrictMode>,
)
