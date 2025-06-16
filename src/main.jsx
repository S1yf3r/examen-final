import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Maqueta from './Maqueta.jsx'
import Barnav from './Barnav.jsx'
import Principal from './Principal.jsx'
import Peliculas from './Peliculas.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Maqueta />
    <BrowserRouter>
      <Barnav />
      <Principal />
      <Peliculas />
    </BrowserRouter>
  </StrictMode>,
)
