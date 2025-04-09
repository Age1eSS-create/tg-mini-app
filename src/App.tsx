import './App.css'
import {initDataUser} from "@telegram-apps/sdk";
import {Questions} from "./pages/Questions.tsx";

function App() {
    const userName: string | undefined = initDataUser()?.first_name;

    return (
        <>
            <h1 className="title">Привет, {userName ?? "Гость"}!</h1>
            <Questions />
        </>
    )
}

export default App
