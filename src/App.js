import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

// Import Components
import PrivateRoute from "./components/PrivateRoutes"
import Nav from "./components/Nav";
import FetchNorma from "./containers/FetchNorma";
import Home from "./containers/Home";
import Register from "./containers/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/fetch_normal" exact component={FetchNorma} />
          <PrivateRoute path="/fetch_with_auth" exact component={FetchNorma} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
