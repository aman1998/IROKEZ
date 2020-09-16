import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainPage from './pages/mainPage'
import InquiriesPage from './pages/inquiriesPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/inquiries' component={InquiriesPage} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
