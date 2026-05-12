import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const tg = (window as { Telegram?: { WebApp?: { ready: () => void; expand: () => void } } }).Telegram?.WebApp
if (tg) {
  tg.ready()
  tg.expand()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
