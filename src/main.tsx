import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {init, miniApp, miniAppReady, expandViewport} from "@telegram-apps/sdk";

const initTelegram = async () =>
{
    try {
        await init();

        if (miniAppReady.isAvailable()) {
            miniApp.ready();
            expandViewport();
            miniApp.setHeaderColor('#565cda');
        }
    } catch (e) {
        console.error("Error initTelegram", e)
    }
}

initTelegram().then(() => {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
});
