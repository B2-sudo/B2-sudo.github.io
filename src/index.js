import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Favicon from 'react-favicon';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Album from './Album';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/album" component={Album} />
    </Switch>
  </Router>
);



ReactDOM.render(
  <React.StrictMode>
    <Favicon url="/favicon.ico" />
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();