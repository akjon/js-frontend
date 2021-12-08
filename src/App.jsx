import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Editor from './components/Editor';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Editor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
