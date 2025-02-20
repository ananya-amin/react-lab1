import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState('')

  return (
    <div className="App">
      <input
      type="text"
      placeholder="Type Something..."
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />
      <h1><strong>You Typed:{text}</strong></h1>
      <h1><strong>Number of Characters:{text.length}</strong></h1>
    </div>
  );
}

export default App;
