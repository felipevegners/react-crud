import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Create from './components/create.component'
import Edit from './components/edit.component'
import Index from './components/index.component'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Atendimentos</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">novo</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">listar</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
