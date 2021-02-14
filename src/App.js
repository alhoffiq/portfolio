
import { BrowserRouter as Router, Route, } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import Portfolios from "./pages/Portfolios";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route path="/" component={Home} />
        <Route exact path="/portfolios" component={Portfolios} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
