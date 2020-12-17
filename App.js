import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sound from './Components/Linkpage/Sound';
import About from './Components/NavLink/About';
import Episode from './Components/NavLink/Episode';
import Contact from './Components/NavLink/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/sound" exact component={Sound} />
        <Route path="/about" exact component={About} />
        <Route path="/episode" exact component={Episode} />
        <Route path="/contact" exact component={Contact} />

      </Switch>
    </Router>
  );
}

export default App;
