import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Header from "./screens/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homescreen} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
