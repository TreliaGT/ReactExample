import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/Home';
import NotFound from './pages/Error404';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import logo from './logo.svg';


class App extends Component {
    constructor() {
        super();
    }


    render() {
        return (
          <Router>
          <div className="App">
            <header>
              <div className="Logo">
                  <img src={logo}/>
              </div>
              <div className="Nav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                  <li>
                    <Link to="/">Projects</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </header>
            <Switch>
              <Route path="/">
                <HomePage/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
          </div>
        </Router>
        );
      }
  }



export default App;