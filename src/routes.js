import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import ErrorPage from './pages/ErrorPage'
import NewsLetterPage from './pages/NewsLetterPage'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/newsLetter" component={NewsLetterPage} />
        <Route path='/error' component={ErrorPage}/>
        <Redirect to='/error'/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
