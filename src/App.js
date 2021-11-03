import "./App.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Test from './components/Test/Test';
import Participants from "./participants";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/" component={Participants}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
