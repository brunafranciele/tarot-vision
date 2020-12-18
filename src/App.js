import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TarotProvider from '../src/context/tarotProvider';
import Login from '../src/pages/Login';
import MainPage from '../src/pages/MainPage';

function App() {
  return (
    <TarotProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/main-page" component={ MainPage } />
      </Switch>
    </TarotProvider>
  );
}

export default App;
