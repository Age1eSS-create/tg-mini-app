import './App.css'
import {initDataUser} from "@telegram-apps/sdk";
import {Questions} from "./pages/Questions.tsx";

function App() {
  const userName: string = initDataUser.name

  return (
    <>
      <h1 className="title">Привет {userName}!</h1>
      <Questions />
    </>
  )
}

export default App
