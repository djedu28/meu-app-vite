import { useState } from 'react'
import {Tweet} from './components/Tweet'
import './App.css'
function App() {
  const [tweets, setTweets] = useState([
    "Olá Mundo!",
    "02/07/2022 22:41"
  ]);
  function createNewTweet(){
    const txt:String = "TEste"
    setTweets(x=>[...x,txt])
  }
  return (
    <div className="App">
      {/* <h1>Olá Mundo!</h1>*/}
      {/* <p>02/07/2022 22:41</p> */}
      { tweets.map(txt =><Tweet text={txt}/>) }
      <button onClick={createNewTweet}>Adicionar novo Tweet</button>
    </div>
  )
}

export default App
