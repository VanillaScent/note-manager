import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../static/frontend/css/app.css';

import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './redux/store'

import { Login } from './routes/user/auth/Login';
import { Register } from './routes/user/auth/Register';

import { Profile } from './routes/user/profile/Profile';
import { Companies } from './routes/companies/Companies';

class NavBar extends Component {
    
    render() {
        return (<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">roots review</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link" href="#">Home </Link>
      </li>
      <li className="nav-item">
        <Link to="/companies" className="nav-link" href="#">Companies</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link" href="#">Pricing</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Profile</a>
        <div className="dropdown-menu">
          <Link to="/profile" className="dropdown-item" href="#">Edit Profile </Link>
          <Link to="/" className="dropdown-item" href="#">View Profile </Link>
          <div className="dropdown-divider"></div>
          <Link to="/profile/password" className="dropdown-item" href="#">Change Password </Link>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>);
    }
}


class Home extends Component{

  render() {
    return (<Fragment>
       
      <div className="overlay"></div>
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source src="../static/frontend/video/bg.mp4" type="video/mp4"/>
        </video>

        <div className="masthead">
          <div className="masthead-bg"></div>

          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 my-auto">
                <div className="masthead-content text-white py-5 py-md-0">
                  <h1 className="mb-3">Coming Soon!</h1>
                  <p className="mb-5">We're working hard to finish the development of this site. Our target launch date is 
                    <strong> January 2022</strong>! Sign up for updates using the form below!</p>
                  <div className="input-group input-group-newsletter">
                    <input type="email" className="form-control" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="submit-button"/>
                    <div className="input-group-append">
                      <button className="btn btn-secondary" type="button" id="submit-button">Notify Me!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="social-icons">
          <ul className="list-unstyled text-center mb-0">
            <li className="list-unstyled-item">
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-unstyled-item">
              <a href="#">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-unstyled-item">
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

    </Fragment>);
  }
}


  const Contact = () => (
    <Fragment>
      <h1>Contact</h1>
    </Fragment>
    );

  const CounterComponent = () => {
    const auth = useSelector(state => state.auth)
    console.log(auth);
    return <div>{auth.user ? auth.user.username : "No username"}</div>
  }


import PrivateRoute from './components/auth/PrivateRoute';

const App = () => {
  const auth = useSelector(state => state.auth)
  console.log(auth);

  return <Router>
      <NavBar/>
      <Route exact path="/" exact component={Home} />
      <Route exact path="/companies"  component={Companies} />
      <Route exact path="/contact"  component={Contact} />

      
      <PrivateRoute exact path="/profile"  component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
  </Router>;
  
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
