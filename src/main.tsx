import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {init, miniApp} from "@telegram-apps/sdk";

const initTelegram = () =>
{
    try {
        init();

        if (!miniApp.ready.isAvailable())
            return;

        miniApp.ready();
        console.log("ready initTelegram")
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
