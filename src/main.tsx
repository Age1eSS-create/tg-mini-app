import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {init, miniApp, miniAppReady, expandViewport} from "@telegram-apps/sdk";

const initTelegram = () =>
{
    try {
        init();

        if (miniAppReady.isAvailable()) {
            miniApp.ready();
            expandViewport();
        }
    } catch (e) {
        console.error("Error initTelegram", e)
    }
}

initTelegram()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
