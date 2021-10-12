import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../Containers/Layout";
import Login from "../Containers/Login";
import PasswordRecovery from "../Containers/PasswordRecovery";
import Checkout from "../pages/Checkout";
import CreateAccount from "../pages/CreateAccount";
import Home from "../pages/Home";
import MyAccount from "../pages/MyAccount";
import NewPassword from "../pages/NewPassword";
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders";
import SendEmail from "../pages/SendEmail";

import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/password-recovery" component={PasswordRecovery} />
          <Route exact path="/send-email" component={SendEmail} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/account" component={MyAccount} />
          <Route exact path="/signup" component={CreateAccount} />
          <Route exact path="/chekout" component={Checkout} />
          <Route exact path="/orders" component={Orders} /> 
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
