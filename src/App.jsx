import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Editor from './components/Editor';
import './App.css';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/">
            <Editor />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
