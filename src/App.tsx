import { useState } from 'react'
import { Tweet } from './components/Tweet'
import './App.css'
// import {AppRoutes} from './AppRoutes'
import { Outlet, Link } from "react-router-dom";


function App() {
  const [inputText, setText] = useState("Olá, Edu!")
  const [tweets, setTweets] = useState([
    "Olá Mundo!",
    "02/07/2022 22:41",
    "Meu @ é @DjEdu28"
  ]);
  function createNewTweet(){
    //const txt:String = "TEste"
    setTweets(x=>[...x,inputText])
    setText("")
  }
  return (
    <div>
      {/* <h1>Olá Mundo!</h1>*/}
      {/* <p>02/07/2022 22:41</p> */}
      { tweets.map(txt =><Tweet key={txt} text={txt}/>) }
      <input
        type="text"
        value={inputText}
        onChange={event=>setText(event.target.value)}
      />

      <button
        onClick={createNewTweet}
      >
        Adicionar novo Tweet
      </button>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Main</Link> |{" "}
        <Link to="/Catalogo">Catalogo</Link> |{" "}
        <Link to="/Carrinho">Carrinho</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default App
