import React, { useState } from 'react'
import Tiptap from "./components/Tiptap";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <hr />
      <Tiptap />
    </div>
  )
}

export default App
