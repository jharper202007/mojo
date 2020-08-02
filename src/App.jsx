import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './components/layout/NavBar';
import BuildingsPage from './components/pages/Buildings';
import GenericPage from './components/pages/Generic';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='main'>
          <Switch>
            {/* will match either '/' or '/buildings' */}
            <Route path="/(buildings)?" exact>
              <BuildingsPage />
            </Route>
            {/* fallback route to catch anything else */}
            <Route path="/">
              <GenericPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
