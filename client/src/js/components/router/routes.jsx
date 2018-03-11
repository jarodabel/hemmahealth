import React from 'react'
import {
  Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import history from '../../helpers/history';

import App from "../../app/App";
import HemmaHome from "../../containers/home/home";
import HemmaAbout from "../../containers/about/about";
import HemmaLogin from "../../containers/login/login";
import HemmaContact from "../../containers/contact/contact";
import HemmaServices from "../../containers/services/services";
import HemmaQuality from '../../containers/quality/quality';
import HemmaContactConfirmation from "../../containers/contact/contactConfirmation";
import HemmaNotFound from "../../containers/notFound/notFound";

const auth = () => {
};

const handleAuthentication = (nextState, replace) => {
  // if (/access_token|id_token|error/.test(nextState.location.hash)) {
  //   auth.handleAuthentication();
  // }
};

const isAuth = () => {
  // const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  // const isAuth = new Date().getTime() < expiresAt;
  return true;
};

export default () => {
  return (
    <Router
      history={history}
      onUpdate={() => {
        const elem = document.getElementById('shellPhysicalId');
        if (elem && document.activeElement !== elem) {
          elem.focus();
        }
      }}
    >
      <div>
        <Route
          path="/"
          render={(props) => {
            handleAuthentication(props);
            return <App auth={auth} {...props} />;
          }}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              handleAuthentication(props);
              return (isAuth()) ? <HemmaHome auth={auth} {...props} /> : <Redirect to="/login"/>;
            }}
          />
          <Route
            path="/login"
            render={(props) => {
              handleAuthentication(props);
              return <HemmaLogin auth={auth} {...props} />;
            }}
          />
          <Route
            path="/about-us"
            render={(props) => {
              handleAuthentication(props);
              return (isAuth()) ? <HemmaAbout auth={auth} {...props} /> : <Redirect to="/login"/>;
            }}
          />
          <Route
            path="/contact-us"
            render={(props) => {
              handleAuthentication(props);
              return (isAuth()) ? <HemmaContact auth={auth} {...props} /> : <Redirect to="/login"/>;
            }}
          />
          <Route
            path="/contact-us-confirmation"
            render={(props) => {
              handleAuthentication(props);
              return (isAuth()) ? <HemmaContactConfirmation auth={auth} {...props} /> : <Redirect to="/login"/>;
            }}
          />
          <Route
            path="/services"
            render={(props) => {
              handleAuthentication(props);
              return (isAuth()) ? <HemmaServices auth={auth} {...props} /> : <Redirect to="/login"/>;
            }}
          />
          <Route
            path="/quality"
            render={(props) => {
              handleAuthentication(props);
              return (isAuth()) ? <HemmaQuality auth={auth} {...props} /> : <Redirect to="/login"/>;
            }}
          />
          <Route
            component={HemmaNotFound}
          />
        </Switch>
      </div>
    </Router>
  );
}