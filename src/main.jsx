import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextData from './Context/ContextData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextData>
          <App />
    </ContextData>
  </React.StrictMode>,
)
