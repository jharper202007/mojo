import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import BuildingsPage from './components/pages/Buildings';
import GenericPage from './components/pages/Generic';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
