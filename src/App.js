import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./components/Test/Test";
import Participants from "./Completed/Participants";
import Complaints from "./Completed/Complaints";
import Winners from "./Winners";
import Final from "./Final";
import Sidebars from "./Sidebars";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route exact path="/" component={Final} />
          <Route exact path="/winners" component={Winners} />
          <Route exact path="/complaints" component={Complaints} />
          <Route exact path="/participants" component={Participants} />
          <Route exact path="/sidebars" component={Sidebars} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
