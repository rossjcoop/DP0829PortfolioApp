import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/app.css';
import Newsletter from './components/Newsletter';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import BaseLayout from './components/BaseLayout';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(


  <BrowserRouter>
  	<BaseLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Newsletter" component={Newsletter} />
    </Switch>
    </BaseLayout>
  </BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();
