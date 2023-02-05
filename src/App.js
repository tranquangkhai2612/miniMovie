import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail">
          <Detail />
        </Route>

        <Route path="/movie/:id">
          <Movie />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
