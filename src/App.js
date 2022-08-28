import "./styles.css";
import Navbar from "./components/Navbar";
import { Home, Login, Profile, Signup, Fof } from "./pages/index";
// import Home from "./pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route>
            <Fof />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
