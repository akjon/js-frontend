import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid'
import Header from "./components/Header";
import Editor from "./components/Editor";
import './App.css'

function App() {

  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to={`/documents/${uuidV4()}`} />
          </Route>

          <Route path="/documents/:id">
            <Editor />
          </Route>
        </Switch>
      </Router>
    </main>
  )

}

export default App
