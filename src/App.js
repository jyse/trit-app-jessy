import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <div className="app__dashboard">
              <Sidebar />
              <Main />
            </div>
            <Player />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
