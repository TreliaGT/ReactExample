import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/Home';
import NotFound from './pages/Error404';
import About from './pages/About';
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
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </header>
            <Switch>
              <Route path="/">
                <HomePage/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
            <footer>
              <div className="Top">
                <div className="Socials">
                  <ul>
                    <li>
                      <Link to="/">Linkedin</Link>
                    </li>
                    <li>
                      <Link to="/">GitHub</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Legal">
                <p><span>© 2020 Copyright | Created by GG</span></p>
              </div>
            </footer>
          </div>
        </Router>
        );
      }
  }



export default App;
