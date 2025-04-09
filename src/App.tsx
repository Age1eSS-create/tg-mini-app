import './App.css'
import {initData} from "@telegram-apps/sdk";
import {Questions} from "./pages/Questions.tsx";
import {useEffect, useState} from "react";

function App() {
  const [userName, setUserName] = useState("Гость");

  useEffect((): void => {
      setUserName(initData.user.name || "Гость");
  }, []);

  return (
    <>
      <h1 className="title">Привет {userName}!</h1>
      <Questions />
    </>
  )
}

export default App
