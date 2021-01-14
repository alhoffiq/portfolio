
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Portfolios from "./components/pages/Portfolios";
import Contact from "./components/pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/portfolio">
          <Redirect to="/" />
        </Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolios" component={Portfolios} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
