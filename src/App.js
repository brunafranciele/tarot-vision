import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TarotProvider from '../src/context/tarotProvider';
import Login from '../src/pages/Login';
import MainPage from '../src/pages/MainPage';
import Answer from './pages/Answer';

function App() {
  return (
    <TarotProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/main-page" component={ MainPage } />
        <Route path="/answer" component={ Answer } />
      </Switch>
    </TarotProvider>
  );
}

export default App;
