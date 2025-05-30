import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Basic from './basic.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Basic /> */}
  </StrictMode>,
)
