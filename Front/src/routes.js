import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Idea from './pages/Idea';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

import Header from './components/Header';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/dashboard" exact component={Dashboard} />

        <Route path="/idea/:id" exact component={Idea} />
      </Switch>
    </BrowserRouter>
  );
}
