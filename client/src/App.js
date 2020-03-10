import React from 'react';

import Chat from './components/Chat/Chat';
import Welcome from './components/Welcome/Welcome';

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Welcome} />
      <Route path="/chat" component={Chat} />
    </BrowserRouter>
  );
}

export default App;
