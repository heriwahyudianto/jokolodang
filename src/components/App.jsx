import React, { Component } from 'react';
import PaymentAdd from './PaymentAdd';
import PaymentList from './PaymentList';
import PaymentInfo from './PaymentInfo';
import PaymentEdit from './PaymentEdit';
import {Router, Route, NavLink, Switch} from 'react-router-dom'
import history from '../history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <Navigation />
          <Main />
        </div>
      </Router>
    );
  }
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/Payments">Payment List</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/Payments/new">Add Payment</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={PaymentList} />
    <Route exact path="/Payments" component={PaymentList} />
    <Route exact path="/Payments/new" component={PaymentAdd} />
    <Route exact path="/Payments/:id" component={PaymentInfo} />
    <Route exact path="/Payments/:id/edit" component={PaymentEdit} />
  </Switch>
);

export default App;