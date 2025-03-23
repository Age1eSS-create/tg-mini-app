import './App.css'
import {initDataUser} from "@telegram-apps/sdk";
import {Questions} from "./pages/Questions.tsx";
import {useEffect, useState} from "react";

function App() {
  const [userName, setUserName] = useState("Гость");

    useEffect((): void => {
        const user = initDataUser.name;
        setUserName(user || "Гость");
    }, []);

  return (
    <>
      <h1 className="title">Привет {userName}!</h1>
      <Questions />
    </>
  )
}

export default App
