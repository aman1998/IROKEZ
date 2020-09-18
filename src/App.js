import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainPage from './pages/mainPage'
import InquiriesPage from './pages/inquiriesPage'

function App() {
  return (
    <BrowserRouter basename='/IROKEZ'>
      <Switch>
        <Route path='/absent' component={MainPage} exact/>
        <Route path='/absent/vacation' component={MainPage} exact/>
        <Route path='/absent/dayoff' component={MainPage} exact/>
        <Route path='/absent/sick' component={MainPage} exact/>
        <Route path='/inquiries' component={InquiriesPage} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
