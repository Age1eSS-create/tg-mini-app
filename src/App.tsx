import './App.css'
import {initDataUser, miniApp, expandViewport} from "@telegram-apps/sdk";
import {Questions} from "./pages/Questions.tsx";
import {useEffect, useState} from "react";

function App() {
  const [userName, setUserName] = useState("Гость");

    useEffect((): void => {
        expandViewport();
        miniApp.setHeaderColor("#565cda");
        setUserName(initDataUser.name);
    }, []);

  return (
    <>
      <h1 className="title">Привет {userName}!</h1>
      <Questions />
    </>
  )
}

export default App
